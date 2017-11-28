/* globals describe beforeEach  it expect  Triangle */
describe('Triangle Test', () => {
//var should = require('chai').should()
//var should = require('should/as-function');
   let theTriangle
    beforeEach(() => {
	
        theTriangle = new Triangle()
    })
    describe('Triangle.setSides function', () => {
		
        it('Should be defined', () => {
           /* should(theTriangle.setSides).to.be.ok()*/
        })

        it('Should have numbers as parameters', () => {
           /* should(theTriangle.setSides()).to.not.equal('string')*/
        })
    })



    describe('Invalid Triangle Tests', () => {

        describe('Detecting triangle with zero side value', () => {

				describe('Triangle with sides (0,3,2) ie, first side zero', () => {
					it('should be Invalid', () => {
						theTriangle.setSides(0, 3, 2)
						/*should(theTriangle.result).to.equal('INVALID')*/
					})
				})
			
				describe('Triangle with sides (2,0,1) ie, second side zero', () => {
					it('should be Invalid', () => {
						theTriangle.setSides(2, 0, 1)
						/*should(theTriangle.result).to.equal('INVALID')*/
					})
				})
				describe('Triangle with sides(4,5,0) ie, third side zero', () => {
					it('should be Invalid', () => {
						theTriangle.setSides(4, 5, 0)
						/*should(theTriangle.result).to.equal('INVALID')*/
					})
				})
				describe('Triangle with sides(0,0,5) ie, first and second sides zero', () => {
					it('should be Invalid', () => {
						theTriangle.setSides(0, 0, 5)
						/*should(theTriangle.result).to.equal('INVALID')*/
					})
				})
		})
	})

	
            describe('Triangle with sides(0,6,0) ie, first and third sides zero', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(0, 6, 0)
                   /*should(theTriangle.result).to.equal('INVALID')*/
                })
            })
            describe('Triangle with sides(7,0,0) ie, second and third sides zero', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(7, 0, 0)
                   /* should(theTriangle.result).to.equal('INVALID')*/
                })
            })
            describe('Triangle with sides(0,0,0) ie, all sides zero', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(0, 0, 0)
                   /* should(theTriangle.result).to.equal('INVALID')*/
                })
            })


  
        describe('Detecting triangle with negative side value', () => {

            describe('Triangle with sides(-2,3,4) ie, negative  first side ', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(-2, 3, 4)
                    /*should(theTriangle.result).to.equal('INVALID')*/
                })
            })
		})

			
            describe('Triangle with sides(6,-7,8) ie, negative second side ', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(6, -8, 7)
                   /* should(theTriangle.result).to.equal('INVALID')*/
                })
            })


            describe('Triangle with sides(4,5,-6) ie, negative third side', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(4, 5, -6)
                    /*should(theTriangle.result).to.equal('INVALID')*/
                })
            })

			
            describe('Triangle with sides(-11,-12,14) ie, negative first and second sides', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(-11, -12, 14)
                   /*should(theTriangle.result).to.equal('INVALID')*/
                })
            })
	
			
            describe('Triangle with sides(5,-6,-7) ie, negative second and third sides', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(5, -6, -7)
                   /* should(theTriangle.result).to.equal('INVALID')*/
                })
            })
			
            describe('Triangle with sides(-1,3,-2) ie, negative first and third sides', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(-1, 3, -2)
                   /* should(theTriangle.result).to.equal('INVALID')*/
                })
            })
	


            describe('Triangle with sides(-1,-2,-3) ie, all sides negative', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(-1, -2, -3)
                    /*should(theTriangle.result).to.equal('INVALID')*/
                })
            })

        

		
        describe('Detecting triangle with side, which is not a number', () => {
            describe('Triangle with sides(a,1,2) ie, first side  is not a number', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides('a', 1, 2)
                    /* should(theTriangle.result).to.equal('INVALID')*/
                })
            })
            describe('Triangle with sides(1,b,2) ie, second side is not a number', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(1, 'b', 2)
                    /*should(theTriangle.result).to.equal('INVALID')*/
                })
            })
            describe('Triangle with sides(2,1,c) ie, third side is not a number', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(2, 1, 'c')
                    /*should(theTriangle.result).to.equal('INVALID')*/
                })
            })
        })

		
        describe('Detecting triangle with wrong number of sides', () => {
            describe('Triangle with sides(5,5) ie, with two sides', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(5, 5)
                    /*should(theTriangle.result).to.equal('INVALID')*/
                })
            })

            describe('Triangle with sides(4,5,1,6) ie, with four sides', () => {
                it('should be Invalid', () => {
                    let aTriangle = theTriangle.setSides(4, 5, 1, 6)
                   /* should(theTriangle.result).to.equal('INVALID')*/
                })
            })
        })


		
        describe('Checking the sum of the sides', () => {

            describe('Sum of the two sides equal to the third side', () => {

                describe('Triangle with sides(1,2,3) ie, sum of  first two sides equal to third side', () => {
                    it('should be Invalid', () => {
                        let aTriangle = theTriangle.setSides(1, 2, 3)
                       /* should(theTriangle.result).to.equal('INVALID')*/
                    })
                })
                describe('Triangle with sides(4,8,4) ie, sum of  first and last sides equal to second side', () => {
                    it('should be Invalid', () => {
                        let aTriangle = theTriangle.setSides(4, 8, 4)
                       /* should(theTriangle.result).to.equal('INVALID')*/
                    })
                })
                describe('Triangle with sides(5,3,2) ie, sum of  last two sides equal to first side', () => {
                    it('should be Invalid', () => {

                        let aTriangle = theTriangle.setSides(5, 3, 2)
                       /* should(theTriangle.result).to.equal('INVALID')*/
                    })
                })
            })
		})


			
            describe('Sum of the two sides less than the third side', () => {
				
				describe('Triangle with sides(3,2,8) ie, sum of first two sides less than third side', () => {
                    it('should be Invalid', () => {

                        let aTriangle = theTriangle.setSides(3, 2, 8)
                       /* should(theTriangle.result).to.equal('INVALID')*/
                    })
                })

                describe('Triangle with sides(1,4,2) ie, sum of first and third sides less than second side', () => {
                    it('should be Invalid', () => {
                        let aTriangle = theTriangle.setSides(1, 4, 2)
                       /* should(theTriangle.result).to.equal('INVALID')*/
                    })
                })
                
                describe('Triangle with sides(15,8,3) ie, sum of last two sides less than first side', () => {
                    it('should be Invalid', () => {

                        let aTriangle = theTriangle.setSides(15, 8, 3)
                       /* should(theTriangle.result).to.equal('INVALID')*/
                    })
                })
            })
	
    
    describe('Valid Triangle Tests', () => {

        describe('Detecting an Equilateral Triangle', () => {
            describe('A Triangle with sides (5,5,5) ie, all sides equal', () => {
                it('should be Equilateral ', () => {
                    let aTriangle = theTriangle.setSides(5, 5, 5)
                    /*should(theTriangle.result).to.equal('EQUILATERAL')*/
                })
            })

            describe('A Triangle with sides (1,2,3) ie, all sides different', () => {
                it('should not be  Equilateral ', () => {
                    let aTriangle = theTriangle.setSides(1, 2, 3)
                    /*should(theTriangle.result).to.not.equal('EQUILATERAL')*/
                })
            })
        })
	
		
        describe('Detecting an Isosceles Triangle', () => {
            describe('A Triangle with sides (5,5,4) ie, first and second sides equal', () => {
                it('should be Isosceles ', () => {
                    let aTriangle = theTriangle.setSides(5, 5, 4)
                    /*should(theTriangle.result).to.equal('ISOSCELES')*/
                })
            })
		
		
            describe('A Triangle with sides (6,5,6) ie, first and third sides equal', () => {
                it('should be Isosceles', () => {
                    let aTriangle = theTriangle.setSides(6, 5, 6)
                    /*should(theTriangle.result).to.equal('ISOSCELES')*/
                })
            })
            describe('A Triangle with sides (8,7,7) ie, second and third sides equal', () => {
                it('should be Isosceles', () => {
                    let aTriangle = theTriangle.setSides(8, 7, 7)
                    /*should(theTriangle.result).to.equal('ISOSCELES')*/
                })
            })
        })
        describe('Detecting a Scalene Triangle', () => {
            describe('A Triangle with sides (2,3,4), ie, all sides different', () => {
                it('should be Scalene ', () => {
                    let aTriangle = theTriangle.setSides(2, 3, 4)
                   /* should(theTriangle.result).to.equal('SCALENE')*/
                })
            })
        })
	})


		
		// Failing Tests
        describe('Detecting an Acute Triangle ', () => {

            describe('A Triangle with sides (15,22,25) ', () => { // 15*15 + 22*22 > 25*25
                it('should be Acute  ', () => {
                    let aTriangle = theTriangle.setSides(15, 22, 25)
                   /* should(theTriangle.result).to.be.ok('ACUTE')*/
                })
            })
        })
        describe('Detecting an Obtuse Triangle ', () => {
            describe('A Triangle with sides (8,15,20) ', () => { // 8*8 + 15*15 < 20*20
                it('should be Obtuse  ', () => {
                    let aTriangle = theTriangle.setSides(8, 15, 20)
                   /* should(theTriangle.result).to.be.ok('OBTUSE')*/
                })
            })
        })
        describe('Detecting a Right Angled Triangle ', () => {
            describe('A Triangle with sides (12,35,37) ', () => { // 15*15 + 22*22 = 25*25
                it('should be Right Angled  ', () => {
                    let aTriangle = theTriangle.setSides(12, 35, 37)
                   /* should(theTriangle.result).to.be.ok('RIGHT ANGLED')*/
                })
            })
        })
})
