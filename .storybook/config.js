import {configure, addDecorator} from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';

addDecorator(
  backgrounds([
    {name: 'twitter', value: '#00aced', default: true},
    {name: 'facebook', value: '#3b5998'},
  ])
);

function loadStories() {
  require('../stories/index.stories.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
