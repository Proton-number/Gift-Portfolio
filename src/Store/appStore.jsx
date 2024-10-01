import { create } from "zustand";
import emailjs from "@emailjs/browser";
import { Box, Typography } from "@mui/material";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client";


// Initialize builder
const builder = imageUrlBuilder(sanityClient);

// Define urlFor function
const urlFor = (source) => builder.image(source);

export const appStore = create((set) => ({
  scrollToSection: (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  },

  //for contact info
  error: null,
  name: "",
  setName: (name) => set({ name }),
  email: "",
  setEmail: (email) => set({ email }),
  message: "",
  setMessage: (message) => set({ message }),
  sendEmail: async (name, email, message) => {
    set({ sending: true });
    if (!name || !email || !message) {
      return;
    }
    try {
      //template parameters to send the email
      const templateParams = {
        user_name: name,
        user_email: email,
        message: message,
      };
      await emailjs.send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );
      set({ name: "", email: "", message: "", open: true });
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      set({ sending: false });
    }
  },

  //for the loading animation for button
  sending: false,

  //for snackbar
  open: false,
  handleClose: (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    set({ open: false });
  },

  //custom componponents for block
  customComponents: {
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
                width: { xs: "320px", sm: "450px", lg: "500px" },
                height: { lg: "400px" },
              }}
            />
          </Box>
        );
      },
      quoteWithImage: ({ value }) => {
        const imageUrl = builder
          .image(value.image.asset)
          .width(1000)
          .height(1000)
          .url();
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "20px",
              margin: "20px 0",
            }}
          >
            <Typography
              component="blockquote"
              variant="body1"
              sx={{
                fontStyle: "italic",
                textAlign: "left",
                width: "30%",
              }}
            >
              "{value.quote}"
            </Typography>
            <Box
              component="img"
              src={imageUrl}
              alt="Quote image"
              sx={{
                width: { xs: "150px", sm: "200px", lg: "550px" },
                height: { xs: "150px", sm: "200px", lg: "550px" },
                borderRadius: "8px",
              }}
            />
          </Box>
        );
      },
    },
    block: {
      bullet: ({ children }) => (
        <Box component="li" sx={{ marginBottom: "8px", width: "80%" }}>
          {children}
        </Box>
      ),
      normal: ({ children }) => (
        <Box sx={{ width: "80%", margin: "auto" }}>
          <Typography variant="h6" sx={{ textAlign: "justify" }}>
            {children}
          </Typography>
        </Box>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <Box
          component="ul"
          sx={{ paddingLeft: "1.5rem", margin: "1rem 0", width: "60%" }}
        >
          {children}
        </Box>
      ),
      number: ({ children }) => (
        <Box
          component="ol"
          sx={{ paddingLeft: "1.5rem", margin: "1rem 0", width: "80%" }}
        >
          {children}
        </Box>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <Box component="li" sx={{ marginBottom: "0.5rem" }}>
          <Typography variant="body1">{children}</Typography>
        </Box>
      ),
      number: ({ children }) => (
        <Box component="li" sx={{ marginBottom: "0.5rem" }}>
          <Typography variant="body1">{children}</Typography>
        </Box>
      ),
    },
  },
}));
