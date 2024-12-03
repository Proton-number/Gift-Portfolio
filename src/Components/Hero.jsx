import React from "react";
import { Typography, Stack, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { appStore } from "../Store/appStore";

function Hero() {
  const { scrollToSection } = appStore();
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: { sm: "50px", lg: 0 },
        paddingBottom: { xs: "80px", sm: 0 },
        minHeight: "100vh",
      }}
    >
      <>
        <Box
          component="img"
          src={"/Visual data-cuate.svg"}
          alt="hero-img"
          sx={{ width: { sm: "400px", lg: "400px" }, height: { sm: "400px" } }}
        />
      </>
      <Stack
        sx={{
          textAlign: { xs: "center", lg: "initial" },
          alignItems: { xs: "center", lg: "initial" },
        }}
        spacing={{ xs: 1, lg: 2 }}
      >
        <Typography variant="h4">Hey, I'm</Typography>
        <Typography sx={{ fontWeight: "bold" }} variant="h2">
          Gift Ukpoweh{" "}
        </Typography>
        <Typography sx={{ opacity: "70%" }} variant="h6">
          Data Scientist, Machine Learning Engineer, and Technical Writer
        </Typography>
        <Button
          onClick={() => scrollToSection("contact")}
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "#7cb4c4",
            width: { xs: "40%", sm: "20%" },
          }}
          disableElevation
          component={motion.button}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          Contact Info
        </Button>
      </Stack>
    </Stack>
  );
}

export default Hero;
