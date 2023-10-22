import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import heroImage from "../assets/images/john-fornander-TAZoUmDqzXk-unsplash.webp";
function Hero() {
  const themee = useTheme();
  const scroll = () => {
    window.scrollTo({
      top: 1500,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box position={"relative"}>
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        <Box
          sx={{
            flexBasis: { xs: "100%", md: "50%" },
            mt: { xs: "200px", md: "0" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h2" fontWeight="bold" mb={"50px"}>
            Fitness Club
          </Typography>
          <Typography variant="h3">
            Sweat, Smile <br />
            And Repeat
          </Typography>
          <Typography variant="p" fontSize={"14px"}>
            Check out the most effective exercises personalized to you
          </Typography>
          <Button variant="contained" sx={{ mt: "20px", display:"block", mx:{xs:"auto", md: "0"} }} onClick={scroll}>
            Explore Exercises
          </Button>
        </Box>
        <Box
          sx={{
            flexBasis: { md: "50%" },
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            style={{ width: "500px", zIndex: "-1",borderRadius:"0 0 30% 30%" }}
            src={heroImage}
            alt={"heroImage"}
          />
        </Box>
      </Stack>
      <Typography
        variant="p"
        fontSize={"200px"}
        position={"absolute"}
        bottom={"-70px"}
        zIndex={"-1"}
        sx={{opacity:{md:"0.2"}, display:{xs:"none", md:"block"}}}
      >
        Exercises
      </Typography>
    </Box>
  );
}

export default Hero;
