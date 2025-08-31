import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
connectCloudinary();


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true,
}));

app.use("/api/admin", adminRouter);

app.use("/", (req, res,) => {
    res.send("API WORKING")
})


app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})