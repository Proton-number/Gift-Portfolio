import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { sanityStore } from "../Store/sanityStore";
import { Box, Typography, Stack } from "@mui/material";
import { PortableText } from "@portabletext/react";
import Loading from "../Components/Loading";
import { appStore } from "../Store/appStore";

function SingleProject() {
  const { slug } = useParams();
  const { singleProject, fetchSingleProject } = sanityStore();
  const { customComponents } = appStore();

  useEffect(() => {
    fetchSingleProject(slug);
  }, [slug, fetchSingleProject]);

  if (!singleProject) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f2ecff",
          color: "black",
          minHeight: "100vh",
        }}
      >
        <Loading />
      </Box>
    );
  }

  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      <Typography variant="h3">{singleProject?.title}</Typography>
      <PortableText value={singleProject.body} components={customComponents} />
    </Stack>
  );
}

export default SingleProject;
