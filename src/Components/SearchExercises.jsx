import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../redux/dataSlice";
import { Button, Stack, TextField, Typography } from "@mui/material";

function SearchExercises(props) {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const scroll = () => {
    window.scrollTo({
      top: 1500,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Typography
        variant="h2"
        align="center"
        mt={"100px"}
        fontWeight={"bold"}
        fontSize={{ xs: "25px", md: "50px" }}
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Stack mt={"50px"} direction={"row"} mb={"100px"}>
        <TextField
          id="outlined-basic"
          label="Search Exercise"
          variant="outlined"
          sx={{ flex: "1" }}
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        />
        <Button
          variant="contained"
          sx={{ mx: { xs: "auto", md: "0" } }}
          onClick={() => {
            dispatch(search(searchValue));
            scroll();
          }}
        >
          Search
        </Button>
      </Stack>
    </>
  );
}

export default SearchExercises;
