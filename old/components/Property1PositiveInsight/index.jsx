import React from "react";
import styled from "styled-components";
import { PoppinsNormalWhite13px } from "../../styledMixins";


function Property1PositiveInsight() {
  return (
    <Insights>
      <ImprovementPossibil>Insight</ImprovementPossibil>
    </Insights>
  );
}

const Insights = styled.div`
  position: absolute;
  height: 26px;
  top: 0;
  left: 0;
  display: flex;
  padding: 2px 8px;
  align-items: flex-start;
  min-width: 62px;
  background-color: var(--canary);
  border-radius: 3px;
`;

const ImprovementPossibil = styled.div`
  ${PoppinsNormalWhite13px}
  min-height: 20px;
  min-width: 44px;
  text-align: center;
  letter-spacing: 0;
`;

const Insights1 = styled.div`
  position: absolute;
  height: 26px;
  top: 0;
  left: 0;
  display: flex;
  padding: 2px 8px;
  align-items: flex-start;
  min-width: 62px;
  background-color: var(--canary);
  border-radius: 3px;
`;

const ImprovementPossibil1 = styled.div`
  ${PoppinsNormalWhite13px}
  min-height: 20px;
  min-width: 44px;
  text-align: center;
  letter-spacing: 0;
`;

export default Property1PositiveInsight;
