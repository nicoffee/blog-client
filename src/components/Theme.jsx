// @flow

import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import * as variables from '../styleVariables';

const commonStyles = {
  xSmallFontSize: variables.XSMALL_FONT_SIZE,
  smallFontSize: variables.SMALL_FONT_SIZE,
  basicFontSize: variables.BASIC_FONT_SIZE,
  largeFontSize: variables.LARGE_FONT_SIZE,

  basicBorderRadius: variables.BASIC_BORDER_RADIUS,
  smallBorderRadius: variables.SMALL_BORDER_RADIUS,

  basicFontWeight: variables.BASIC_FONT_WIGHT,

  basicLineHeight: variables.BASIC_LINE_HEIGHT,

  basicAnimationPreset: variables.BASIC_ANIMATION_PRESET,

  h1FontSize: variables.H1_FONT_SIZE,
  h2FontSize: variables.H2_FONT_SIZE,

  basicContentWidth: variables.BASIC_CONTENT_WIDTH,

  redColorHover: variables.COLOR_RED_400,

  buttonsFontColor: variables.COLOR_GRAY_900,
  errorColor: variables.COLOR_RED_600,

  basicPadding: variables.BASIC_PADDING,
  basicButtonPadding: variables.BASIC_BUTTON_PADDING,
};

const DefaultTheme = {
  ...commonStyles,
  buttonsBgColor: variables.COLOR_WHITE,
  buttonsHoverBgColor: variables.COLOR_BLUE_400,
  primaryColor: variables.COLOR_GRAY_900,
  secondaryColor: variables.COLOR_BLUE_400,
  fontColor: variables.COLOR_GRAY_900,
  invertedFontColor: variables.COLOR_WHITE,
  iconColor: variables.COLOR_GRAY_600,
  iconHoverColor: variables.COLOR_GRAY_800,
  primaryBackgroundColor: variables.COLOR_WHITE,
  secondaryBackgroundColor: variables.COLOR_WHITE,
  headerBackgroundColor: variables.COLOR_WHITE,
  disabledColor: variables.COLOR_GRAY_300,
};

const DarkTheme = {
  ...commonStyles,
  buttonsBgColor: variables.COLOR_YELLOW_600,
  buttonsHoverBgColor: variables.COLOR_YELLOW_600,
  primaryColor: variables.COLOR_BLUE_400,
  secondaryColor: variables.COLOR_YELLOW_600,
  fontColor: variables.COLOR_WHITE,
  invertedFontColor: variables.COLOR_GRAY_900,
  iconColor: variables.COLOR_YELLOW_600,
  iconHoverColor: variables.COLOR_YELLOW_600,
  primaryBackgroundColor: variables.COLOR_GRAY_900,
  secondaryBackgroundColor: variables.COLOR_GRAY_800,
  headerBackgroundColor: variables.COLOR_BLACK,
  disabledColor: variables.COLOR_GRAY_800,
};

type Props = {
  theme: string,
  children?: React.Node,
};

const Theme = (props: Props) => (
  <ThemeProvider theme={props.theme === 'dark' ? DarkTheme : DefaultTheme}>
    {props.children}
  </ThemeProvider>
);

export default Theme;
