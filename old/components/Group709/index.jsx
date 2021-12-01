import React from "react";
import styled from "styled-components";


function Group709(props) {
  const { className } = props;

  return (
    <Group7091 className={`group-709 ${className || ""}`}>
      <Group708 className="group-708" src="/img/group-708@2x.svg" />
    </Group7091>
  );
}

const Group7091 = styled.div`
  height: 30px;
  display: flex;
  padding: 5px 5.2px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 30px;
  background-color: var(--zircon);
  border-radius: 15px;

  &.group-709.group-715 {
    padding: 5.8px 4.1px;
    align-items: flex-start;
  }

  &.group-709.group-715-1 {
    padding: 5.8px 4.1px;
    align-items: flex-start;
  }
`;

const Group708 = styled.img`
  width: 19px;
  height: 19px;
`;

const Group713 = styled.img`
  .group-709.group-715 & {
    width: 20px;
    height: 18px;
  }
`;

const Group7131 = styled.img`
  .group-709.group-715-1 & {
    width: 20px;
    height: 18px;
  }
`;

export default Group709;
