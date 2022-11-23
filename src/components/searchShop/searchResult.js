import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pic1 from '../img/yakitori.jpg';
import pic2 from '../img/funamori.jpg';
import pic3 from '../img/nikubaru.jpg';
import '../../SearchResult.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function SearchResult(props) {
  console.log(__dirname);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f2b135',
        // contrastText: '#fff',
        contrastText: '#29384b',
      },
      secondary: {
        main: '#4B709A',
      },
    },
  });

  return (
    <div className='resultSearchShopContents'>
      <ThemeProvider theme={theme}>
        <p>この人数規模で利用実績のあるおすすめ店３選</p>
        {/* <div>{props.resultSearchShop[1]['name']}</div> */}
        <Stack direction='row' spacing={2} justifyContent='center'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component='img'
              height='140'
              image={pic1}
              alt='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Lizard
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component='img'
              height='140'
              image={pic2}
              alt='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Lizard
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component='img'
              height='140'
              image={pic3}
              alt='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Lizard
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        </Stack>
      </ThemeProvider>
    </div>
  );
}
