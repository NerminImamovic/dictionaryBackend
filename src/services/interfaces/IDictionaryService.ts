interface IDictionaryService {
    CreateWord(word: string): void;
    CreateSynonyms(words: string[]): void;
    GetAllWords(): string[];
    GetWordSynonyms(word: string): string[];
}

export { IDictionaryService };