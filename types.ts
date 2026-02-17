export enum GradeLevel {
  G6 = '6',
  G7 = '7',
  G8 = '8',
  G9 = '9',
  G10 = '10',
  G11 = '11',
  G12 = '12',
  University = 'Đại học',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
}

export interface Attachment {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'ppt' | 'link' | 'zip';
  url: string;
  size?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  youtubeId: string; // YouTube Video ID (e.g., dQw4w9WgXcQ)
  duration: string;
  content?: string; // Markdown content
  attachments: Attachment[];
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  thumbnail: string;
  grade: GradeLevel;
  teacher: string;
  studentsCount: number;
  rating: number;
  description: string;
  chapters: Chapter[];
  referenceMaterials?: Attachment[]; // Global course references
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}