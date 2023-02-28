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

	it('simulate user experience', () => {
		cy.visit('http://localhost:4200/login');

		cy.get('input[name="username"]').type('123');
		cy.get('input[name="password"]').type('123');

		cy.intercept(
			{
				method: 'GET',
				url: 'http://localhost:4200/api/users'
			},
			[
				{
					id: '1',
					username: 'Robert Patru',
					email: 'robert.patru@test.com',
					password: '1234'
				},
				{
					password: '123',
					username: '123'
				}
			]
		).as('getUsers');

		cy.contains('LOGIN').click().wait('@getUsers');
		cy.wait(1000);

		// visit home
		cy.contains('Home').click().wait(1000);

		// load the transactions before visiting transactions page
		cy.intercept(
			{
				method: 'GET',
				url: 'http://localhost:4200/api/transactions'
			},
			[
				{
					id: '1',
					userId: '1',
					amount: 200,
					type: 'payment',
					date: '2023-01-15',
					description: 'Tickets to filmarmonica-',
					category: 'entertainment'
				},
				{
					id: '2',
					userId: '1',
					amount: 1000,
					type: 'payment',
					date: '02-01-2023',
					description: 'Paying Rent',
					category: 'living-cost'
				}
			]
		).as('getTransactions');

		cy.contains('Transactions').click().wait('@getTransactions').wait(1000);

		// mock first transaction data
		cy.intercept(
			{
				method: 'GET',
				url: 'http://localhost:4200/api/transactions/1'
			},
			{
				id: '1',
				username: 'Robert Patru',
				email: 'robert.patru@test.com',
				password: '1234'
			}
		).as('firstTransaction');

		// open a transaction
		cy.contains('1').click().wait('@firstTransaction').wait(1000);
		// edit the transaction
		cy.get('textarea[name="description"]').clear().type('This descriptions is being modified by cypress.');
		cy.get('input[name="amount"]').clear().type('99.99');
		cy.get('select[name="category"]').select('living-cost');
		cy.get('select[name="payment-type"]').select('encashment');
		cy.get('input[name="date"]').type('2023-02-27');

		cy.contains('EDIT TRANSACTION').click();
		cy.contains('CANCEL').click().wait(1000);

		// create new transaction
		cy.contains('Create Transaction').click();

		cy.get('textarea[name="description"]').clear().type('This is a new transaction created through cypress');
		cy.get('input[name="amount"]').clear().type('189.99');
		cy.get('select[name="category"]').select('living-cost');
		cy.get('select[name="payment-type"]').select('encashment');
		cy.get('input[name="date"]').type('2023-02-27');

		cy.contains('ADD TRANSACTION').click().wait(1500);
		cy.contains('CANCEL').click().wait(100);

		// go to RCA form
		// cy.contains('RCA').click();

		// cy.get('select[name="stare-inmatriculare-input"]').select('inmatriculat');
		// cy.get('input[name="numar-inmatriculare"').type('1233455');
		// cy.get('select[name="categorie"]').select('autoturism');
		// cy.get('select[name="marca-input"]').select('audi');
		// cy.get('select[name="marca-input"]').click();
		// cy.get('select[name="marca-input"]').click();
		// cy.get('select[name="model"]').select('RS6 Avant');
		// cy.get('input[name="numar-identificare-sasiu"').type('VK48AWD848QWE484');
		// cy.get('input[name="alta-utilizare"').click();
		// cy.get('select[name="utiliare-specifica"]').select('rent a car');
		// cy.get('input[name="serie-carte-auto"').type('DJ848');
		// cy.get('input[name="masa-maxima-autorizata"').type('04');
		// cy.get('select[name="numar-identificare-sasiu"]').click();
		// cy.get('input[name="masa-maxima-autorizata"').clear().type('2045');
		// cy.get('input[name="capacitate-cilindrica"').type('3996');
		// cy.get('input[name="an-fabricatie"').type('2023');
		// cy.get('input[name="numar-locuri"').type('5');
		// cy.get('input[name="puterei"').type('610');
		// cy.get('select[name="servicii-extra"]').select('Asistenta accident');
		// cy.get('select[name="servicii-extra"]').select('Asistenta pana');
		// cy.get('select[name="servicii-extra"]').select('Asistenta furt');

		// cy.get('input[name="numar-inmatriculare"').clear().type('dj17hrc');

		cy.contains('Log Out').click();
	});
});
