// @flow

import * as React from 'react';
import {ThemeProvider} from 'styled-components';

const LARGE_FONT_SIZE = '18px';
const BASIC_FONT_SIZE = '16px';
const SMALL_FONT_SIZE = '14px';
const XSMALL_FONT_SIZE = '12px';

const BASIC_LINE_HEIGHT = '25px';
const BASIC_FONT_WIGHT = '200';
const BASIC_CONTENT_WIDTH = '700px';
const BASIC_ANIMATION_PRESET = '200ms ease-out';

const BASIC_BORDER_RADIUS = '12px';
const SMALL_BORDER_RADIUS = '6px';

const COLOR_WHITE = '#fff';
const COLOR_BLACK = '#000';

const COLOR_RED_800 = '#c62828';
export const COLOR_RED_600 = '#e53935';
const COLOR_RED_400 = '#ef5350';

const COLOR_BLUE_600 = '#039be5';
const COLOR_BLUE_400 = '#29b6f6';

const COLOR_YELLOW_800 = '#f9a825';
const COLOR_YELLOW_600 = '#fdd835';

const COLOR_GRAY_900 = '#212121';
const COLOR_GRAY_800 = '#424242';
const COLOR_GRAY_600 = '#757575';
const COLOR_GRAY_300 = '#e0e0e0';

// const COLOR_GREEN_800 = '#00695C';
const COLOR_GREEN_600 = '#00897B';
// const COLOR_GREEN_300 = '#4DB6AC';

const commonStyles = {
  xSmallFontSize: XSMALL_FONT_SIZE,
  smallFontSize: SMALL_FONT_SIZE,
  basicFontSize: BASIC_FONT_SIZE,
  largeFontSize: LARGE_FONT_SIZE,

  basicBorderRadius: BASIC_BORDER_RADIUS,
  smallBorderRadius: SMALL_BORDER_RADIUS,

  basicFontWeight: BASIC_FONT_WIGHT,

  basicLineHeight: BASIC_LINE_HEIGHT,

  basicAnimationPreset: BASIC_ANIMATION_PRESET,

  h1FontSize: '36px',
  h2FontSize: '28px',

  basicContentWidth: BASIC_CONTENT_WIDTH,

  redColorHover: COLOR_RED_400,

  buttonsFontColor: COLOR_GRAY_900,
  errorColor: COLOR_RED_600,

  largePadding: '28px 36px',
  basicPadding: '14px 18px',
  smallPadding: '8px 12px',
  basicButtonPadding: '8px 16px',

  boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.4)',
  secondaryBoxShadow: 'rgba(0, 0, 0, 0.22)',

  colors: {
    red: COLOR_RED_600,
    green: COLOR_GREEN_600,
  },
};

export const LightTheme = {
  ...commonStyles,
  name: 'light',

  buttonsBgColor: COLOR_WHITE,
  buttonsHoverBgColor: COLOR_BLUE_400,
  buttonsActiveBgColor: COLOR_BLUE_600,
  buttonDangerBgColor: COLOR_RED_600,
  buttonDangerHoverBgColor: COLOR_RED_800,
  buttonDangerColor: COLOR_WHITE,
  buttonRoundedBorderColor: COLOR_GRAY_600,

  primaryColor: COLOR_GRAY_900,
  secondaryColor: COLOR_BLUE_400,
  fontColor: COLOR_GRAY_900,
  invertedFontColor: COLOR_WHITE,
  iconColor: COLOR_GRAY_600,
  iconHoverColor: COLOR_GRAY_800,
  primaryBackgroundColor: COLOR_WHITE,
  secondaryBackgroundColor: COLOR_WHITE,
  headerBackgroundColor: COLOR_WHITE,
  disabledColor: COLOR_GRAY_300,
};

export const DarkTheme = {
  ...commonStyles,
  name: 'dark',

  buttonsBgColor: COLOR_YELLOW_600,
  buttonsHoverBgColor: COLOR_YELLOW_600,
  buttonsActiveBgColor: COLOR_YELLOW_800,
  buttonDangerBgColor: COLOR_RED_600,
  buttonDangerHoverBgColor: COLOR_RED_800,
  buttonDangerColor: COLOR_WHITE,
  buttonRoundedBorderColor: COLOR_GRAY_600,

  primaryColor: COLOR_BLUE_400,
  secondaryColor: COLOR_YELLOW_600,
  fontColor: COLOR_WHITE,
  invertedFontColor: COLOR_GRAY_900,
  iconColor: COLOR_YELLOW_600,
  iconHoverColor: COLOR_YELLOW_600,
  primaryBackgroundColor: COLOR_GRAY_900,
  secondaryBackgroundColor: COLOR_GRAY_800,
  headerBackgroundColor: COLOR_BLACK,
  disabledColor: COLOR_GRAY_800,
};

type Props = {
  theme: string,
  children?: React.Node,
};

const Theme = (props: Props) => (
  <ThemeProvider theme={props.theme === 'dark' ? DarkTheme : LightTheme}>
    {props.children}
  </ThemeProvider>
);

export default Theme;
