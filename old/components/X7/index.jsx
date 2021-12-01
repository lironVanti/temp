import React from "react";
import Header2 from "../Header2";
import Group1082 from "../Group1082";
import Group1084 from "../Group1084";
import Group1083 from "../Group1083";
import Group961 from "../Group961";
import Group1087 from "../Group1087";
import Property11 from "../Property11";
import StateClosed from "../StateClosed";
import Property112 from "../Property112";
import Frame32 from "../Frame32";
import styled from "styled-components";
import { Border7pxSasquatchSocks2, Border1pxMystic } from "../../styledMixins";
import "./X7.css";

function X7(props) {
  const {
    header2Props,
    group1082Props,
    group1084Props,
    group1083Props,
    group961Props,
    group1087Props,
    property11Props,
    property112Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x7 screen">
        <Header2 className={header2Props.className} />
        <Rectangle50></Rectangle50>
        <Group1082 className={group1082Props.className} group32Props={group1082Props.group32Props} />
        <Group1084 className={group1084Props.className} />
        <Group1083 className={group1083Props.className} />
        <Group961 className={group961Props.className} />
        <Group1087 className={group1087Props.className} group709Props={group1087Props.group709Props} />
        <OverlapGroup13>
          <NewModelLoadingSpinner>
            <Ellipse102></Ellipse102>
          </NewModelLoadingSpinner>
          <NewModelLoadingSpinner1></NewModelLoadingSpinner1>
          <Group1081>
            <FlexCol>
              <FlexRow>
                <OverlapGroup4>
                  <Property11
                    silhouetteScoreProps={property11Props.silhouetteScoreProps}
                    silhouetteScore2Props={property11Props.silhouetteScore2Props}
                    silhouetteScore3Props={property11Props.silhouetteScore3Props}
                  />
                  <Property11
                    silhouetteScoreProps={property112Props.silhouetteScoreProps}
                    silhouetteScore2Props={property112Props.silhouetteScore2Props}
                    silhouetteScore3Props={property112Props.silhouetteScore3Props}
                  />
                </OverlapGroup4>
                <OverlapGroup3>
                  <StateClosed />
                  <StateClosed />
                </OverlapGroup3>
              </FlexRow>
              <OverlapGroup5>
                <Property112 />
                <Ellipse1021></Ellipse1021>
                <Ellipse1022></Ellipse1022>
              </OverlapGroup5>
            </FlexCol>
            <Frame32 />
          </Group1081>
        </OverlapGroup13>
      </div>
    </div>
  );
}

const Rectangle50 = styled.div`
  position: fixed;
  width: 1920px;
  height: 70px;
  top: 70px;
  left: 0;
  z-index: 4;
  background-color: var(--black-haze);
`;

const OverlapGroup13 = styled.div`
  width: 1620px;
  height: 397px;
  z-index: 1;
  position: relative;
  margin-top: 153px;
  margin-right: 2px;
`;

const NewModelLoadingSpinner = styled.div`
  ${Border1pxMystic}
  position: absolute;
  height: 390px;
  top: 0;
  left: 0;
  display: flex;
  padding: 1px;
  align-items: flex-start;
  min-width: 1016px;
  background-color: var(--white);
  border-radius: 8px;
`;

const Ellipse102 = styled.div`
  ${Border7pxSasquatchSocks2}
  width: 27px;
  height: 27px;
  background-color: var(--sasquatch-socks);
  border-radius: 13.5px;
`;

const NewModelLoadingSpinner1 = styled.div`
  ${Border1pxMystic}
  position: absolute;
  width: 555px;
  height: 390px;
  top: 7px;
  left: 1065px;
  background-color: var(--white);
  border-radius: 8px;
`;

const Group1081 = styled.div`
  position: absolute;
  height: 359px;
  top: 38px;
  left: 34px;
  display: flex;
  align-items: flex-start;
  min-width: 1554px;
`;

const FlexCol = styled.div`
  width: 920px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 359px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 920px;
`;

const OverlapGroup4 = styled.div`
  width: 614px;
  height: 72px;
  position: relative;
`;

const OverlapGroup3 = styled.div`
  width: 198px;
  height: 32px;
  position: relative;
  margin-left: 108px;
`;

const OverlapGroup5 = styled.div`
  width: 920px;
  height: 247px;
  position: relative;
  margin-top: 40px;
`;

const Ellipse1021 = styled.div`
  position: absolute;
  width: 27px;
  height: 27px;
  top: 144px;
  left: 780px;
  background-color: var(--caribbean-green-pearl);
  border-radius: 13.5px;
  border: 7px solid #52de9780;
`;

const Ellipse1022 = styled.div`
  position: absolute;
  width: 27px;
  height: 27px;
  top: 138px;
  left: 658px;
  background-color: var(--sasquatch-socks);
  border-radius: 13.5px;
`;

export default X7;
