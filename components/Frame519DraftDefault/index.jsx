import React from "react";
import Property1NehativeInsight6 from "../Property1NehativeInsight6";
import styled from "styled-components";


function Frame519DraftDefault(props) {
  const { className } = props;

  return (
    <Frame519DraftDefault1 className={`frame-519-draft-default ${className || ""}`}>
      <Property1NehativeInsight6 />
    </Frame519DraftDefault1>
  );
}

const Frame519DraftDefault1 = styled.div`
  position: absolute;
  height: 30px;
  top: 760px;
  left: 832px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 100px;

  &.frame-519-draft-default.frame-519-draft-default-1 {
    top: 839px;
  }

  &.frame-519-draft-default.frame-519-draft-default-2 {
    top: 928px;
  }

  &.frame-519-draft-default.frame-519-draft-default-4 {
    top: 839px;
  }

  &.frame-519-draft-default.frame-519-draft-default-5 {
    top: 928px;
  }
`;

export default Frame519DraftDefault;
