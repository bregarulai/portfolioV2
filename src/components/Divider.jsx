import { Box } from '@mui/system';
import React from 'react';
import theme from '../theme';

const Divider = () => {
  return (
    <Box
      component='div'
      sx={{
        height: theme.spacing(1),
        width: '30%',
        my: 8,
        borderRadius: theme.spacing(2),
        background:
          'linear-gradient(90deg, rgba(155,39,176,1) 44%, rgba(41,98,255,1) 100%)',
      }}
    ></Box>
  );
};

export default Divider;
