import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import "reflect-metadata";

import { dictionaryRoutes } from "./src/routes/DictionaryRoutes";

import { seedDictionary } from "./src/seed/DictionarySeed";

const server = express();

seedDictionary();

server.use(helmet());
server.use(cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/dictionary", dictionaryRoutes);

server.listen(4000, function () {
    console.log('Example app listening on port 4000!')
});