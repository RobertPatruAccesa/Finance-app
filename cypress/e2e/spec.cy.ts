describe('template spec', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
	});

	it('should display the options within sidebar', () => {
		cy.visit('http://localhost:4200/login');

		cy.contains('Home');
		cy.contains('Transactions');
		cy.contains('Create Transaction');
		cy.contains('RCA');
		cy.contains('Log In');
	});

	it('should navigate to RCA page', () => {
		const staticResponse = ['audi', 'toyota', 'renault', 'skoda'];
		cy.fixture('db.json').as('dbJSON');
		cy.intercept('api/cars', staticResponse).as('carBrands');

		cy.visit('http://localhost:4200/RCA/1');
		cy.wait('@carBrands');

		cy.get('.marca-container > label').trigger('mouseenter').wait(2000);
		cy.get('.marca-label').trigger('mouseenter').wait(2000);

		cy.get('.marca-input').invoke('append', '<option value="skoda">Skoda</option>');
		cy.get('.marca-input').select('Skoda').should('have.value', 'skoda');
	});
});
