describe("User Career Search Page Flows", () => {

  describe("Main Page Render", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it("Should have a header with text Career Explore on load", () => {
      cy.get('.header').find('a').find('.title').find('h1').contains("Career Explore")
    })

    it("Should have a menu with Favorites and Job Resources on load", () => {
      cy.get('.header').find('.menu').find('.favs').find('.favorites-page').contains('Favorites')
      cy.get('.header').find('.menu').find('.favs').should('have.attr', 'href').and('include', 'favorites')
      cy.get('.header').find('.menu').find('.jobs').find('.resources-page').contains('Job Resources')
      cy.get('.header').find('.menu').find('.jobs').should('have.attr', 'href').and('include', 'job-resources')
    })
  })
})
