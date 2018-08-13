import React, {Fragment} from 'react';
import Formsy from 'formsy-react';
import styled from 'styled-components';
import FormGroup from './FormGroup';
import Button from './Button';
import ErrorMessage from './ErrorMessage';

const Header = styled.h1`
  margin: 30px 0 60px;
  font-weight: 100;
`;

const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px;

  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const ErrorWrapper = styled.div`
  margin-bottom: 30px;
`;

class SignUpForm extends React.Component<Props, State> {
  state = {
    canSubmit: false,
  };

  componentDidUpdate() {
    if (this.props.errors) {
      const errorsObject = {};
      Object.keys(this.props.errors).map(
        key => (errorsObject[key] = this.props.errors[key].msg)
      );
      this.formRef.current.updateInputsWithError(errorsObject);
    }
  }

  submitForm(model) {
    this.props.createUserRequest(model);
  }

  formRef: {value: null | HTMLDivElement} = React.createRef();

  render() {
    const {error} = this.props;

    return (
      <FormInner>
        <Header>Sign up with email</Header>
        <Formsy
          onInvalid={() => this.setState({canSubmit: false})}
          onValid={() => this.setState({canSubmit: true})}
          onValidSubmit={e => this.submitForm(e)}
          ref={this.formRef}>
          <Fragment>
            <FormGroup
              label="Your email"
              name="email"
              required
              validationError="This is not a valid email"
              validations="isEmail"
            />
            <FormGroup
              label="Password"
              name="password"
              required
              type="password"
              validationError="Must be at least 8 chars long"
              validations="minLength:8"
            />
            <FormGroup
              label="Password Confirmation"
              name="password_confirm"
              required
              type="password"
            />
          </Fragment>
          {error && (
            <ErrorWrapper>
              <ErrorMessage>{error}</ErrorMessage>
            </ErrorWrapper>
          )}
          <Button disabled={!this.state.canSubmit} primary type="submit">
            Continue
          </Button>
        </Formsy>
      </FormInner>
    );
  }
}

export default SignUpForm;
