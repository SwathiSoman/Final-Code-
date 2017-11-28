class CatOwner {
	constructor (newId, newFirstName, newLastName, newAmountOwed, theCattery) {
		this.id = newId
		this.firstName = newFirstName
		this.lastName = newLastName
		this.amountOwed = newAmountOwed
		this.myCattery = theCattery
		this.allMyCats = []
	}

	sortCats () {
		this.allMyCats.sort(function (a, b) {
			return a.name > b.name
		})
	}
}