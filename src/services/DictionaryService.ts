import { Dictionary } from "../models/Dictionary";
import { IDictionaryService } from "./interfaces/IDictionaryService";

class DictionaryService implements IDictionaryService {

    private dictionary: Dictionary;

    /**
     * Creates an instance of dictionary service.
     */
    public constructor() {
        this.dictionary = Dictionary.getInstance();
    }


    /**
     * Creates word
     * @param word 
     */
    public CreateWord(word: string): void {
        this.dictionary.words.addNode(word);
    }

    /**
     * Creates synonyms
     * @param words 
     */
    public CreateSynonyms(words: string[]): void {
        for (let index = 0; index < words.length - 1; index++) {
            this.JoinSynonyms(words[index], words[index + 1]);
        }
    }


    /**
     * Gets all words
     * @returns all words 
     */
    public GetAllWords(): string[] {
        return this.dictionary.words.nodes();
    }


    /**
     * Gets word synonyms (transitive rule implementation)
     * @param word 
     * @returns word synonyms 
     */
    public GetWordSynonyms(word: string): string[] {
        // Transitive closure is solved using depthFirstSearch algorithm
        return this.dictionary.words.depthFirstSearch([word], false);
    }


    /**
     * Joins synonyms 
     * @param firstWord 
     * @param secondWord 
     */
    private JoinSynonyms(firstWord: string, secondWord: string): void {
        // This library is implementation for directed graph strutcture, so we need to connect both directions.
        this.dictionary.words.addEdge(firstWord, secondWord);
        this.dictionary.words.addEdge(secondWord, firstWord);
    }

}

export { DictionaryService };