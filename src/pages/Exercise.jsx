import React, { useEffect, useState } from "react";
import ExerciseDetails from "../Components/ExerciseDetails";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../redux/dataSlice";
import ExerciseVideo from "../Components/ExerciseVideo";
import SameTargetExercises from "../Components/SameTargetExercises";
import SameEquipmentExercise from "../Components/SameEquipmentExercise";

function Exercise() {
  const exercises = useSelector((state) => state.data.data);
  const id = useParams().id;
  const dispatch = useDispatch();
  const [exercise, setExercise] = useState([]);
  useEffect(() => {
    dispatch(fetchData('https://exercisedb.p.rapidapi.com/exercises'));
  }, []);
  useEffect(() => {
    setExercise(exercises.filter((exercise) => exercise.id === id));
  }, [exercises,id]);
  return (
    <>
      <ExerciseDetails exercise={exercise}/>
      <ExerciseVideo exercise={exercise}/>
      <SameTargetExercises exercise={exercise}/>
      <SameEquipmentExercise exercise={exercise}/>
    </>
  );
}

export default Exercise;
