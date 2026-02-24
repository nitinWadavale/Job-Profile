export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  dob: string;
  nationality: string;
  maritalStatus: string;
  availability: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  linkedin: string;
  instagram: string;
  github: string;
  website: string;
  avatar: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string; // Full-time, Part-time, Freelance, Internship
  description: string;
  responsibilities: string[];
  technologies: string[];
  current: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  image: string;
  technologies: string[];
  featured: boolean;
}

export interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  percentage: string;
}
