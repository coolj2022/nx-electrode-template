import React, { useEffect } from 'react';

/**
 * Hook that trigger callback if you click outside of the passed ref
 */
const useOnClickOutside = (ref, onClick, parentRef?) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (!ref.current || ref.current.contains(event.target) || (parentRef && !parentRef.current.contains(event.target)))
        return;
      onClick();
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useOnClickOutside;