import express from 'express';
import colors from 'colors';
import dotenv from "dotenv";
import morgan from 'morgan'
import connectDB from './config/db.js'; //.js here for module problem
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';
//config env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use("/api/v1/auth", authRoutes)  //api/version/auth file
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);
//rest api
app.get("/", (req,res)=>{
    res.send("<h1>Welcome to our e-comm</h1>")
})

//PORT
//const PORT = 8080
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEVmode} mode on port ${PORT}`.bgCyan.white);
});