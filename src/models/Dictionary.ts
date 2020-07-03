const Graph = require("graph-data-structure");

class Dictionary {

    private static instance: Dictionary;

    private readonly _words: typeof Graph;

    private constructor() {
        this._words = new Graph();
    }

    public static getInstance(): Dictionary {
        if (!Dictionary.instance) {
            Dictionary.instance = new Dictionary();
        }

        return Dictionary.instance;
    }

    get words(): typeof Graph {
        return this._words;
    }

}

export { Dictionary };