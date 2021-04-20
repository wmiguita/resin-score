import { v4 as uuidv4 } from "uuid"

class Athelete {
  constructor( attrs ) {
    if( ! attrs ) return
    this.id = ( attrs.id ) ? attrs.id : uuidv4()
    this.name = attrs.name
  }

  static byId( id ){
    return ( athelete ) => athelete.id === id
  }

  toJSON() {
    return {
       id: this.id ?? "",
       name: this.name ?? ""
    }
  }
}

export { Athelete }
