import React from "react";
import styled from "styled-components";
import { PoppinsNormalWhite16px, PoppinsNormalZircon13px } from "../../styledMixins";


function Header(props) {
  const { className } = props;

  return (
    <Header1 className={`header ${className || ""}`}>
      <OverlapGroup10 className="overlap-group10">
        <OverlapGroup className="overlap-group-2">
          <Fill1 className="fill-1" src="/img/fill-1@2x.svg" />
          <Group13 className="group-13" src="/img/group-13@2x.svg" />
        </OverlapGroup>
        <Group26 className="group-26">
          <Ellipse12 className="ellipse-12" src="/img/ellipse-12@2x.png" />
          <Group30 className="group-30">
            <FlexRow className="flex-row-1">
              <JohnSmith className="john-smith">Jen Conner</JohnSmith>
              <Triangle className="triangle" src="/img/triangle@2x.svg" />
            </FlexRow>
            <JohnSmith1 className="john-smith-1">Innoviz Germany</JohnSmith1>
          </Group30>
        </Group26>
      </OverlapGroup10>
    </Header1>
  );
}

const Header1 = styled.div`
  position: fixed;
  height: 70px;
  top: 0;
  left: 0;
  z-index: 7;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 1920px;

  &.header.header-1 {
    z-index: 6;
  }
`;

const OverlapGroup10 = styled.div`
  height: 78px;
  margin-top: -3px;
  display: flex;
  padding: 15px 33px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1928px;
  background-image: url(/img/rectangle@1x.svg);
  background-size: 100% 100%;
`;

const OverlapGroup = styled.div`
  width: 110px;
  height: 27px;
  position: relative;
  align-self: center;
  margin-bottom: 3.38px;
`;

const Fill1 = styled.img`
  position: absolute;
  width: 22px;
  height: 23px;
  top: 2px;
  left: 24px;
`;

const Group13 = styled.img`
  position: absolute;
  width: 110px;
  height: 27px;
  top: 0;
  left: 0;
`;

const Group26 = styled.div`
  margin-left: 1568px;
  display: flex;
  align-items: center;
  min-width: 163px;
`;

const Ellipse12 = styled.img`
  width: 46px;
  height: 46px;
  object-fit: cover;
`;

const Group30 = styled.div`
  width: 109px;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 44px;
`;

const FlexRow = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  min-width: 106px;
`;

const JohnSmith = styled.div`
  ${PoppinsNormalWhite16px}
  min-height: 24px;
  min-width: 92px;
  text-align: right;
  letter-spacing: 0;
`;

const Triangle = styled.img`
  width: 10px;
  height: 4px;
  margin-left: 4px;
  margin-top: 4px;
`;

const JohnSmith1 = styled.div`
  ${PoppinsNormalZircon13px}
  min-height: 20px;
  min-width: 109px;
  opacity: 0.8;
  text-align: right;
  letter-spacing: 0;
`;

const OverlapGroup101 = styled.div`
  .header.header-1 & {
    background-image: url(/img/rectangle-2@1x.svg);
  }
`;

export default Header;
