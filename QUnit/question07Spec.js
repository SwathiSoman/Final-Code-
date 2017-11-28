/* global describe beforeEach Controller it expect MumsPalace */
QUnit.test('Question Seven', function(assert) {
  assert.ok('MumsPalace.getCakeShopsWithTwoCakes function')
      let theMumsPalace = Controller.setup()
		
				  theMumsPalace = Controller.setup()
				
  	
				assert.ok('theMumsPalace.getCakeShopsWithTwoCakes function')
				 
					assert.equal(typeof theMumsPalace.getCakeShopsWithTwoCakes(),'string')
				  

				
					theMumsPalace = new MumsPalace()
					assert.equal(theMumsPalace.getCakeShopsWithTwoCakes(),"")
				    let aCakeShop
						   aCakeShop = theMumsPalace.getCakeShopsWithTwoCakes()
						   aCakeShop = theMumsPalace.allMyCakeShops[0]
				 
				assert.ok('The First Name') 
					let output = theMumsPalace.getCakeShopsWithTwoCakes()
					assert.ok(true,(output).match(/The\sBagel\sShop/),'should be The Bagel Shop')
				
				
				 assert.ok('The punctuation after the first name')

					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/[\,\s]/),'should be a comma and then a space')
				 
				  
				  assert.ok('The Flavour')
						 
						   assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/Chocolate/),'should be Chocolate')
					
						
				 assert.ok('The IDs')
					  assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/(<01>|<02>|<03>|<04>)/),'The IDs')
				
				   
				  assert.ok('After the flavour\'s name')
					   assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/>\n/),'should be a newline') 
			
				  
				 assert.ok('Each CakeName\'s details')
					  assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/\t/),'should start with a tab  \\t character')
					  
				 
				  
                assert.ok('The Bagel Shop\'s first cakeName')
				
				let theBagelShop = theMumsPalace.findCakeShop('01')
				
				  assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/(Angel\scake)/),'should be Angel cake')
				  assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/[(]United\sKingdom[)]/),'Originates from United Kingdom')
				  assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/\sworth\s[$]20/),'with the value of $20')
				  assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/[\.\n]/),'should be a dot and then a new line')
				  assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/[\.\n]/),'should be a dot and then a new line')
				  
				
				assert.ok('The Bagel Shop\'s second cakeName')
				 
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/.*\n\t/),'should start with a tab')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/Babka/),'should be Babka')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/Poland/),'Originates from Poland')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/\sworth\s[$]15/),'with the value of $15')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/[\.\n]/),'should be a dot and then a new line')
							
							
				assert.ok('Should return correctly formatted data')
			
					assert.ok('The First Name')
					assert.ok(true,output.match(/Patty\sCakes/),'should be Patty Cakes ')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/[\,\s)]/),'should be a comma and then a space')
			
					aCakeShop = theMumsPalace.getCakeShopsWithTwoCakes()
					aCakeShop = theMumsPalace.allMyCakeShops[04]

					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/Butterscotch/),'should be Butterscotch')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/[\.\s]/),'should be a dot followed by a space')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/(<01>|<02>|<03>|<04>)/),'should have numbers enclosed in angle brackets <> ie <04>')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/>\n/),'should be a newline')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/\t/),'should start with a tab  \\t character')
						 
				assert.ok('Patty Cakes\'s first cakeName')
			 
					let pattyCakes = theMumsPalace.findCakeShop('04')
					
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/(Cheesecake)/),'should be Cheesecake')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/[(]Greece[)]/),'Originates from Greece')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/\sworth\s[$]20/),'with the value of $20')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/[\.\n]/),'should be a dot and then a new line')
								
				assert.ok('Patty Cakes\'s second cakeName')
				
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/\t/),'should start with a tab')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/Panettone/),'should be Panettone')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/Italy/),'Originates from Italy')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/\sworth\s[$]15/),'with the value of $15')
					assert.ok(true,theMumsPalace.getCakeShopsWithTwoCakes().match(/[\.\n]/),'should be a dot and then a new line')
})
