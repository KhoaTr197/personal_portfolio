import { CSSProperties, ReactNode, Ref } from "react";
import { DeviceType } from "./deviceType";

export interface PageProps {
  children?: React.ReactNode;
  deviceType?: DeviceType;
  shouldPlayAnimation?: boolean;
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

export interface BadgeRef extends OdometerRef {

}

// CornerInfo.tsx
export interface CornerInfoProps {
  className?: string,
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
export interface MarqueeProps {
  duration?: number,
  gap?: number | string,
  direction?: 'left-to-right' | 'right-to-left',
  marqueeBarStyle?: string,
  children?: ReactNode
}

// Typewriter.tsx
export interface TypewriterPropsType {
  text: string
  delay?: number,
  style?: string,
  children?: ReactNode
}

// LevelBar.tsx
export type LevelBarLayout = 'horizontal' | 'vertical';

export interface LevelBarConfig {
  size?: number,
  layout?: LevelBarLayout,
  mainBarStyle?: string
  color?: {
    [key: string]: string
  }
}

export interface LevelBarProps {
  level: number,
  maxLevel: number,
  legend?: string[],
  config?: LevelBarConfig
}

// Odometer.tsx
export type OdometerTransition = {
  type: CSSProperties['transitionTimingFunction'],
  duration: number,
}

export type OdometerConfig = OdometerTransition & {
  digitHeight: number,
  autoStart: boolean,
}
export interface OdometerProps {
  value: number,
  target: number,
  format?: string,
  className?: string,
  autoStart?: boolean,
  duration?: number,
  transition?: OdometerTransition
}

export interface MinimalOdometerRef {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

export interface OdometerRef extends MinimalOdometerRef {
  nextTick?: () => void;
  toggle?: () => void;
  getValue?: () => number;
}

export interface OdometerDiscProps {
  value: number,
  config: OdometerConfig,
}

export interface OdometerDiscRef {
  getValue: () => number;
  setValue: (newValue: number) => void;
  nextTick: () => void;
}