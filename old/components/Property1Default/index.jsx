import React from "react";
import styled from "styled-components";


function Property1Default(props) {
  const { className } = props;

  return (
    <Frame500 className={`frame-500 ${className || ""}`}>
      <Fill10 className="fill-10-1" src="/img/fill-10-2@2x.svg" />
    </Frame500>
  );
}

const Frame500 = styled.div`
  margin-left: 1px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 10px;

  &.frame-500.frame-500-1 {
    margin-left: 9px;
    margin-top: 14px;
  }

  &.frame-500.frame-500-2 {
    margin-left: 4px;
  }

  &.frame-500.frame-500-3 {
    margin-left: 3px;
  }
`;

const Fill10 = styled.img`
  width: 11px;
  height: 10px;
`;

export default Property1Default;
