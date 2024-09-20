import invariant from 'invariant';
import { rem } from 'polished';

// Fallback and default font stack
const FALLBACK_FONT = '-apple-system, BlinkMacSystemFont, sans-serif';
export const DEFAULT_FONT_STACK = `'HongKong', ${FALLBACK_FONT}`; // Updated font stack

/**
 * To apply these styles, select your variant (title, text, subtitle)
 * and tier (level one, level two, etc.). Then use the appropriate constant,
 * e.g., Title.Level2 or Text.Level1
 */
interface TypographyStyles {
  fontWeight: number;
  letterSpacing: number;
  dimensions: Dimension[];
}

type Dimension = [fontSize: number, lineHeight: number];

export const FontWeights = {
  Title: 700,
  Text: 400,
  Subtitle: 600,
};

// Dimensions are specified as [fontSize, lineHeight]
const TYPOGRAPHY_STYLES: Record<string, TypographyStyles> = {
  title: {
    fontWeight: FontWeights.Title,
    letterSpacing: 0,
    dimensions: [
      [44, 56], // title_level1
      [32, 40], // title_level2
      [24, 32], // title_level3
      [20, 28], // title_level4
      [16, 24], // title_level5
    ],
  },
  subtitle: {
    fontWeight: FontWeights.Subtitle,
    letterSpacing: 0,
    dimensions: [
      [24, 36], // subtitle_level1
      [20, 28], // subtitle_level2
      [16, 24], // subtitle_level3
      [14, 20], // subtitle_level4
      [12, 16], // subtitle_level5
    ],
  },
  text: {
    fontWeight: FontWeights.Text,
    letterSpacing: 0,
    dimensions: [
      [24, 32], // text_level1
      [20, 28], // text_level2
      [16, 24], // text_level3
      [14, 20], // text_level4
      [12, 16], // text_level5
    ],
  },
};

// Utility to generate CSS for text sizing
function generateTextSizing(fontSize: number, lineHeight: number, letterSpacing = 0) {
  return `
    font-size: ${rem(fontSize)};
    letter-spacing: ${letterSpacing ? rem(letterSpacing) : 'normal'};
    line-height: ${lineHeight / fontSize};
  `;
}

// Helper function to create typography styles
function createTypographyStyles(styleType: keyof typeof TYPOGRAPHY_STYLES, tier: number) {
  const { dimensions, letterSpacing, fontWeight } = TYPOGRAPHY_STYLES[styleType];
  invariant(
    tier > 0 && tier <= dimensions.length,
    `Invalid ${styleType} tier specified`
  );
  const [fontSize, lineHeight] = dimensions[tier - 1];
  return `
    font-weight: ${fontWeight};
    ${generateTextSizing(fontSize, lineHeight, letterSpacing)}
  `;
}

export const Title = {
  Level1: createTypographyStyles('title', 1),
  Level2: createTypographyStyles('title', 2),
  Level3: createTypographyStyles('title', 3),
  Level4: createTypographyStyles('title', 4),
  Level5: createTypographyStyles('title', 5),
};

export const Subtitle = {
  Level1: createTypographyStyles('subtitle', 1),
  Level2: createTypographyStyles('subtitle', 2),
  Level3: createTypographyStyles('subtitle', 3),
  Level4: createTypographyStyles('subtitle', 4),
  Level5: createTypographyStyles('subtitle', 5),
};

export const Text = {
  Level1: createTypographyStyles('text', 1),
  Level2: createTypographyStyles('text', 2),
  Level3: createTypographyStyles('text', 3),
  Level4: createTypographyStyles('text', 4),
  Level5: createTypographyStyles('text', 5),
};
