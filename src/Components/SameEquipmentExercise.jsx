import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "react-horizontal-scrolling-menu/dist/styles.css";
import ExerciseCard from "../Components/ExerciseCard";
import { useSelector } from "react-redux";

function SameEquipmentExercise(props) {
  const data = useSelector((state) => state.data.data);
  const [items, setItems] = useState([]);
  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      <KeyboardArrowLeftIcon
        style={{ marginTop: "110px", cursor: "pointer", fontSize: "40px" }}
        disabled={isFirstItemVisible}
        onClick={() => scrollPrev()}
      >
        Left
      </KeyboardArrowLeftIcon>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      <KeyboardArrowRightIcon
        style={{ marginTop: "110px", cursor: "pointer", fontSize: "40px" }}
        disabled={isLastItemVisible}
        onClick={() => scrollNext()}
      >
        Right
      </KeyboardArrowRightIcon>
    );
  }
  useEffect(() => {
    props.exercise.length > 0 &&
      setItems(data.filter((e) => e.equipment === props.exercise[0].equipment).slice(0,10));
  }, [props.exercise]);
  return (
    <>
      {items.length > 0 && (
        <>
          <Typography variant="h4" textTransform={"capitalize"} mt={"50px"}>
            Some Similar Equipment exercises{" "}
          </Typography>
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {items.map((item) => (
              <Box key={item.name} width={{ xs: "300px", md: "450px" }} onClick={(e) => window.scrollTo({top:0,behavior:"smooth"})}>
                <ExerciseCard
                  name={item.name}
                  bodyPart={item.bodyPart}
                  target={item.target}
                  gif={item.gifUrl}
                  id={item.id}
                />
              </Box>
            ))}
          </ScrollMenu>
        </>
      )}
    </>
  );
}

export default SameEquipmentExercise;
