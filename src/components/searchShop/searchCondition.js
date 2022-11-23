import * as React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchCondition(props) {
  const url = '/shops/test';

  const [area, setArea] = useState('');

  const onChangeSetArea = (event) => {
    setArea(event.target.value);
  };

  const onClickSearchShopIsSubmitted = () => {
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        props.setSearchShopIsSubmitted(true);
        props.setResultSearchShop(data);
      })
      .catch((err) => {
        console.log(err);
        console.log('err');
      });
  };

  return (
    <div>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
        <Stack direction='row' spacing={2}>
          <InputLabel id='demo-simple-select-standard-label'>エリア</InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={area}
            onChange={onChangeSetArea}
            label='Area'
          >
            <MenuItem value={1}>大手町</MenuItem>
            <MenuItem value={2}>みなとみらい</MenuItem>
            <MenuItem value={3}>木場</MenuItem>
          </Select>
          <Box
            component='form'
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete='off'
          >
            <TextField id='standard-basic' label='人数' variant='standard' />
          </Box>
          {/* <Button variant='outlined' startIcon={<SearchIcon />}>
            検索
          </Button> */}
          <Button
            variant='contained'
            startIcon={<SearchIcon />}
            onClick={onClickSearchShopIsSubmitted}
          >
            検索
          </Button>
        </Stack>
      </FormControl>
    </div>
  );
}
