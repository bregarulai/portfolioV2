import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { blue } from '@mui/material/colors';

import hero from '../../public/hero.png';

const color = blue.A700;

const Hero = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2 }}
      justifyContent='center'
      alignItems='center'
    >
      <Grid item xs={12} sm={6}>
        <Typography variant='h5' component='h2' gutterBottom>
          Hello There, I am
          <br />
          <Typography
            sx={{ color: color }}
            variant='h4'
            component='span'
            gutterBottom
          >
            Flavio Aquino.
          </Typography>
          <br />I love experimenting with the web.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Image src={hero} height={400} width={400} alt='hero' />
      </Grid>
    </Grid>
  );
};

export default Hero;
