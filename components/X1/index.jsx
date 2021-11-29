import React from "react";
import Header2 from "../Header2";
import Group1049 from "../Group1049";
import Frame519DraftDefault from "../Frame519DraftDefault";
import Property1NehativeInsight42 from "../Property1NehativeInsight42";
import Frame78 from "../Frame78";
import Frame64 from "../Frame64";
import Frame58 from "../Frame58";
import Frame61 from "../Frame61";
import styled from "styled-components";
import { PoppinsNormalGulfBlue17px, PoppinsNormalCharade30px } from "../../styledMixins";
import "./X1.css";

function X1(props) {
  const {
    stageName,
    state,
    group1049Props,
    frame519DraftDefaultProps,
    frame519DraftDefault2Props,
    frame61Props,
    frame612Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x1 screen">
        <FlexCol>
          <StageName>{stageName}</StageName>
          <Header2 />
          <OverlapGroup13>
            <Group1049 {...group1049Props} />
            <Frame519DraftDefault />
            <Frame519DraftDefault className={frame519DraftDefaultProps.className} />
            <Frame519DraftDefault className={frame519DraftDefault2Props.className} />
            <Rectangle342></Rectangle342>
            <Rectangle343></Rectangle343>
            <Rectangle344></Rectangle344>
            <State>{state}</State>
            <Frame1010>
              <Rectangle3431></Rectangle3431>
              <Property1NehativeInsight42 />
            </Frame1010>
          </OverlapGroup13>
        </FlexCol>
        <OverlapGroup14>
          <Error></Error>
          <Frame78 />
        </OverlapGroup14>
        <Frame64 />
        <Frame58 />
        <Frame61 spanText={frame61Props.spanText} />
        <Frame61 spanText={frame612Props.spanText} className={frame612Props.className} />
      </div>
    </div>
  );
}

const FlexCol = styled.div`
  width: 1920px;
  position: relative;
  margin-top: -1915.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 3004px;
`;

const StageName = styled.div`
  ${PoppinsNormalCharade30px}
  min-height: 45px;
  margin-top: 10px;
  margin-right: 106px;
  min-width: 110px;
  letter-spacing: 0;
`;

const OverlapGroup13 = styled.div`
  width: 1627px;
  height: 976px;
  position: relative;
  align-self: center;
  margin-top: 42px;
  margin-left: 35px;
`;

const Rectangle342 = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 768px;
  left: 838px;
  background-color: var(--periwinkle);
`;

const Rectangle343 = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 847px;
  left: 838px;
  background-color: var(--periwinkle);
`;

const Rectangle344 = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 936px;
  left: 838px;
  background-color: var(--periwinkle);
`;

const State = styled.div`
  ${PoppinsNormalGulfBlue17px}
  position: absolute;
  width: 140px;
  top: 121px;
  left: 803px;
  text-align: center;
  letter-spacing: 0;
`;

const Frame1010 = styled.div`
  position: absolute;
  height: 30px;
  top: 675px;
  left: 839px;
  display: flex;
  align-items: flex-start;
  min-width: 117px;
`;

const Rectangle3431 = styled.div`
  width: 16px;
  height: 16px;
  align-self: center;
  background-color: var(--gulf-blue);
`;

const OverlapGroup14 = styled.div`
  width: 91px;
  height: 53px;
  position: relative;
  margin-left: 21px;
  margin-top: -1914px;
`;

const Error = styled.div`
  position: absolute;
  width: 70px;
  height: 24px;
  top: 0;
  left: 1px;
`;

export default X1;
