import React from "react";
import styled from "styled-components";
import { PoppinsNormalOxfordBlue17px } from "../../styledMixins";


function Frame139Default(props) {
  const { children } = props;

  return (
    <Frame139Default1>
      <Rectangle204></Rectangle204>
      <Live26>{children}</Live26>
    </Frame139Default1>
  );
}

const Frame139Default1 = styled.div`
  height: 26px;
  margin-top: 20px;
  margin-right: 63px;
  display: flex;
  align-items: center;
  min-width: 93px;
`;

const Rectangle204 = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--caribbean-green-pearl);
`;

const Live26 = styled.div`
  ${PoppinsNormalOxfordBlue17px}
  min-height: 26px;
  margin-left: 11px;
  min-width: 62px;
  letter-spacing: 0;
`;

export default Frame139Default;
