import React, {Fragment} from 'react';
import Formsy from 'formsy-react';
import styled from 'styled-components';
import FormGroup from './FormGroup';
import Button from '../ui/Button';
import ErrorMessage from './ErrorMessage';

const Header = styled.h1`
  margin: 30px 0 60px;
  font-weight: 100;
`;

const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.largePadding};

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

class SignInForm extends React.PureComponent<Props, State> {
  state = {
    canSubmit: false,
  };

  submitForm(model) {
    this.props.fetchLoginRequest(model);
  }

  formRef: {value: null | HTMLDivElement} = React.createRef();

  render() {
    const {error} = this.props;

    return (
      <FormInner>
        <Header>Sign in with email</Header>
        <Formsy
          onInvalid={() => this.setState({canSubmit: false})}
          onValid={() => this.setState({canSubmit: true})}
          onValidSubmit={e => this.submitForm(e)}
          ref={this.formRef}>
          <Fragment>
            <FormGroup label="Your email" name="email" required />
            <FormGroup
              label="Password"
              name="password"
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

export default SignInForm;
