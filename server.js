const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auths', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/payments', paymentRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(`
        <center>
            <h1>Welcome to the Freelancer_Project_Management!</h1>
            <br>
            <p>
                Get Freelancer_Project_Management: 
            <a href="https://github.com/RonakPatel2468/Freelancer_Project_Management.git" target="_blank">Repository:Freelancer_Project_Management </a>
            </p>
        </center>
    `);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
