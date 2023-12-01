import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { title: "Data Analytics Intern", text: 'Worked on building ETL pipelines and data warehousing.  built an api endpoint using fastapi to check, validate, preprocess and upload the user file to mysql db.', company:'company: DBTEZ TECHNOLOGIES'},
  // { number: 1000, text: 'Students', },
  // { number: 1900, text: 'Github Followers', },
  // { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>past work Experience</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.title}`}</BoxNum>
          <BoxText>{`${card.company}`}</BoxText>
          <br/>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
