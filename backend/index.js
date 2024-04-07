import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { ConnectDB } from './db/db.js';
import {Create} from './crud/Create.js'
import { Read } from './crud/Read.js';
import { Update } from './crud/Update.js';
import { Delete } from './crud/Delete.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", 'GET', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
}));

ConnectDB().then(() => {
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
});

app.post("/add-phone", Create)
app.get("/get-phone", Read)
app.put("/update-phone/:id", Update)
app.delete("/delete-phone/:id", Delete)