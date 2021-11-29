import React from "react";
import styled from "styled-components";
import { PoppinsNormalGulfBlue13px } from "../../styledMixins";


function Property1NehativeInsight4() {
  return (
    <Insights>
      <Attention>Error</Attention>
    </Insights>
  );
}

const Insights = styled.div`
  height: 26px;
  margin-top: -1px;
  margin-left: -1px;
  display: flex;
  padding: 2px 25px;
  align-items: flex-start;
  min-width: 82px;
  background-color: var(--sasquatch-socks);
  border-radius: 3px;
`;

const Attention = styled.div`
  ${PoppinsNormalGulfBlue13px}
  min-height: 20px;
  min-width: 30px;
  text-align: center;
  letter-spacing: 0;
`;

const Insights1 = styled.div`
  height: 26px;
  margin-top: -1px;
  margin-left: -1px;
  display: flex;
  padding: 2px 25px;
  align-items: flex-start;
  min-width: 82px;
  background-color: var(--sasquatch-socks);
  border-radius: 3px;
`;

const Attention1 = styled.div`
  ${PoppinsNormalGulfBlue13px}
  min-height: 20px;
  min-width: 30px;
  text-align: center;
  letter-spacing: 0;
`;

export default Property1NehativeInsight4;
