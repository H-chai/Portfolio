import { create } from 'zustand';
import eComFullScreen from '../../public/assets/eCom-fullScreen.jpg';
import eComProductPage from '../../public/assets/eCom-product.jpg';
import eComCartPage from '../../public/assets/eCom-cart.jpg';
import eComProductResponsive from '../../public/assets/eCom-product-responsive.jpg';
import eComCartResponsive from '../../public/assets/eCom-cart-responsive.jpg';
import CrediBidFullScreen from '../../public/assets/CrediBid-fullScreen.jpg';
import CrediBidListing from '../../public/assets/CrediBid-listing.jpg';
import CrediBidProfile from '../../public/assets/CrediBid-profile.jpg';
import CrediBidListingResponsive from '../../public/assets/CrediBid-listing-responsive.jpg';
import CrediBidCreateResponsive from '../../public/assets/CrediBid-create-page-responsive.jpg';
import PostlyfeFullScrenn from '../../public/assets/Postlyfe-fullScreen.jpg';
import PostlyfeProfile from '../../public/assets/Postlyfe-profile.jpg';
import PostlyfeCreate from '../../public/assets/Postlyfe-create.jpg';
import PostlyfeLoginResponsive from '../../public/assets/Postlyfe-login-responsive.jpg';
import PostlyfePostResponsive from '../../public/assets/Postlyfe-post-responsive.jpg';
import CommunityScienceMuseum from '../../public/assets/CommunityScienceMuseum.jpg';

export const useStore = create(() => ({
  projects: [
    {
      id: '1',
      name: 'eCom',
      goal: 'This is an e-commerce store built using React. The store allows users to browse products, view product details, add products to their cart, and complete a checkout process. Users can also contact the store via a contact form with validation.',
      tags: ['front-end', 'design'],
      technologies: [
        'React',
        'React Router',
        'CSS Modules',
        'Fetch API (Data Fetching)',
      ],
      year: '2025',
      url: 'https://reactecom-project.netlify.app/',
      medias: [
        {
          url: eComFullScreen,
          alt: 'eCom home',
        },
        {
          url: eComProductPage,
          alt: 'eCom product page',
        },
        {
          url: eComCartPage,
          alt: 'eCom cart page',
        },
        {
          url: eComProductResponsive,
          alt: 'eCom mobile product page',
        },
        {
          url: eComCartResponsive,
          alt: 'eCom mobile cart page',
        },
      ],
    },
    {
      id: '2',
      name: 'CrediBid',
      goal: 'CredBid is an auction platform where users can list items for bidding and place bids on items listed by others. Each new user receives 1000 credits to use for bidding, and credits can be earned by successfully auctioning items. Non-registered users can browse listings but cannot place bids.',
      tags: ['front-end', 'design'],
      technologies: [
        'JavaScript',
        'Vite',
        'HTML',
        'CSS (Tailwind)',
        'Fetch API (Data Fetching)',
      ],
      year: '2024',
      registration: {
        username: 'demo_user_1',
        email: 'demo_user_1@stud.noroff.no',
        password: 'Password123',
      },
      url: 'https://credibid-auction.netlify.app/',
      medias: [
        {
          url: CrediBidFullScreen,
          alt: 'CrediBid home',
        },
        {
          url: CrediBidListing,
          alt: 'CrediBid listing page',
        },
        {
          url: CrediBidProfile,
          alt: 'CrediBid profile page',
        },
        {
          url: CrediBidListingResponsive,
          alt: 'CrediBid mobile listing page',
        },
        {
          url: CrediBidCreateResponsive,
          alt: 'eCom mobile create listing page',
        },
      ],
    },
    {
      id: '3',
      name: 'Postlyfe',
      goal: 'This project is a client-side social media application where users can create, view, edit, and delete their posts. The application also includes features for user authentication, following/unfollowing other users, and interacting with posts through comments. The app interacts with a backend API to perform CRUD operations (Create, Read, Update, and Delete) on posts, and it uses localStorage for user authentication.',
      tags: ['front-end', 'design'],
      technologies: [
        'JavaScript',
        'Vite',
        'HTML',
        'CSS (Tailwind)',
        'Fetch API (Data Fetching)',
        'localStorage for toke storage',
      ],
      year: '2024',
      registration: {
        username: 'demo_user_1',
        email: 'demo_user_1@stud.noroff.no',
        password: 'Password123',
      },
      url: 'https://postlyfe.netlify.app/',
      medias: [
        {
          url: PostlyfeFullScrenn,
          alt: 'Postlyfe home',
        },
        {
          url: PostlyfeProfile,
          alt: 'Postlyfe profile page',
        },
        {
          url: PostlyfeCreate,
          alt: 'Postlyfe create page',
        },
        {
          url: PostlyfeLoginResponsive,
          alt: 'Postlyfe mobile login page',
        },
        {
          url: PostlyfePostResponsive,
          alt: 'Postlyfe mobile post page',
        },
      ],
    },
    {
      id: '4',
      name: 'Community Science Museum',
      goal: 'Design and develop a modern, accessible, and responsive website for the Community Science Museum, engaging young learners (ages 7-15) and families. The site should inspire curiosity about science, be visually captivating yet professional, easy to navigate, and functional across all devices, encouraging visitors to explore the museum.',
      tags: ['front-end', 'design'],
      technologies: ['Design (Figma)', 'HTML', 'CSS (Tailwind)'],
      year: '2023',
      url: 'https://h-chai.github.io/Semester-Project-1/',
      medias: [
        {
          url: CommunityScienceMuseum,
          alt: 'Community Science Museum',
        },
      ],
    },
  ],
  getProjectById: (id) => {
    return useStore.getState().projects.find((project) => project.id === id);
  },
}));
