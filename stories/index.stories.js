import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '../src/ui/Button';
import Switcher from '../src/ui/Switcher';
import Loader from '../src/ui/Loader';
import TextArea from '../src/ui/TextArea';

storiesOf('Button', module)
  .add('Default', () => <Button>Hello Button</Button>)
  .add('Danger', () => <Button danger>Delete</Button>)
  .add('Disabled', () => <Button disabled>Disabled Button</Button>);

storiesOf('UI Components', module)
  .add('Loader', () => <Loader />)
  .add('Switcher', () => <Switcher />);

storiesOf('Form Elements', module).add('TextArea', () => <TextArea />);
