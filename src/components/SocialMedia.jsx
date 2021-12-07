import React from 'react';

import Linkedin from '../../public/linkedin.svg';
import Github from '../../public/github.svg';
import { Box } from '@mui/system';
import theme from '../theme';

const SocialMedia = () => {
  return (
    <Box display='flex' justifyContent='center'>
      <Linkedin style={{ width: 40 }} />
      <Github style={{ width: 40, marginLeft: theme.spacing(2) }} />
    </Box>
  );
};

export default SocialMedia;
