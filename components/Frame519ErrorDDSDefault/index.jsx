import React from "react";
import Property1NehativeInsight from "../Property1NehativeInsight";
import styled from "styled-components";


function Frame519ErrorDDSDefault(props) {
  const { className, property1NehativeInsightProps } = props;

  return (
    <Frame519ErrorDDSDefault1 className={`frame-519-error-dds-default ${className || ""}`}>
      <Property1NehativeInsight className={property1NehativeInsightProps.className}>
        {property1NehativeInsightProps.children}
      </Property1NehativeInsight>
    </Frame519ErrorDDSDefault1>
  );
}

const Frame519ErrorDDSDefault1 = styled.div`
  position: absolute;
  height: 47px;
  top: 52px;
  left: 448px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;

  &.frame-519-error-dds-default.frame-519-error-dds-default-1 {
    top: 0;
    left: 0;
  }

  &.frame-519-error-dds-default.frame-519-error-dds-default-2 {
    top: 82px;
    left: 0;
  }

  &.frame-519-error-dds-default.frame-519-new-model-default {
    top: 158px;
    left: 0;
  }

  &.frame-519-error-dds-default.frame-519-error-dds-default-3 {
    top: 237px;
    left: 0;
    border-radius: 22px;
  }
`;

export default Frame519ErrorDDSDefault;
