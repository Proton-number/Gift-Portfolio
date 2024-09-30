import { create } from "zustand";
import emailjs from "@emailjs/browser";

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
}));
