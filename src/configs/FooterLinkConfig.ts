interface IFooterLink {
  to: string;
  imageUrl: string;
}

export const FOOTER_LINK_LIST: IFooterLink[] = [
  {
    to: 'https://instagram.com',
    imageUrl: '../assets/images/instagram.png',
  },
  {
    to: 'https://linkedin.com',
    imageUrl: '../assets/images/linkedin.png',
  },
  {
    to: 'https://twitter.com',
    imageUrl: '../assets/images/twitter.png',
  },
];
