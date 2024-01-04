import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Gallery from "../gallery/gallery";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import {
  getImageData,
} from "../../store/action/imageSearchAction";
import { categories } from "../../constants/searchConstants";

const Search = () => {
  const [category, setCategory] = useState("movies");

  let storeData = useSelector (state=>state?.data);
  const [data, setData] = useState(storeData);

  const [useSearch, setUseSearch] = useState(false);
   
  const dispatch = useDispatch();

  function handleInputChange(text) {
    
    if(categories.includes(text)){
      setCategory(text);
      setUseSearch(false);
      dispatch(getImageData(text));
    }else{
      setUseSearch(true);
      setCategory(text);
    }
  }

  useEffect(() => {
    if(categories.includes(category)){
      if(!storeData){
        dispatch(getImageData(category));
      }else if(storeData && !storeData[category]){
        dispatch(getImageData(category));
      }
      setData(storeData)
    }
    
  }, [category]);

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
          onChange={(event) => handleInputChange(event.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton
                color="primary"
                aria-label="search location"
                position="end"
                disabled
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
          paddingTop: 5,
        }}
      >
        <a>Pupoular Searches</a>
        <Button variant="outlined" onClick={() => setCategory("festivals")}>
          Festivals
        </Button>
        <Button variant="outlined" onClick={() => setCategory("mountains")}>
          Mountains
        </Button>
        <Button variant="outlined" onClick={() => setCategory("corals")}>
          Corals
        </Button>
        <Button variant="outlined" onClick={() => setCategory("food")}>
          Food
        </Button>
      </Stack>
      <Gallery category={category} useSearch={useSearch}></Gallery>
    </div>
  );
};

export default Search;
