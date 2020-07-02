interface IDictionaryService {
    CreateWord(word: string): any;
    CreateSynonyms(words: string[]): any;
    GetAllWords(): any;
    GetWordSynonyms(word: string): any;
}

export { IDictionaryService };