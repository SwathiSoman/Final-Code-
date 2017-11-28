/* global describe beforeEach Controller it expect MumsPalace */
QUnit.test('Question Three', function(assert) {
	let theMumsPalace = new MumsPalace()
	theMumsPalace = Controller.setup()
	//test('MumsPalace.getCakeShop function', function(assert) {	
		 
            assert.ok(typeof theMumsPalace.getCakeShops,'should return a string')
			assert.ok(theMumsPalace.getCakeShops,'should return a string')
	//})
	assert.ok('Should return correctly formatted data')/*, function(assert) {*/
		let output = theMumsPalace.getCakeShops()
		let anCakeShop
		//test('Should start with the first names but be sorted in ID order', function(assert) { 
		assert.ok(true,theMumsPalace.getCakeShops().match(/^The\sBagel\sShop.*\nHot\sCrossed\sBuns.*\nSugar\sBooger.*\nPatty Cakes.*\n/), 'Should start with the first names but be sorted in ID order')
		assert.ok(true,theMumsPalace.getCakeShops().match(/\, /),'should be a comma followed by a single space')
		
		anCakeShop = theMumsPalace.getCakeShops()
		//anCakeShop = anCakeShop.flavour()
		anCakeShop = theMumsPalace.allMyCakeShops[0, 1, 2, 3]
		//assert.ok(true,anCakeShop.flavour.match(/^[CVRB](.{3,11}/),'First character of LastName should be in [CVRB] ie [Chocolate,Vanilla,Red Velvet,Butterscotch]')
	    assert.ok(true,theMumsPalace.getCakeShops().match(/\. /),'should be a dot and then a space')
		assert.ok(true,theMumsPalace.getCakeShops().match(/(<01>|<02>|<03|<04>)/),'should have numbers enclosed in angle brackets ie <> ')
		assert.ok(true,theMumsPalace.getCakeShops().match(/\>\n/),'should end with the newline character')
//})

	assert.ok('should return a string')/*, function(assert) {*/
		theMumsPalace = new MumsPalace()
		assert.equal(typeof theMumsPalace.getCakeShops(),'string')
		assert.equal(theMumsPalace.getCakeShops(),'','should NOT be hard coded')
			//})
	
	assert.ok('Should return correctly formatted data')/*, function(assert) {*/
		assert.ok('Should start with the first names but be sorted in ID order')
		//let output = theMumsPalace.getCakeShops()
		assert.ok(true,theMumsPalace.getCakeShops().match(/^The\sBagel\sShop.*\nHot\sCrossed\sBuns.*\nSugar\sBooger.*\nPatty Cakes.*\n/),'First The Bagel Shop then Hot Crossed Buns then Sugar Booger then Patty Cakes')
		assert.ok(true,theMumsPalace.getCakeShops().match(/\, /),'should be a comma followed by a single space')
		//let anCakeShop
		anCakeShop = theMumsPalace.getCakeShops()
		anCakeShop = theMumsPalace.allMyCakeShops[0, 1, 2, 3]
		//assert.ok(true,anCakeShop.flavour.match(/^[CVRB](.{3,11})/),'First character of LastName should be in [CVRB] ie [Chocolate,Vanilla,Red Velvet,Butterscotch]')
		assert.ok(true,theMumsPalace.getCakeShops().match(/\. /),'should be a comma followed by a single space')
		assert.ok(true,theMumsPalace.getCakeShops().match(/(<01>|<02>|<03|<04>)/),'should have numbers enclosed in angle brackets ie <> ')
		assert.ok(true,theMumsPalace.getCakeShops().match(/\>\n/),'should end with the newline character')
	//})			
})


	/*
	QUnit.test('Should return correctly formatted data', function() {
			  QUnit.test('Should start with the first names but be sorted in ID order', function() { 
				test('First The Bagel Shop then Hot Crossed Buns then Sugar Booger then Patty Cakes  ', function() {
					let output = theMumsPalace.getCakeShops()
					assert.ok(theMumsPalace.getCakeShops()).match(/^The\sBagel\sShop.*\nHot\sCrossed\sBuns.*\nSugar\sBooger.*\nPatty Cakes.*\n/)
				})
			 })
					
			 QUnit.test('Puntuation after each first name', function() {
			  test('should be a comma followed by a single space', function() {
				  let output = theMumsPalace.getCakeShops()
				  assert(theMumsPalace.getCakeShops()).match(/\, /)
				  })
			 })
								
			 QUnit.test('Flavour should also be in ID order', function() {
				test('First character of LastName should be in [CVRB] ie [Chocolate,Vanilla,Red Velvet,Butterscotch]', function() {
					let anCakeShop
					anCakeShop = theMumsPalace.getCakeShops()
					anCakeShop = theMumsPalace.allMyCakeShops[0, 1, 2, 3]
					assert.ok(anCakeShop.flavour).match(/^[CVRB](.{3,11})/)
				})
			 })
			
			 QUnit.test('Puntuation after the last names ', function() {
			  test('should be a dot and then a space', function() {
				  assert.ok(theMumsPalace.getCakeShops()).match(/\. /)
				})	
			 })
							
			 QUnit.test('The IDs', function() {
			   test('should have numbers enclosed in angle brackets ie <> ', function() {
				   assert.ok(theMumsPalace.getCakeShops()).match(/(<01>|<02>|<03|<04>)/)
				})
			 })
		
			 QUnit.test('end of each cakeShop\'s details', function() {
			  test('should end with the newline character', function() {
				assert.ok(theMumsPalace.getCakeShops()).match(/\>\n/)
				})
			  })
			})
		  }
		})   	
})
		/*	
		test('should return a string', function() {
				assert.equal(typeof theMumsPalace.getCakeShops())('string')
			})

			test('should NOT be hard coded', function() {
				theMumsPalace = new MumsPalace()
				assert.equal(theMumsPalace.getCakeShops())('')
			})
		  
			//The Bagel Shop, Chocolate. <01>\nHot Crossed Buns, Vanilla. <02>\nSugar Booger, Red Velvet. <03>\nPatty Cakes, Butterscotch. <04>\n//
		
			QUnit.test('Should return correctly formatted data', function() {
			  QUnit.test('Should start with the first names but be sorted in ID order', function() { 
				test('First The Bagel Shop then Hot Crossed Buns then Sugar Booger then Patty Cakes  ', function() {
					let output = theMumsPalace.getCakeShops()
					assert.ok(theMumsPalace.getCakeShops()).match(/^The\sBagel\sShop.*\nHot\sCrossed\sBuns.*\nSugar\sBooger.*\nPatty Cakes.*\n/)
				})
			 })
					
			 QUnit.test('Puntuation after each first name', function() {
			  test('should be a comma followed by a single space', function() {
				  let output = theMumsPalace.getCakeShops()
				  assert(theMumsPalace.getCakeShops()).match(/\, /)
				  })
			 })
								
			 QUnit.test('Flavour should also be in ID order', function() {
				test('First character of LastName should be in [CVRB] ie [Chocolate,Vanilla,Red Velvet,Butterscotch]', function() {
					let anCakeShop
					anCakeShop = theMumsPalace.getCakeShops()
					anCakeShop = theMumsPalace.allMyCakeShops[0, 1, 2, 3]
					assert.ok(anCakeShop.flavour).match(/^[CVRB](.{3,11})/)
				})
			 })
			
			 QUnit.test('Puntuation after the last names ', function() {
			  test('should be a dot and then a space', function() {
				  assert.ok(theMumsPalace.getCakeShops()).match(/\. /)
				})	
			 })
							
			 QUnit.test('The IDs', function() {
			   test('should have numbers enclosed in angle brackets ie <> ', function() {
				   assert.ok(theMumsPalace.getCakeShops()).match(/(<01>|<02>|<03|<04>)/)
				})
			 })
		
			 QUnit.test('end of each cakeShop\'s details', function() {
			  test('should end with the newline character', function() {
				assert.ok(theMumsPalace.getCakeShops()).match(/\>\n/)
				})
			  })
			})
		  }
		})   	
	})
})*/