import { createTheme } from "@material-ui/core";

export const colors = {
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  STATUS_GREEN: "#00C3A9",
  STATUS_RED: "#D32F2F",
  STATUS_BLUE: "#0078FF",

  MAIN_BACKGROUND_WHITE: "#FAFBFC", //"#F9FAFB",
  MAIN_BACKGROUND_GREY: "#F4F5F7",
  MAIN_BACKGROUND_BLACK: "#242A3F",
  SIDEBAR_BACKGROUND_BLACK: "#141C2D",
  SIDEBAR_SELECTED_BACKGROUND: "#28304C",

  MAIN_TEXT_BLACK: "#121212",
  MAIN_TEXT_WHITE: "#FFFFFF",

  MAIN_TEXT_1_DARK_MODE: "#0CA6B0",
  MAIN_TEXT_2_DARK_MODE: "#809FB8",
  MAIN_TEXT_3_DARK_MODE: "#809FB8",

  BOX_BORDER_COLOR: "#F6F6F6",
  STATUS_GREY: "#676767",
  ICON_GREY: "#9ca3af",

  PAPER_GREY_DARK: "#3d3d3d",

  DIVIDER_GREY_LIGHT: "#e5e7eb",
  DIVIDER_GREY_DARK: "#282828",

  PRIMARY_MAIN: "#8174F7",
  PRIMARY_LIGHT: "#9a90f9",
  PRIMARY_DARK: "#7468de",

  BORDER_GREY: "#EBECF0",

  LABEL_BLUE: "#0052CC",
  MENU_ICON_GREY: "#7A869A",

  FLAG_SUCCESS: "#35b37e",
  FLAG_INFO: "#6553c0",
  FLAG_WARNING: "#ffab00",
  FLAG_ERROR: "#ff5630",

  SWITCH_BUTTON_DEACTIVATED_BG: "#FAFBFC",
  SWITCH_BUTTON_DEACTIVATED_COLOR: "#4B5563",

  DANGER_ZONE_BG: "#EACAC5",
  DANGER_ZONE_BUTTON_BG: "#FF5D46",
};

export const EFontWeight = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
};

export const EFontSize = {
  BASE: "1rem",
  H1: "1.383rem",
  H2: "1.296rem",
  H3: "1.138rem",
  H4: "1rem",
  SUBTITLE1: "0.937rem",
  BODY1: ".875rem",
  BODY2: ".75rem",
};

// MATERIAL UI RELATED THEME

// export const titleFontFamily = `"Montserrat", "Roboto", "Helvetica Neue", "Arial", sans-serif`;
export const bodyFontFamily = `monospace`;

const typography = {
  fontFamily: bodyFontFamily,
  gutterBottom: 10,
  h1: {
    fontSize: EFontSize.H1,
    fontFamily: bodyFontFamily,
  },
  h2: {
    fontSize: EFontSize.H2,
    fontFamily: bodyFontFamily,
  },
  h3: {
    fontSize: EFontSize.H3,
    fontFamily: bodyFontFamily,
  },
  h4: {
    fontSize: EFontSize.H4,
  },
  body1: {
    fontSize: EFontSize.BODY1,
  },
  BODY2: {
    fontSize: EFontSize.BODY2,
  },
  button: {
    fontSize: EFontSize.BASE,
  },
};

const MuiDrawer = {};

const MuiPaper = {
  root: {
    borderRadius: 6,
    padding: 24,
    borderColor: colors.DIVIDER_GREY_LIGHT,
    borderWidth: 1,
    borderStyle: "solid",
  },
  rounded: {
    borderRadius: 6,
    padding: 24,
    borderColor: colors.DIVIDER_GREY_LIGHT,
    borderWidth: 1,
    borderStyle: "solid",
  },
};

const MuiButton = {
  root: {
    fontSize: EFontSize.BASE,
    textTransform: "none",
    borderRadius: 6,
  },
  sizeLarge: {
    fontSize: EFontSize.BASE,
  },
};

const MuiButtonBase = {
  disableRipple: true,
  root: {
    fontSize: EFontSize.BASE,
  },
};

const MuiDialog = {
  paper: {
    padding: 40,
  },
};

const MuiDialogTitle = {
  root: {
    padding: "unset",
    marginBottom: 16,
  },
};

const MuiDialogContent = {
  root: {
    padding: "unset",
    marginBottom: 24,
    overflowX: "hidden",
  },
};

const MuiDialogContentText = {
  root: {
    fontSize: EFontSize.BODY1,
  },
};

const MuiTextField = {
  root: {
    width: "100%",
    minHeight: 40,
  },
};

const MuiOutlinedInput = {
  input: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    height: 20,
    borderColor: colors.DIVIDER_GREY_LIGHT,
    borderRadius: 6,
  },
};

const MuiTableCell = {
  root: {
    fontSize: EFontSize.BODY1,
    borderBottom: `1px solid ${colors.BORDER_GREY}`,
    paddingLeft: 0,
  },
  head: {
    fontWeight: 700,
  },
};

const MuiMenu = {
  list: {
    padding: "16px 16px",
  },
};

const MuiMenuItem = {
  root: {
    fontSize: EFontSize.BODY1,
    borderBottom: `1px solid ${colors.BORDER_GREY}`,
  },
};

const MuiTab = {
  root: {
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 16,
    minWidth: "unset !important",
  },
  wrapper: {
    textTransform: "none",
    alignItems: "start",
  },
};

const MuiTabPanel = {
  root: {
    padding: "24px 0",
  },
};

const MuiChip = {
  root: {
    borderRadius: 3,
  },
  deleteIcon: {
    margin: "0 4px 0 0",
    width: 16,
    height: 16,
  },
};

const MuiAutocomplete = {
  option: {
    paddingTop: 0,
    paddingBottom: 0,
  },
};

export const lightTheme = createTheme({
  overrides: {
    MuiDrawer,
    MuiButton,
    MuiPaper,
    MuiTextField,
    MuiOutlinedInput,
    MuiDialog,
    MuiDialogTitle,
    MuiDialogContent,
    MuiDialogContentText,
    MuiTableCell,
    MuiMenuItem,
    MuiMenu,
    MuiTab,
    MuiTabPanel,
    MuiChip,
    MuiAutocomplete,
  },
  typography,
  palette: {
    primary: {
      main: colors.PRIMARY_MAIN,
      light: colors.PRIMARY_LIGHT,
      dark: colors.PRIMARY_DARK,
      contrastText: colors.WHITE,
    },
    text: {
      primary: colors.MAIN_TEXT_BLACK,
    },
    background: {
      default: colors.MAIN_BACKGROUND_WHITE,
      paper: colors.MAIN_BACKGROUND_GREY,
    },
    divider: colors.DIVIDER_GREY_LIGHT,
  },
  props: {
    MuiButtonBase,
  },
});
