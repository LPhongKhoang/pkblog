import React from "react";
import Tag from "./common/tag";
import IconText from "./common/icon-text";
import Button from "./common/button";
import ButtonOAuth2Login from "./button-oauth2-login";

const TestComponent = () => {
  return (
    <div>
      <div>
        <p>Tags: </p>
        <Tag tag="react" />
      </div>
      <div>
        <p>Icon text: </p>
        <IconText icon="calendar" text="28 Sep, 2019" />
        <IconText icon="clock-o" text="10 min read" />
      </div>
      <div>
        <p>Button: </p>
        <Button>Demo button</Button>

        <ButtonOAuth2Login />
      </div>
    </div>
  );
};

export default TestComponent;
