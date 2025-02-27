import React from "react";
import { AppBar, Toolbar, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { appStore } from "../Store/appStore";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { scrollToSection } = appStore();
  const location = useLocation();

  return (
    <AppBar
      component={motion.div}
      id="desktopNav"
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "4px",
      }}
      elevation={0}
    >
      <Toolbar>
        <Typography
          variant="h3"
          sx={{ flexGrow: 1, fontSize: { sm: "30px", lg: "40px" } }}
        >
          Gift
        </Typography>

        <Stack
          direction="row"
          sx={{ alignItems: "center", flexGrow: 0.2 }}
          spacing={{ sm: 8, lg: 14 }}
        >
          {location.pathname !== "/" && (
            <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
              <Typography
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
                Home
              </Typography>
            </Link>
          )}
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
            Contact
          </Typography>
          <a
            href="https://shorturl.at/vlHZe"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              component={motion.p}
              whileHover={{
                textDecoration: "underline",
                color: "lightBlue",
                y: -4,
              }}
            >
              Resume
            </Typography>
          </a>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
