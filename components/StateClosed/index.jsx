import React from "react";
import styled from "styled-components";
import { PoppinsNormalOxfordBlue17px } from "../../styledMixins";


function StateClosed() {
  return (
    <Dropdown>
      <Dropdown1>
        <Text>Last Hour</Text>
        <DropdownIcon src="/img/dropdown-icon@2x.svg" />
      </Dropdown1>
      <Line></Line>
    </Dropdown>
  );
}

const Dropdown = styled.div`
  position: absolute;
  width: 198px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 32px;
`;

const Dropdown1 = styled.div`
  height: 31px;
  display: flex;
  padding: 2px 12px;
  align-items: flex-start;
  min-width: 198px;
  background-color: var(--white);
  border-radius: 3px;
`;

const Text = styled.div`
  ${PoppinsNormalOxfordBlue17px}
  min-height: 26px;
  min-width: 79px;
  letter-spacing: 0;
`;

const DropdownIcon = styled.img`
  width: 18px;
  height: 18px;
  align-self: center;
  margin-left: 77px;
  margin-bottom: 1px;
`;

const Line = styled.div`
  width: 198px;
  height: 1px;
  background-color: var(--oxford-blue);
`;

const Dropdown2 = styled.div`
  position: absolute;
  width: 198px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 32px;
`;

const Dropdown3 = styled.div`
  height: 31px;
  display: flex;
  padding: 2px 12px;
  align-items: flex-start;
  min-width: 198px;
  background-color: var(--white);
  border-radius: 3px;
`;

const Text1 = styled.div`
  ${PoppinsNormalOxfordBlue17px}
  min-height: 26px;
  min-width: 79px;
  letter-spacing: 0;
`;

const DropdownIcon1 = styled.img`
  width: 18px;
  height: 18px;
  align-self: center;
  margin-left: 77px;
  margin-bottom: 1px;
`;

const Line1 = styled.div`
  width: 198px;
  height: 1px;
  background-color: var(--oxford-blue);
`;

export default StateClosed;
