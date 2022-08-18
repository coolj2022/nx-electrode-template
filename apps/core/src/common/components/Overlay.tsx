import React from 'react';
import useOnClickOutside from '../hooks/useOnClickOutside';

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
