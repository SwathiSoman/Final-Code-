/* globals describe beforeEach it expect CakeShop  */
QUnit.test('Question Six', function(assert) {
  assert.ok('CakeShop.hasTwoCakes function')
    let aCakeShop, aCake
	/*QUnit.module("CakeShop",{
		beforeEach:function() {*/
		  aCakeShop = new CakeShop()
		  aCake = new Cake()
    
			  assert.ok(aCakeShop.hasTwoCakes,'should exist')
			  assert.ok(typeof aCakeShop.hasTwoCakes,'should return a boolean')

			assert.ok(aCakeShop.hasTwoCakes,'should return true if the number of Cakes that CakeShop has is equal two.')
			  aCakeShop = new CakeShop('tao', null, null, null, null)
			  aCake = aCakeShop.addCake(null, null, null, null)
			  aCake = aCakeShop.addCake(null, null, null, null)
			  assert.ok(aCakeShop.hasTwoCakes())
			

			assert.ok(aCakeShop.hasTwoCakes,'should return false if the number of Cakes that CakeShop has is less than two.')
			  aCakeShop = new CakeShop('tao', null, null, null, null)
			  aCake = aCakeShop.addCake(null, null, null, null)
			  assert.notOk(aCakeShop.hasTwoCakes())
		

			assert.ok(aCakeShop.hasTwoCakes,'should return false if the number of Cakes that CakeShop owns is more than two.')
			  aCakeShop = new CakeShop('tao', null, null, null, null)
			  aCake = aCakeShop.addCake(null, null, null, null)
			  aCake = aCakeShop.addCake(null, null, null, null)
			  aCake = aCakeShop.addCake(null, null, null, null)
			  assert.notOk(aCakeShop.hasTwoCakes())
			
		
	
  
})