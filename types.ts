export interface VocabItem {
  en: string;
  pt: string;
}

export interface VocabCategory {
  title: string;
  items: VocabItem[];
}

export interface PhraseItem {
  en: string;
  pt: string;
  note?: string;
}

export interface ExerciseItem {
  question: string; // Portuguese
  answer: string; // English
}

export interface LessonData {
  id: number;
  title: string;
  vocabulary: VocabCategory[];
  phrases: PhraseItem[];
  exercises: ExerciseItem[];
}
