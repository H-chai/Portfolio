import { create } from 'zustand';

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
      medias: [
        {
          url: '/src/assets/eCom-fullScreen.jpg',
          alt: 'eCom home',
        },
        {
          url: '/src/assets/eCom-product.jpg',
          alt: 'eCom product page',
        },
        {
          url: '/src/assets/eCom-cart.jpg',
          alt: 'eCom cart page',
        },
        {
          url: '/src/assets/eCom-product-responsive.jpg',
          alt: 'eCom mobile product page',
        },
        {
          url: '/src/assets/eCom-cart-responsive.jpg',
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
      medias: [
        {
          url: '/src/assets/CrediBid-fullScreen.jpg',
          alt: 'CrediBid home',
        },
        {
          url: '/src/assets/CrediBid-listing.jpg',
          alt: 'CrediBid listing page',
        },
        {
          url: '/src/assets/CrediBid-profile.jpg',
          alt: 'CrediBid profile page',
        },
        {
          url: '/src/assets/CrediBid-listing-responsive.jpg',
          alt: 'CrediBid mobile listing page',
        },
        {
          url: '/src/assets/CrediBid-create-page-responsive.jpg',
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
      medias: [
        {
          url: '/src/assets/Postlyfe-fullScreen.jpg',
          alt: 'Postlyfe home',
        },
        {
          url: '/src/assets/Postlyfe-profile.jpg',
          alt: 'Postlyfe profile page',
        },
        {
          url: '/src/assets/Postlyfe-create.jpg',
          alt: 'Postlyfe create page',
        },
        {
          url: '/src/assets/Postlyfe-login-responsive.jpg',
          alt: 'Postlyfe mobile login page',
        },
        {
          url: '/src/assets/Postlyfe-post-responsive.jpg',
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
      medias: [
        {
          url: '/src/assets/CommunityScienceMuseum.jpg',
          alt: 'Community Science Museum',
        },
      ],
    },
  ],
  getProjectById: (id) => {
    return useStore.getState().projects.find((project) => project.id === id);
  },
}));
