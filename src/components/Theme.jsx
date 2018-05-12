// @flow

import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import * as variables from '../types/style-variables';

const DefaultTheme = {
  buttonsBgColor: variables.COLOR_WHITE,
  buttonsHoverBgColor: variables.COLOR_BLUE_400,
  primaryColor: variables.COLOR_GRAY_900,
  secondaryColor: variables.COLOR_BLUE_400,
  fontColor: variables.COLOR_BLACK,
  invertedFontColor: variables.COLOR_WHITE,
  iconColor: variables.COLOR_BLACK,
  primaryBackgroundColor: variables.COLOR_WHITE,
  secondaryBackgroundColor: variables.COLOR_WHITE,
  errorColor: variables.COLOR_RED_600,
};

const DarkTheme = {
  buttonsBgColor: variables.COLOR_YELLOW_600,
  buttonsHoverBgColor: variables.COLOR_YELLOW_600,
  primaryColor: variables.COLOR_BLUE_400,
  secondaryColor: variables.COLOR_YELLOW_600,
  fontColor: variables.COLOR_WHITE,
  invertedFontColor: variables.COLOR_BLACK,
  iconColor: variables.COLOR_YELLOW_600,
  primaryBackgroundColor: variables.COLOR_GRAY_900,
  secondaryBackgroundColor: variables.COLOR_GRAY_800,
  headerBackgroundColor: variables.COLOR_BLACK,
  errorColor: variables.COLOR_RED_600,
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
