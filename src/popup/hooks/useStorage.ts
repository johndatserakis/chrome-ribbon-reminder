import { useEffect, useState } from 'react';

import { DEFAULT_RIBBONS, getRibbons } from '../utils/storage';

/**
 * Due to extension limitations, this hook initializes all values from
 * storage used within the app. I ran into some issues using Jotai,
 * I will take a look at that type of solution in the future. This
 * works just fine for now.
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

  const sortedRibbons = [...ribbons].sort((a, b) => a.order - b.order);

  return { ribbons: sortedRibbons, setRibbons };
};
