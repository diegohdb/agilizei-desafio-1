/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Register', () => {
    it('Registering new user', () => {
        const first = chance.first();
        const last = chance.last();

        cy.visit('index.php');

        cy.get('a[class=login]').click();
        cy.get('input#email_create').type(chance.email());
        cy.get('button#SubmitCreate').click();
        
        cy.get('input#id_gender1').check();
        cy.get('input#customer_firstname').type(first);
        cy.get('input#customer_lastname').type(last);
        cy.get('input#passwd').type(chance.string({ length: 8 }));
        cy.get('select#days').select('10');
        cy.get('select#months').select('March');
        cy.get('select#years').select('1990');
        cy.get('input#newsletter').check();
        cy.get('input#optin').check();

        cy.get('input#address1').type(chance.address());
        cy.get('input#city').type(chance.city());
        cy.get('select#id_state').select('Indiana');
        cy.get('input#postcode').type(chance.zip());
        cy.get('input#phone_mobile').type(chance.phone());
        cy.get('input#alias').type('Home');
        cy.get('button#submitAccount').click();

        cy.url().should('contain', 'my-account');
        cy.get('p[class^=info]').should('contain.text', 'Welcome to your account');
    });
});