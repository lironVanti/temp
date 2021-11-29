import React from "react";
import styled from "styled-components";
import { PoppinsNormalCharade17px } from "../../styledMixins";


function Frame139tags(props) {
  const { children, className } = props;

  return (
    <Frame139tags1 className={`frame-139tags ${className || ""}`}>
      <Rectangle204 className="rectangle-204-1"></Rectangle204>
      <Inactive15 className="inactive-15">{children}</Inactive15>
    </Frame139tags1>
  );
}

const Frame139tags1 = styled.div`
  height: 26px;
  margin-top: 14px;
  margin-right: 37px;
  display: flex;
  align-items: center;
  min-width: 119px;

  &.frame-139tags.frame-280-variant5 {
    margin-right: 35px;
    min-width: 121px;
  }

  &.frame-139tags.frame-139tags-1 {
    margin-right: 39px;
  }

  &.frame-139tags.frame-280-variant5-1 {
    min-width: 121px;
  }
`;

const Rectangle204 = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--cadet-blue);
`;

const Inactive15 = styled.div`
  ${PoppinsNormalCharade17px}
  min-height: 26px;
  margin-left: 11px;
  min-width: 88px;
  letter-spacing: 0;
`;

const Rectangle2041 = styled.div`
  .frame-139tags.frame-280-variant5 & {
    background-color: var(--periwinkle);
  }
`;

const Draft68 = styled.div`
  ${PoppinsNormalCharade17px}

  .frame-139tags.frame-280-variant5  & {
    width: 90px;
    min-width: unset;
  }
`;

const Rectangle2042 = styled.div`
  .frame-139tags.frame-280-variant5-1 & {
    background-color: var(--periwinkle);
  }
`;

const Draft681 = styled.div`
  ${PoppinsNormalCharade17px}

  .frame-139tags.frame-280-variant5-1  & {
    width: 90px;
    min-width: unset;
  }
`;

export default Frame139tags;
