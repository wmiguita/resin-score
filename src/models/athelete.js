import { v4 as uuidv4 } from "uuid"

class Athelete {
  constructor( attrs ) {
    this.id = ( attrs.id ) ? attrs.id : uuidv4()
    this.name = attrs.name
  }

  toJSON() {
    return {
       id: this.id,
       name: this.name
    }
  }
}

// Material-ui DataGrid columns
Athelete.columns = [
  { field: "name", headerName: "Name", width: 250 }
]

export { Athelete }
