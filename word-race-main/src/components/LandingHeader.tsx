import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Typewriter from 'typewriter-effect';
import Fab from '@mui/material/Fab';
import GamepadOutlinedIcon from '@mui/icons-material/GamepadOutlined';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

type Props = {};

const LandingHeader = (props: Props) => {
  return (
    <Card
      sx={{
        minWidth: 500,
        minHeight: 450,
        ':hover': {
          boxShadow: 20,
        },
      }}>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '15px',
        }}>
        <Typography sx={{ fontSize: 32, fontWeight: 600 }} variant="h3">
          <Typewriter
            options={{
              strings: [' Hey , All Welcome to the Word Race Game 🚀', 'Lets Play 🎮  Word Race Game 🚀'],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
        <Typography sx={{ fontSize: 24, marginTop: '25px' }} variant="h5" component="div">
          Here are some instructions which you need to follow.
        </Typography>
        <Typography sx={{ fontSize: 20, marginTop: '25px' }} variant="h4" component="div">
          These are the game levels which you need to follow first.
        </Typography>
        <Typography sx={{ marginTop: '25px' }} variant="h6" component="div">
          Level1 {bull} Words which has less than three characters.
        </Typography>
        <Typography sx={{ marginRight: '18px' }} variant="h6" component="div">
          Level2 {bull} {'  '}Words which has less than five characters.
        </Typography>
        <Typography sx={{ marginRight: '2px' }} variant="h6" component="div">
          Level3 {bull} Words which has more than five characters.
        </Typography>
        <Typography sx={{ marginTop: '20px' }} variant="body2">
          After Finishing the game Submit the game , Thank you! Now click on button to proceed further.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Fab variant="extended" color="primary" aria-label="add">
          <GamepadOutlinedIcon sx={{ mr: 1 }} />
          Let's play
        </Fab>
      </CardActions>
    </Card>
  );
};

export default LandingHeader;
