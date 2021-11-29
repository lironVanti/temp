import React from "react";
import Group709 from "../Group709";
import styled from "styled-components";
import {
  PoppinsNormalShuttleGray12px,
  PoppinsMediumCharade17px,
  Border1pxMystic,
  PoppinsSemiBoldCanary24px,
  PoppinsBoldSasquatchSocks24px,
  PoppinsSemiBoldWhite24px,
  PoppinsNormalShuttleGray13px,
  PoppinsMediumCharade18px,
} from "../../styledMixins";


function Group1087(props) {
  const { className, group709Props } = props;

  return (
    <Group10871 className={`group-1087 ${className || ""}`}>
      <OverlapGroup3 className="overlap-group3-1">
        <OverlapGroup2 className="overlap-group2-1">
          <Frame542 className="frame-542">
            <Group709 />
            <Text6 className="text-6">Model Self-Monitoring</Text6>
          </Frame542>
          <Text7 className="text-7">
            <span className="span0-6 poppins-semi-bold-caribbean-green-pearl-24px">
              70% Ratio First Prediction
              <br />
            </span>
            <span className="span1-6 poppins-semi-bold-ocean-green-pearl-24px">68% Ratio Real Prediction</span>
          </Text7>
        </OverlapGroup2>
        <Text8 className="text-8">
          <span className="span0-7 poppins-normal-shuttle-gray-13px">Ratio prediction has </span>
          <span className="span1-7 poppins-normal-shuttle-gray-12px">slightly</span>
          <span className="span2-4 poppins-normal-shuttle-gray-13px">
            {" "}
            changed. No immediate action is required, but we recommend a close monitoring.
          </span>
        </Text8>
      </OverlapGroup3>
      <OverlapGroup5 className="overlap-group5-1">
        <OverlapGroup1 className="overlap-group1-3">
          <Group714 className="group-714">
            <Group709 className={group709Props.className} />
            <ModelOptimization className="model-optimization">Model Optimization</ModelOptimization>
          </Group714>
          <Text4 className="text-4">New Model by Vanti will displayed here</Text4>
        </OverlapGroup1>
        <Text5 className="text-5">
          A new model is being automatically trained to potentially improve station performance.
        </Text5>
      </OverlapGroup5>
      <OverlapGroup4 className="overlap-group4-1">
        <OverlapGroup className="overlap-group-6">
          <Frame713 className="frame-713">
            <Group712 className="group-712">
              <Group711 className="group-711" src="/img/group-711@2x.svg" />
            </Group712>
            <ModelAdaptation className="model-adaptation">
              <span className="span0-8 poppins-medium-charade-18px">Model </span>
              <span className="span1-8 poppins-medium-charade-17px">Adaptation</span>
            </ModelAdaptation>
          </Frame713>
          <Text2 className="text-2">
            Data Drift detected
            <br />
            in Low Severity
          </Text2>
        </OverlapGroup>
        <Text3 className="text-3">
          If the data structure for the &#34;predict&#34; API has changed.
          <br />
          We will notify you about the effect on model performance.
          <br />
          If you want to keep the prediction API, We recommend training a new model.
        </Text3>
      </OverlapGroup4>
    </Group10871>
  );
}

const Group10871 = styled.div`
  height: 252px;
  z-index: 2;
  margin-top: 41px;
  display: flex;
  align-items: flex-start;
  min-width: 1622px;

  &.group-1087.group-1087-1 {
    z-index: 3;
  }
`;

const OverlapGroup3 = styled.div`
  ${Border1pxMystic}
  width: 507px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  padding: 21px 63px;
  align-items: flex-start;
  min-height: 251px;
  background-color: var(--white);
  border-radius: 8px;
`;

const OverlapGroup2 = styled.div`
  width: 375px;
  height: 101px;
  position: relative;
`;

const Frame542 = styled.div`
  position: absolute;
  height: 30px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 241px;
`;

const Text6 = styled.div`
  ${PoppinsMediumCharade18px}
  min-height: 27px;
  margin-left: 10px;
  min-width: 201px;
  letter-spacing: 0;
`;

const Text7 = styled.div`
  ${PoppinsSemiBoldWhite24px}
  position: absolute;
  width: 375px;
  top: 29px;
  left: 0;
  letter-spacing: 0;
`;

const Text8 = styled.p`
  ${PoppinsNormalShuttleGray13px}
  width: 380px;
  min-height: 40px;
  margin-top: 22px;
  letter-spacing: 0;
`;

const OverlapGroup5 = styled.div`
  ${Border1pxMystic}
  width: 507px;
  margin-left: 51px;
  display: flex;
  flex-direction: column;
  padding: 23px 63px;
  align-items: flex-start;
  min-height: 251px;
  background-color: var(--white);
  border-radius: 8px;
`;

const OverlapGroup1 = styled.div`
  width: 335px;
  height: 100px;
  position: relative;
`;

const Group714 = styled.div`
  position: absolute;
  height: 30px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 209px;
`;

const ModelOptimization = styled.div`
  ${PoppinsMediumCharade17px}
  min-height: 26px;
  margin-left: 10px;
  letter-spacing: 0;
`;

const Text4 = styled.div`
  ${PoppinsSemiBoldCanary24px}
  position: absolute;
  width: 335px;
  top: 28px;
  left: 0;
  letter-spacing: 0;
`;

const Text5 = styled.p`
  ${PoppinsNormalShuttleGray12px}
  width: 380px;
  min-height: 36px;
  margin-top: 22px;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  ${Border1pxMystic}
  width: 507px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  padding: 22px 60px;
  align-items: flex-start;
  min-height: 251px;
  border-radius: 8px;
`;

const OverlapGroup = styled.div`
  width: 307px;
  height: 101px;
  position: relative;
`;

const Frame713 = styled.div`
  position: absolute;
  height: 30px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 198px;
`;

const Group712 = styled.div`
  height: 30px;
  display: flex;
  padding: 0 4px;
  justify-content: flex-end;
  align-items: center;
  min-width: 30px;
  background-color: var(--zircon);
  border-radius: 15px;
`;

const Group711 = styled.img`
  width: 21px;
  height: 20px;
`;

const ModelAdaptation = styled.div`
  ${PoppinsMediumCharade18px}
  min-height: 27px;
  margin-left: 10px;
  min-width: 158px;
  letter-spacing: 0;
`;

const Text2 = styled.div`
  ${PoppinsBoldSasquatchSocks24px}
  position: absolute;
  width: 307px;
  top: 29px;
  left: 0;
  letter-spacing: 0;
  text-decoration: underline;
`;

const Text3 = styled.p`
  ${PoppinsNormalShuttleGray12px}
  width: 380px;
  min-height: 72px;
  margin-top: 22px;
  letter-spacing: 0;
`;

export default Group1087;
