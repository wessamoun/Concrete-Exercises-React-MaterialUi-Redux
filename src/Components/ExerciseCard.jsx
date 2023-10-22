import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ExerciseCard(props) {
  return (
    <Link to={"/exercise/" + props.id} style={{textDecoration:"none" , color: "black"} }>
      <Box
        display={"flex"}
        flexDirection={"column"}
        mx={"auto"}
        width={{ sm: "300px", md: "400px" }}
        borderTop={"3px solid black"}
        mb={"10px"}
        mt={"50px"}
        sx={{
          transition: "0.3s",
          cursor: "pointer",
          "&:hover": { scale: "1.1" },
        }}
      >
        <img style={{ width: "100%" }} src={props.gif} alt={props.name} />
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"5px"}
        >
          <Stack direction={"row"} gap={"10px"}>
            <Typography
              variant="span"
              fontSize={{ sm: "16px", md: "18px" }}
              bgcolor={"black"}
              p={"5px 10px"}
              borderRadius={"10px"}
              color={"white"}
              textTransform={"capitalize"}
              
            >
              {props.bodyPart}
            </Typography>
            <Typography
              variant="span"
              fontSize={{ sm: "16px", md: "18px" }}
              bgcolor={"black"}
              p={"5px 10px"}
              borderRadius={"10px"}
              color={"white"}
              textTransform={"capitalize"}
            >
              {props.target}
            </Typography>
          </Stack>
          <Typography
            variant="p"
            fontWeight={"bold"}
            fontSize={{ sm: "16px", md: "18px" }}
            textTransform={"capitalize"}
          >
            {props.name}
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
}

export default ExerciseCard;
