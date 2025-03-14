import { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollContext = createContext(null);

export function ScrollProvider({ children }) {
  const projectSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const location = useLocation();

  const scrollToProjects = () => {
    if (projectSectionRef.current) {
      projectSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        if (location.state.scrollTo === 'projects') {
          scrollToProjects();
        } else if (location.state.scrollTo === 'contact') {
          scrollToContact();
        }
      }, 300);
    }
  }, [location]);

  return (
    <ScrollContext.Provider
      value={{
        projectSectionRef,
        contactSectionRef,
        scrollToProjects,
        scrollToContact,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }

  return context;
}
