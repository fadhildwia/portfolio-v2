export interface ExperienceDataInterface {
  date: string;
  position: string;
  company: string;
  desc: string;
  techStack: Array<string>;
}

export interface PortfolioDataInterface {
  slug: string;
  title: string;
  desc: string;
  techStack: Array<string>;
  platform: Array<string>;
}

export interface ProjectDataInterface {
  url: string;
  title: string;
  desc: string;
  techStack: Array<string>;
}

export interface FooterDataInterface {
  title: string;
  url: string;
}