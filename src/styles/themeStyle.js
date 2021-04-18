import { makeStyles } from "@material-ui/core/styles"

const themeStyle = makeStyles( theme => ({
  root: {
  },
  title: {
    color: theme.palette.primary.main,
    overflow: "hidden",
    padding: theme.spacing( 3, 2 )
  },
  appBarSpacer: theme.mixins.toolbar,
  sideMenuClose: {
    textAlign: "right",
  },
  content: {
  },
  addAction: {
    float: "right"
  },
  form: {
    margin: "0 auto",
    padding: theme.spacing( 2 ),
    maxWidth: "20rem"
  },
  formGrid: {
    alignItems: "flex-end"
  },
  formActions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing( 2 )
  }
}))

export default themeStyle
