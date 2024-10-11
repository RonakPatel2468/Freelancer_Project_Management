const express = require('express');
const { createProject, getAllProjects, updateProject, deleteProject, exportProjects, importProjects } = require('../controllers/projectController');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.use(authMiddleware);

router.post('/create', createProject);
router.get('/get', getAllProjects);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

router.get('/export', exportProjects);

router.post('/import', upload.single('file'), importProjects);

module.exports = router;
