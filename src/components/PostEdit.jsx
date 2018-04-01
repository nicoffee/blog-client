// @flow

import * as React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "./Button";

const StyledPost = styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

type Props = {
  id: number,
  title: string,
  img: string,
  body: string
};

class Post extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        title: props.title,
        body: props.body
      }
    };
  }

  submitForm(e) {
    e.preventDefault();

    console.log("this.state", this.state);
    console.log("this.props", this.props);

    this.props.editPost(this.props.id, this.state.data);
  }

  render() {
    return (
      <StyledPost>
        <form>
          <input type="text" value={this.state.data.title} />
          <br />
          <textarea value={this.state.data.body} />
          <Button primary type="submit" onClick={e => this.submitForm(e)}>
            Save
          </Button>
        </form>
      </StyledPost>
    );
  }
}

// = (props: Props) => {
//   console.log("props", props);
//   return (

//   );
// };

export default Post;
