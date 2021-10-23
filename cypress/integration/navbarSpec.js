
///<reference types = "cypress"/>




describe("navBar Specs Check", () =>

{	
	 beforeEach(function() {
    cy.visit('https://smanager-webstore.dev-sheba.xyz/store/kaliyan-store')
  });


	it("Should check Partner Name", function ()
	{
		
		cy.get('.pointer')
			.invoke('text')
			.should('exist');

	});

	it('Should Check if Search bar available', () =>
	{
	
		cy.get('#search-bar').should('exist')
		

	})

	it('Should Check if Search bar available and then search product', () =>
	{
	
		
		cy.get('#search-bar').type('Product with multiple images').click().should('exist');

	})

	it('Should Check if Filter Card is available', () =>
	{
		
		cy.get('.filter-card').should('exist');

	})

	it('Should Check if Cart Icon is available', () =>
	{
		
		cy.get('.cart-icon > img').should('exist');

		

	})

	it('Check All Product List available', () =>
	{
	

		cy.get('#product-list').should('exist');

		

	});





})