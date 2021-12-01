import React from "react";
import styled from "styled-components";
import {
  PoppinsNormalGulfBlue18px,
  PoppinsSemiBoldWhite18px,
  PoppinsNormalGulfBlue20px,
  ValignTextMiddle,
} from "../../styledMixins";


function Group961(props) {
  const { className } = props;

  return (
    <Group9611 className={`group-961 ${className || ""}`}>
      <OverlapGroup2 className="overlap-group2-2">
        <OverlapGroup1 className="overlap-group1-6">
          <Group866 className="group-866-1" src="/img/group-866@2x.svg" />
          <OverlapGroup className="overlap-group-12">
            <ButtonsMain className="buttons-main-1"></ButtonsMain>
            <RemindMeLater className="remind-me-later-2">Remind Me Later</RemindMeLater>
            <Vector32 className="vector-32-1" src="/img/vector-32@2x.svg" />
          </OverlapGroup>
          <FixIt className="fix-it">FIX IT</FixIt>
        </OverlapGroup1>
        <Text1 className="text-1-1">
          <span>
            <span className="span0-7 poppins-semi-bold-sasquatch-socks-18px">Low</span>
            <span className="span1-7 poppins-normal-sasquatch-socks-18px"> Severity Data Drift Detected</span>
            <span className="span2-3 poppins-normal-shuttle-gray-18px">&nbsp;</span>
            <span className="span3-3 poppins-normal-sasquatch-socks-18px">
              in Station cndscnkd
              <br />
            </span>
            <span className="span4-3 poppins-normal-shuttle-gray-14px">
              Thus prediction API continues. However, we would recommend training a new model if this change should
              last. | 12:45, 12 July (12 min ago)
            </span>
          </span>
        </Text1>
      </OverlapGroup2>
    </Group9611>
  );
}

const Group9611 = styled.div`
  z-index: 1;
  margin-top: 175px;
  display: flex;
  align-items: flex-start;
  min-width: 1622px;

  &.group-961.group-961-1 {
    z-index: 2;
  }
`;

const OverlapGroup2 = styled.div`
  width: 1622px;
  height: 72px;
  position: relative;
  border-radius: 10px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  height: 72px;
  top: 0;
  left: 0;
  display: flex;
  padding: 11px 32px;
  align-items: center;
  min-width: 1622px;
  background-color: var(--zircon);
  border-radius: 10px;
  box-shadow: 0px 2px 6px #5066921a;
`;

const Group866 = styled.img`
  width: 40px;
  height: 35px;
  margin-bottom: 7.36px;
`;

const OverlapGroup = styled.div`
  width: 214px;
  height: 47px;
  position: relative;
  align-self: flex-start;
  margin-left: 1121px;
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

const FixIt = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalGulfBlue20px}
            height: 30px;
  margin-left: 88px;
  margin-top: 2px;
  min-width: 49px;
  text-align: center;
  letter-spacing: 0;
`;

const Text1 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsSemiBoldWhite18px}
            position: absolute;
  width: 1001px;
  height: 47px;
  top: 12px;
  left: 104px;
  letter-spacing: 0;
`;

export default Group961;
