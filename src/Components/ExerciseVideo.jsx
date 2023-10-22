import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Stack, Typography } from '@mui/material';


const ExerciseVideo = (props) => {
  const [videos,setVideos] = useState([])
const fetchV = async () => {

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  // url: './youtube.json',
  params: {
    q: props.exercise[0].name,
    part: 'snippet,id',
    maxResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  const data = response.data.items.slice(0,3)
	setVideos(data)
} catch (error) {
	console.error(error);
}
}
useEffect(() => {
  // fetchV()
  props.exercise.length > 0 && fetchV() ;

},[props.exercise])


return (
  <>
  {videos.length > 0 && 
  <>
  <Typography variant="h4" textTransform={"capitalize"} mt={"50px"}>Watch {props.exercise[0].name} exercise videos</Typography>
  <Stack direction={{lg: "row"}} gap={"50px"} justifyContent={"center"} mt={"50px"} alignItems={"center"}>
    {videos.map((item) => (
      <a key={item.id.videoId} href={"https://www.youtube.com/watch?v="+item.id.videoId} target='_blank' rel='noreferrer' style={{textDecoration:"none", color:"black", fontSize:"20px"}}>
          <img src={item.snippet.thumbnails.medium.url} alt={item.id.videoId}/>
          <p >{item.snippet.title}</p>
        </a>
    ))}
    </Stack>
  </>
  }
    </>
);
}

export default ExerciseVideo