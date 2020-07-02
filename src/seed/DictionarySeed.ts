import { IDictionaryService } from "../services/interfaces/IDictionaryService";
import { DictionaryService } from "../services/DictionaryService";
import { dictionaryRoutes } from "../routes/DictionaryRoutes";

function seedDictionary() {

    const dictionaryService: IDictionaryService = new DictionaryService();

    console.log("DictionaryService " + JSON.stringify(dictionaryService));

    dictionaryService.CreateWord("a");
    dictionaryService.CreateWord("b");

    dictionaryService.CreateSynonyms(["a", "b"]);
    dictionaryService.CreateSynonyms(["c", "b"]);

    const words: string[] = dictionaryService.GetAllWords();

    console.log("Words " + JSON.stringify(words));
}

export { seedDictionary };