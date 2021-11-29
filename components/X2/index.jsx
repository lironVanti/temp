import React from "react";
import Header2 from "../Header2";
import Group1049 from "../Group1049";
import Frame78 from "../Frame78";
import Frame64 from "../Frame64";
import Frame58 from "../Frame58";
import Frame61 from "../Frame61";
import styled from "styled-components";
import {
  PoppinsNormalGulfBlue18px,
  PoppinsSemiBoldWhite18px,
  PoppinsNormalCharade30px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./X2.css";

function X2(props) {
  const {
    stageName,
    remindMeLater,
    learnMore,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    header2Props,
    group1049Props,
    frame61Props,
    frame612Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x2 screen">
        <FlexCol>
          <StageName>{stageName}</StageName>
          <Header2 className={header2Props.className} />
          <OverlapGroup12>
            <OverlapGroup1>
              <Group866 src="/img/group-866-1@2x.svg" />
              <OverlapGroup>
                <ButtonsMain></ButtonsMain>
                <RemindMeLater>{remindMeLater}</RemindMeLater>
                <Vector32 src="/img/vector-32@2x.svg" />
              </OverlapGroup>
              <LEARNMORE>{learnMore}</LEARNMORE>
            </OverlapGroup1>
            <Text47>
              <span>
                <span className="poppins-semi-bold-sasquatch-socks-18px">{spanText}</span>
                <span className="poppins-normal-sasquatch-socks-18px">{spanText2}</span>
                <span className="poppins-normal-shuttle-gray-18px">{spanText3}</span>
                <span className="poppins-normal-sasquatch-socks-18px">{spanText4}</span>
                <span className="poppins-normal-shuttle-gray-14px">{spanText5}</span>
              </span>
            </Text47>
          </OverlapGroup12>
          <Group1049 {...group1049Props} />
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
  align-items: center;
  min-height: 3106px;
`;

const StageName = styled.div`
  ${PoppinsNormalCharade30px}
  min-height: 45px;
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 106px;
  min-width: 110px;
  letter-spacing: 0;
`;

const OverlapGroup12 = styled.div`
  width: 1622px;
  height: 72px;
  position: relative;
  margin-top: 36px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  height: 72px;
  top: 0;
  left: 0;
  display: flex;
  padding: 12px 23px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1622px;
  background-image: url(/img/rectangle-338@1x.svg);
  background-size: 100% 100%;
`;

const Group866 = styled.img`
  width: 40px;
  height: 35px;
  margin-bottom: 5.36px;
`;

const OverlapGroup = styled.div`
  width: 214px;
  height: 47px;
  position: relative;
  align-self: flex-start;
  margin-left: 1122px;
`;

const ButtonsMain = styled.div`
  position: absolute;
  width: 212px;
  height: 37px;
  top: 5px;
  left: 2px;
  border-radius: 3px;
`;

const RemindMeLater = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalGulfBlue18px}
            position: absolute;
  width: 206px;
  height: 47px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const Vector32 = styled.img`
  position: absolute;
  width: 16px;
  height: 9px;
  top: 19px;
  left: 185px;
`;

const LEARNMORE = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalGulfBlue18px}
            width: 165px;
  height: 27px;
  margin-left: 26px;
  margin-top: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const Text47 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsSemiBoldWhite18px}
            position: absolute;
  width: 1012px;
  height: 47px;
  top: 12px;
  left: 104px;
  letter-spacing: 0;
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

export default X2;
