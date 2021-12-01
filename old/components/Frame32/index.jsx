import React from "react";
import Property1PositiveInsight from "../Property1PositiveInsight";
import styled from "styled-components";
import { PoppinsNormalCharade17px, ValignTextMiddle } from "../../styledMixins";


function Frame32() {
  return (
    <Frame321>
      <Ttile>Insight Feed</Ttile>
      <Div src="/img/div@2x.svg" />
      <Insights>
        <Div1 src="/img/div-1@2x.svg" />
        <OverlapGroup>
          <Property1PositiveInsight />
          <Text27>Units with S/Ns starting with &#34;X83I&#34; are 30% more likely to fail at the EOL tester.</Text27>
        </OverlapGroup>
        <Div2 src="/img/div-2@2x.svg" />
        <OverlapGroup1>
          <Property1PositiveInsight />
          <Text28>
            <span>
              <span className="poppins-normal-charade-17px">When</span>
              <span className="poppins-bold-charade-17px"> test #80 is higher than 40</span>
              <span className="poppins-normal-charade-17px"> and </span>
              <span className="poppins-bold-charade-17px">test #18 is lower than 12</span>
              <span className="poppins-normal-charade-17px">, the chance of a failure increases by 75%.</span>
            </span>
          </Text28>
        </OverlapGroup1>
        <Div2 src="/img/div-2@2x.svg" />
        <OverlapGroup2>
          <Property1PositiveInsight />
          <Text27>
            Class 0 consists of Outliers only. rebuilding a model without it will give a better model for this stage.
          </Text27>
          <Div3 src="/img/div-2@2x.svg" />
        </OverlapGroup2>
      </Insights>
    </Frame321>
  );
}

const Frame321 = styled.div`
  width: 444px;
  margin-left: 190px;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 336px;
`;

const Ttile = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalCharade17px}
            height: 26px;
  letter-spacing: 0;
`;

const Div = styled.img`
  width: 444px;
  height: 1px;
  margin-top: 4px;
`;

const Insights = styled.div`
  width: 444px;
  height: 325px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Div1 = styled.img`
  width: 444px;
  height: 1px;
  margin-top: -1px;
`;

const OverlapGroup = styled.div`
  width: 445px;
  height: 77px;
  position: relative;
  margin-top: 7px;
  margin-left: -1px;
`;

const Text27 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalCharade17px}
            position: absolute;
  width: 444px;
  height: 52px;
  top: 25px;
  left: 1px;
  letter-spacing: 0;
`;

const Div2 = styled.img`
  width: 444px;
  height: 1px;
  margin-top: 8px;
`;

const OverlapGroup1 = styled.div`
  width: 445px;
  height: 103px;
  position: relative;
  margin-top: 7px;
  margin-left: -1px;
`;

const Text28 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalCharade17px}
            position: absolute;
  width: 444px;
  height: 78px;
  top: 25px;
  left: 1px;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  width: 445px;
  height: 78px;
  position: relative;
  margin-top: 7px;
  margin-left: -1px;
`;

const Div3 = styled.img`
  position: absolute;
  width: 444px;
  height: 1px;
  top: 77px;
  left: 1px;
`;

const Frame322 = styled.div`
  width: 444px;
  margin-left: 190px;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 336px;
`;

const Ttile1 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalCharade17px}
            height: 26px;
  letter-spacing: 0;
`;

const Div4 = styled.img`
  width: 444px;
  height: 1px;
  margin-top: 4px;
`;

const Insights1 = styled.div`
  width: 444px;
  height: 325px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Div5 = styled.img`
  width: 444px;
  height: 1px;
  margin-top: -1px;
`;

const OverlapGroup3 = styled.div`
  width: 445px;
  height: 77px;
  position: relative;
  margin-top: 7px;
  margin-left: -1px;
`;

const Text34 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalCharade17px}
            position: absolute;
  width: 444px;
  height: 52px;
  top: 25px;
  left: 1px;
  letter-spacing: 0;
`;

const Div6 = styled.img`
  width: 444px;
  height: 1px;
  margin-top: 8px;
`;

const OverlapGroup11 = styled.div`
  width: 445px;
  height: 103px;
  position: relative;
  margin-top: 7px;
  margin-left: -1px;
`;

const Text35 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalCharade17px}
            position: absolute;
  width: 444px;
  height: 78px;
  top: 25px;
  left: 1px;
  letter-spacing: 0;
`;

const OverlapGroup21 = styled.div`
  width: 445px;
  height: 78px;
  position: relative;
  margin-top: 7px;
  margin-left: -1px;
`;

const Div7 = styled.img`
  position: absolute;
  width: 444px;
  height: 1px;
  top: 77px;
  left: 1px;
`;

export default Frame32;
