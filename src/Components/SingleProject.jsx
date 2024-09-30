import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { sanityStore } from "../Store/sanityStore";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client";
import { Box, Typography, Stack } from "@mui/material";
import { PortableText } from "@portabletext/react";
import Loading from "../Components/Loading";

const builder = imageUrlBuilder(sanityClient);

function SingleProject() {
  const { slug } = useParams();
  const { singleProject, fetchSingleProject } = sanityStore();

  useEffect(() => {
    fetchSingleProject(slug);
  }, [slug, fetchSingleProject]);

  // STYLING THE CONTENT IN BLOCK CONTENT
  const customComponents = {
    types: {
      image: ({ value }) => {
        const imageUrl = builder.image(value.asset).width(400).url(); // Adjust width as needed
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={imageUrl}
              alt={value.alt}
              sx={{
                width: { xs: "320px", sm: "450px", lg: "900px" },
                height: "auto",
              }}
            />
          </Box>
        );
      },
    },
    block: {
      normal: ({ children }) => (
        <Box sx={{ width: "80%", margin: "auto" }}>
          <Typography
            variant="h6"
            sx={{ textAlign: "justify" }} // Add the style to justify the text
          >
            {children}
          </Typography>
        </Box>
      ),
    },
  };

  if (!singleProject) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f2ecff",
          color: "black",
          height: "100vh",
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
