import React from "react";
import styled from "styled-components";
import { PoppinsNormalOxfordBlue17px } from "../../styledMixins";


function Frame139tags(props) {
  const { children } = props;

  return (
    <Frame139tags1>
      <Rectangle204></Rectangle204>
      <Inactive15>{children}</Inactive15>
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
`;

const Rectangle204 = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--cadet-blue);
`;

const Inactive15 = styled.div`
  ${PoppinsNormalOxfordBlue17px}
  min-height: 26px;
  margin-left: 11px;
  min-width: 88px;
  letter-spacing: 0;
`;

export default Frame139tags;
