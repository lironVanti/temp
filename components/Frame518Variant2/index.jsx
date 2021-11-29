import React from "react";
import styled from "styled-components";
import { PoppinsNormalShuttleGray17px, ValignTextMiddle } from "../../styledMixins";


function Frame518Variant2(props) {
  const { children } = props;

  return (
    <Frame518Variant21>
      <State>{children}</State>
    </Frame518Variant21>
  );
}

const Frame518Variant21 = styled.div`
  height: 46px;
  margin-top: 33px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  min-width: 47px;
`;

const State = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalShuttleGray17px}
            height: 26px;
  min-width: 27px;
  letter-spacing: 0;
`;

export default Frame518Variant2;
