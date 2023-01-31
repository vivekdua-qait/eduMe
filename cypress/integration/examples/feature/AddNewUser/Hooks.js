beforeEach(function(){
    
    cy.fixture('credentials').then(function(testdata){
      this.testdata = testdata
    })
})