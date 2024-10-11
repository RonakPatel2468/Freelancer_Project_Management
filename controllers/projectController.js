const Project = require('../models/projectModel');
const csvHelper = require('../utils/csvHelper');

exports.createProject = async (req, res) => {
  const { name, description } = req.body;
  const project = await Project.create({ name, description });
  res.status(201).json(project);
};

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

exports.updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!project) return res.status(404).json({ message: 'Project not found' });
  res.json(project);
};

exports.deleteProject = async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) return res.status(404).json({ message: 'Project not found' });
  res.json({ message: 'Project deleted' });
};

exports.exportProjects = async (req, res) => {
  res.setHeader('Content-Type', 'text/csv');
  await csvHelper.exportProjectsToCSV(res);
};

exports.importProjects = async (req, res) => {
  csvHelper.importProjectsFromCSV(req, res);
};
