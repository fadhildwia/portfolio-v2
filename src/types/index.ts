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
  platform: Array<LinkInterface>;
}

export interface ProjectDataInterface {
  url: string;
  title: string;
  desc: string;
  techStack: Array<string>;
}

export interface LinkInterface {
  url: string;
  title: string;
}
