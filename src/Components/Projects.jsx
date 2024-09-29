import React, { useState, useEffect } from "react";
import { Typography, Stack, Button, Box, Paper, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { sanityStore } from "../Store/sanityStore";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Projects() {
  const { projects, fetchProjects } = sanityStore();
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    fetchProjects(); // Fetch blog posts when component loads
  }, [fetchProjects]);

  return (
    <Stack
      spacing={{ sm: 3, lg: 10 }}
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h2">Works</Typography>
      <Grid
        container
        spacing={{ xs: 8, lg: 18 }} // Adjust this for better spacing between grid items
        justifyContent="center"
      >
        {projects &&
          projects.map((project, index) => (
            <Grid key={index} xs={12} sm={6} md={6} lg={6}>
              <Stack spacing={4}>
                <Paper
                  elevation={hoveredProject === index ? 10 : 4} // Change elevation on hover
                  onMouseEnter={() => setHoveredProject(index)} // Set hover state
                  onMouseLeave={() => setHoveredProject(null)}
                  component={motion.div}
                  sx={{
                    overflow: "hidden",
                    cursor: "pointer",
                    borderRadius: "10px",
                    width: {
                      xs: "100%", // Full width on small screens
                      sm: "450px", // Fixed width on small screens
                      md: "600px", // Adjust width for medium screens
                    },
                    height: {
                      xs: "300px", // Adjust height for small screens
                      sm: "400px", // Adjust height for medium screens
                    },
                  }}
                >
                  {project?.mainImage && (
                    <Box
                      component={motion.img}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      src={project?.mainImage?.asset?.url}
                      alt={project?.mainImage?.alt}
                    />
                  )}
                </Paper>
                <Stack spacing={2}>
                  <Typography variant="h6">{project?.title}</Typography>
                  <Divider />
                  <Typography variant="subtitle2">
                    {project?.description}
                  </Typography>
                  <Link
                    to={"/singleProject/" + project?.slug?.current}
                    key={project?.slug?.current}
                  >
                    <Button
                      endIcon={<ArrowRightAltIcon />}
                      sx={{
                        width: "40%",
                        textTransform: "none",
                        padding: "10px",
                        borderRadius: "25px",
                        backgroundColor: "#7cb4c4",
                      }}
                      variant="contained"
                      disableElevation
                    >
                      Learn More
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Grid>
          ))}
      </Grid>
    </Stack>
  );
}

export default Projects;