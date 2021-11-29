import React from "react";
import styled from "styled-components";
import { PoppinsNormalShuttleGray17px, ValignTextMiddle } from "../../styledMixins";


function Frame519Default(props) {
  const { className } = props;

  return (
    <Frame519Default1 className={`frame-519-default ${className || ""}`}>
      <State className="state-6">
        <span>
          <span className="span0-13 poppins-normal-shuttle-gray-17px">
            21 minutes ago
            <br />
          </span>
          <span className="span1-13 poppins-normal-shuttle-gray-14px">12:45 | 17 jun 21</span>
        </span>
      </State>
    </Frame519Default1>
  );
}

const Frame519Default1 = styled.div`
  height: 66px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  min-width: 148px;

  &.frame-519-default.frame-519-variant2 {
    margin-top: 13px;
  }

  &.frame-519-default.frame-519-variant3 {
    margin-top: 13px;
  }

  &.frame-519-default.frame-519-variant4 {
    margin-top: 13px;
  }

  &.frame-519-default.frame-519-variant5 {
    margin-top: 13px;
  }

  &.frame-519-default.frame-519-variant6 {
    margin-top: 13px;
  }

  &.frame-519-default.frame-519-variant7 {
    margin-top: 13px;
  }

  &.frame-519-default.frame-519-variant7-1 {
    margin-top: 24px;
  }

  &.frame-519-default.frame-519-variant7-2 {
    margin-top: 18px;
  }

  &.frame-519-default.frame-519-variant7-3 {
    position: absolute;
    top: 789px;
    left: 1026px;
  }

  &.frame-519-default.frame-519-variant2-1 {
    margin-top: 13px;
  }

  &.frame-519-default.frame-519-variant3-1 {
    margin-top: 13px;
  }

  &.frame-519-default.frame-519-variant4-1 {
    margin-top: 13px;
  }

  &.frame-519-default.frame-519-variant5-1 {
    margin-top: 13px;
  }

  &.frame-519-default.frame-519-variant6-1 {
    margin-top: 13px;
  }

  &.frame-519-default.frame-519-variant7-4 {
    margin-top: 13px;
  }

  &.frame-519-default.frame-519-variant7-5 {
    margin-top: 24px;
  }

  &.frame-519-default.frame-519-variant7-6 {
    margin-top: 18px;
  }

  &.frame-519-default.frame-519-variant7-7 {
    position: absolute;
    top: 789px;
    left: 1026px;
  }
`;

const State = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalShuttleGray17px}
            height: 46px;
  min-width: 128px;
  letter-spacing: 0;
`;

export default Frame519Default;
