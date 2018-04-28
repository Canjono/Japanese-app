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
    }
}
