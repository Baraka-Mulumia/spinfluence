export type NavigationItemType = {
  label: string;
  path: string;
  isSpy?: boolean;
  onClick?: () => void;
};

export type ServiceType = {
  title: string;
  description: string;
  body: string;
  image: string;
  slug: string;
};

export type WhyChooseUsType = {
  title: string;
  tabName: string;
  description: string;
  image: string;
  promises: string[];
};

export type CoreValue = {
  title: string;
  body: string;
};

export type Testimonial = {
  name: string;
  username: string;
  text: string;
  image: string;
};
