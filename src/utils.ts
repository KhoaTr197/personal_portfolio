import { renderToStaticMarkup } from "react-dom/server";
import { Skill } from "@/types/data";
import * as THREE from "three";

export function formatNumber(num: number, formatStr: string): string {
  if (!formatStr) return num.toString();

  const numStr = num.toString();
  let result = '';
  let digitIndex = numStr.length - 1; // Start from rightmost digit

  for (let i = formatStr.length - 1; i >= 0; i--) {
    const char = formatStr[i];

    if (char === 'd') {
      // Insert digit or pad with 0 if no more digits
      if (digitIndex >= 0) {
        result = numStr[digitIndex] + result;
        digitIndex--;
      } else {
        result = '0' + result;
      }
    }
  }

  // If there are remaining digits, prepend them
  while (digitIndex >= 0) {
    result = numStr[digitIndex] + result;
    digitIndex--;
  }

  return result;
}

// Ease-in-out function
export function easeInOutQuad(t: number): number {
  // t < 0.5: t^2
  // t >= 0.5: -2(t-1)^2 + 1
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// Texture
const textureCache = new Map<string, THREE.Texture>();

export function getSkillTexture(skill: Skill): THREE.Texture {
  const key = skill.name + (skill.icon.forceFill || '');
  if (textureCache.has(key)) {
    return textureCache.get(key)!;
  }

  let svgMarkup = renderToStaticMarkup(skill.icon.component);
  if (skill.icon.forceFill) {
    svgMarkup = svgMarkup.replace(/fill=".*?"/, `fill="${skill.icon.forceFill}"`);
  }
  const blob = new Blob([svgMarkup], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);

  const img = new window.Image();
  const texture = new THREE.Texture();
  img.onload = () => {
    texture.image = img;
    texture.needsUpdate = true;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    URL.revokeObjectURL(url);
  };
  img.src = url;

  textureCache.set(key, texture);
  return texture;
}