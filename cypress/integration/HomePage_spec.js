describe("User Career Search Page Flows", () => {

  describe("Main Page Render", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it("Should have a header with text Career Explore on load", () => {
      cy.get('.header').find('a').find('.title').find('h1').contains("Career Explore")
    })

    it("Should have a menu with Home and Favorites on load", () => {
      cy.get('.header').find('.menu').find('.home').contains('Home')
      cy.get('.header').find('.menu').find('.home').should('have.attr', 'href').and('include', '/')
      cy.get('.header').find('.menu').find('.favs').contains('Favorites')
      cy.get('.header').find('.menu').find('.favs').should('have.attr', 'href').and('include', '/favorites')
    })

    it("Should display prompts before search bar area", () => {
      cy.get('.form-search').find('.the-prompts').find('.arrow-container').find('.question').contains('Do you have interest in a US government role?')
      cy.get('.form-search').find('.the-prompts').find('.arrow-container2').find('.question').contains('Put on any job “hat” for a moment and imagine yourself in that position!')
    })

    it("Should display search prompt and search bar with button", () => {
      cy.get('.form-search').find('.the-search').find('.prompt').contains('Search for any government job title and learn about what they get to do!')
      cy.get('.form-search').find('.the-search').find('input')
      cy.get('.form-search').find('.the-search').find('.job-search').contains('Search')
    })
  })
})
