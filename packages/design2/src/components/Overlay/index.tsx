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

export interface OverlayProps {
  children: React.ReactNode;
  isOpen?: boolean,
  className?: string;
  customStyles?: React.CSSProperties;
  onClose: (event: PointerEvent | MouseEvent | TouchEvent) => void;
};

const Overlay = ({ isOpen, children, className, customStyles, onClose }: OverlayProps) => {
  if (!isOpen) return <></>;

  const panelRef = React.useRef<HTMLDivElement>(null);
  const parentRef = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(panelRef, onClose, parentRef);

  return (
    <div className={className} style={{...styles.overlay, ...customStyles}} ref={parentRef}>
      <div ref={panelRef}>{children}</div>
    </div>
  );
};

Overlay.defaultProps = {
  isOpen: false,
  className: '',
  customStyles: {},
};

const styles = {
  overlay: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    background: 'rgba(0,0,0,.4)',
    position: 'fixed',
    zIndex: 100,
  },
} as const;

export default Overlay;
