import {configure, addDecorator} from '@storybook/react';
import {LightTheme, DarkTheme} from '../src/ui/Theme';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
import backgrounds from '@storybook/addon-backgrounds';

addDecorator(withThemesProvider([LightTheme, DarkTheme]));

addDecorator(
  backgrounds([
    {name: 'light', value: '#fff', default: true},
    {name: 'dark', value: '#212121'},
  ])
);

const loadStories = () => {
  require('../stories/index.stories.js');
};

configure(loadStories, module);
