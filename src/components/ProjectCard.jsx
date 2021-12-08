import { GitHub } from '@mui/icons-material';
import { Button, Grid, Link, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';
import { Box, maxWidth } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import theme from '../theme';

const ProjectCard = ({ project }) => {
  return (
    <>
      <Grid item xs={12} md={6} sx={{ alignSelf: 'flex-start' }}>
        <Box>
          <Typography variant='h5' component='h4'>
            {project.title}
          </Typography>
          <Box sx={{ display: 'flex', my: theme.spacing(2) }}>
            {project.links.map((link, index) => (
              <Link
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  background: teal[200],
                  py: theme.spacing(0.7),
                  px: theme.spacing(2),
                  textDecoration: 'none',
                  color: theme.palette.primary.contrastText,
                  borderRadius: theme.spacing(1),
                  width: 'max-content',
                  '&:last-child': {
                    marginLeft: theme.spacing(2),
                  },
                }}
                key={index}
                href={link.link}
              >
                <Box sx={{ marginRight: theme.spacing(1) }} component='span'>
                  {link.icon}
                </Box>
                <Box component='span'>{link.name}</Box>
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              [theme.breakpoints.down('md')]: {
                maxWidth: theme.spacing(60),
              },
            }}
          >
            <Typography variant='body1' component='span'>
              {project.desc}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', my: theme.spacing(1), flexWrap: 'wrap' }}>
            {project.stack.map((stack, index) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  background: teal[200],
                  py: theme.spacing(0.7),
                  px: theme.spacing(2),
                  my: theme.spacing(1),
                  color: theme.palette.primary.contrastText,
                  borderRadius: theme.spacing(1),
                  marginRight: theme.spacing(2),
                  width: 'max-content',
                  //   '&:first-child': {
                  //     marginLeft: 0,
                  //   },
                }}
                component='span'
                key={index}
              >
                {stack}
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Image src={project.url} height={350} width={500} alt='hero' />
      </Grid>
    </>
  );
};

export default ProjectCard;
