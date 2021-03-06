import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center >
        Wellcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non sapiente est, quis autem veniam voluptatem vel saepe corporis minus! Soluta.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;