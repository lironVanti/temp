import React from "react";
import Group32 from "../Group32";
import styled from "styled-components";
import { PoppinsNormalWhite24px, ValignTextMiddle } from "../../styledMixins";


function Group1082(props) {
  const { className, group32Props } = props;

  return (
    <Group10821 className={`group-1082 ${className || ""}`}>
      <OverlapGroup9 className="overlap-group9">
        <Group32 className={group32Props.className} />
        <Text className="text">
          <span>
            <span className="span0-4 poppins-normal-shuttle-gray-24px">currently</span>
            <span className="span1-4 poppins-normal-shuttle-gray-24px">&nbsp;</span>
            <span className="span2-2 poppins-normal-shuttle-gray-24px">deployed</span>
            <span className="span3-2 poppins-normal-shuttle-gray-24px">:</span>
            <span className="span4-2 poppins-light-concord-24px">&nbsp;</span>
            <span className="span5 poppins-normal-charade-24px">Model 1</span>
          </span>
        </Text>
      </OverlapGroup9>
    </Group10821>
  );
}

const Group10821 = styled.div`
  position: fixed;
  height: 56px;
  top: 78px;
  left: 675px;
  z-index: 6;
  display: flex;
  align-items: flex-start;
  min-width: 569px;

  &.group-1082.group-1082-1 {
    z-index: 5;
  }
`;

const OverlapGroup9 = styled.div`
  width: 569px;
  height: 56px;
  position: relative;
`;

const Text = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalWhite24px}
            position: absolute;
  width: 490px;
  height: 56px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

export default Group1082;
