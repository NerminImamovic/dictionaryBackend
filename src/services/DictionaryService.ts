import { Dictionary } from "../models/Dictionary";
import { IDictionaryService } from "./interfaces/IDictionaryService";

class DictionaryService implements IDictionaryService {

    private dictionary: Dictionary;

    public constructor() {
        this.dictionary = Dictionary.getInstance();
    }

    public CreateWord(word: string): void {
        this.dictionary.words.addNode(word);
    }

    public CreateSynonyms(words: string[]): void {
        for (let index = 0; index < words.length - 1; index++) {
            this.JoinSynonyms(words[index], words[index + 1]);
        }
    }

    public GetAllWords(): string[] {
        return this.dictionary.words.nodes();
    }

    public GetWordSynonyms(word: string): string[] {
        return this.dictionary.words.depthFirstSearch([word], false);
    }

    private JoinSynonyms(firstWord: string, secondWord: string): void {
        this.dictionary.words.addEdge(firstWord, secondWord);
        this.dictionary.words.addEdge(secondWord, firstWord);
    }

}

export { DictionaryService };