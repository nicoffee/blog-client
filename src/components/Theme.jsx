// @flow

import * as React from 'react';
import {ThemeProvider} from 'styled-components';

const DefaultTheme = {
  primaryColor: '#212121',
  secondaryColor: '#28abe3',
  fontColor: '#000',
  iconColor: '#000',
  primaryBackgroundColor: '#fff',
  secondaryBackgroundColor: '#fff',
};

const DarkTheme = {
  primaryColor: '#fff',
  secondaryColor: '#fdd835',
  fontColor: '#fff',
  iconColor: '#fdd835',
  primaryBackgroundColor: '#212121',
  secondaryBackgroundColor: '#424242',
  headerBackgroundColor: '#000',
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
