/* global describe beforeEach Controller it expect Cake */
describe('Question Four and Question Five', () => {
  describe('Cake', () => {
    var cake
    beforeEach( () => {
      cake = new Cake()
    })

    it('should have a .myCakeShop reference', () => {
      expect(cake.hasOwnProperty('myCakeShop')).toBeTruthy()
    })

    it('should have a .id property', () => {
      expect(cake.hasOwnProperty('id')).toBeTruthy()
    })

    it('should have a .cakeName property', () => {
      expect(cake.hasOwnProperty('cakeName')).toBeTruthy()
    })

    it('should have a .origin property', ()=> {
      expect(cake.hasOwnProperty('origin')).toBeTruthy()
    })

    it('should have a .cost property', () => {
      expect(cake.hasOwnProperty('cost')).toBeTruthy()
    })
  })

  describe('write a CakeShop.addCake function to add the Cakes', () => {
    var theMumsPalace
    beforeEach( () => {
      theMumsPalace = Controller.setup()
    })

    it('CakeShop 01 should have two Cakes', () => {
      var theCakeShop = theMumsPalace.findCakeShop('01')
      expect(theCakeShop.allMyCakes.length).toBe(2)
    })

    it('CakeShop 02 should have one Cake', () => {
      var theCakeShop = theMumsPalace.findCakeShop('02')
      expect(theCakeShop.allMyCakes.length).toBe(1)
    })

    it('CakeShop 03 should have one Cake', () => {
      var theCakeShop = theMumsPalace.findCakeShop('03')
      expect(theCakeShop.allMyCakes.length).toBe(1)
    })

    it('CakeShop 04 should have two Cakes', () => {
      var theCakeShop = theMumsPalace.findCakeShop('04')
      expect(theCakeShop.allMyCakes.length).toBe(2)
    })

    it('should correctly set Cake details', function () {
            /*
             Shop 		 ID   	CAKENAME           Origin       	   Cost
			01 			 401   Angel cake          United Kingdom      $20
			01  		 402   Babka                  Poland           $15
			03  		 389   Boston cream pie       United States    $25
			02           113   Black Forest cake      Germany          $30
			04           114   Cheesecake             Greece           $20
			04           121   Panettone              Italy		       $15

            */
      var aCake, theCakeShop
      theCakeShop = theMumsPalace.findCakeShop('01')
      aCake = theCakeShop.sortCakes()
            //     01 			 401   Angel cake          United Kingdom      $20
      aCake = theCakeShop.allMyCakes[0]
      expect(aCake.myCakeShop).toEqual(theCakeShop)
      expect(aCake.id).toBe(401)
      expect(aCake.cakeName).toBe('Angel cake')
      expect(aCake.origin).toBe('United Kingdom')
      expect(aCake.cost).toBe(20)

            //     01  		 402   Babka                  Poland           $15
      aCake = theCakeShop.allMyCakes[1]
      expect(aCake.myCakeShop).toEqual(theCakeShop)
      expect(aCake.id).toBe(402)
      expect(aCake.cakeName).toBe('Babka')
      expect(aCake.origin).toBe('Poland')
      expect(aCake.cost).toBe(15)

      theCakeShop = theMumsPalace.findCakeShop('02')
      aCake = theCakeShop.sortCakes()
              //    02           113   Black Forest cake      Germany          $30
      aCake = theCakeShop.allMyCakes[0]
      expect(aCake.myCakeShop).toEqual(theCakeShop)
      expect(aCake.id).toBe(113)
      expect(aCake.cakeName).toBe('Black Forest cake')
      expect(aCake.origin).toBe('Germany')
      expect(aCake.cost).toBe(30)

      theCakeShop = theMumsPalace.findCakeShop('03')
      aCake = theCakeShop.sortCakes()
             // 03  		 389   Boston cream pie       United States    $25
      aCake = theCakeShop.allMyCakes[0]
      expect(aCake.myCakeShop).toEqual(theCakeShop)
      expect(aCake.id).toBe(389)
      expect(aCake.cakeName).toBe('Boston cream pie')
      expect(aCake.origin).toBe('United States')
      expect(aCake.cost).toBe(25)

      theCakeShop = theMumsPalace.findCakeShop('04')
      aCake = theCakeShop.sortCakes()
            // 04           114   Cheesecake             Greece           $20
      aCake = theCakeShop.allMyCakes[0]
      expect(aCake.myCakeShop).toEqual(theCakeShop)
      expect(aCake.id).toBe(114)
      expect(aCake.cakeName).toBe('Cheesecake')
      expect(aCake.origin).toBe('Greece')
      expect(aCake.cost).toBe(20)

            // 04           121   Panettone              Italy		       $15
      aCake = theCakeShop.allMyCakes[1]
      expect(aCake.myCakeShop).toEqual(theCakeShop)
      expect(aCake.id).toBe(121)
      expect(aCake.cakeName).toBe('Panettone')
      expect(aCake.origin).toBe('Italy')
      expect(aCake.cost).toBe(15)
    })
  })
})