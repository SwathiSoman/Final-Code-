/* global describe beforeEach it expect MumsPalace CakeShop */
describe('Basic Check For Original Source Code', () => {
  describe('MumsPalace', () => {
    let theMumsPalace
    beforeEach(() => {
      theMumsPalace = new MumsPalace()
    })

    describe('the allMyCakeShops property',  () => {
      it('should have an .allMyCakeShops property', () => {
        expect(theMumsPalace.hasOwnProperty('allMyCakeShops')).toBeTruthy()
      })
      it('should reference an array',  () => {
        expect(Array.isArray(theMumsPalace.allMyCakeShops)).toBeTruthy()
      })
    })

    it('should have an .addCakeShop function', () => {
      expect(typeof theMumsPalace.addCakeShop).toBe('function')
    })

    it('should have a .findCakeShop function', () => {
      expect(typeof theMumsPalace.findCakeShop).toBe('function')
    })

    it('should have a .sortCakeShop function', () => {
      expect(typeof theMumsPalace.sortCakeShop).toBe('function')
    })
  })

  describe('CakeShop', () => {
    var theCakeShop
    beforeEach(function () {
      theCakeShop = new CakeShop()
    })

    it('should have an .id property', () => {
      expect(theCakeShop.hasOwnProperty('id')).toBeTruthy()
    })

    it('should have a .firstName property', () => {
      expect(theCakeShop.hasOwnProperty('firstName')).toBeTruthy()
    })

    it('should have a .lastName property', () => {
      expect(theCakeShop.hasOwnProperty('flavour')).toBeTruthy()
    })

    it('should have a .birthDate property', () => {
      expect(theCakeShop.hasOwnProperty('place')).toBeTruthy()
    })

    describe('the allMyCakes property', () => {
      it('should have an .allMyCakes reference', () => {
        expect(theCakeShop.hasOwnProperty('allMyCakes')).toBeTruthy()
      })

      it('should reference an array', () => {
        expect(Array.isArray(theCakeShop.allMyCakes)).toBeTruthy()
      })
    })

    it('should have a .sortCakes function', () => {
      expect(typeof theCakeShop.sortCakes).toBe('function')
    })
  })
})