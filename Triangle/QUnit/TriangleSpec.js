/* globals describe beforeEach  it expect  Triangle */
test('Triangle Test',function(assert){
		let theTriangle = new Triangle()
   // beforeEach(() => {
      test('Triangle.setSides function', function(assert){
		   assert.ok(theTriangle.setSides,'Should be defined')
		   assert.ok(theTriangle.setSides,'Should have numbers as parameters')
		})


   test('Invalid Triangle Tests', function(assert){

        assert.ok('Detecting triangle with zero side value')
        assert.ok(theTriangle.result,'Triangle with sides (0,3,2) ie, first side zero','should be Invalid')
   })


	test('Triangle with sides (0,3,2) ie, first side zero', function(assert) {
		theTriangle.setSides(0, 3, 2)
		assert.ok(theTriangle.result,'should be Invalid')
				
	})
			
	test('Triangle with sides (2,0,1) ie, second side zero', function(assert) {
	   theTriangle.setSides(2, 0, 1)
		assert.ok(theTriangle.result,'should be Invalid')
				
	})
	
	test('Triangle with sides(4,5,0) ie, third side zero', function(assert) {
	    theTriangle.setSides(4, 5, 0)		
		assert.ok(theTriangle.result,'should be Invalid')
	})
	
			
	test('Triangle with sides(0,0,5) ie, first and second sides zero', function(assert) {
		theTriangle.setSides(0, 0, 5)			
		assert.ok(theTriangle.result,'should be Invalid')
	})
	
	test('Triangle with sides(0,6,0) ie, first and third sides zero', function(assert) {
         let aTriangle = theTriangle.setSides(0, 6, 0)      
         assert.ok(theTriangle.result,'should be Invalid')
    })
      
	  
    test('Triangle with sides(7,0,0) ie, second and third sides zero', function(assert) {
         let aTriangle = theTriangle.setSides(7, 0, 0)       
         assert.ok(theTriangle.result,'should be Invalid')
    })
           
     test('Triangle with sides(0,0,0) ie, all sides zero', function(assert) {
          let aTriangle = theTriangle.setSides(0, 0, 0)     
          assert.ok(theTriangle.result,'should be Invalid')
    })

	
     test('Triangle with sides(-2,3,4) ie, negative  first side ', function(assert){
         let aTriangle = theTriangle.setSides(-2, 3, 4)       
         assert.ok(theTriangle.result,'should be Invalid')
     })
            
     test('Triangle with sides(6,-7,8) ie, negative second side', function(assert) {
          let aTriangle = theTriangle.setSides(6, -8, 7)     
          assert.ok(theTriangle.result,'should be Invalid')
     })
           
     test('Triangle with sides(4,5,-6) ie, negative third side', function(assert) {
         let aTriangle = theTriangle.setSides(4, 5, -6)    
         assert.ok(theTriangle.result,'should be Invalid')
               
     })
        
    test('Triangle with sides(-11,-12,14) ie, negative first and second sides', function(assert) {

        let aTriangle = theTriangle.setSides(-11, -12, 14)
        assert.ok(theTriangle.result,'should be Invalid')
     })
   
         
     test('Triangle with sides(5,-6,-7) ie, negative second and third sides',function(assert) {
		 
        let aTriangle = theTriangle.setSides(5, -6, -7)
        assert.ok(theTriangle.result,'should be Invalid')
    })
      

     test('Triangle with sides(-1,3,-2) ie, negative first and third sides', function(assert) {
		 
         let aTriangle = theTriangle.setSides(-1, 3, -2)
         assert.ok(theTriangle.result,'should be Invalid')
       })
          
    test('Triangle with sides(-1,-2,-3) ie, all sides negative', function(assert) {
		
        let aTriangle = theTriangle.setSides(-1, -2, -3)  
        assert.ok(theTriangle.result,'should be Invalid')
     })
           
    test('Triangle with sides(a,1,2) ie, first side  is not a number', function(assert)  {
		
           let aTriangle = theTriangle.setSides('a', 1, 2  )  
           assert.ok(theTriangle.result,'should be Invalid')
   })
          
    test('Triangle with sides(1,b,2) ie, second side is not a number',function(assert) {
            
		  let aTriangle = theTriangle.setSides(1, 'b', 2)
          assert.ok(theTriangle.result,'should be Invalid')
     })
    

      test('Triangle with sides(2,1,c) ie, third side is not a number', function(assert) {
            
		let aTriangle = theTriangle.setSides(2, 1, 'c')
        assert.ok(theTriangle.result,'should be Invalid')
      })
  
 
      test('Triangle with sides(5,5) ie, with two sides', function(assert) {
          
		 let aTriangle = theTriangle.setSides(5, 5)
         assert.ok(theTriangle.result,'should be Invalid')
        })
         
    test('Triangle with sides(4,5,1,6) ie, with four sides', function(assert) {
          
		   let aTriangle = theTriangle.setSides(4, 5, 1, 6)
           assert.ok(theTriangle.result,'should be Invalid')
        })
      
   
    test('Triangle with sides(1,2,3) ie, sum of  first two sides equal to third side', function(assert) {
                 
			let aTriangle = theTriangle.setSides(1, 2, 3)
			assert.ok(theTriangle.result,'should be Invalid')
    })
         
    test('Triangle with sides(4,8,4) ie, sum of  first and last sides equal to second side',function(assert) {
                  
			let aTriangle = theTriangle.setSides(4, 8, 4)
			assert.ok(theTriangle.result,'should be Invalid')
    })

   test ('Triangle with sides(5,3,2) ie, sum of  last two sides equal to first side',function(assert) {
          

			let aTriangle = theTriangle.setSides(5, 3, 2)
			assert.ok(theTriangle.result,'should be Invalid')
    })
                


       
	test('Triangle with sides(3,2,8) ie, sum of first two sides less than third side',function(assert){
                 

		let aTriangle = theTriangle.setSides(3, 2, 8)
		assert.ok(theTriangle.result,'should be Invalid')
     })
             

     test('Triangle with sides(1,4,2) ie, sum of first and third sides less than second side', function(assert) {
                   
		let aTriangle = theTriangle.setSides(1, 4, 2)
	    assert.ok(theTriangle.result,'should be Invalid')
     })
        
                
     test('Triangle with sides(15,8,3) ie, sum of last two sides less than first side', function(assert){
             
		let aTriangle = theTriangle.setSides(15, 8, 3)
		assert.ok(theTriangle.result,'should be Invalid')
     })
             
 
     test('A Triangle with sides (5,5,5) ie, all sides equal', function(assert){
           
		let aTriangle = theTriangle.setSides(5, 5, 5)
		assert.ok(theTriangle.result,'should be Equilateral ')
     })
         

      test('A Triangle with sides (1,2,3) ie, all sides different',function(assert) {
                
		let aTriangle = theTriangle.setSides(1, 2, 3)
		assert.ok(theTriangle.result,'should not be  Equilateral ')
                
	})
          

    test('A Triangle with sides (5,5,4) ie, first and second sides equal',function(assert) {

		let aTriangle = theTriangle.setSides(5, 5, 4)
		assert.ok(theTriangle.result,'should be Isosceles ')
     })
        
		
    test('A Triangle with sides (6,5,6) ie, first and third sides equal',function(assert) {
            
		let aTriangle = theTriangle.setSides(6, 5, 6)
	    assert.ok(theTriangle.result,'should be Isosceles')
    })
     
     test('A Triangle with sides (8,7,7) ie, second and third sides equal',function(assert){
            
		let aTriangle = theTriangle.setSides(8, 7, 7)
		assert.ok(theTriangle.result,'should be Isosceles')
     })
      
     test('A Triangle with sides (2,3,4), ie, all sides different',function(assert) {
         
		let aTriangle = theTriangle.setSides(2, 3, 4)
		assert.ok(theTriangle.result,'should be Scalene ')
     })
    
	

	let aTriangle = theTriangle.setSides(15, 22, 25)
	assert.ok(theTriangle.result,'should be Acute', 'A Triangle with sides (15,22,25) ') // 15*15 + 22*22 > 25*25

	assert.ok(theTriangle.result,'should be Obtuse','A Triangle with sides (8,15,20) ')// 8*8 + 15*15 < 20*20
  
	assert.ok(theTriangle.result,'should be Right Angled ','A Triangle with sides (12,35,37) ')// 15*15 + 22*22 = 25*25
               
        
	
})
    
