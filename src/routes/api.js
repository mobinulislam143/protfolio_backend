const express = require('express');
const router = express.Router();
const Controller = require('../Controller/Controller');

// Intro routes
router.post('/postintro', Controller.createIntro); // Create a new intro
router.get('/getintro', Controller.getAllIntro); // Get all intros
router.get('/getintro/:id', Controller.getIntroById); // Get a single intro by ID
router.put('/updateintro/:id', Controller.updateIntro); // Update an intro by ID
router.delete('/deleteintro/:id', Controller.deleteIntro); // Delete an intro by ID

// Blog routes
router.post('/postblog', Controller.createBlog); // Create a new blog
router.get('/getblogs', Controller.getAllBlogs); // Get all blogs
router.get('/getblog/:id', Controller.getBlogById); // Get a single blog by ID
router.put('/updateblog/:id', Controller.updateBlog); // Update a blog by ID
router.delete('/deleteblog/:id', Controller.deleteBlog); // Delete a blog by ID

// Education routes
router.post('/posteducation', Controller.createEducation); // Create a new education record
router.get('/geteducations', Controller.getAllEducation); // Get all education records
router.get('/geteducation/:id', Controller.getEducationById); // Get a single education by ID
router.put('/updateeducation/:id', Controller.updateEducation); // Update education by ID
router.delete('/deleteeducation/:id', Controller.deleteEducation); // Delete education by ID

// Experience routes
router.post('/postexperience', Controller.createExperience); // Create a new experience record
router.get('/getexperiences', Controller.getAllExperiences); // Get all experience records
router.get('/getexperience/:id', Controller.getExperienceById); // Get a single experience by ID
router.put('/updateexperience/:id', Controller.updateExperience); // Update experience by ID
router.delete('/deleteexperience/:id', Controller.deleteExperience); // Delete experience by ID

// Gallery routes
router.post('/postgallery', Controller.createGallery);
router.get('/getgalleries', Controller.getAllGallery); // Adjusted to match controller
router.get('/getgallery/:id', Controller.getGalleryById);
router.put('/updategallery/:id', Controller.updateGallery);
router.delete('/deletegallery/:id', Controller.deleteGallery);


// Portfolio routes
router.post('/postportfolio', Controller.createPortfolio); // Create a new portfolio item
router.get('/getportfolios', Controller.getAllPortfolio); // Get all portfolio items
router.get('/getportfolio/:id', Controller.getPortfolioById); // Get a single portfolio item by ID
router.put('/updateportfolio/:id', Controller.updatePortfolio); // Update portfolio item by ID
router.delete('/deleteportfolio/:id', Controller.deletePortfolio); // Delete portfolio item by ID

// // Service routes
router.post('/postservice', Controller.createService); // Create a new service
router.get('/getservices', Controller.getAllService); // Get all services
router.get('/getservice/:id', Controller.getServiceById); // Get a single service by ID
router.put('/updateservice/:id', Controller.updateService); // Update service by ID
router.delete('/deleteservice/:id', Controller.deleteService); // Delete service by ID

module.exports = router;
