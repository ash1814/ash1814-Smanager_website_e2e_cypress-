/// <reference types ="cypress"/>


describe('Add Product to Cart', () =>{
// {
// 	 beforeEach(function() {
//     cy.visit('https://www.smanager.xyz/store/bookworms')
//   });

	it('Should check If product-list is available', () =>
	{
	   cy.request('https://api.sheba.xyz/v2/partners/bookworms',)

		cy.get('#product-list').should('exist')

		
	});

	it('Should check If product-list is available', () =>
	{
		
		cy.request('GET', 'https://api.sheba.xyz/v2/partners/bookworms').its('body')
			.should('contain', '[{200}');

	});

	

		
		
	});