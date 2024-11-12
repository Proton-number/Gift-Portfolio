import React, { lazy, Suspense } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import MobileNav from "./Components/MobileNav";
import { createTheme, ThemeProvider, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingComponent from "./Components/LoadingComponent";

//lazy loading
const SingleProject = lazy(() => import("./Components/SingleProject"));
const Home = lazy(() => import("./Components/Home"));

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
        {/* Move Router here to wrap the entire app */}
        <LoadingComponent />
        <Box>
          <Nav />
          <MobileNav />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/singleProject/:slug" element={<SingleProject />} />
            </Routes>
          </Suspense>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
