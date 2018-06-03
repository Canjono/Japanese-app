using System;

namespace Backend.Repositories.Models
{
    public class Word
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Translation { get; set; }
        public string Grammar { get; set; }
        public string Story { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime UpdatedTime { get; set; }

        public Word()
        {

        }

        public Word(string name, string translation, string grammar, string story)
        {
            Name = name;
            Translation = translation;
            Grammar = grammar;
            Story = story;
        }

        public Word(string id, string name, string translation, string grammar, string story)
        {
            Id = id;
            Name = name;
            Translation = translation;
            Grammar = grammar;
            Story = story;
        }
    }
}
