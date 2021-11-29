import React from "react";
import styled from "styled-components";
import { PoppinsBoldOxfordBlue30px, PoppinsNormalCharade17px } from "../../styledMixins";


function SilhouetteScore(props) {
  const { failuresDetected, number, className } = props;

  return (
    <SilhouetteScore1 className={`silhouette-score ${className || ""}`}>
      <FailuresDetected className="failures-detected">{failuresDetected}</FailuresDetected>
      <Number className="number-10">{number}</Number>
    </SilhouetteScore1>
  );
}

const SilhouetteScore1 = styled.div`
  width: 162px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 72px;

  &.silhouette-score.no-of-clusters {
    margin-left: 64px;
  }

  &.silhouette-score.no-of-samples {
    margin-left: 64px;
  }

  &.silhouette-score.no-of-clusters-1 {
    margin-left: 64px;
  }

  &.silhouette-score.no-of-samples-1 {
    margin-left: 64px;
  }

  &.silhouette-score.no-of-clusters-2 {
    margin-left: 64px;
  }

  &.silhouette-score.no-of-samples-2 {
    margin-left: 64px;
  }

  &.silhouette-score.no-of-clusters-3 {
    margin-left: 64px;
  }

  &.silhouette-score.no-of-samples-3 {
    margin-left: 64px;
  }
`;

const FailuresDetected = styled.div`
  ${PoppinsNormalCharade17px}
  min-height: 26px;
  letter-spacing: 0;
`;

const Number = styled.div`
  ${PoppinsBoldOxfordBlue30px}
  min-height: 45px;
  margin-top: 1px;
  letter-spacing: 0;
`;

export default SilhouetteScore;
