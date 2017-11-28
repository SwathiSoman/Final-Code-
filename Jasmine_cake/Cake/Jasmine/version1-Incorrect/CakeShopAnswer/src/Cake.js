class Cake {
  constructor (theCakeShop, newId, newCakeName, newOrigin, newCost) {
    this.myCakeShop = theCakeShop
    this.id = newId
    this.cakeName = newCakeName
    this.origin = newOrigin
    this.cost = newCost
  }

  toString () {
    let result = ''
    result += '	' + this.cakeName + ' (' + this.origin + ') worth $' + this.cost.toString() // correct 
	// result += '	' + this.cakeName + ' (' + this.origin + ') worth $' + this.cost.toString() - Incorrect - returnsa an error when tab not given or space given instead of tab
	// result += '	' + this.cakeName + ' ' + this.origin + ') worth $' + this.cost.toString() - Incorrect - returns an error when the open brackets not given 
	// result += '	' + this.cakeName + ' (' + this.origin + ' worth $' + this.cost.toString() -  Incorrect - returns an error when the closing bracket and space not given 
	// result += '	' + this.cakeName + ' (' + this.origin + ') worth ' + this.cost.toString() - Incorrect- returns an error when the $ is not given
	// result += '	' + this.cakeName + ' (' + this.orign + ') worth $' + this.cost.toString() - Incorrect - returns an error when the origin is misspelt
	
    return result
  }
}