describe("User Career Explore Page Flows", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  describe("Main Page Render", () => {

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
      cy.get('.the-prompts').find('.arrow-container').find('.question').contains('Do you have interest in a US government role?')
      cy.get('.the-prompts').find('.arrow-container2').find('.question2').contains('Put on any job “hat” for a moment and imagine yourself in that position!')
    })

    it("Should display search prompt and search bar with button", () => {
      cy.get('.form-search').find('.the-search').find('.prompt').contains('Search for any government job title and learn about what they get to do!')
      cy.get('.form-search').find('.the-search').find('input')
      cy.get('.form-search').find('.the-search').find('.job-search').contains('Search')
    })

    it("Should be able to select position input, fill it with a search value, and fetch clickable card on submit", () => {
      cy.intercept("GET", 'https://data.usajobs.gov/api/Search?PositionTitle=**', { fixture: 'software-engineer-search-data.json', status: 200})
      cy.get('input[type="text"]')
        .type('Software Engineer')
        .should('have.value', 'Software Engineer')
      cy.get('button').click()
      cy.get('.search-results-title').contains("Software Engineer")
      cy.get('.job-container').find('.card').find('p').contains('PROF OF SOFTWARE ENGINEERING MANAGEMENT (DEV/SEC/OPS)')
      cy.get('.job-container').find('.card').click()
    })
  })

  describe("Details and Favorites Page Render", () => {

    it("Should show job duty details of specific job posting", () => {
      cy.intercept("GET", 'https://data.usajobs.gov/api/Search?PositionTitle=**', { fixture: 'software-engineer-search-data.json', status: 200})
      cy.get('input[type="text"]')
        .type('Software Engineer')
        .should('have.value', 'Software Engineer')
      cy.get('button').click()
      cy.get('.search-results-title').contains("Software Engineer")
      cy.get('.job-container').find('.card').find('p').contains('PROF OF SOFTWARE ENGINEERING MANAGEMENT (DEV/SEC/OPS)')
      cy.get('.job-container').find('.card').click()
      cy.get('.the-details-card').find('.duties-details').find('.duty').contains("This position develops training materials and provides training to the DoD acquisition workforce in the areas associated with engineering management, with emphasis on modern software development methodologies. The holder of the position will also conduct research and analysis of defense acquisition policy issues. Serves as a Professor of Software Engineering Management with extensive experience and knowledge in modern software development methods (DevSecOps, Agile) and software product areas (Weapons Systems, AI, Cyber, Defense Business Systems, etc), software assurance and provenance for large and complex military systems. Performs as a \"thinking partner\" and consultant with acquisition customers and students, continuously improving product and service delivery to provide the right knowledge and skills at the point of need through mission assistance, workshops, classroom offerings and on-line resources. Creates content and coordinates with learning asset and technology subject matter experts within the enterprise for development of curriculum, to modify assets and enhance delivery methods as needed. Develops and conducts lectures, cases, simulations, workshops, and field trips. Leads and facilitates student discussion, problem solving, and presentations. Prepares course materials (student and instructor) according to current instructional systems design technology and develops course schedules. Develops and analyzes student assessments, and provides student counseling to ensure the highest degree of learning. Develops or contributes to development of online assets (e.g. courses, podcasts, videos) that customers can leverage in the absence of direct access to DAU faculty. Participates in professional research to ensure curriculum currency and to enhance the skill set and processes in your field of expertise. Performs other duties as assigned.")
    })

    it("Should show favorite button, job title and organization name", () => {
      cy.intercept("GET", 'https://data.usajobs.gov/api/Search?PositionTitle=**', { fixture: 'software-engineer-search-data.json', status: 200})
      cy.get('input[type="text"]')
        .type('Software Engineer')
        .should('have.value', 'Software Engineer')
      cy.get('button').click()
      cy.get('.search-results-title').contains("Software Engineer")
      cy.get('.job-container').find('.card').find('p').contains('PROF OF SOFTWARE ENGINEERING MANAGEMENT (DEV/SEC/OPS)')
      cy.get('.job-container').find('.card').click()
      cy.get('.the-details').find('.the-details-card').find('.favorite').find('button').contains('Add to Favorites')
      cy.get('.the-details').find('.the-details-card').find('.heading-details').contains("PROF OF SOFTWARE ENGINEERING MANAGEMENT (DEV/SEC/OPS)")
      cy.get('.the-details').find('.the-details-card').find('.heading-org-details').contains("Defense Acquisition University")
      cy.get('.the-details').find('.the-details-card').find('.heading-dept-details').contains("Department of Defense")
    })

    it("Should add card to favorites page on button click", () => {
      cy.intercept("GET", 'https://data.usajobs.gov/api/Search?PositionTitle=**', { fixture: 'software-engineer-search-data.json', status: 200})
      cy.get('input[type="text"]')
        .type('Software Engineer')
        .should('have.value', 'Software Engineer')
      cy.get('button').click()
      cy.get('.search-results-title').contains("Software Engineer")
      cy.get('.job-container').find('.card').find('p').contains('PROF OF SOFTWARE ENGINEERING MANAGEMENT (DEV/SEC/OPS)')
      cy.get('.job-container').find('.card').click()
      cy.get('.the-details').find('.the-details-card').find('.favorite').find('button').click()
      cy.visit('http://localhost:3000/favorites')
      cy.get('.favorite-container').find('.details').find('.details-card').find('.heading-details').contains('PROF OF SOFTWARE ENGINEERING MANAGEMENT (DEV/SEC/OPS)')
    })

    it("Should remove card from favorites on button click", () => {
      cy.intercept("GET", 'https://data.usajobs.gov/api/Search?PositionTitle=**', { fixture: 'software-engineer-search-data.json', status: 200})
      cy.get('input[type="text"]')
        .type('Software Engineer')
        .should('have.value', 'Software Engineer')
      cy.get('button').click()
      cy.get('.search-results-title').contains("Software Engineer")
      cy.get('.job-container').find('.card').find('p').contains('PROF OF SOFTWARE ENGINEERING MANAGEMENT (DEV/SEC/OPS)')
      cy.get('.job-container').find('.card').click()
      cy.get('.the-details').find('.the-details-card').find('.favorite').find('button').click()
      cy.visit('http://localhost:3000/favorites')
      cy.get('.favorite-container').find('.details').find('.button-container').find('.delete-btn').click()
      cy.get('.details').should('not.exist')
    })

    it("Should render a 404 page for nonexistant url", () => {
      cy.visit('http://localhost:3000/xyz')
      cy.get('.error-404').find('.error-message').contains('404 - Page Not Found')
    })
  })
})
