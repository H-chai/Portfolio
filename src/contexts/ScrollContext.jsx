import { createContext, useContext, useRef } from 'react';

export const ScrollContext = createContext(null);

export function ScrollProvider({ children }) {
  const projectSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

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
