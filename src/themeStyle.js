import { makeStyles } from "@material-ui/core/styles"

const themeStyle = makeStyles( theme => ({
  root: {
  },
  appBarSpacer: theme.mixins.toolbar,
  sideMenuClose: {
    textAlign: "right",
  },
  content: {
  }
}))

export default themeStyle
