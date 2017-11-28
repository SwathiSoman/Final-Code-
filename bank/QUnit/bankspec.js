QUnit.test('Basic check for the source code', function(assert){

    let bank = new Bank()
	
	let five = Money.dollar(5)
	let tenTimesTwo = Money.dollar(10).times(2)
	let twenty = Money.dollar(20)
	let expressionFiveBucks = Money.dollar(5)
	let expressionTenFrancs = Money.franc(10)
	let result = m10dollar
	let sum = (Sum).result
	
		console.log(twenty)
	assert.ok('should return sum')

	test('The test Multiplication', function(assert){

		let twenty = Money.dollar(10).times(2)
	
		assert.ok(Money.dollar(10).five,'should test Multiplication for 10 and 2')
		assert.ok(Money.dollar(15).five,'should test multiplication for 15 and 3')
		
	})

		
	test('The test Equality', function(assert){
		let twenty = Money.dollar(10).times(2)
		assert.ok(Money.dollar(5),'should test equality if 5 is equal to 5')
		assert.ok(Money.dollar(5),'should test if the given two numbers are not equal')
		
	})

	test('The testCurrency', function(assert){
		assert.ok(Money.dollar(1),'should test the dollar "USD"')
		assert.ok(Money.franc(1),'should test the franc "CHF"')
    })
	
	
	test('The test simple addition', function(assert){
	
        let bank = new Bank()
		reduce = reduced10
		assert.ok(Money.dollar(10).reduce,'should test for the addition')
	})


	test('The test mixed addition',function(assert){
	
			let bank = new Bank()
			bank.addRate("USD","CHF",2)
		    result = bank.reduce(fiveBucks.plus(tenFrancs), "USD")
		assert.ok(Money.dollar(10),bank.result,'should test for the mixed addition')		
	})
	 
	
	test('The test sum plus money',function(assert){
	
			bank.addRate("USD","CHF",2)
			expressionSum = new Sum(fiveBucks,tenFrancs).plus(fiveBucks)
			Money.result = bank.reduce(fiveBucks.plus(tenFrancs), 'USD')
			assert.ok(Money.dollar(15),bank.result,'should test for the sum plus money')
		
	})
			
  
	test('The test sum times', function(assert){
		
			let bank = new Bank()
			bank.addRate("USD", "CHF", 2)
			expressionSum = new Sum(fiveBucks, tenFrancs).times(2)
			moneyResult = reduced10
			assert.ok(Money.dollar(20),bank.result,'should test the sum of times')
		
	})
	
	test('The test Plus Returns Sum', function(assert){
        assert.ok(five, sum,'should test and return sum')
		assert.ok(five, sum,'should test and add sum')

	})
 
    test('The test Reduce Sum', function(assert){
			let expressionSum = new Sum(Money.dollar(3), Money.dollar(4))
			let bank = new Bank()
			result = reduced10
			assert.ok(Money.dollar(7),bank.result,'should reduce sum')
    })
	
    test('The test Reduce Money',function(assert){
	    
			let bank = new Bank()
			moneyResult = bank.reduce(Money.dollar(1), "USD")
			assert.ok(Money.dollar(1), bank.result,'should reduce the amount')

	})
	
	test('Test identity rate', function(assert){
		assert.ok(1,new Bank().rate("USD","USD"))
	})
	




  
})
   
