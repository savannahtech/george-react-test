describe('shared-ui: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=button--primary&args=name;'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Button!');
  });
});
