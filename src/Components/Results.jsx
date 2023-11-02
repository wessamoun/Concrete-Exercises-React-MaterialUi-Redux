import { Grid,  Pagination,  Skeleton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dataSlice";
import ExerciseCard from "./ExerciseCard";

function Results(props) {
  const data = useSelector((state) => state.data.data);
  const searched = useSelector((state) => state.data.searched);
  const resultsPosition = useRef();
  const [results, setResult] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData('https://exercisedb.p.rapidapi.com/exercises'));
    
  }, []);
  useEffect(() => {
    setResult(data);
    console.log(results);
  }, [data]);
  useEffect(() => {
    setResult(searched);
  }, [searched]);
  
  const itemsPerPage = 6;
  const pageCount = Math.ceil(results.length / itemsPerPage);
  
  const [page, setPage] = React.useState(1);
  useEffect(() => {
    setPage(1);
    props.setResetPage(false)
  }, [props.resetPage]);
  const endOffset = page * itemsPerPage;
  const itemOffset = endOffset - itemsPerPage;
  const currentResults = results.slice(itemOffset, endOffset);

  const handleChange = (event, value) => {
    setPage(value);
    resultsPosition.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  };
  return (
    <>
      <Typography
        ref={resultsPosition}
        id = {"results"}
        mt={"50px"}
        fontWeight={"bold"}
        fontSize={{ xs: "25px", md: "50px" }}
      >
        Showing Results
      </Typography>
      {results.length === 0 ? (
        <>
          <Typography
        mt={"50px"}
        fontWeight={"bold"}
        fontSize={{ xs: "25px", md: "50px" }}
      >
        Sorry, No Results Found
      </Typography>
        </>
      ) : (
        <Grid container spacing={2}>
          {currentResults.map((result) => {
            return (
              <Grid
                key={result.id}
                item
                sm={12}
                md={6}
                lg={4}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <ExerciseCard
                  name={result.name}
                  bodyPart={result.bodyPart}
                  target={result.target}
                  gif={result.gifUrl}
                  id={result.id}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
      <Pagination
        size="large"
        onChange={handleChange}
        page={page}
        count={pageCount}
        sx={{ margin: "50px auto", width: "fit-content" }}
      />
    </>
  );
}

export default Results;
