
describe('Basic check for the source code', () => {
	describe('Bank', () => {
		let theBank
		beforeEach(() => {
			theBank = new Bank()
			let five =  Money.dollar(5)
    //let five = Money.dollar(5)  // MIKE
		})
		
    describe('Check for Multiplication', () => {
      it('should test Multiplication for 10 and 2', () => {
        expect(Money.dollar(10), five.times(2)).to.be.ok()
      })
      it('should test multiplication for 15 and 3', () => {
        expect(Money.dollar(15), five.times(3)).to.be.ok()
      })
    })
      
    describe('Check for Equality', () => {
      it('should test equality if 5 is equal to 5', () => {
        let amount = Money.dollar(5)
        expect(Money.dollar(5) == (Money.dollar(5))).to.not.equal()
      })
	 
      it('should test if the given two numbers are not equal', () => {
        expect(Money.dollar(5) != (Money.dollar(6))).to.ok()
          })
      it('should test if both the dollar and franc are equal', () => {
        expect(Money.franc(10) == (fiveBucks)).to.not.equal()
      })
    })

    describe('Check for the currency', () => {
      it('should check for the "USD"', () => {
        expect(Money.dollar(1).getCurrency()).to.be.ok()
      })
      it('should test the franc "CHF"', () => {
        expect(Money.franc(1).getCurrency()).to.be.ok()
      })
    })
    
    
    describe('Perform Simple Addition', () => {
      it('should verify US$5 + sum', () => {
      //let five = new moneyDollar(5)
      let sum = five.plus(five)
          let bank = new Bank()
      reduced10 = bank.reduce(sum,"USD")
      expect(Money.dollar(10),bank.reduce(sum,"USD")).to.be.ok()
      })
    })


    describe('Perform mixed addition',() => {
      it('should reduce US$5 + CHF10 to mixed addition', () => {
        let fiveBucks = Money.dollar(5)
        let tenFrancs = Money.franc(10)
        let bank = new Bank()
        bank.addRate("CHF","USD",2)
        let m10dollar = bank.reduce(fiveBucks.plus(tenFrancs), "USD")
        expect(Money.dollar(10),bank.reduce(fiveBucks.plus(tenFrancs), "USD")).to.be.ok()
      })
    })
     
    
    describe('Sum plus money',() => {
      it('should expect the sum of 5$ + 10CHF to money', () => {
        let fiveBucks = Money.dollar(5)
        let tenFrancs = Money.franc(10)
        let bank = new Bank()
        bank.addRate("CHF","USD",2)
        let sum = new Sum(fiveBucks,tenFrancs).plus(fiveBucks)
        let reduced10 = bank.reduce(sum,"USD")
        expect(Money.dollar(15),bank.reduce(sum,"USD")).to.be.ok()
      })
    })
        
    
    describe('Calculate the sum of times', () => {
      it('should calculate the sum of US$5 + CHF10 to be USD$20', () => {
        let fiveBucks = Money.dollar(5)
        let tenFrancs = Money.franc(10)
        let bank = new Bank()
        bank.addRate("CHF","USD",2);
        let sum = new Sum(fiveBucks, tenFrancs).times(2);
        let reduced10 = bank.reduce(sum,"USD");
        expect(Money.dollar(20),bank.reduce(sum,"USD")).to.be.ok()
      })
    })
    
    describe('Return Sum from return', () => {
      it('should test for US$5 to return sum', () => {
        let five = Money.dollar(5)
        let sum = five.plus(five)
        
        //let sum = (Sum).moneyResult
        expect(five, sum.augend).to.be.ok()
        expect(five, sum.addend).to.be.ok()
      })
    })
   
      describe('Reduce Sum from bank', () => {
        it('should reduce sum with the US$', () => {
          let sum = new Sum(Money.dollar(3), Money.dollar(4))
          let bank = new Bank()
          let moneyDollars15 = bank.reduce(sum, "USD");
          expect(Money.dollar(7), bank.reduce(sum, "USD")).to.be.ok()
        })
      })
    
      describe('Reduce Money from the result', () => {
      it('should reduce the amount with the result', () => {
        let bank = new Bank()
        moneyResult = bank.reduce(Money.dollar(1), "USD");
        expect(Money.dollar(1), moneyResult).to.be.ok()
      })
    })
   /* 
    describe('test identity rate', () => {
      let bank = new Bank()
      expect(1,bank.addRate("USD","USD"))
	  console.log()
    })
    */
    describe('Reducing money from different currencies', () => {
      it('should reduce US$5 + FR$10 to US$', () => {
        let bank = new Bank()
        bank.addRate('CHF', 'USD', 2);
        let moneyDollars15 = bank.reduce(new Sum(fiveBucks, tenFrancs).plus(fiveBucks), "USD");
        expect(Money.dollar(1), bank.reduce(sum, "USD")).to.be.ok()
      })
    })



    
  })
   
})