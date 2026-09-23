import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f766e",
      light: "#14b8a6",
      dark: "#134e4a",
      "50": "#ecfdf5",
      "100": "#ccfbf1",
    },
    secondary: {
      main: "#f59e0b",
      light: "#fbbf24",
      dark: "#b45309",
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  typography: {
    fontFamily: '"Noto Sans JP", "Helvetica Neue", Arial, sans-serif',
    h1: { fontSize: "2rem", fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 },
    h2: { fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.3 },
    h3: { fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.4 },
    body1: { lineHeight: 1.6 },
    body2: { lineHeight: 1.6 },
    caption: { lineHeight: 1.4 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:focus-visible": {
            outline: "2px solid #0f766e",
            outlineOffset: 2,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation0: {
          border: "1px solid #E0E0E0",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          transition: "background-color 0.15s ease",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "#FAFAFA",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-root": {
            fontWeight: 500,
            "&.Mui-selected": {
              backgroundColor: "#0f766e",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#134e4a",
              },
            },
          },
        },
      },
    },
  },
});

export default theme;
