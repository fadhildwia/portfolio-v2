export interface ExperienceDataInterface {
  date: string;
  position: string;
  company: string;
  desc: string;
  techStack: Array<{ title: string }>;
}

export interface CardOneInterface {
  link: string;
  title: string;
  desc: string;
  techStack: Array<{ title: string }>;
  platform?: Array<LinkInterface>;
}

export interface ProjectDataInterface {
  url: string;
  title: string;
  desc: string;
  techStack: Array<{ title: string }>;
}

export interface LinkInterface {
  url: string;
  title: string;
  platform?: 'ios' | 'android' | 'website'
}

export interface FooterInterface {
  link: string;
  title: string;
}
