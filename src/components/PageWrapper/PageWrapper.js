import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./PageWrapper.style";

const PageWrapper = (props) => {
  const { children } = props;
  const classes = useStyles();

  return <Box className={classes.wrapper}>{children}</Box>;
};

export default PageWrapper;
