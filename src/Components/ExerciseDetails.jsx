import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../redux/dataSlice";
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ExerciseDetails(props) {
  
  return (
    <>
      {props.exercise.length > 0 ? (
        <Box>
          <Stack
            direction={{ lg: "row" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              style={{ width: { sm: "250px", md: "500px" } }}
              src={props.exercise[0].gifUrl}
              alt={props.exercise[0].name}
            />
            <Stack>
              <Typography
                fontSize={"30px"}
                my={"20px"}
                textTransform={"capitalize"}
              >
                {props.exercise[0].name}
              </Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Instructions</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{pl: "50px", mt:"-30px"}}>
                  <Typography variant="ul" pl={"30px"}>
                    {props.exercise[0].instructions.map((item) => {
                      return <li key={item}>{item}</li>;
                    })}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Stack direction={"row"} alignItems={"center"} mt={"20px"} mb={"20px"}><AccessibilityNewIcon fontSize="large" sx={{mr:"15px",p: "10px", bgcolor:"black", color:"white", display:"flex", justifyContent:"center", alignItems:"center", width:"50px", height:"50px", borderRadius:"50%"} }/><Typography fontSize={"20px"} py={"5px"} textTransform={"capitalize"}>Body Part : {props.exercise[0].bodyPart}</Typography></Stack>
              <Stack direction={"row"} alignItems={"center"} mb={"20px"}><ModeStandbyIcon fontSize="large" sx={{mr:"15px",p: "10px", bgcolor:"black", color:"white", display:"flex", justifyContent:"center", alignItems:"center", width:"50px", height:"50px", borderRadius:"50%"} }/><Typography fontSize={"20px"} py={"5px"} textTransform={"capitalize"}>Target : {props.exercise[0].target}</Typography></Stack>
              <Stack direction={"row"} alignItems={"center"} mb={"20px"}><ControlPointIcon fontSize="large" sx={{mr:"15px",p: "10px", bgcolor:"black", color:"white", display:"flex", justifyContent:"center", alignItems:"center", width:"50px", height:"50px", borderRadius:"50%"} }/><Typography fontSize={"20px"} py={"5px"} textTransform={"capitalize"}>Secondary Muscles : {props.exercise[0].secondaryMuscles.join(" - ")}</Typography></Stack>
              <Stack direction={"row"} alignItems={"center"} mb={"20px"}><FitnessCenterIcon fontSize="large" sx={{mr:"15px",p: "10px", bgcolor:"black", color:"white", display:"flex", justifyContent:"center", alignItems:"center", width:"50px", height:"50px", borderRadius:"50%"} }/><Typography fontSize={"20px"} py={"5px"} textTransform={"capitalize"}>Equipment : {props.exercise[0].equipment}</Typography></Stack>
              
              
            </Stack>
          </Stack>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default ExerciseDetails;
