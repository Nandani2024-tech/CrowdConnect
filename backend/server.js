import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from "./routes/auth.routes.js"

dotenv.config();

const app = express();
app.use(express.json());


const PORT = 5000;
const mongoDBURL = process.env.MONGODB_URL

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB!'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use("/api/auth", authRoutes);

app.get('/', (req, res) =>{
    res.send("Welcome to CrowdConnect Backend");
});


app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})