import { Project, Certificate, Education, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'PharmaConnect',
    description: 'Dual apps (Admin + Retailer) for pharmaceutical stock and order management with real-time updates.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Flask APIs', 'Firebase'],
    githubUrl: 'https://github.com/Himanshu-Vinchurkar12/PharmaConnect',
    imageUrl: '/projects/PharmaConnect 2.webp'
  },
  {
    id: '2',
    title: 'Contact-Ease',
    description: 'Advanced contact management app with Room Database integration and modern UI design.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Material Design'],
    githubUrl: 'https://github.com/Himanshu-Vinchurkar12/Contact-Ease',
    imageUrl: '/projects/Contact-Ease.png'
  },
  {
    id: '3',
    title: 'Shoppy',
    description: 'Cross-platform Shopping app with real-time sync and Firebase backend. (In Development)',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Real-time Sync'],
    githubUrl: 'https://github.com/Himanshu-Vinchurkar12',
    imageUrl: '/projects/Shopping.jpeg'
  },
  {
    id: '4',
    title: 'Quizify',
    description: 'A smart study companion app that helps students revise faster. Users can type or upload notes (text/PDF), and the app uses AI to generate summaries, quizzes, and flashcards. Built with Jetpack Compose, Room DB, and AI APIs (OpenAI/Hugging Face), it provides an interactive way to learn and review study material. (In Development)',
    technologies: ['Kotlin', 'Jetpack Compose', 'REST APIs', 'Material Design'],
    githubUrl: 'https://github.com/Himanshu-Vinchurkar12',
    imageUrl: '/projects/Quizify 3.png'
  }
];

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Google AI-ML',
    issuer: 'EduSkills',
    year: '2024',
    description: 'Comprehensive training in Artificial Intelligence and Machine Learning fundamentals.',
    imageUrl: '/certificates/AI-ML.png'
  },
  {
    id: '2',
    title: 'Google Android Development',
    issuer: 'EduSkills',
    year: '2024',
    description: 'Advanced Android development course covering modern practices and Jetpack Compose.',
    imageUrl: '/certificates/Andriod Developnment.png'
  },
  {
    id: '3',
    title: 'Data Structures & Algorithms using Java',
    issuer: 'NPTEL',
    year: '2024',
    description: 'In-depth study of fundamental algorithms and data structures using Java programming.',
    imageUrl: '/certificates/DSA in Java.png'
  },
  {
    id: '4',
    title: 'Java Programming',
    issuer: 'CodSoft',
    year: '2023',
    description: 'Comprehensive Java programming certification covering OOP concepts and best practices.',
    imageUrl: '/certificates/Java programming.png'
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'B.Tech in Computer Science',
    institution: 'PRMIT&R, Badnera',
    period: '2022 - 2026',
    details: '4th Year CSE Student'
  },
  {
    id: '2',
    degree: '12th Grade',
    institution: 'Mahatma Phule Mahavidyalaya, Warud',
    period: '2020 - 2022',
    details: 'Higher Secondary Education'
  },
  {
    id: '3',
    degree: '10th Grade',
    institution: 'Jagrut Vidyalaya, Warud',
    period: '2014 - 2020',
    details: 'Secondary Education'
  }
];

export const technicalSkills: Skill[] = [
  { id: '1', name: 'Java', category: 'Programming', level: 'Advanced' },
  { id: '2', name: 'Kotlin', category: 'Programming', level: 'Intermediate' },
  { id: '3', name: 'Jetpack Compose', category: 'Mobile Dev', level: 'Intermediate' },
  { id: '4', name: 'Android Studio', category: 'Mobile Dev', level: 'Intermediate' },
  { id: '5', name: 'Retrofit', category: 'Mobile Dev', level: 'Beginner' },
  { id: '6', name: 'Firebase', category: 'Mobile Dev', level: 'Intermediate' },
  { id: '7', name: 'MySQL', category: 'Databases', level: 'Intermediate' },
  { id: '8', name: 'Room Database', category: 'Databases', level: 'Intermediate' },
  { id: '9', name: 'REST APIs', category: 'Backend', level: 'Intermediate' },
  { id: '10', name: 'Flask', category: 'Backend', level: 'Beginner' },
  { id: '11', name: 'Git', category: 'Tools', level: 'Beginner' },
  { id: '12', name: 'GitHub', category: 'Tools', level: 'Beginner' }
];

export const softSkills = [
  'Problem Solving',
  'Teamwork',
  'Communication',
  'Time Management',
  'Adaptability'
];