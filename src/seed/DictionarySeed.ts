import { IDictionaryService } from "../services/interfaces/IDictionaryService";
import { DictionaryService } from "../services/DictionaryService";

function seedDictionary(): void {

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