/* globals describe beforeEach it expect CakeShop  */
describe('Question Six', () => {
  describe('CakeShop.hasTwoCakes function', () => {
    let aCakeShop, aCake
    beforeEach(() => {
      aCakeShop = new CakeShop()
      aCake = new Cake()
    })

    it('should exist', () => {
      expect(aCakeShop.hasTwoCakes).toBeDefined()
    })

    it('should return a boolean', () => {
      expect(typeof aCakeShop.hasTwoCakes()).toBe('boolean')
    })

    it('should return true if the number of Cakes that CakeShop has is equal two.', () => {
      aCakeShop = new CakeShop('tao', null, null, null, null)
      aCake = aCakeShop.addCake(null, null, null, null)
      aCake = aCakeShop.addCake(null, null, null, null)
      expect(aCakeShop.hasTwoCakes()).toBe(true)
    })

    it('should return false if the number of Cakes that CakeShop has is less than two.', () => {
      aCakeShop = new CakeShop('tao', null, null, null, null)
      aCake = aCakeShop.addCake(null, null, null, null)
      expect(aCakeShop.hasTwoCakes()).toBe(false)
    })

    it('should return false if the number of Cakes that CakeShop owns is more than two.', () => {
      aCakeShop = new CakeShop('tao', null, null, null, null)
      aCake = aCakeShop.addCake(null, null, null, null)
      aCake = aCakeShop.addCake(null, null, null, null)
      aCake = aCakeShop.addCake(null, null, null, null)
      expect(aCakeShop.hasTwoCakes()).toBe(false)
    })
  })
})