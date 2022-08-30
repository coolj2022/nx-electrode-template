import React, { useEffect } from 'react';

/**
 * Hook that trigger callback if you click outside of the passed ref
 */
const useOnClickOutside = (ref, onClick?, parentRef?) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (!ref.current || ref.current.contains(event.target) || (parentRef && !parentRef.current.contains(event.target)))
        return;
        onClick && onClick();
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export interface OverlayProps {
  children: React.ReactNode;
  isOpen: boolean,
  onClose?: (event: PointerEvent | MouseEvent | TouchEvent) => void;
};

const Overlay = ({ isOpen, children, onClose }: OverlayProps) => {
  const panelRef = React.useRef<HTMLDivElement>(null);
  const parentRef = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(panelRef, onClose, parentRef);

  return (
    !isOpen ? <></>
    : (
      <div style={{...styles.overlay}} ref={parentRef}>
        <div ref={panelRef}>{children}</div>
      </div>
    )
  );
};

Overlay.defaultProps = {
};

const styles = {
  overlay: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 'var(--header-height)',
    background: 'rgba(0,0,0,.4)',
    position: 'fixed',
    zIndex: 100,
  },
} as const;

export default Overlay;
