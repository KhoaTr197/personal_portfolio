import { ReactNode, Ref } from "react";
import { DeviceType } from "./deviceType";

export interface PageProps {
  children?: React.ReactNode;
  deviceType?: DeviceType;
}

export type PageRef = Ref<HTMLElement>;

// 3DSkillsetPage.tsx
export interface ThreeDSkillsetPageProps extends PageProps {
  isLoaded: boolean;
}

// Badge.tsx
export interface BadgeProps {
  quantity: number,
  info: string
}

// CornerInfo.tsx
export interface CornerInfoProps {
  children?: ReactNode,
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right",
  padding?: number[],
  textTransform?: "uppercase" | "lowercase" | "capitalize"
}

// FeatureList.tsx
export interface FeatureListProps {
  title: string,
  items?: string[],
  children?: ReactNode,
  style?: string
}

// GridItem.tsx
export interface GridItemProps {
  size: [number, number], //[x, y]
  coord?: [number, number], //[offsetX, offsetY]
  styles?: string,
  background?: string,
  children: ReactNode
}

// GridLayout.tsx
export interface GridLayoutProps {
  size: [number, number], //[x, y]
  gap?: number,
  styles: string,
  children: ReactNode
}

// Header.tsx
export interface HeaderProps {
  onClick?: () => void,
}

// Marquee.tsx
export interface MarqueeProps{
  items: string[],
  duration?: number,
  direction?: 'normal' | 'reverse'
  marqueeBarStyle?: string,
  marqueeTextStyle?: string,
}

export interface TypewriterPropsType {
  text: string
  delay?: number,
  style?: string,
  children?: ReactNode
}