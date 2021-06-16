export const styled = (theme) => ({
  root: {
    maxWidth: 500,
    margin: "0 auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "red"[500],
  },
  textIntro: {
    fontSize: "35px",
    margin: "10px 0",
    color: "black",
    textAlign: "center",
    fontWeight: "600",
  },
});
