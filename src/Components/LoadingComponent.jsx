import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography, Stack } from "@mui/material";
import { tailChase } from "ldrs";

tailChase.register();

// Default values shown

function LoadingComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
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
              backgroundColor: "black",
            }}
          >
            {/* Animate Typography first */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -100 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <Typography variant="h3" sx={{ color: "white" }}>
                Ukpoweh
              </Typography>
            </motion.div>

            {/* Animate loader after text exits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }} // Show loader after text exits
            >
              <l-tail-chase size="40" speed="1.75" color="white"></l-tail-chase>
            </motion.div>
          </Stack>
        </Box>
      )}
    </AnimatePresence>
  );
}

export default LoadingComponent;
