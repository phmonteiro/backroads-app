import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://facebook.com', className: 'fab fa-facebook' },
  { id: 2, href: 'https://twitter.com', className: 'fab fa-twitter' },
  { id: 3, href: 'https://squarespace.com', className: 'fab fa-squarespace' }
]

export const services = [
  {
    id: 1, serviceName: "saving money", serviceText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Asperiores, officia.`, icon: 'fas fa-wallet fa-fw'
  },
  {
    id: 2, serviceName: "endless hiking", serviceText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Asperiores, officia.`, icon: 'fas fa-tree fa-fw'
  },
  {
    id: 3, serviceName: "amazing comfort", serviceText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Asperiores, officia.`
  }
]


export const tours = [
  {
    id: 1, tourName: 'Tibet Adventure', tourDate: 'August 26th, 2020', tourText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', tourDestination: 'China', tourDuration: '6 Days', tourPrice: 'From $2100', tourImg: tour1
  },
  {
    id: 2, tourName: 'Best of Java', tourDate: 'October 1th, 2020', tourText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', tourDestination: 'Indonesia', tourDuration: '11 Days', tourPrice: 'From $1400', tourImg: tour2
  },
  {
    id: 3, tourName: 'Explore Hong Kong', tourDate: 'September 15th, 2020', tourText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', tourDestination: 'Hong Kong', tourDuration: '8 Days', tourPrice: 'From $5000', tourImg: tour3
  },
  {
    id: 4, tourName: 'Kenya Highlights', tourDate: 'December 5th, 2019', tourText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', tourDestination: 'Kenya Highlights', tourDuration: '20 Days', tourPrice: 'From $3300', tourImg: tour4
  }
]

export const footerLinks = [
  {
    id: 1,
    href: "#home",
    text: "home"
  },
  {
    id: 2,
    href: "#about",
    text: "about"
  },
  {
    id: 3,
    href: "#services",
    text: "services"
  },
  {
    id: 4,
    href: "#featured",
    text: "featured"
  }
]

export const footerIcons = [
  {
    id: 1,
    href: 'https://www.facebook.com',
    icon: 'fab fa-facebook'
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    icon: 'fab fa-twitter'
  },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    icon: 'fab fa-squarespace'
  }
]