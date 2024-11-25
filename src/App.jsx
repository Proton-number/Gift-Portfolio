import React, { lazy, Suspense } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import MobileNav from "./Components/MobileNav";
import { createTheme, ThemeProvider, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingComponent from "./Components/LoadingComponent";
import Home from "./Components/Home";
import SingleProject from "./Components/SingleProject";
import { motion } from "framer-motion";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: `"Fira Sans", sans-serif`,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {" "}
        <LoadingComponent />
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6 }}
        >
          <Nav />
          <MobileNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singleProject/:slug" element={<SingleProject />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
