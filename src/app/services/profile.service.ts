import { Injectable } from '@angular/core';
import { Education, Experience, PersonalInfo, Project, Skill } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  getPersonalInfo(): PersonalInfo {
    return {
      name: 'Nitin Wadavale',
      title: 'Tech Lead',
      tagline: 'Tech Lead | 8+ Years | Angular · Ionic · Flutter UI',
      summary: 'Results-driven and innovative Web Developer with over 8+ years of expertise in leading cross-functional teams to deliver high-impact web solutions. Proven track record of successfully managing the entire development lifecycle, from conceptualization to deployment, while ensuring adherence to best practices and industry standards.',
      dob: '08 June 1993',
      nationality: 'Indian',
      maritalStatus: 'Married',
      availability: 'Open to Opportunities',
      address: 'C-502, Metro Angan, Barrage Road',
      city: 'Badlapur West',
      state: 'Maharashtra',
      pincode: '421503',
      phone: '+91 7977518951',
      email: 'nwadavale08@gmail.com',
      linkedin: 'https://www.linkedin.com/in/nitin-wadavale-666373238',
      instagram: 'https://www.instagram.com/_ni3_08?igsh=ejR5NnU0aXFubGF4',
      github: 'https://github.com/nitinwadavale',
      website: 'https://www.oneinsure.com',
      avatar: 'assets/avatar.png'
    };
  }

  getExperiences(): Experience[] {
    return [
      {
        id: 1,
        company: 'Robinhood Insurance Broker Pvt Ltd',
        role: 'Tech Lead',
        duration: '2016 – Present',
        location: 'Mumbai, Maharashtra',
        type: 'Full-time',
        description: 'Leading the complete web development lifecycle for OneInsure — an insurance comparison and management platform — from conceptualization to deployment, ensuring best practices and industry standards.',
        responsibilities: [
          'Leading cross-functional development teams to deliver high-impact web and mobile solutions',
          'Managing entire development lifecycle from requirement gathering to production deployment',
          'Architecting and building Angular-based web applications and Ionic mobile apps',
          'Collaborating with stakeholders to define project scopes, requirements, and milestones',
          'Overseeing API integration with multiple insurance companies and third-party services',
          'Ensuring on-time delivery of multiple concurrent projects',
          'Mentoring junior developers and conducting code reviews'
        ],
        technologies: ['Angular', 'AngularJS', 'Ionic Framework', 'Flutter UI', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap5', 'JavaScript', 'jQuery', 'SQL', 'API Integration'],
        current: true
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'OneInsure Web Platform',
        description: 'Web application for comparison of different insurance policies from multiple insurers. Users can compare, buy, and manage health, life, and general insurance policies online.',
        liveUrl: 'https://www.oneinsure.com',
        githubUrl: '',
        image: 'assets/project1.png',
        technologies: ['Angular', 'SCSS', 'Bootstrap5', 'API Integration', 'JavaScript'],
        featured: true
      },
      {
        id: 2,
        title: 'OneInsure Mobile App',
        description: 'Mobile application for Android and iOS enabling customers to register policies, track claims, raise service requests, and get insurance support on the go.',
        liveUrl: 'https://www.oneinsure.com',
        githubUrl: '',
        image: 'assets/project2.png',
        technologies: ['Ionic Framework', 'Angular', 'Flutter UI', 'API Integration'],
        featured: true
      },
      {
        id: 3,
        title: 'OneInsure Money – Mutual Fund Platform',
        description: 'Interactive platform to guide users through their complete mutual fund financial journey — from goal setting to investment and portfolio tracking.',
        liveUrl: 'https://www.oneinsure.money',
        githubUrl: '',
        image: 'assets/project3.png',
        technologies: ['Angular', 'SCSS', 'JavaScript', 'API Integration', 'SQL'],
        featured: true
      },
      {
        id: 4,
        title: 'Sukoon – Claims Support App',
        description: 'Internal application used by the Customer Support Team to assist insurance holders through the claim process, track claim status, and manage policy service requests.',
        liveUrl: 'http://sukoon.oneinsure.com',
        githubUrl: '',
        image: 'assets/project4.png',
        technologies: ['Angular', 'Bootstrap5', 'API Integration', 'SQL'],
        featured: true
      },
      {
        id: 5,
        title: 'HR Portal – Employee Document Management',
        description: 'Secure internal platform for HR document management, employee onboarding, and document uploads for staff across the organisation.',
        liveUrl: 'https://www.oneinsure.com/hrdocs/HRDocument/UploadEmployeeDoc',
        githubUrl: '',
        image: 'assets/project5.png',
        technologies: ['Angular', 'SCSS', 'SQL', 'API Integration'],
        featured: false
      },
      {
        id: 6,
        title: 'Reported Business App',
        description: 'Daily business reporting application for tracking business generated by sales agents. Provides real-time reports and dashboards for management.',
        liveUrl: 'https://www.oneinsure.com',
        githubUrl: '',
        image: 'assets/project6.png',
        technologies: ['Angular', 'JavaScript', 'Bootstrap5', 'SQL', 'API Integration'],
        featured: false
      },
      {
        id: 7,
        title: 'Mutual Fund Assisted Journey',
        description: 'Guided investment platform helping users navigate through mutual fund investment decisions with personalized recommendations and step-by-step assistance.',
        liveUrl: 'http://assisted.oneinsure.money/dashboard',
        githubUrl: '',
        image: 'assets/project7.png',
        technologies: ['Angular', 'SCSS', 'API Integration', 'JavaScript'],
        featured: false
      },
      {
        id: 8,
        title: 'Persistency Portal',
        description: 'Internal management tool for tracking policy persistency and renewal data for insurance agents and managers.',
        liveUrl: 'http://persistency.oneinsure.com/Account/login.aspx',
        githubUrl: '',
        image: 'assets/project8.png',
        technologies: ['Angular', 'Bootstrap5', 'SQL', 'API Integration'],
        featured: false
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      {
        category: 'Frontend',
        items: [
          { name: 'Angular / AngularJS', level: 92 },
          { name: 'HTML5 / CSS3', level: 95 },
          { name: 'SCSS / SASS', level: 90 },
          { name: 'Bootstrap 5', level: 90 },
          { name: 'JavaScript', level: 88 }
        ]
      },
      {
        category: 'Frameworks & Libraries',
        items: [
          { name: 'Ionic Framework', level: 85 },
          { name: 'Flutter UI', level: 75 },
          { name: 'jQuery', level: 85 },
          { name: 'API Integration', level: 90 }
        ]
      },
      {
        category: 'Database & Backend',
        items: [
          { name: 'SQL', level: 80 },
          { name: 'REST APIs', level: 88 },
          { name: 'JSON / XML', level: 85 }
        ]
      },
      {
        category: 'Languages',
        items: [
          { name: 'Marathi', level: 100 },
          { name: 'Hindi', level: 95 },
          { name: 'English', level: 85 }
        ]
      }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        degree: 'BSc Computer Science',
        institution: 'Mumbai University',
        year: '2015',
        percentage: 'Graduate'
      },
      {
        degree: 'Higher Secondary Certificate (HSC) – Science',
        institution: 'Mumbai University',
        year: '2011',
        percentage: 'Graduate'
      }
    ];
  }
}
