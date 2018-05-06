// @flow

import * as React from 'react';
import {ThemeProvider} from 'styled-components';

const DefaultTheme = {
  primaryColor: '#212121',
  secondaryColor: '#28abe3',
};

const DarkTheme = {
  primaryColor: '#ffffff',
  backgroundColor: '#212121',
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
