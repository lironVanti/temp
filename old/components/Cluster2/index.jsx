import React from "react";
import Property1Default from "../Property1Default";
import styled from "styled-components";
import { PoppinsBoldOxfordBlue36px, PoppinsNormalOxfordBlue14px, ValignTextMiddle } from "../../styledMixins";


function Cluster2(props) {
  const { number, spanText2, spanText4, className, property1DefaultProps } = props;

  return (
    <Cluster21 className={`cluster-2 ${className || ""}`}>
      <Number className="number-23">{number}</Number>
      <Property1Default className={property1DefaultProps.className} />
      <Text47 className="text-47">
        <span className="span0-22 poppins-normal-oxford-blue-14px">Product code </span>
        <span className="span1-22 poppins-semi-bold-oxford-blue-14px">{spanText2}</span>
        <span className="span2-13 poppins-normal-oxford-blue-14px"> is responisble for </span>
        <span className="span3-9 poppins-semi-bold-oxford-blue-14px">{spanText4}</span>
        <span className="span4-7 poppins-normal-oxford-blue-14px">% of this class.</span>
      </Text47>
    </Cluster21>
  );
}

const Cluster21 = styled.div`
  height: 70px;
  position: relative;
  margin-top: 8px;
  margin-left: 1.04px;
  display: flex;
  padding: 0 11px;
  align-items: center;
  min-width: 576px;
  background-color: var(--white);
  border-radius: 3px;

  &.cluster-2.cluster-3 {
    margin-top: 16px;
  }
`;

const Number = styled.div`
  ${ValignTextMiddle}
  ${PoppinsBoldOxfordBlue36px}
            height: 54px;
  min-width: 21px;
  letter-spacing: 0;
`;

const Text47 = styled.p`
  ${PoppinsNormalOxfordBlue14px}
  width: 435px;
  min-height: 21px;
  margin-left: 21px;
  margin-bottom: 3px;
  letter-spacing: 0;
`;

const Number1 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsBoldOxfordBlue36px}
            
            
           .cluster-2.cluster-3  & {
    min-width: 22px;
  }
`;

const Text48 = styled.p`
  ${PoppinsNormalOxfordBlue14px}

  .cluster-2.cluster-3  & {
    width: 409px;
  }
`;

export default Cluster2;
