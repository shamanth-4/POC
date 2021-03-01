export const getGlobalObj = (name) : string => {
    return (typeof window[name] !== 'undefined') ? window[name] : null;
  };
  