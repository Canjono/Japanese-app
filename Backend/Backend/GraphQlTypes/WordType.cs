using Backend.Repositories.Models;
using GraphQL.Types;

namespace Backend.GraphQlTypes
{
    public class WordType : ObjectGraphType<Word>
    {
        public WordType()
        {
            Field(x => x.Id).Description("Database id of this word.");
            Field(x => x.Name).Description("The name of this word.");
            Field(x => x.Translation).Description("The translation of this word.");
            Field(x => x.Grammar).Description("The type of grammar this word belongs to.");
            Field(x => x.Story).Description("The story to help remember this word.");
        }
    }
}
