import express, { Request, Response } from "express";
import * as _ from "lodash";

import { IDictionaryService } from "../services/interfaces/IDictionaryService";
import { DictionaryService } from "../services/DictionaryService";


const dictionaryService: IDictionaryService = new DictionaryService();

const dictionaryRoutes = express.Router();

dictionaryRoutes.get("/words", (req: Request, res: Response) => {
    const words: string[] = dictionaryService.GetAllWords();

    res.status(200).send(words);
});

dictionaryRoutes.get("/synonyms/:word", (req: Request, res: Response) => {

    const word: string = req.params.word;
    const synonyms: string[] = dictionaryService.GetWordSynonyms(word);

    res.status(200).send(synonyms);
});

dictionaryRoutes.post("/createSynonyms", (req: Request, res: Response) => {

    const words: string[] = req.body.words;

    if (_.size(words) === 1) {
        dictionaryService.CreateWord(words[0]);
    } else {
        dictionaryService.CreateSynonyms(words);
    }


    res.status(201).send();
});

export { dictionaryRoutes };