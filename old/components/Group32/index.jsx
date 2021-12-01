import React from "react";
import styled from "styled-components";


function Group32(props) {
  const { className } = props;

  return <Group321 className={`group-32 ${className || ""}`}></Group321>;
}

const Group321 = styled.div`
  position: absolute;
  width: 221px;
  height: 36px;
  top: 10px;
  left: 348px;
  background-image: url(/img/buttons-main@2x.svg);
  background-size: 100% 100%;

  &.group-32.group-32-1 {
    background-image: url(/img/buttons-main-3@2x.svg);
  }
`;

export default Group32;
