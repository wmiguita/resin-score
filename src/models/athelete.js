import { v4 as uuidv4 } from "uuid"

export class Athelete {
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
