import { GitHub, Laptop } from '@mui/icons-material';

export const projects = [
  {
    id: 1,
    title: 'Project 1',
    desc: 'This is a random project I am using to illustrate in my video. This is channel overreacted and I hope you are enjoying this video. Make sure you like and comment if you have any doubt.',
    links: [
      {
        name: 'Github',
        link: 'linkaddress',
        icon: <GitHub sx={{ display: 'flex' }} />,
      },
      {
        name: 'Demo',
        link: 'demoaddress',
        icon: <Laptop sx={{ display: 'flex' }} />,
      },
    ],
    stack: ['NextJs', 'React', 'MongoDb', 'NodeJs'],
    url: '/project1.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    desc: 'This is a random project I am using to illustrate in my video. This is channel overreacted and I hope you are enjoying this video. Make sure you like and comment if you have any doubt.',
    links: [
      {
        name: 'Github',
        link: 'linkaddress',
        icon: <GitHub sx={{ display: 'flex' }} />,
      },
      {
        name: 'Demo',
        link: 'demoaddress',
        icon: <Laptop sx={{ display: 'flex' }} />,
      },
    ],
    stack: ['NextJs', 'React', 'MongoDb', 'NodeJs'],
    url: '/project2.jpg',
  },
  {
    id: 3,
    title: 'Project 3',
    desc: 'This is a random project I am using to illustrate in my video. This is channel overreacted and I hope you are enjoying this video. Make sure you like and comment if you have any doubt.',
    links: [
      {
        name: 'Github',
        link: 'linkaddress',
        icon: <GitHub sx={{ display: 'flex' }} />,
      },
      {
        name: 'Demo',
        link: 'demoaddress',
        icon: <Laptop sx={{ display: 'flex' }} />,
      },
    ],
    stack: ['NextJs', 'React', 'MongoDb', 'NodeJs'],
    url: '/project3.jpg',
  },
];
