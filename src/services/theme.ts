"use client";
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    text: {
      primary: "#121212",
    },
  },
  typography: {
    fontFamily: "Satoshi, Roboto, Helvetica, Arial, sans-serif",
    allVariants: {
      color: "#121212",
      fontWeight: 500,
      fontSize: '14px'
    },
    h6: {
      fontSize: "1.125rem",
      marginBottom: "1rem",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          fontSize: "14px",
        },
      },
    },
  },
});
export default theme;
