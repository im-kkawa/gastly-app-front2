import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import img1 from '../img/yakitori.jpg';
import img2 from '../img/funamori.jpg';
import img3 from '../img/nikubaru.jpg';
import '../../SearchResult.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function SearchResult(props) {
  const resultSearchShop = props.resultSearchShop;
  const imgs = [img1, img2, img3];

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f2b135',
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
        <Stack direction='row' spacing={2} justifyContent='center'>
          {resultSearchShop.map((eachResultSearchShop, index) => {
            return (
              <Card sx={{ minWidth: 345, maxWidth: 345 }} key={index}>
                <CardMedia
                  component='img'
                  height='140'
                  image={imgs[index]}
                  alt='shop photo'
                />
                <CardContent>
                  <CardActions>
                    <Link
                      href={eachResultSearchShop['url']}
                      sx={{ m: 'auto' }}
                      color='secondary'
                    >
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                        sx={{ fontWeight: 'bold' }}
                      >
                        {eachResultSearchShop['name']}
                      </Typography>
                    </Link>
                  </CardActions>
                  <Rating
                    name='shop-ratingAverage'
                    defaultValue={eachResultSearchShop['ratingAverage']}
                    precision={0.1}
                    readOnly
                  />
                  <Typography variant='body2' color='text.secondary'>
                    {eachResultSearchShop['comments']}
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Link href={eachResultSearchShop['url']}>Link</Link>
                </CardActions> */}
              </Card>
            );
          })}
        </Stack>
      </ThemeProvider>
    </div>
  );
}
