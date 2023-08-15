describe('shared-ui: HelloServer component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=helloserver--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to HelloServer!');
  });
});
