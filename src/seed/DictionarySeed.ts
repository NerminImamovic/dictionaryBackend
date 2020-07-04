import { IDictionaryService } from "../services/interfaces/IDictionaryService";
import { DictionaryService } from "../services/DictionaryService";

/**
 * Seed dictionary
 */
function seedDictionary(): void {

    const dictionaryService: IDictionaryService = new DictionaryService();
    
    dictionaryService.CreateWord("washer");
    dictionaryService.CreateWord("cleaner");

    dictionaryService.CreateSynonyms(["washer", "cleaner"]);
}

export { seedDictionary };