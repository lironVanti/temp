import React from "react";
import styled from "styled-components";
import { PoppinsNormalOxfordBlue17px, ValignTextMiddle } from "../../styledMixins";


function Property1NehativeInsight3(props) {
  const { spanText, spanText2 } = props;

  return (
    <Insights>
      <Attention>
        <span>
          <span className="poppins-normal-oxford-blue-17px">{spanText}</span>
          <span className="poppins-normal-oxford-blue-17px">{spanText2}</span>
        </span>
      </Attention>
    </Insights>
  );
}

const Insights = styled.div`
  height: 33px;
  margin-top: -1px;
  display: flex;
  padding: 3px 5px;
  align-items: flex-start;
  min-width: 102px;
  border-radius: 42px;
`;

const Attention = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalOxfordBlue17px}
            height: 26px;
  min-width: 90px;
  text-align: center;
  letter-spacing: 0;
`;

export default Property1NehativeInsight3;
