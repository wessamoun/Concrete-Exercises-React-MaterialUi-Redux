import { Stack, Typography } from '@mui/material'
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

import React from 'react'

function Footer() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} gap={"15px"} bgcolor={"black"} color={"white"} p={"15px"}>
      <Stack alignItems={"center"} direction={"row"} justifyContent={"center"} gap={"15px"}><FitnessCenterIcon/><Typography> Concrete Exercises</Typography></Stack>
      <Typography>Copyright © 2023 - Coded by Concrete Code</Typography>
    </Stack>
  )
}

export default Footer