import { useState, useEffect } from 'react';

/*
  This component adds a listener for screen size change. If screen size matches the query property then the function returns true else it 
  returns false
*/
export function MediaQueryFlag(query) {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleChange = () => setFlag(media.matches);
    handleChange(); // set initial state

    media.addEventListener('change', handleChange);

    return () => media.removeEventListener('change', handleChange);
  }, [query]);

  return flag;
}