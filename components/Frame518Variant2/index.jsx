import React from "react";
import styled from "styled-components";
import { PoppinsNormalShuttleGray17px, ValignTextMiddle } from "../../styledMixins";


function Frame518Variant2(props) {
  const { children, className } = props;

  return (
    <Frame518Variant21 className={`frame-518-variant2-1 ${className || ""}`}>
      <State className="state-6">{children}</State>
    </Frame518Variant21>
  );
}

const Frame518Variant21 = styled.div`
  height: 46px;
  margin-top: 35px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  min-width: 47px;

  &.frame-518-variant2-1.frame-518-variant5-1 {
    margin-top: 33px;
  }

  &.frame-518-variant2-1.frame-518-variant2-2 {
    margin-top: 33px;
  }

  &.frame-518-variant2-1.frame-518-variant5-2 {
    margin-top: 33px;
  }
`;

const State = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalShuttleGray17px}
            height: 26px;
  min-width: 27px;
  letter-spacing: 0;
`;

export default Frame518Variant2;
