const Graph = require("graph-data-structure");

class Dictionary {

    private static instance: Dictionary;

    private readonly _words: typeof Graph;

    /**
     * Creates an instance of dictionary.
     */
    private constructor() {
        this._words = new Graph();
    }

    /**
     * Gets instance of Dictionary
     * @returns instance 
     */
    public static getInstance(): Dictionary {
        if (!Dictionary.instance) {
            Dictionary.instance = new Dictionary();
        }

        return Dictionary.instance;
    }

    /**
     * Gets words in dictionary (It is implemented as set in background, so words will not be repeated.)
     */
    get words(): typeof Graph {
        return this._words;
    }

}

export { Dictionary };