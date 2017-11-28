/* global describe beforeEach Controller it expect MumsPalace */
describe('Question Seven', () => {
  describe('MumsPalace.getCakeShopsWithTwoCakes function', () => {
      var theMumsPalace = Controller.setup()
      beforeEach(() => {
              theMumsPalace = Controller.setup()
            }
        )
    describe('theMumsPalace.getCakeShopsWithTwoCakes function', () => {
       it('should return a string', () => {
		expect(typeof theMumsPalace.getCakeShopsWithTwoCakes()).toBe('string')
	   })

       it('should NOT be hard coded', () => {
		theMumsPalace = new MumsPalace()
		expect(theMumsPalace.getCakeShopsWithTwoCakes()).toBe('')
	   })
    
	 //The Bagel Shop, Chocolate. <01>\n    Angel cake (United Kingdom) worth $20.\n    Babka (Poland) worth $15.\nPatty Cakes, Butterscotch. <04>\n    Cheesecake (Greece) worth $20.\n    Panettone (Italy) worth $15.\n//
	    describe('Should return correctly formatted data', () => {
			describe( 'The First Name', () => {
				it('should be The Bagel Shop', () => {
				let output = theMumsPalace.getCakeShopsWithTwoCakes()
				expect(output).toMatch(/The\sBagel\sShop/)
				})
			})
	
	
			describe('The punctuation after the first name', () => { 
				it(' should be a comma and then a space', () => {
			    let output = theMumsPalace.getCakeShopsWithTwoCakes()
				expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/[\,\s]/)
				})
			})
			
			describe('The Flavour', () => {
			    it('should be Chocolate', () => {
				  let aCakeShop
				   aCakeShop = theMumsPalace.getCakeShopsWithTwoCakes()
				   aCakeShop = theMumsPalace.allMyCakeShops[0]
				   expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/Chocolate/)
				})
		    })
				
			 describe('The punctuation after the second name', () => {
			   it('should be a dot followed by a space', () => {
					expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/[\.\s]/)
				})
			})
				
			describe('The IDs', () => {
				it('should have numbers enclosed in angle brackets <> ie <01>', () => {
				   expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/(<01>|<02>|<03>|<04>)/)
				})
			})
			
		    describe('After the flavour\'s name', () => {
				it('should be a newline', () => {
					expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/>\n/)
				})
			})
				
			describe('Each CakeName\'s details', () => {
				it('should start with a tab  \\t character', () => {
				 expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/\t/)
				})
		    })
			
			describe('The Bagel Shop\'s first cakeName', () => {
				 let theBagelShop = theMumsPalace.findCakeShop('01')
				 let theCake = theBagelShop.allMyCakes[0]
				 let output = theCake.toString()
				it('should be Angel cake', () => {
					expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/(Angel\scake)/)
				})
				
				it('Originates from United Kingdom', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/[(]United\sKingdom[)]/)
				})
				
				it('with the value of $20', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/\sworth\s[$]20/)
				})
				
				it('should be a dot and then a new line', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/[\.\n]/)
				})
			})
			
			describe('The Bagel Shop\'s second cakeName', () => {
				let theBagelShop = theMumsPalace.findCakeShop('01')
				let theCake = theBagelShop.allMyCakes[1]
				console.log(theCake)
				let output = theCake.toString() 
				
				it('should start with a tab', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/.*\n\t/)
				})
				
				it('should be Babka', () => {
					expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/Babka/)
				})
				it('Originates from Poland', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/Poland/)
				})
				
				
				it('with the value of $15', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/\sworth\s[$]15/)
				})
				
				it('should be a dot and then a new line', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/[\.\n]/)
				})
			})
			
		describe('Should return correctly formatted data', () => {
			describe('The First Name', () => {
				it('should be Patty Cakes ', () => {
				let output = theMumsPalace.getCakeShopsWithTwoCakes()
				expect(output).toMatch(/Patty\sCakes/)
			    })
			})
			
			describe('The punctuation after the first name', () => {
				it(' should be a comma and then a space', () => {
				expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/[\,\s)]/)
				})
		     })
			 
			describe( 'The Flavour', () => {
				 it('should be Butterscotch', () => {
				  let aCakeShop
				  aCakeShop = theMumsPalace.getCakeShopsWithTwoCakes()
				  aCakeShop = theMumsPalace.allMyCakeShops[04]
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/Butterscotch/)
				 })
		    })
			
			describe('The punctuation after the second name', () => {
             it('should be a dot followed by a space', () => {
				expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/[\.\s]/)
	         })
		    })
	
     	    describe('The IDs', () => {
		      it('should have numbers enclosed in angle brackets <> ie <04>', () => {
			   expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/(<01>|<02>|<03>|<04>)/)
			   })
		    })
		
		    describe('After the flavour\'s name', () => {
              it('should be a newline', () => {
               expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/>\n/)
              })
            })
			
			describe('Each CakeName\'s details', () => {
              it('should start with a tab  \\t character', () => {
              expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/\t/)
              })
		    })
			
			describe('Patty Cakes\'s first cakeName', () => {
				let pattyCakes = theMumsPalace.findCakeShop('04')
				let theCake = pattyCakes.allMyCakes[0]
				let output = theCake.toString()
				it('should be Cheesecake', () => {
					expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/(Cheesecake)/)
				})
				it('Originates from Greece', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/[(]Greece[)]/)
				})
				
				
				it('with the value of $20', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/\sworth\s[$]20/)
				})
				
				it('should be a dot and then a new line', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/[\.\n]/)
				})
			})
			
			describe('Patty Cakes\'s second cakeName', () => {
				let pattyCakes = theMumsPalace.findCakeShop('04')
				let theCake = pattyCakes.allMyCakes[1]
				let output = theCake.toString()
				it('should start with a tab', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/\t/)
				})
				
				it('should be Panettone', () => {
					expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/Panettone/)
				})
				

				it('Originates from Italy', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/Italy/)
				})
				
				
				it('with the value of $15', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/\sworth\s[$]15/)
				})
				
				it('should be a dot and then a new line', () => {
				  expect(theMumsPalace.getCakeShopsWithTwoCakes()).toMatch(/[\.\n]/)
				})
		    })

		  })
        })
	  })
	})	
  })