const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

// Intro routes
router.post('/postintro', Controller.createIntro); // Create a new intro
router.get('/getintro', Controller.getAllIntro); // Get all intros
router.put('/updateintro/:id', Controller.updateIntro); // Update an intro by ID
router.delete('/deleteintro/:id', Controller.deleteIntro); // Delete an intro by ID

// Blog routes
router.post('/postblog', Controller.createBlog); // Create a new blog
router.get('/getblogs', Controller.getAllBlogs); // Get all blogs
router.put('/updateblog/:id', Controller.updateBlog); // Update a blog by ID
router.delete('/deleteblog/:id', Controller.deleteBlog); // Delete a blog by ID

// Education routes
router.post('/posteducation', Controller.createEducation); // Create a new education record
router.get('/geteducations', Controller.getAllEducation); // Get all education records
router.put('/updateeducation/:id', Controller.updateEducation); // Update education by ID
router.delete('/deleteeducation/:id', Controller.deleteEducation); // Delete education by ID

// Experience routes
router.post('/postexperience', Controller.createExperience); // Create a new experience record
router.get('/getexperiences', Controller.getAllExperiences); // Get all experience records
router.put('/updateexperience/:id', Controller.updateExperience); // Update experience by ID
router.delete('/deleteexperience/:id', Controller.deleteExperience); // Delete experience by ID

// Gallery routes
router.post('/postgallery', Controller.createGallery); // Create a new gallery item
router.get('/getgalleries', Controller.getAllGalleries); // Get all gallery items
router.put('/updategallery/:id', Controller.updateGallery); // Update gallery item by ID
router.delete('/deletegallery/:id', Controller.deleteGallery); // Delete gallery item by ID

// Portfolio routes
router.post('/postportfolio', Controller.createPortfolio); // Create a new portfolio item
router.get('/getportfolios', Controller.getAllPortfolios); // Get all portfolio items
router.put('/updateportfolio/:id', Controller.updatePortfolio); // Update portfolio item by ID
router.delete('/deleteportfolio/:id', Controller.deletePortfolio); // Delete portfolio item by ID

// Service routes
router.post('/postservice', Controller.createService); // Create a new service
router.get('/getservices', Controller.getAllServices); // Get all services
router.put('/updateservice/:id', Controller.updateService); // Update service by ID
router.delete('/deleteservice/:id', Controller.deleteService); // Delete service by ID

module.exports = router;
