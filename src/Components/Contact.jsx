import React, { useEffect, useState } from "react";
import { Typography, Stack, TextField, Snackbar } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { appStore } from "../Store/appStore";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { useBattery } from "@uidotdev/usehooks";
("date-");

function Contact() {
  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    sending,
    sendEmail,
    open,
    handleClose,
    formattedDate,
    updateFormattedDate,
  } = appStore();
  const { level } = useBattery();

  // Update the formattedDate whenever the component mounts
  useEffect(() => {
    updateFormattedDate();
  }, [updateFormattedDate]);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const validateEmail = (email) => {
    setEmail(email);
    setIsEmailValid(emailRegex.test(email));
  };
  return (
    <Stack
      spacing={9}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "20px", sm: "50px", lg: "80px" },
      }}
    >
      <Typography variant="h2">Contact me</Typography>
      <Stack spacing={{ lg: 70 }} direction={{ lg: "row" }}>
        {/* Contact Form Section */}
        <Stack>
          <Stack direction="row" spacing={10}>
            <TextField
              variant="standard"
              type="name"
              placeholder="Your Name"
              color="primary"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
            <TextField
              error={!isEmailValid}
              variant="standard"
              type="email"
              placeholder="Your Email"
              color="primary"
              name="user_email"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              fullWidth
              helperText={
                !isEmailValid && (
                  <Typography sx={{ color: "#cc0000" }} variant="subtitle3">
                    Please enter a valid email address
                  </Typography>
                )
              }
            />
          </Stack>
          <TextField
            variant="standard"
            type="text"
            placeholder="Your Message"
            multiline
            color="primary"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            sx={{ mt: 3 }} // Margin to separate the input fields
          />
          <LoadingButton
            onClick={() => sendEmail(name, email, message, open)}
            loading={sending}
            variant="contained"
            sx={{
              textTransform: "none",
              mt: 2, // Margin to create spacing between the button and input
              width: "30%", // Adjust the button width
              backgroundColor: "#7cb4c4",
            }}
            component={motion.button}
            whileHover={{ y: -2 }}
            disableElevation
          >
            Send
          </LoadingButton>
        </Stack>

        {/* Contact Details Section */}
        <Stack
          sx={{ width: { lg: "40%" }, paddingTop: { xs: "50px", lg: 0 } }}
          spacing={2}
        >
          <Typography variant="h3">Contact Details</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <EmailIcon />
            <a
              href="mailto:ukpowehgift@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <Typography sx={{ color: "black" }}>
                ukpowehgift@gmail.com
              </Typography>
            </a>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <GitHubIcon />{" "}
            <a
              href="https://github.com/Ukpoweh"
              style={{ textDecoration: "none" }}
            >
              <Typography sx={{ color: "black" }}>Github</Typography>
            </a>
          </Stack>
          <Typography> Battery: {level * (100.0).toFixed()}%</Typography>
          <Typography> {formattedDate}</Typography>
        </Stack>
      </Stack>
      <Snackbar
        open={open}
        autoHideDuration={2800}
        onClose={handleClose}
        message="Message sent"
        sx={{ width: { xs: "30%", sm: "50%", lg: "fit-content" } }}
      />
    </Stack>
  );
}

export default Contact;
