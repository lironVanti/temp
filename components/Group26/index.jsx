import React from "react";
import styled from "styled-components";
import { PoppinsNormalPeriwinkle13px, PoppinsNormalWhite16px } from "../../styledMixins";


function Group26(props) {
  const { className } = props;

  return (
    <Group261 className={`group-26 ${className || ""}`}>
      <Ellipse12 className="ellipse-12" src="/img/ellipse-12@2x.png" />
      <Group30 className="group-30">
        <FlexRow className="flex-row-1">
          <JohnSmith className="john-smith">Jen Conner</JohnSmith>
          <Triangle className="triangle" src="/img/triangle@2x.svg" />
        </FlexRow>
        <JohnSmith1 className="john-smith-1">Innoviz Germany</JohnSmith1>
      </Group30>
    </Group261>
  );
}

const Group261 = styled.div`
  margin-left: 1568px;
  display: flex;
  align-items: center;
  min-width: 163px;

  &.group-26.group-26-2 {
    margin-left: 650px;
  }
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
  ${PoppinsNormalPeriwinkle13px}
  min-height: 20px;
  min-width: 109px;
  opacity: 0.8;
  text-align: right;
  letter-spacing: 0;
`;

export default Group26;
