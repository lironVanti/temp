import React from "react";
import styled from "styled-components";
import { PoppinsNormalOxfordBlue12px, PoppinsBoldCharade30px, ValignTextMiddle } from "../../styledMixins";


function Group1084(props) {
  const { className } = props;

  return (
    <Group10841 className={`group-1084 ${className || ""}`}>
      <Home className="home" src="/img/home@2x.svg" />
      <Chevron className="chevron-2" src="/img/chevron@2x.svg" />
      <SGAXI className="sgaxi">SG_AXI</SGAXI>
      <OverlapGroup className="overlap-group-8">
        <Text className="text-1">Live</Text>
        <Fill10 className="fill-10" src="/img/fill-10@2x.svg" />
      </OverlapGroup>
    </Group10841>
  );
}

const Group10841 = styled.div`
  position: fixed;
  height: 45px;
  top: 83px;
  left: 50px;
  z-index: 8;
  display: flex;
  align-items: center;
  min-width: 211px;

  &.group-1084.group-1084-1 {
    z-index: 7;
  }
`;

const Home = styled.img`
  width: 24px;
  height: 25px;
`;

const Chevron = styled.img`
  width: 20px;
  height: 21px;
  margin-left: 8px;
`;

const SGAXI = styled.div`
  ${ValignTextMiddle}
  ${PoppinsBoldCharade30px}
            height: 45px;
  margin-left: 8px;
  min-width: 118px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  width: 23px;
  height: 27px;
  position: relative;
  margin-left: 8px;
  margin-top: 4px;
`;

const Text = styled.div`
  ${PoppinsNormalOxfordBlue12px}
  position: absolute;
  width: 23px;
  top: 9px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const Fill10 = styled.img`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  left: 7px;
`;

export default Group1084;
