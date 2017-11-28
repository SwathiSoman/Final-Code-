class CakeShop {
  constructor (newId, newFirstName, newFlavour, newPlace, theMumsPalace) {
    this.id = newId
    this.firstName = newFirstName
    this.flavour = newFlavour
    this.place = newPlace
    this.myMumsPalace = theMumsPalace
    this.allMyCakes = []
  }

  toString () {
    return this.firstName + ', ' + this.flavour + '. ' + '<'+ this.id + '>' // Correct//
	//return this.firstName + ', ' + this.flavour + '<'+ this.id + '>'- incorrect retruns an error that the dot and space note found//
	//return this.firstName + ', ' + this.flavour + '+ ' + '<'+ this.id + '>' - Incorrect returns an error when dot is misplaced with other operators (*,+,-)
	//return this.firstName + '' + this.flavour + '+ ' + '<'+ this.id + '>' - retruns an error when the comma is removed
	//return this.fstName + ', ' + this.flavour + '. ' + '<'+ this.id + '>' - retruns an error when the name of first is misplaced
	// return this.firstName + ', ' + this.flavour + '. ' + '<'+ this.id - retruns an error when the angle brackets are removed
	// return this.firstName + ' ' + this.flavour + '. ' + '<'+ this.id + '>' - retruns an error when the ccomma is removed and only space exist 
	
  }

  addCake (newId, newCakeName, newOrigin, newCost) {
    var newCake = new Cake(this, newId, newCakeName, newOrigin, newCost)
    this.allMyCakes.push(newCake)
  }

  sortCakes () {
    this.allMyCakes.sort(function (a, b) {
      if (a.cakeName !== b.cakeName) {
        return a.cakeName > b.cakeName
      }
      return b.cost - a.cost
    })
  }

  hasTwoCakes () {
    return this.allMyCakes.length === 2
  }

  getCakes () {
    var aCake, out
    this.sortCakes()
    out = ''
    for (aCake of this.allMyCakes) {
      out += aCake + '\n'
    }
    return out
  }
}