import React from "react"
import {
  Container,
  Paper,
  TextField
} from "@material-ui/core"

export default function AtheletesPage() {
  return (
    <Container>
      <Paper>
        <form className="atheleteForm">
          <TextField id="athelete-name" label="Name" />
        </form>
      </Paper>
    </Container>
  )
}
