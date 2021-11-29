import React from "react";
import SilhouetteScore from "../SilhouetteScore";
import styled from "styled-components";


function Property11(props) {
  const { silhouetteScoreProps, silhouetteScore2Props, silhouetteScore3Props } = props;

  return (
    <Metrics>
      <SilhouetteScore failuresDetected={silhouetteScoreProps.failuresDetected} number={silhouetteScoreProps.number} />
      <SilhouetteScore
        failuresDetected={silhouetteScore2Props.failuresDetected}
        number={silhouetteScore2Props.number}
        className={silhouetteScore2Props.className}
      />
      <SilhouetteScore
        failuresDetected={silhouetteScore3Props.failuresDetected}
        number={silhouetteScore3Props.number}
        className={silhouetteScore3Props.className}
      />
    </Metrics>
  );
}

const Metrics = styled.div`
  position: absolute;
  height: 72px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 614px;
`;

const Metrics1 = styled.div`
  position: absolute;
  height: 72px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 614px;
`;

export default Property11;
