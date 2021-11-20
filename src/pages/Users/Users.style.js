import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  containerStyle: {
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  topBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  table: {
    minWidth: 650,
  },
  btnRow: {
    marginLeft: 5,
  },
}));
