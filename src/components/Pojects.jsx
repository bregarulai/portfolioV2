import { Grid, Typography } from '@mui/material';
import React from 'react';

import { projects } from '../../data';
import { ProjectCard } from '.';

const Pojects = () => {
  return (
    <Grid
      container
      rowSpacing={4}
      columnSpacing={{ xs: 1, sm: 2 }}
      justifyContent='center'
      alignItems='center'
    >
      <Grid item xs={12}>
        <Typography variant='h4' component='h3' gutterBottom>
          Projects
        </Typography>
      </Grid>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Grid>
  );
};

export default Pojects;
