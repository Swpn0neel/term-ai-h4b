// components/SVGIcon.tsx
import React from "react";

interface SVGIconProps {
  svg: string;
  className?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({ svg, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: svg }} />
);

export default SVGIcon;
