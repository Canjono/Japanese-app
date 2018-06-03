using Backend.Repositories.Models;
using System.Collections.Generic;

namespace Backend.Repositories.Interfaces
{
    public interface IVocabularyRepository
    {
        IEnumerable<Word> GetAllWords();
        bool AddWord(Word word);
        bool DeleteWord(string id);
        bool UpdateWord(Word word);
    }
}
