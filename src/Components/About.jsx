import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import { motion } from "framer-motion";

function About() {
  return (
    <Stack
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
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
          component={motion.div}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          spacing={2}
          sx={{
            width: { sm: "38%", lg: "35%" },
          }}
        >
          <Typography>
            I am a certified Data Scientist and Machine Learning Engineer with
            2+ years of freelancing experience, specializing in predictive
            modeling, data mining, and Python. I also teach coding to learners
            of all ages, using Scratch and Python, and currently tutor with
            Coding Kids Africa.
          </Typography>
          <Typography>
            I have developed a variety of innovative machine learning systems,
            from predicting Premier League match outcomes to building web apps
            that support farmers in maximizing crop yield. My expertise spans
            multiple areas of data science, including Deep Learning, Natural
            Language Processing (NLP), Computer Vision (CV), and Generative AI.
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
          I am also an experienced technical writer, consistently producing
          articles on machine learning and AI on Medium. My articles have gained
          significant attention, ranking on Google’s search results, and have
          helped many in the data science community to understand complex topics
          in a simpler, more approachable way. With a strong foundation in
          Python and Data Science and AI tools such as TensorFlow, PyTorch,
          Scikit-learn, Beautiful Soup, Microsoft Excel, PostgreSQL, Tableau,
          and other AI development technologies, I am constantly expanding my
          skill set, working on cutting-edge technologies to drive meaningful
          change.
        </Typography>
      </Box>
    </Stack>
  );
}

export default About;
