import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
  AppBar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { appStore } from "../Store/appStore";
import { motion } from "framer-motion";

function MobileNav() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const { scrollToSection } = appStore();

  return (
    <>
      <AppBar id="mobileNav" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Gift
          </Typography>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => setisDrawerOpen(true)}
          >
            <MenuIcon fontSize="large" sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box sx={{ padding: "20px" }} align="center">
          <Toolbar>
            <IconButton
              edge="start"
              aria-label="close-icon"
              onClick={() => setisDrawerOpen(false)}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Toolbar>
          <Stack spacing={4}>
            <Typography
              onClick={() => scrollToSection("about")}
              sx={{
                cursor: "pointer",
              }}
              component={motion.p}
              whileHover={{
                textDecoration: "underline",
                color: "lightBlue",
                y: -4,
              }}
            >
              About
            </Typography>
            <Typography
              sx={{ cursor: "pointer" }}
              component={motion.p}
              onClick={() => scrollToSection("works")}
              whileHover={{
                textDecoration: "underline",
                color: "lightBlue",
                y: -4,
              }}
            >
              {" "}
              Works
            </Typography>
            <Typography
              sx={{ cursor: "pointer" }}
              component={motion.p}
              onClick={() => scrollToSection("contact")}
              whileHover={{
                textDecoration: "underline",
                color: "lightBlue",
                y: -4,
              }}
            >
              {" "}
              Contact
            </Typography>
            <a
              href="https://shorturl.at/vlHZe"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography>Resume</Typography>
            </a>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default MobileNav;
