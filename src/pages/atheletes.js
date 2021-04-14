import React from "react"
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField
} from "@material-ui/core"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"

import themeStyle from "../styles/themeStyle"
import { Title } from "../components"

export default function AtheletesPage() {
  const classes = themeStyle()

  return (
    <Container>
      <Paper>
        <Title>{ "Athelete subscription" }</Title>
        <form className={ classes.form }>
          <Grid container spacing={ 1 } className={ classes.formGrid } >
            <Grid item>
              <AccountCircleIcon />
            </Grid>
            <Grid item>
              <TextField id="athelete-name" label="Name" />
            </Grid>
          </Grid>
          <div className={ classes.formActions }>
            <Button variant="outlined">Cancel</Button>
            <Button color="primary" variant="contained">Add</Button>
          </div>
        </form>
      </Paper>
    </Container>
  )
}
