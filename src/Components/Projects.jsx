import React, { useState, useEffect } from "react";
import { Typography, Stack, Button, Box, Paper, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { sanityStore } from "../Store/sanityStore";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Projects() {
  const { projects, fetchProjects } = sanityStore();
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    fetchProjects(); // Fetch project posts when component loads
  }, [fetchProjects]);

  return (
    <Stack
      spacing={{ xs: 4, sm: 3, lg: 10 }}
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h2">Works</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 p-6 ">
        {projects &&
          projects.map((project, index) => (
            <Stack  key={index}>
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
                  sm: "300px", // Fixed width on small screens
                  md: "600px", // Adjust width for medium screens
                },
                height: {
                  xs: "300px", // Adjust height for small screens
                  sm: "220px", // Adjust height for medium screens
                  lg: "400px",
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
                to={`/singleProject/${project?.slug?.current}`}
                key={project?.slug?.current}
              >
                <Button
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    width: { xs: "50%", lg: "40%" },
                    textTransform: "none",
                    padding: "10px",
                    borderRadius: "25px",
                    backgroundColor: "#7cb4c4",
                  }}
                  variant="contained"
                  disableElevation
                  component={motion.button}
                  whileHover={{ y: -2 }}
                >
                  Learn More
                </Button>
              </Link>
            </Stack>
          </Stack>
          ))}
      </div>
    </Stack>
  );
}

export default Projects;
