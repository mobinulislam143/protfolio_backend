const IntroModel = require('../models/introModel');
const BlogModel = require('../models/blogModel');
const EducationModel = require('../models/educationModel');
const ExperienceModel = require('../models/experienceModel');
const GalleryModel = require('../models/galleryModel');
const PortfolioModel = require('../models/portfolioModel');
const ServiceModel = require('../models/serviceModel');
const SkillsModel = require('../models/skillsModel');
const UserModel = require('../models/userModel');
const StarModel = require('../models/starModel');
const mongoose  = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const jwt = require('jsonwebtoken');
const { EncodeToken } = require('../utility/TokenHelper');

// const { EncodeToken } = require('../utility/TokenHelper');

// CRUD for IntroModel
exports.createIntro = async (req, res) => {
    try {
        const data = await IntroModel.create(req.body);
        res.status(200).json({ status: "success", data });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};






exports.addskills = async (req, res) => {
    try {
        const reqBody =  req.body

        const addSkill = await SkillsModel.create(reqBody)

        res.status(200).json({ status: "success", data: addSkill });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};
exports.addFrontendSkills = async (req, res) => {
    try {
        const id = req.params.id;
        const { skillName, percentage } = req.body

        const updateSkills = await SkillsModel.findByIdAndUpdate(id, 
            {
                $push: {frontendskills:{ skillName, percentage} }
        },{new: true}
    )
        res.status(200).json({ status: "success", data: updateSkills });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};
exports.addbackendSkills = async (req, res) => {
    try {
        const id = req.params.id;
        const { skillName, percentage } = req.body

        const updateSkills = await SkillsModel.findByIdAndUpdate(id, 
            {
                $push: {backendskills:{ skillName, percentage} }
        },{new: true}
    )
        res.status(200).json({ status: "success", data: updateSkills });
    } catch (e) {
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};

exports.getfrontendskills = async (req, res) => {
    try {
      const frontendSkills = await SkillsModel.find({}, { frontendskills: 1, _id: 0 });
  
      res.status(200).json({ status: "success", data: frontendSkills });
    } catch (e) {
      res.status(400).json({ status: "fail", data: e.toString() });
    }
  };
exports.getbackendskills = async (req, res) => {
    try {
        const backendskills = await SkillsModel.find({}, {backendskills: 1, _id: 0})
        
        res.status(200).json({ status: "success", data: backendskills });
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
exports.test = async (req, res) => {
    try {
      
        res.status(200).json({ status: "success",  });
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
        res.status(200).json({ status: "success", data:data });
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
        res.status(200).json({ status: "success", data:data });
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




// Registration controller
// exports.register = async (req, res) => {
//     const { email, name, password } = req.body;

//     try {
//         // Check if the user already exists
//         const existingUser = await UserModel.findOne({ email: email });
//         if (existingUser) {
//             return res.status(400).json({ status: 'failed', msg: 'User already exists' });
//         }

//         // Create a new user
//         const newUser = new UserModel({
//             email: email,
//             name: name,
//             password: password // Store password in plain text
//         });
//         await newUser.save();

//         // Send response
//         res.status(201).json({ message: 'Registration successful', data: newUser });
//     } catch (error) {
//         res.status(500).json({ status: 'failed', msg: error.message });
//     }
// };



exports.login = async (req, res) => {
    const { email, name } = req.body;

    try {
        // Create or find the user by email
        let user = await UserModel.findOne({ email: email });

        if (!user) {
            // If the user does not exist, create a new user
            user = new UserModel({
                email: email,
                name: name, // Include name
            });
            await user.save();
        } 

        // Create a token
        let user_id = user._id.toString();
        let token = EncodeToken(email, user_id);

        // Set cookie options
        const CookieOption = { expires: new Date(Date.now() + 1 * 60 * 60 * 1000), httpOnly: true };

        // Set the token in a cookie
        res.cookie('token', token, CookieOption);

        // Send the response
        res.status(200).json({ status: "success", token: token, data: user,  });
    } catch (error) {
        res.status(500).json({ status: 'failed', msg: error.message });
    }
};



exports.addStar = async (req, res) => {
    let UserID = req.headers.user_id; // This line is fine
    let reqBody = req.body;
    reqBody.userID = UserID;

    try {
        // This should reference the correct header
        if (!UserID) { // Change req.userId to UserID
            return res.status(401).json({ status: 'failed', msg: 'User not authenticated' });
        }

        const starRating = await StarModel.create(reqBody);
        
        res.status(201).json({ message: 'Rating submitted successfully', rating: starRating });
    } catch (error) {
        res.status(500).json({ status: 'failed', msg: error.message });
    }
};




// Get all registered users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({}, { password: 0 }); // Exclude password from response
        res.status(200).json({ status: 'success', data: users });
    } catch (error) {
        res.status(500).json({ status: 'failed', msg: error.message });
    }
};
// Get all star ratings
exports.getAllStars = async (req, res) => {
    try {
        const stars = await StarModel.find(); // Get all stars
        const starCount = await StarModel.countDocuments(); // Count all stars
        res.status(200).json({ status: 'success', star: starCount, data: stars });
    } catch (error) {
        res.status(500).json({ status: 'failed', msg: error.message });
    }
};
