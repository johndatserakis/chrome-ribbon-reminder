import { useEffect, useState } from 'react';

import { DEFAULT_RIBBONS, getRibbons } from '../utils/storage';

/**
 * Due to extension limitations, this hooks initializes all values from
 * storage used within the app.
 *
 * Only use once at top level of app.
 */
export const useStorage = () => {
  const [ribbons, setRibbons] = useState(DEFAULT_RIBBONS);

  useEffect(() => {
    const getValues = async () => {
      const ribbons = await getRibbons();

      setRibbons(ribbons);
    };

    getValues();
  }, []);

  return { ribbons, setRibbons };
};
