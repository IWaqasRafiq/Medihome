import validator from 'validator';
import bcrypt from 'bcrypt';
import {v2 as cloudinary} from 'cloudinary';
import doctorModel from '../models/doctorsModel.js';


const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const image = req.file;
    
    if (!name || !email || !password || !image || !speciality || !degree || !experience || !about || !fees || !address) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    };

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Please enter a valid email address" });

    }

    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });

    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(image.path, {resource_type: "image"});
    const imageUrl = imageUpload.secure_url;

    const newDoctor = new doctorModel({
      name,
      email,
      password: hashedPassword,
      image: imageUrl,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: new Date().toLocaleDateString("en-PK", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    });

    await newDoctor.save();
    res
      .status(201)
      .json({ message: "Doctor added successfully", doctor: newDoctor });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Error adding doctor", error });
  }
};

const loginAdmin = async (req, res) => {
  try {
    // const { email, password } = req.body;

    // if (!email || !password) {
    //   return res.status(400).json({ success: false, message: "All fields are required" });
    // }

    // if (!validator.isEmail(email)) {
    //   return res.status(400).json({ success: false, message: "Please enter a valid email address" });
    // }

    // const admin = await adminModel.findOne({ email });
    // if (!admin) {
    //   return res.status(404).json({ success: false, message: "Admin not found" });
    // }

    // const isMatch = await bcrypt.compare(password, admin.password);
    // if (!isMatch) {
    //   return res.status(401).json({ success: false, message: "Invalid credentials" });
    // }

    // const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    // res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

export { addDoctor, loginAdmin };
