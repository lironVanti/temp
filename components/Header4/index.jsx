import React from "react";
import Group26 from "../Group26";
import styled from "styled-components";


function Header4(props) {
  const { ellipse12, className } = props;

  return (
    <Header className={`header ${className || ""}`}>
      <OverlapGroup6 className="overlap-group6">
        <OverlapGroup className="overlap-group-4">
          <Fill1 className="fill-1" src="/img/fill-1@2x.svg" />
          <Group13 className="group-13" src={ellipse12} />
        </OverlapGroup>
        <Group26 />
      </OverlapGroup6>
    </Header>
  );
}

const Header = styled.div`
  height: 70px;
  margin-top: 1870px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 1920px;

  &.header.header-1 {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    margin-top: unset;
  }
`;

const OverlapGroup6 = styled.div`
  height: 78px;
  position: relative;
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

const OverlapGroup8 = styled.div`
  .header.header-1 & {
    background-image: url(/img/rectangle-4@1x.svg);
  }
`;

export default Header4;
