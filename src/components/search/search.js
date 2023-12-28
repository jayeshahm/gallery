import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Gallery from "../gallery/gallery";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GetImageData from "../../service/getImageData";

import { useDispatch } from 'react-redux'
import { setImageData } from "../../store/action/imageSearchAction";

const Search = () => {

 let data = GetImageData('festivals');
 const dispatch = useDispatch();
 
 dispatch(setImageData(data));


  return (
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          paddingTop: 5,
          paddingLeft: 50,
        }}
      >
        <TextField
          fullWidth
          label="Search Images"
          id="fullWidth"
          InputProps={{
            endAdornment: (
              <IconButton
                color="primary"
                aria-label="search location"
                position="end"
              >
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 5
        }}
      >
        <a>Pupoular Searches</a>
        <Button variant="outlined">Festivals</Button>
        <Button variant="outlined">Mountains</Button>
        <Button variant="outlined">Corals</Button>
        <Button variant="outlined">Food</Button>
      </Stack>
      <Gallery ></Gallery>
    </div>
  );
};

export default Search;
