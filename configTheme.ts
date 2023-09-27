import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#4E4DA5",
      main: "#6B6AC1",
    },
    success: {
      light: "#469A5E",
      main: "#469A5E",
    },
    error: {
      light: "#A54348",
      main: "#6A1622",
    },
    neutral: {
      main: "#4E4DA5",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ['"Poppins"', "sans-serif"].join(","),
    button: {
      textTransform: "none",
      fontWeight: "normal",
    },
    h1: {
      fontSize: 32,
      fontWeight: 500,
    },
    h2: {
      fontSize: 24,
      fontWeight: 600,
    },
    h3: {
      fontSize: 24,
      fontWeight: 300,
    },
    h4: {
      fontSize: 18,
      fontWeight: 600,
    },
    h5: {
      fontSize: 16,
      fontWeight: 400,
    },
    h6: {
      fontSize: 14,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#8382DE",
          color: "#fff",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: `none`,
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected, &.Mui-selected:hover": {
            backgroundColor: "white",
          },
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      variants: [
        // variants will help you define the props given by Mui and the styles you want to apply for it
        {
          props: { variant: "outlined", disabled: true },
          style: {
            backgroundColor: "#FAFAFA",
          },
        },
      ],
    },
    MuiStepContent: {
      styleOverrides: {
        root: {
          borderLeft: "3px solid",
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderLeft: "3px solid",
        },
      },
    },
  },
});

// example create a new pallet color
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Badge" {
  interface BadgePropsColorOverrides {
    neutral: true;
  }
}

export default theme;
