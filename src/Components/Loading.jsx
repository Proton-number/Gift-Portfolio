import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Stack } from "@mui/material";
import { superballs } from "ldrs";
import { useLocation } from "react-router-dom";

superballs.register();

// Default values shown

function LoadingComponent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout();
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <Box sx={{ height: "100vh", overflow: "hidden" }}>
          <Stack
            spacing={10}
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            component={motion.div}
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <l-superballs size="40" speed="1.4" color="black"></l-superballs>
          </Stack>
        </Box>
      )}
    </AnimatePresence>
  );
}

export default LoadingComponent;
