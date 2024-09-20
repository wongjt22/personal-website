import { rem } from "polished";

// use rem for sizes over pixels, rem will convert the px units to rem units

export const RefSize = {
  /** Size of 0px */
  none: rem(0),
  /** Size of 16px */
  small: rem(16),
  /** Size of 24px */
  medium: rem(24),
  /** Size of 32px */
  large: rem(32),
  /** Size of 48px */
  xLarge: rem(48),
  /** Size of 64px */
  xxLarge: rem(64),
  /** Size of 88px */
  xxxLarge: rem(88),
};