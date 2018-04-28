using Backend.Repositories.Interfaces;
using GraphQL.Types;

namespace Backend.GraphQlTypes
{
    public class VocabularyQuery : ObjectGraphType
    {
        public VocabularyQuery(IVocabularyRepository vocabularyRepository)
        {
            Field<ListGraphType<WordType>>("allwords",
                resolve: context =>
                {
                    return vocabularyRepository.GetAllWords();
                });

            Field<StringGraphType>(
                name: "hello",
                resolve: context => "world"
            );
        }
    }
}
