import React from 'react';
import { SecondaryTitleContainer, SecondaryTitleText } from './StyledSecondaryTitle';

const SecondaryTitle = ({text}) => {
  return <SecondaryTitleContainer>
      <SecondaryTitleText>
        {text}
      </SecondaryTitleText>
  </SecondaryTitleContainer>;
};

export default SecondaryTitle;
