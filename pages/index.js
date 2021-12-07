import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { Hero } from '../src/components';

export default function Index() {
  return (
    <Container maxWidth='lg'>
      <Box sx={{ my: 4 }}>
        <Hero />
      </Box>
    </Container>
  );
}

{
  /* <a href='https://storyset.com/work'>Work illustrations by Storyset</a>; */
}
