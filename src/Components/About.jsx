import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import { motion } from "framer-motion";

function About() {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        // paddingTop: { xs: "60px", sm: 0 },
        height: "100vh",
      }}
    >
      <Typography variant="h2">About me</Typography>
      <Stack
        direction={{ sm: "row" }}
        sx={{
          alignItems: "center",
          justifyContent: "space-around",
          padding: { xs: "30px", sm: 0 },
        }}
      >
        <Box
          component="img"
          src={"/Smiley face-pana.svg"}
          alt="about-img"
          sx={{
            width: { xs: "350px", sm: "300px", lg: "400px" },
            height: { sm: "300px", lg: "400px" },
          }}
        />
        <Stack
          spacing={2}
          sx={{
            width: { sm: "38%", lg: "35%" },
          }}
        >
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, incidunt mollitia facere ea minus harum velit earum,
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            ullam minima. Ea deleniti doloremque enim, blanditiis repudiandae
            autem illum cumque, saepe assumenda amet nam magni
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          width: { sm: "88%", lg: "80%" },
          padding: { xs: "30px", sm: 0 },
        }}
      >
        <Typography variant="h6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
          delectus qui beatae consequatur officiis aut, hic quas animi assumenda
          eum eligendi, ea sapiente nihil quis unde nesciunt magnam
          necessitatibus repudiandae. Nulla harum debitis quibusdam
          exercitationem aperiam! Ducimus delectus culpa placeat saepe
          architecto! Atque nostrum maxime ratione aperiam perferendis
          praesentium animi at. Harum consectetur unde ipsam rem quos aliquam
          cum sequi.
        </Typography>
      </Box>
    </Stack>
  );
}

export default About;
