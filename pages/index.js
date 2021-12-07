import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { Divider, Hero, SocialMedia } from '../src/components';

export default function Index() {
  return (
    <Container maxWidth='lg'>
      <Box sx={{ my: 8 }}>
        <Hero />
      </Box>
      <SocialMedia />
      <Divider />
    </Container>
  );
}

{
  /* <a href='https://storyset.com/work'>Work illustrations by Storyset</a>; */
  // <a href="https://iconscout.com/icons/linkedin" target="_blank">Linkedin Icon</a> by <a href="https://iconscout.com/contributors/pixel-icons">Pixel Icons</a> on <a href="https://iconscout.com">Iconscout</a>
}
