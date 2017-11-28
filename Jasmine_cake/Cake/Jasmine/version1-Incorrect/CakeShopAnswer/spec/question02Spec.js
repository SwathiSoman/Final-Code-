/* globals describe beforeEach Controller it expect  */
describe('Question Two', () => {
  describe('adding the four CakeShops', () => {
    let theMumsPalace
    beforeEach(() => {
      theMumsPalace = Controller.setup()
    })

    it('should have added 4 CakeShop', () => {
      expect(theMumsPalace.allMyCakeShops.length).toBe(4)
    })

    it('should have correctly set details for each CakeShop', () => {
      let aCakeShop
      aCakeShop = theMumsPalace.sortCakeShop()
      aCakeShop = theMumsPalace.allMyCakeShops[0]
      expect(aCakeShop).toBeDefined()
      expect(aCakeShop.id).toBe('01')
      expect(aCakeShop.firstName).toBe('The Bagel Shop')
      expect(aCakeShop.flavour).toBe('Chocolate')
      expect(aCakeShop.place).toBe('Moorhouse')

      aCakeShop = theMumsPalace.allMyCakeShops[1]
      expect(aCakeShop).toBeDefined()
      expect(aCakeShop.id).toBe('02')
      expect(aCakeShop.firstName).toBe('Hot Crossed Buns')
      expect(aCakeShop.flavour).toBe('Vanilla')
      expect(aCakeShop.place).toBe('Linwood')

      aCakeShop = theMumsPalace.allMyCakeShops[2]
      expect(aCakeShop).toBeDefined()
      expect(aCakeShop.id).toBe('03')
      expect(aCakeShop.firstName).toBe('Sugar Booger')
      expect(aCakeShop.flavour).toBe('Red Velvet')
      expect(aCakeShop.place).toBe('Shirley')

      aCakeShop = theMumsPalace.allMyCakeShops[3]
      expect(aCakeShop).toBeDefined()
      expect(aCakeShop.id).toBe('04')
      expect(aCakeShop.firstName).toBe('Patty Cakes')
      expect(aCakeShop.flavour).toBe('Butterscotch')
      expect(aCakeShop.place).toBe('Hornby')
    })
  })
})
