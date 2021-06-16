export const styled = (theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    margin: "0.5% 48%",
  },
});
