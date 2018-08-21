// @flow

import * as React from 'react';
import {withFormsy} from 'formsy-react';
import styled from 'styled-components';
import TextArea from '../ui/TextArea';
import Input from './Input';
import ErrorMessage from './ErrorMessage';

const StyledFormGroup = styled.div`
  width: 100%;
  margin-bottom: 30px;

  label {
    display: inline-block;
    margin-bottom: 10px;
    color: ${props => props.theme.fontColor};
    font-size: ${props => props.theme.smallFontSize};
  }

  input,
  textarea {
    margin-bottom: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

declare type SyntheticInputEvent<E> = {
  currentTarget: {
    value: string,
  },
};

type Props = {
  initialValue: any,
  setValue: Function,
  getValue: Function,
  getErrorMessage: Function,
  component: string,
  name: string,
  type: string,
  label: string,
  rows: number,
};

class FormGroup extends React.PureComponent<Props> {
  componentDidMount() {
    if (this.props.initialValue) {
      this.props.setValue(this.props.initialValue);
    }
  }

  changeValue = (e: SyntheticInputEvent<EventTarget>) => {
    this.props.setValue(e.currentTarget.value);
  };

  render() {
    const {
      label,
      component,
      name,
      type,
      getErrorMessage,
      rows,
      getValue,
    } = this.props;
    const errorMessage = getErrorMessage();

    return (
      <StyledFormGroup>
        <label htmlFor={name}>{label}</label>
        <div>
          {component === 'textarea' ? (
            <TextArea
              id={name}
              isInvalid={!!errorMessage}
              onChange={this.changeValue}
              rows={rows}
              value={getValue() || ''}
            />
          ) : (
            <Input
              id={name}
              isInvalid={!!errorMessage}
              onChange={this.changeValue}
              type={type || 'text'}
              value={getValue() || ''}
            />
          )}
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </div>
      </StyledFormGroup>
    );
  }
}

export default withFormsy(FormGroup);
