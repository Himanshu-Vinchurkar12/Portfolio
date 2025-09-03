export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  imageUrl: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}