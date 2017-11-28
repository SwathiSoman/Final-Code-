/* global describe beforeEach it expect MumsPalace CakeShop */
/*QUnit.test = test*/
QUnit.test('Basic Check For Original Source Code', function(assert) {
    let theMumsPalace = new MumsPalace() 
	//test('the allMyCakeShops property', function(assert) {
		assert.ok(theMumsPalace.hasOwnProperty('allMyCakeShops'), 'should have an .allMyCakeShops property')
		assert.ok(Array.isArray(theMumsPalace.allMyCakeShops),'should reference an array')
		assert.ok(typeof theMumsPalace.addCakeShop,'should have an .addCakeShop function')
		assert.ok(typeof theMumsPalace.findCakeShop,'should have a .findCakeShop function')
		assert.ok(typeof theMumsPalace.sortCakeShop,'should have a .sortCakeShop function')
	
    //test('CakeShop', function(assert) {
	let theCakeShop = new CakeShop()
		 assert.ok(theCakeShop.hasOwnProperty('id'),'should have an .id property')
		 assert.ok(theCakeShop.hasOwnProperty('firstName'),'should have a .firstName property')
		 assert.ok(theCakeShop.hasOwnProperty('flavour'),'should have a .lastName property')
		 assert.ok(theCakeShop.hasOwnProperty('place'),'should have a .birthDate property')
	 
	//test('the allMyCakes property', function() {
		assert.ok(theCakeShop.hasOwnProperty('allMyCakes'),'should have an .allMyCakes reference')
		assert.ok(Array.isArray(theCakeShop.allMyCakes),'should reference an array')
		assert.ok(typeof theCakeShop.sortCakeShop,'should have a .sortCakes function')	
    //})
					
// })
	 
})
  
