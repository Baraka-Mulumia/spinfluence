import { NavigationItemType } from '@/types';

export const navigationItems: NavigationItemType[] = [
  {
    label: 'Home',
    path: 'home',
    isSpy: true,
  },
  {
    label: 'Services',
    path: 'services',
    isSpy: true,
  },

  {
    label: 'Why Us',
    path: 'why-us',
    isSpy: true,
  },
  // {
  //   label: 'Team',
  //   path: 'team',
  //   isSpy: true,
  // },
  {
    label: 'About Us',
    path: 'about-us',
    isSpy: false,
  },

  {
    label: 'Contact Us',
    path: 'contact-us',
    isSpy: true,
  },
];
