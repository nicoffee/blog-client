import React, {Component} from 'react';
import {withFormsy} from 'formsy-react';
import {StyledFormGroup, ErrorMessage, Input, TextArea} from './Styled';

class FormGroup extends Component {
  componentDidMount() {
    if (this.props.initialValue) {
      this.props.setValue(this.props.initialValue);
    }
  }

  changeValue = (e: SyntheticInputEvent<>) => {
    this.props.setValue(e.currentTarget.value);
  };

  render() {
    const {label, component, ...rest} = this.props;
    const errorMessage = this.props.getErrorMessage();

    console.log('errorMessage', errorMessage);
    // console.log('this.props', this.props);

    return (
      <StyledFormGroup>
        <label htmlFor={rest.name}>{label}</label>
        <div>
          {component === 'textarea' ? (
            <TextArea
              id={rest.name}
              onChange={this.changeValue}
              rows={this.props.rows}
              value={this.props.getValue() || ''}
            />
          ) : (
            <Input
              id={rest.name}
              onChange={this.changeValue}
              type={rest.type || 'text'}
              value={this.props.getValue() || ''}
            />
          )}
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </div>
      </StyledFormGroup>
    );
  }
}

export default withFormsy(FormGroup);
