import * as LucideIcons from 'lucide-react';
import { ComponentType, SVGProps } from 'react';

type LucideIconName = keyof typeof LucideIcons;

interface IconProps {
  iconName: LucideIconName | string;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon = ({ 
  iconName, 
  size = 24, 
  color = 'currentColor', 
  className 
}: IconProps) => {
  const LucideIcon = LucideIcons[iconName as LucideIconName] as ComponentType<SVGProps<SVGSVGElement>>;

  if (!LucideIcon) {
    console.warn(`Icon "${iconName}" not found in Lucide Icons`);
    return (
      <span 
        className={className}
        style={{ 
          display: 'inline-block', 
          width: size, 
          height: size,
          color: color
        }}
      >
        {iconName}
      </span>
    );
  }

  return (
    <LucideIcon 
      width={size} 
      height={size} 
      color={color} 
      className={className} 
    />
  );
};