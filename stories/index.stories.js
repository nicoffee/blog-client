import React from 'react';
import {storiesOf} from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {ThemeProvider} from 'styled-components';
import {DefaultTheme, DarkTheme} from '../src/components/Theme';

import {Button, Welcome} from '@storybook/react/demo';
import Loader from '../src/components/Loader';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Loader', module).add('lalala', () => (
  <ThemeProvider theme={DefaultTheme}>
    <Loader />
  </ThemeProvider>
));
