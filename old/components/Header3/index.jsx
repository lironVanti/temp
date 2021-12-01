import React from "react";
import Group26 from "../Group26";
import styled from "styled-components";


function Header3(props) {
  const { group26Props } = props;

  return (
    <Header>
      <OverlapGroup12>
        <OverlapGroup>
          <Fill1 src="/img/fill-1-1@2x.svg" />
          <Group13 src="/img/group-13-1@2x.svg" />
        </OverlapGroup>
        <Frame11></Frame11>
        <Group26 className={group26Props.className} />
      </OverlapGroup12>
    </Header>
  );
}

const Header = styled.div`
  height: 70px;
  margin-top: 1860px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 1920px;
`;

const OverlapGroup12 = styled.div`
  height: 78px;
  position: relative;
  margin-top: -3px;
  display: flex;
  padding: 15px 33px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1928px;
  background-image: url(/img/rectangle-1@1x.svg);
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

const Frame11 = styled.div`
  width: 209px;
  height: 45px;
  margin-left: 709px;
`;

export default Header3;