/* global describe beforeEach Controller it expect MumsPalace */
describe('Question Three', () => {
	'use strict'
	describe('MumsPalace.getCakeShop function', () => {
	   let theMumsPalace
	   beforeEach(() => {
		 theMumsPalace = Controller.setup()
		})

	    it('should return a string', () => {
			expect(typeof theMumsPalace.getCakeShops()).toBe('string')
		})

		it('should NOT be hard coded', () => {
			theMumsPalace = new MumsPalace()
			expect(theMumsPalace.getCakeShops()).toBe('')
		})
      
	  //The Bagel Shop, Chocolate. <01>\nHot Crossed Buns, Vanilla. <02>\nSugar Booger, Red Velvet. <03>\nPatty Cakes, Butterscotch. <04>\n//
		
		describe('Should return correctly formatted data', () => {
		  describe('Should start with the first names but be sorted in ID order', () => { 
		    it('First The Bagel Shop then Hot Crossed Buns then Sugar Booger then Patty Cakes  ', () => {
				let output = theMumsPalace.getCakeShops()
				expect(theMumsPalace.getCakeShops()).toMatch(/^The\sBagel\sShop.*\nHot\sCrossed\sBuns.*\nSugar\sBooger.*\nPatty Cakes.*\n/)
			})
		 })
					
		 describe('Puntuation after each first name', () => {
		  it('should be a comma followed by a single space', () => {
			  let output = theMumsPalace.getCakeShops()
			  expect(theMumsPalace.getCakeShops()).toMatch(/\, /)
			  })
		 })
								
		 describe('Flavour should also be in ID order', () => {
			it('First character of LastName should be in [CVRB] ie [Chocolate,Vanilla,Red Velvet,Butterscotch]', () => {
				let anCakeShop
				anCakeShop = theMumsPalace.getCakeShops()
				anCakeShop = theMumsPalace.allMyCakeShops[0, 1, 2, 3]
				expect(anCakeShop.flavour).toMatch(/^[CVRB](.{3,11})/)
			})
		 })
		
		 describe('Puntuation after the last names ', () => {
          it('should be a dot and then a space', () => {
			  expect(theMumsPalace.getCakeShops()).toMatch(/\. /)
		    })	
		 })
							
		 describe('The IDs', () => {
		   it('should have numbers enclosed in angle brackets ie <> ', () => {
			   expect(theMumsPalace.getCakeShops()).toMatch(/(<01>|<02>|<03|<04>)/)
			})
		 })
		
		 describe('end of each cakeShop\'s details', () => {
          it('should end with the newline character', () => {
			expect(theMumsPalace.getCakeShops()).toMatch(/\>\n/)
			})
		  })
		})	
	})
})