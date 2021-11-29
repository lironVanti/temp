import React from "react";
import styled from "styled-components";
import { PoppinsNormalGulfBlue15px, ValignTextMiddle } from "../../styledMixins";


function Group1083(props) {
  const { className } = props;

  return (
    <Group10831 className={`group-1083 ${className || ""}`}>
      <OverlapGroup11 className="overlap-group11">
        <Vector31 className="vector-31" src="/img/vector-31@2x.svg" />
        <OverlapGroup className="overlap-group-4">
          <Group className="group" src="/img/group@2x.svg" />
          <Scan className="scan">Predict</Scan>
        </OverlapGroup>
        <Group981 className="group-981">
          <Vector311 className="vector-31-1" src="/img/vector-31-1@2x.svg" />
          <Vector51 className="vector-51" src="/img/vector-51@2x.svg" />
        </Group981>
      </OverlapGroup11>
      <Group982 className="group-982">
        <Vector32 className="vector-32" src="/img/vector-32-1@2x.svg" />
        <Vector511 className="vector-51-1" src="/img/vector-51-1@2x.svg" />
      </Group982>
      <OverlapGroup12 className="overlap-group12">
        <ButtonsMain className="buttons-main" src="/img/buttons-main-2@2x.svg" />
      </OverlapGroup12>
    </Group10831>
  );
}

const Group10831 = styled.div`
  position: fixed;
  height: 35px;
  top: 88px;
  left: 1442px;
  z-index: 9;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 449px;

  &.group-1083.group-1083-1 {
    z-index: 8;
  }
`;

const OverlapGroup11 = styled.div`
  width: 184px;
  height: 37px;
  position: relative;
  margin-top: -1px;
`;

const Vector31 = styled.img`
  position: absolute;
  width: 16px;
  height: 9px;
  top: 12px;
  left: 35px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 37px;
  top: 0;
  left: 32px;
  display: flex;
  padding: 6.5px 36.5px;
  align-items: center;
  min-width: 152px;
  background-color: var(--white);
  border-radius: 3px;
`;

const Group = styled.img`
  width: 19px;
  height: 19px;
  margin-bottom: 2px;
`;

const Scan = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalGulfBlue15px}
            height: 23px;
  align-self: flex-end;
  margin-left: 7px;
  min-width: 52px;
  text-align: center;
  letter-spacing: 0;
`;

const Group981 = styled.div`
  position: absolute;
  height: 35px;
  top: 1px;
  left: 0;
  display: flex;
  padding: 4.2px 1px;
  justify-content: flex-end;
  align-items: center;
  min-width: 36px;
  background-image: url(/img/rectangle-193@2x.svg);
  background-size: 100% 100%;
`;

const Vector311 = styled.img`
  width: 16px;
  height: 9px;
  margin-bottom: 5.69px;
`;

const Vector51 = styled.img`
  width: 2px;
  height: 26px;
  align-self: flex-end;
  margin-left: 7px;
`;

const Group982 = styled.div`
  height: 35px;
  margin-left: 30px;
  display: flex;
  padding: 4.2px 0;
  justify-content: flex-end;
  align-items: center;
  min-width: 35px;
  background-image: url(/img/rectangle-193-1@2x.svg);
  background-size: 100% 100%;
`;

const Vector32 = styled.img`
  width: 16px;
  height: 9px;
  margin-bottom: 3.69px;
`;

const Vector511 = styled.img`
  width: 2px;
  height: 26px;
  align-self: flex-end;
  margin-left: 8px;
`;

const OverlapGroup12 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 200px;
  background-image: url(/img/buttons-main-1@2x.svg);
  background-size: 100% 100%;
`;

const ButtonsMain = styled.img`
  width: 200px;
  height: 35px;
`;

const OverlapGroup111 = styled.div`
  .group-1083.group-1083-1 & {
    background-image: url(/img/buttons-main-4@2x.svg);
  }
`;

export default Group1083;
