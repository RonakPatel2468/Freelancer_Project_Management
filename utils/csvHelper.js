const csv = require('fast-csv');
const fs = require('fs');
const Project = require('../models/projectModel');

exports.exportProjectsToCSV = async (res) => {
  try {
    const projects = await Project.find();

    // Set the response header for CSV
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=projects.csv');

    const csvStream = csv.format({ headers: true });

    // Pipe the CSV stream to the response
    csvStream.pipe(res).on('end', () => res.end());

    projects.forEach((project) => {
      csvStream.write({
        name: project.name,
        description: project.description,
        status: project.status,
        createdAt: project.createdAt.toISOString(),
      });
    });

    csvStream.end();
  } catch (error) {
    console.error('Error exporting projects to CSV:', error);
    res.status(500).json({ message: 'Error exporting projects to CSV', error });
  }
};

exports.importProjectsFromCSV = (req, res) => {
  const projects = [];
  
  // Check if a file was uploaded
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // Parse the uploaded CSV file
  csv.parseFile(req.file.path)
    .on('data', (data) => {
      // Assuming your CSV structure matches the following order
      projects.push({
        name: data[0], 
        description: data[1],
        status: data[2],
      });
    })
    .on('end', () => {
      // Remove the file after parsing (optional)
      fs.unlinkSync(req.file.path);

      // Insert the projects into the database
      Project.insertMany(projects)
        .then(() => res.status(201).json({ message: 'Projects imported successfully' }))
        .catch((err) => res.status(500).json({ message: 'Error importing projects', error: err.message }));
    })
    .on('error', (error) => {
      // Handle CSV parsing errors
      res.status(500).json({ message: 'Error parsing CSV file', error: error.message });
    });
};