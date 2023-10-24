import React from "react";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Stack, Typography, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { search } from "../redux/dataSlice";

function Category(props) {
  const dispatch = useDispatch()
  const themee = useTheme();
  const categories = [
    "all",
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];
  const [items, setItems] = React.useState(categories);
  const scroll = () => {
    window.scrollTo({
      top: 1500,
      left: 0,
      behavior: "smooth",
    });
    props.setResetPage(true)
  };


  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
      <KeyboardArrowLeftIcon style={{marginTop:"110px", cursor:"pointer", fontSize:"40px"}} disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        Left
      </KeyboardArrowLeftIcon>
    );
  }
  
  function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
      <KeyboardArrowRightIcon style={{marginTop:"110px", cursor:"pointer", fontSize:"40px"}} disabled={isLastItemVisible} onClick={() => scrollNext()}>
        Right
      </KeyboardArrowRightIcon>
    );
  }

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((item) => (
          <Stack id={item} borderRadius={"10px"} justifyContent={"center"} alignItems={"center"} key={item} bgcolor={themee.palette.primary.main} width={"250px"} height={"250px"} mx={"25px"} sx={{cursor:"pointer", "&:hover": {scale:"1.1"}, transition:"0.3s"}} onClick={(e) => {dispatch(search(e.currentTarget.id)); scroll()}}>
            <FitnessCenterIcon fontSize="large"  color={"secondary"}/>
            <Typography  color={themee.palette.secondary.main} fontSize="large" fontWeight={"bold"} mt={"10px"}>{item.toUpperCase()}</Typography>
          </Stack>
      ))}
    </ScrollMenu>
  );
}




export default Category;
