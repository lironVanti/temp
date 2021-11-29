import React from "react";
import styled from "styled-components";
import { PoppinsNormalCharade17px } from "../../styledMixins";


function Frame280Variant4(props) {
  const { children, className } = props;

  return (
    <Frame280Variant41 className={`frame-280-variant4-2 ${className || ""}`}>
      <Rectangle204 className="rectangle-204-5"></Rectangle204>
      <Ready12 className="ready-12">{children}</Ready12>
    </Frame280Variant41>
  );
}

const Frame280Variant41 = styled.div`
  height: 26px;
  margin-top: 15px;
  margin-right: 50px;
  display: flex;
  align-items: center;
  min-width: 106px;

  &.frame-280-variant4-2.frame-280-variant4-3 {
    margin-top: 14px;
    margin-right: 4px;
    min-width: 152px;
  }

  &.frame-280-variant4-2.frame-280-variant4-4 {
    margin-right: 52px;
  }

  &.frame-280-variant4-2.frame-280-variant4-5 {
    margin-top: 14px;
    margin-right: 6px;
    min-width: 152px;
  }
`;

const Rectangle204 = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--biloba-flower);
`;

const Ready12 = styled.div`
  ${PoppinsNormalCharade17px}
  width: 75px;
  min-height: 26px;
  margin-left: 11px;
  letter-spacing: 0;
`;

const Rectangle2041 = styled.div`
  .frame-280-variant4-2.frame-280-variant4-3 & {
    background-color: var(--canary);
  }
`;

const Ready121 = styled.div`
  ${PoppinsNormalCharade17px}

  .frame-280-variant4-2.frame-280-variant4-3  & {
    min-width: 121px;
    width: unset;
  }
`;

const Rectangle2042 = styled.div`
  .frame-280-variant4-2.frame-280-variant4-5 & {
    background-color: var(--canary);
  }
`;

const Ready122 = styled.div`
  ${PoppinsNormalCharade17px}

  .frame-280-variant4-2.frame-280-variant4-5  & {
    min-width: 121px;
    width: unset;
  }
`;

export default Frame280Variant4;
