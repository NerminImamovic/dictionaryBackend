import { expect } from 'chai';
import 'mocha';
import { IDictionaryService } from '../src/services/interfaces/IDictionaryService';
import { DictionaryService } from '../src/services/DictionaryService';

describe("Dictionary Service", () => { 

  const dictionaryService: IDictionaryService = new DictionaryService();
  it('Should create a synoynms', () => {
    dictionaryService.CreateSynonyms(["washer", "cleaner"]);

    const washerSynonyms: string[] = 
      dictionaryService.GetWordSynonyms("washer");

    expect(washerSynonyms.length).to.eql(1);
    expect(washerSynonyms[0]).to.eql("cleaner");
  });

  it('Should get all synonyms for the certain word', () => {
    dictionaryService.CreateSynonyms(["x", "y", "z"]);

    const xSynoynms: string[] = dictionaryService.GetWordSynonyms("x");

    expect(xSynoynms.length).to.equal(2);
  });

  it('Should implement transitive rule', () => {
    dictionaryService.CreateSynonyms(["a", "b"]);
    dictionaryService.CreateSynonyms(["b", "c"]);

    const aSynonyms: string[] =
      dictionaryService.GetWordSynonyms("a");

    expect(aSynonyms).contain("c");
  });

});