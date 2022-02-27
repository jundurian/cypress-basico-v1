describe('Tickets', () => {

    beforeEach(function(){
        cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html');
    })

    // beforeEach(()=> cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))

    it('fills all the text input fields', () => {

        const firstName = "Gabriel"
        const lastName = "Jundurian"

        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type("Jundurian@jundurian.com");
        cy.get('#requests').type("Jndurian");
        cy.get('#signature').type(`${firstName} ${lastName}`);

    });

    it('select two tickets', () => {
        cy.get('#ticket-quantity').select("2");
        cy.get('#ticket-quantity').select(3);

    });

    it('select vip ticket', () => {
        cy.get('#vip').check();
    });

    it('selects social media checkbox', () => {
        cy.get("#social-media").check()
    });

    it('selects friend and publication and unchek friend', () => {
        cy.get("#friend").check()
        cy.get("#publication").check()
        cy.get("#friend").uncheck()

    });

    it("has 'TICKETBOX'header's heading", () => {
        cy.get('header h1').should("contain","TICKETBOX");
    });

    it('alerts on invalid email', () => {
        cy.get('#email')
        .as("email")
        .type("Jundurian-jundurian.com");

        cy.get('#email.invalid').should("exist");

        cy.get('@email')
        .clear()
        .type("jundurian@jundurian.com")
        ;

        cy.get('#email.invalid').should("not.exist");
    });

    it('fills and reset the form', () => {

        const firstName = "Gabriel"
        const lastName = "Jundurian"
        const fullName = `${firstName} ${lastName}`

        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type("Jundurian@jundurian.com");
        cy.get('#ticket-quantity').select("2");
        cy.get('#vip').check();
        cy.get("#friend").check()
        cy.get('#requests').type("Jndurian");

        cy.get('.agreement p')
        .should(
            "contain",
            `I, ${fullName}, wish to buy 2 VIP tickets`
        );

        cy.get('#agree').click();
        cy.get('#signature').type(fullName);

        cy.get('button[type="submit"')
        .as("submitButton")
        .should('not.be.disabled');

        cy.get('button[type="reset"').click();

        cy.get('@submitButton').should("be.disabled");
    });

    it('fills mandatory field using support command', () => {
        
        const customer = {
            firstName: "John",
            lastName: "Doe",
            email: "jodoe@gmail.com"
        }


        cy.fillMandatoryField(customer)

        cy.get('button[type="submit"')
        .as("submitButton")
        .should('not.be.disabled');

        cy.get('#agree').uncheck();

        cy.get('@submitButton').should("be.disabled");


    });
});