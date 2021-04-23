export default class Feedback {
  constructor( args ) {
    switch( typeof args ) {
      case "string":
        this._withString( args )
        break
      case "object":
        this._withObject( args )
        break;

      default:
        this.error = false
        this.success = true
    }
  }

  toJSON() {
    const { message, error, success } = this
    return { message, error, success }
  }

  _withString( message ) {
    this.message = message
    this.success = true
    this.error = false
  }
  _withObject({ message, error, success }) {
    this.message = message
    this.success = success ?? true
    this.error = error ?? false
  }
}

export class Success extends Feedback {
  constructor( args ) {
    super( args )
    this.error = false // overriding to prevent some confusion
  }
}

export class Fail extends Feedback {
  constructor( args ) {
    super( args )
    this.error = true // overriding to prevent some confusion
    this.success = false // overriding to prevent some confusion
  }
}
