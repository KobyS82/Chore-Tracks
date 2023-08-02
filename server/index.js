import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// https://www.npmjs.com/package/cors
app.use(cors());


// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/memories";
const PORT = process.env.PORT || 5000;


