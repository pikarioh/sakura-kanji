class Kanji {
    kanji: string;
    kunyomi: string[];
    onyomi: string[];
    meaning: string[];

    // JLPT 1 to 5
    level?: number;

    // 1, 2, 3, 4, 5, 6, or 7 (junior high)
    grade?: string;
    timestamp?: Date;
    author?: string;

  constructor(input: any) {
    this.kanji = input.kanji;
    this.kunyomi = input.kunyomi;
    this.onyomi = input.onyomi;
    this.meaning = input.meaning;
    this.level = input.level;
    this.timestamp = input.timestamp;
    this.grade = input.grade;
    this.author = input.author;
  }

  static fromJishoJson = (jsonObject: any) => {
    return new Kanji({
      kanji: jsonObject.query,
      kunyomi: jsonObject.kunyomi ?? [],
      onyomi: jsonObject.onyomi ?? [],
      meaning: jsonObject.meaning.split(','),
      level: jsonObject.jlptLevel == null ? null : parseInt(jsonObject.jlptLevel.substring(1)),
      grade: jsonObject.grade ?? jsonObject.taughtIn,
      timestamp: jsonObject.timestamp,
      author: jsonObject.author ?? 'Jisho',
    });
  }
}

export default Kanji;