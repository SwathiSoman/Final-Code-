/* global describe beforeEach Controller it expect Cake */
QUnit.test('Question Four and Question Five', function(assert) {
  //assert.ok('Cake', function() {
   
	/*assert.equal("Cake",{
		beforeEach: function() {*/
		  let cake = new Cake()
		
             assert.ok(cake.hasOwnProperty('myCakeShop'),'should have a .myCakeShop reference')
			 assert.ok(cake.hasOwnProperty('id'),'should have a .id property')
			 assert.ok(cake.hasOwnProperty('origin'),'should have a .origin property')
			 assert.ok(cake.hasOwnProperty('cost'),'should have a .cost property')
		
		assert.ok('write a CakeShop.addCake function to add the Cakes')
		theMumsPalace = Controller.setup()
		var theCakeShop = theMumsPalace.findCakeShop('01')
		assert.equal(2,theCakeShop.allMyCakes.length,'CakeShop 01 should have two Cakes')
		assert.equal(2,theCakeShop.allMyCakes.length,'CakeShop 02 should have one Cake')
		assert.equal(2,theCakeShop.allMyCakes.length,'CakeShop 03 should have one Cake')
		assert.equal(2,theCakeShop.allMyCakes.length,'CakeShop 04 should have two Cakes')
		
		assert.ok('should correctly set Cake details')
		let aCake
		theCakeShop = theMumsPalace.findCakeShop('01')
		aCake = theCakeShop.sortCakes()
		aCake = theCakeShop.allMyCakes[0]
		assert.ok(aCake.myCakeShop,'theCakeShop')
		assert.ok(aCake.id,401)
		assert.ok(aCake.cakeName,'Angel cake')
		assert.ok(aCake.origin,'United Kingdom')
		assert.ok(aCake.cost,20)
		
		 aCake = theCakeShop.allMyCakes[1]
		 assert.ok(aCake.myCakeShop,'theCakeShop')
		 assert.ok(aCake.id,402)
		 assert.ok(aCake.cakeName,'Babka')
		 assert.ok(aCake.origin,'Poland')
		 assert.ok(aCake.cost,15)
		 
		 theCakeShop = theMumsPalace.findCakeShop('02')
		aCake = theCakeShop.sortCakes()
		 aCake = theCakeShop.allMyCakes[0]
		  assert.ok(aCake.myCakeShop,'theCakeShop')
		  assert.ok(aCake.id,113)
		  assert.ok(aCake.cakeName,'Black Forest cake')
		  assert.ok(aCake.origin,'Germany')
		  assert.ok(aCake.cost,30)
		  
		 theCakeShop = theMumsPalace.findCakeShop('03')
		aCake = theCakeShop.sortCakes()
		 aCake = theCakeShop.allMyCakes[0]
		assert.ok(aCake.myCakeShop,'theCakeShop')
		assert.ok(aCake.id,389)
	    assert.ok(aCake.cakeName,'Boston cream pie')
		assert.ok(aCake.origin,'United States')
		assert.ok(aCake.cost,25)
		
		theCakeShop = theMumsPalace.findCakeShop('04')
		aCake = theCakeShop.sortCakes()
		 
		 aCake = theCakeShop.allMyCakes[0]
		  assert.ok(aCake.myCakeShop,'theCakeShop')
		  assert.ok(aCake.id,114)
		  assert.ok(aCake.cakeName,'Cheesecake')
		  assert.ok(aCake.origin,'Greece')
		  assert.ok(aCake.cost,20)
		  
		 aCake = theCakeShop.allMyCakes[1]
		assert.ok(aCake.myCakeShop,'theCakeShop')
			  assert.ok(aCake.id,121)
			  assert.ok(aCake.cakeName,'Panettone')
			  assert.ok(aCake.origin,'Italy')
		      assert.ok(aCake.cost,15)
		
		})
		


  
			//test('should correctly set Cake details', function () {
            /*
             Shop 		 ID   	CAKENAME           Origin       	   Cost
			01 			 401   Angel cake          United Kingdom      $20
			01  		 402   Babka                  Poland           $15
			03  		 389   Boston cream pie       United States    $25
			02           113   Black Forest cake      Germany          $30
			04           114   Cheesecake             Greece           $20
			04           121   Panettone              Italy		       $15

		*/
		/*
			  let aCake, theCakeShop
			  theCakeShop = theMumsPalace.findCakeShop('01')
			  aCake = theCakeShop.sortCakes()
					//     01 			 401   Angel cake          United Kingdom      $20
			  aCake = theCakeShop.allMyCakes[0]
			  assert(aCake.myCakeShop).equal(theCakeShop)
			  assert(aCake.id).equal(401)
			  assert(aCake.cakeName).equal('Angel cake')
			  assert(aCake.origin).equal('United Kingdom')
			  assert(aCake.cost).equal(20)

					//     01  		 402   Babka                  Poland           $15
			  aCake = theCakeShop.allMyCakes[1]
			  assert(aCake.myCakeShop).equal(theCakeShop)
			  assert(aCake.id).equale(402)
			  assert(aCake.cakeName).equal('Babka')
			  assert(aCake.origin).equal('Poland')
			  assert(aCake.cost).equal(15)

			  theCakeShop = theMumsPalace.findCakeShop('02')
			  aCake = theCakeShop.sortCakes()
					  //    02           113   Black Forest cake      Germany          $30
			  aCake = theCakeShop.allMyCakes[0]
			  assert(aCake.myCakeShop).equal(theCakeShop)
			  assert(aCake.id).equal(113)
			  assert(aCake.cakeName).equal('Black Forest cake')
			  assert(aCake.origin).equal('Germany')
			  assert(aCake.cost).equal(30)

			  theCakeShop = theMumsPalace.findCakeShop('03')
			  aCake = theCakeShop.sortCakes()
					 // 03  		 389   Boston cream pie       United States    $25
			  aCake = theCakeShop.allMyCakes[0]
			  assert(aCake.myCakeShop).equal(theCakeShop)
			  assert(aCake.id).equal(389)
			  assert(aCake.cakeName).equal('Boston cream pie')
			  assert(aCake.origin).equal('United States')
			  assert(aCake.cost).equal(25)

			  theCakeShop = theMumsPalace.findCakeShop('04')
			  aCake = theCakeShop.sortCakes()
					// 04           114   Cheesecake             Greece           $20
			  aCake = theCakeShop.allMyCakes[0]
			  assert(aCake.myCakeShop).equal(theCakeShop)
			  assert(aCake.id).equal(114)
			  assert(aCake.cakeName).equal('Cheesecake')
			  assert(aCake.origin).equal('Greece')
			  assert(aCake.cost).equal(20)

					// 04           121   Panettone              Italy		       $15
			  aCake = theCakeShop.allMyCakes[1]
			  assert(aCake.myCakeShop).equal(theCakeShop)
			  assert(aCake.id).equal(121)
			  assert(aCake.cakeName).equal('Panettone')
			  assert(aCake.origin).equal('Italy')
		      assert(aCake.cost).equal(15)
			})
		} 
    })
  })
})
}) */
