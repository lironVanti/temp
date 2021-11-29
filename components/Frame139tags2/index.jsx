import React from "react";
import styled from "styled-components";
import { PoppinsNormalCharade17px } from "../../styledMixins";


function Frame139tags2(props) {
  const { children, className } = props;

  return (
    <Frame280Variant5 className={`frame-280-variant5 ${className || ""}`}>
      <Rectangle204 className="rectangle-204-2"></Rectangle204>
      <Draft68 className="draft-68">{children}</Draft68>
    </Frame280Variant5>
  );
}

const Frame280Variant5 = styled.div`
  height: 26px;
  margin-top: 14px;
  margin-right: 35px;
  display: flex;
  align-items: center;
  min-width: 121px;

  &.frame-280-variant5.frame-139tags-1 {
    margin-right: 37px;
    min-width: 119px;
  }

  &.frame-280-variant5.frame-139tags-2 {
    margin-right: 39px;
    min-width: 119px;
  }

  &.frame-280-variant5.frame-280-variant5-2 {
    margin-right: 37px;
  }
`;

const Rectangle204 = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--periwinkle);
`;

const Draft68 = styled.div`
  ${PoppinsNormalCharade17px}
  width: 90px;
  min-height: 26px;
  margin-left: 11px;
  letter-spacing: 0;
`;

const Rectangle2041 = styled.div`
  .frame-280-variant5.frame-139tags-1 & {
    background-color: var(--cadet-blue);
  }
`;

const Inactive15 = styled.div`
  ${PoppinsNormalCharade17px}

  .frame-280-variant5.frame-139tags-1  & {
    min-width: 88px;
    width: unset;
  }
`;

const Rectangle2042 = styled.div`
  .frame-280-variant5.frame-139tags-2 & {
    background-color: var(--cadet-blue);
  }
`;

const Inactive151 = styled.div`
  ${PoppinsNormalCharade17px}

  .frame-280-variant5.frame-139tags-2  & {
    min-width: 88px;
    width: unset;
  }
`;

export default Frame139tags2;
