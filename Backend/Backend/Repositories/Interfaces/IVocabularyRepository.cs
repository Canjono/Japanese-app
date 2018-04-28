using Backend.Repositories.Models;
using System.Collections.Generic;

namespace Backend.Repositories.Interfaces
{
    public interface IVocabularyRepository
    {
        IEnumerable<Word> GetAllWords();
        Word GetWord(int id);
        void AddWord(Word word);
        void DeleteWord(int id);
        void UpdateWord(Word word);
    }
}
