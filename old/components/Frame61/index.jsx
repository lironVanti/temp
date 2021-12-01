import React from "react";
import styled from "styled-components";
import { PoppinsNormalCharade17px, ValignTextMiddle } from "../../styledMixins";


function Frame61(props) {
  const { spanText, className } = props;

  return (
    <Frame611 className={`frame-61-1 ${className || ""}`}>
      <State className="state-22">
        <span>
          <span className="span0-16 poppins-normal-charade-17px">{spanText}</span>
          <span className="span1-16 poppins-normal-charade-14px">(david r. )</span>
        </span>
      </State>
    </Frame611>
  );
}

const Frame611 = styled.div`
  height: 66px;
  margin-left: 96px;
  margin-top: -1913px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  min-width: 140px;

  &.frame-61-1.frame-68-1 {
    height: 92px;
    margin-left: 76px;
    margin-top: -1926px;
  }
`;

const State = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalCharade17px}
            height: 46px;
  min-width: 120px;
  letter-spacing: 0;
`;

const State1 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalCharade17px}
            
            
           .frame-61-1.frame-68-1  & {
    height: 72px;
  }
`;

export default Frame61;
