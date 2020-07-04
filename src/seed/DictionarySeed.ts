import { IDictionaryService } from "../services/interfaces/IDictionaryService";
import { DictionaryService } from "../services/DictionaryService";

function seedDictionary(): void {

    const dictionaryService: IDictionaryService = new DictionaryService();
    
    dictionaryService.CreateWord("a");
    dictionaryService.CreateWord("b");

    dictionaryService.CreateSynonyms(["a", "b"]);
    dictionaryService.CreateSynonyms(["c", "b"]);
}

export { seedDictionary };