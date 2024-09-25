const IntroModel = require('../models/introModel');
const BlogModel = require('../models/blogModel');
const EducationModel = require('../models/educationModel');
const ExperienceModel = require('../models/experienceModel');
const GalleryModel = require('../models/galleryModel');
const PortfolioModel = require('../models/portfolioModel');
const ServiceModel = require('../models/serviceModel');

// CRUD for IntroModel
exports.createIntro = async (req, res) => {
    try {
        const data = await IntroModel.create(req.body);
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.getIntro = async (req, res) => {
    try {
        const data = await IntroModel.find();
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.updateIntro = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await IntroModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Intro not found" });
        }
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.deleteIntro = async (req, res) => {
    try {
        const id = req.params.id;
        await IntroModel.findByIdAndDelete(id);
        res.status(200).json({ status: "success", message: "Deleted successfully" });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

// CRUD for BlogModel
exports.createBlog = async (req, res) => {
    try {
        const data = await BlogModel.create(req.body);
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.getAllBlogs = async (req, res) => {
    try {
        const data = await BlogModel.find();
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

// New method to get a single blog by ID
exports.getBlogById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await BlogModel.findById(id);
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Blog not found" });
        }
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await BlogModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Blog not found" });
        }
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;
        await BlogModel.findByIdAndDelete(id);
        res.status(200).json({ status: "success", message: "Deleted successfully" });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

// CRUD for EducationModel
exports.createEducation = async (req, res) => {
    try {
        const data = await EducationModel.create(req.body);
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.getAllEducation = async (req, res) => {
    try {
        const data = await EducationModel.find();
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

// New method to get a single education by ID
exports.getEducationById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await EducationModel.findById(id);
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Education not found" });
        }
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.updateEducation = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await EducationModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Education not found" });
        }
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.deleteEducation = async (req, res) => {
    try {
        const id = req.params.id;
        await EducationModel.findByIdAndDelete(id);
        res.status(200).json({ status: "success", message: "Deleted successfully" });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

// CRUD for ExperienceModel
exports.createExperience = async (req, res) => {
    try {
        const data = await ExperienceModel.create(req.body);
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.getAllExperiences = async (req, res) => {
    try {
        const data = await ExperienceModel.find();
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

// New method to get a single experience by ID
exports.getExperienceById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ExperienceModel.findById(id);
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Experience not found" });
        }
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.updateExperience = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ExperienceModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Experience not found" });
        }
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.deleteExperience = async (req, res) => {
    try {
        const id = req.params.id;
        await ExperienceModel.findByIdAndDelete(id);
        res.status(200).json({ status: "success", message: "Deleted successfully" });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

// CRUD for GalleryModel
exports.createGallery = async (req, res) => {
    try {
        const data = await GalleryModel.create(req.body);
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.getAllGallery = async (req, res) => {
    try {
        const data = await GalleryModel.find();
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

// New method to get a single gallery by ID
exports.getGalleryById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await GalleryModel.findById(id);
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Gallery not found" });
        }
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.updateGallery = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await GalleryModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Gallery not found" });
        }
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.deleteGallery = async (req, res) => {
    try {
        const id = req.params.id;
        await GalleryModel.findByIdAndDelete(id);
        res.status(200).json({ status: "success", message: "Deleted successfully" });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

// CRUD for PortfolioModel
exports.createPortfolio = async (req, res) => {
    try {
        const data = await PortfolioModel.create(req.body);
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.getAllPortfolio = async (req, res) => {
    try {
        const data = await PortfolioModel.find();
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

// New method to get a single portfolio by ID
exports.getPortfolioById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await PortfolioModel.findById(id);
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Portfolio not found" });
        }
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.updatePortfolio = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await PortfolioModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Portfolio not found" });
        }
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.deletePortfolio = async (req, res) => {
    try {
        const id = req.params.id;
        await PortfolioModel.findByIdAndDelete(id);
        res.status(200).json({ status: "success", message: "Deleted successfully" });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

// CRUD for ServiceModel
exports.createService = async (req, res) => {
    try {
        const data = await ServiceModel.create(req.body);
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.getAllService = async (req, res) => {
    try {
        const data = await ServiceModel.find();
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

// New method to get a single service by ID
exports.getServiceById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ServiceModel.findById(id);
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Service not found" });
        }
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.updateService = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ServiceModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Service not found" });
        }
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.deleteService = async (req, res) => {
    try {
        const id = req.params.id;
        await ServiceModel.findByIdAndDelete(id);
        res.status(200).json({ status: "success", message: "Deleted successfully" });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};
