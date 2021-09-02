describe('Device', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
    });
  
    it('has a button names Device Detect', () => {
        cy.get('#BtnDeviceDisplay').should('have.text', 'Detect Device');
    });
    it('Detect device button should display device details', () => {
        cy.get('#BtnDeviceDisplay').click();
        cy.get('ul').children().should('have.length', 7);
        cy.get('ul').children().contains('Operating System - ');
        cy.get('ul').children().contains('Browser -');
        cy.get('ul').children().contains('OS_version -');
        cy.get('ul').children().contains('Device -');
        cy.get('ul').children().contains('Browser_version -');
        cy.get('ul').children().contains('DeviceType -');
        
    });
  });