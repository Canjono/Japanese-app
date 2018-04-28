using Backend.Repositories.Interfaces;
using Backend.Repositories.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace Backend.Repositories.Dapper
{
    public class VocabularyRepository : BaseRepository, IVocabularyRepository
    {
        public VocabularyRepository(IConfiguration configuration) : base(configuration)
        {
        }

        public void AddWord(Word word)
        {
            throw new NotImplementedException();
        }

        public void DeleteWord(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Word> GetAllWords()
        {
            using (var dc = Connection)
            {
                dc.Open();
                var words = dc.Query<Word>("get_all_words",
                    new { userId = 2 },
                    commandType: CommandType.StoredProcedure).ToList();

                return words;
            }
        }

        public Word GetWord(int id)
        {
            throw new NotImplementedException();
        }

        public void UpdateWord(Word word)
        {
            throw new NotImplementedException();
        }
    }
}
