using Backend.Repositories.Interfaces;
using Backend.Repositories.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
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

        public bool AddWord(Word word)
        {
            using (var dc = Connection)
            {
                dc.Open();
                dc.Query("word_create",
                    new
                    {
                        userId = "",
                        name = word.Name,
                        translation = word.Translation,
                        grammar = word.Grammar,
                        story = word.Story
                    },
                    commandType: CommandType.StoredProcedure);

                return true;
            }
        }

        public bool DeleteWord(string id)
        {
            using (var dc = Connection)
            {
                dc.Open();
                dc.Query("word_delete", new { wordId = id }, commandType: CommandType.StoredProcedure);
                return true;
            }
        }

        public IEnumerable<Word> GetAllWords()
        {
            using (var dc = Connection)
            {
                dc.Open();
                var words = dc.Query<Word>("word_all_get",
                    new { userId = "" },
                    commandType: CommandType.StoredProcedure).ToList();

                return words;
            }
        }

        public bool UpdateWord(Word word)
        {
            using (var dc = Connection)
            {
                dc.Open();
                dc.Query("word_update",
                    new
                    {
                        wordId = word.Id,
                        name = word.Name,
                        translation = word.Translation,
                        grammar = word.Grammar,
                        story = word.Story
                    },
                    commandType: CommandType.StoredProcedure);

                return true;
            }
        }
    }
}
