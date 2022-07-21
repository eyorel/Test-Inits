// <reference types="Cypress" />
//Movie details Test Suite will attempt to validate opening a movie from homepage and check that the information displayed is the one expected for selected movie.

describe('Movie details page validation', () => {
 
 
  it('Title is same as db value', () => {
    cy.visit('https://www.rottentomatoes.com/')
    cy.get('[data-curation="rt-hp-poster-list-popular-in-theaters"] > .dynamic-poster-list > tiles-carousel-responsive > .tile-first > tile-dynamic > a ').find('span').then(function(e){
    const movieTitle = e.text()
    cy.log(e.text())
    cy.get('[data-curation="rt-hp-poster-list-popular-in-theaters"] > .dynamic-poster-list > tiles-carousel-responsive > .tile-first > tile-dynamic > a > .p--small').click({force: true})

    //This is a simulation step. In reality, I would use the title I obtained from the homepage, go verify in the DB to find the ID that matches the title of clicked movie. So I could store the title that I have in db to another variable
    const movieTitleFromDB = e.text()
    expect(movieTitle).to.equal(movieTitleFromDB)
    })
  })


  it('Popularity score is same as db value', () => {
    let moviePercentage
    cy.get('.scoreboard').shadow().find('score-icon-audience').shadow().find('.wrap').find('.percentage').invoke('text').then((text) => {
      moviePercentage = text
      const moviePercentageFromDB = text  //This is a simulation step. In reality, I would use the title I obtained from the homepage, go verify in the DB to find the ID that matches the image of clicked movie. So I could store the percentage value that I have in db to another variable
      expect(moviePercentage).to.equal(moviePercentageFromDB)

    })
    
  })


  it('Tags are the same as tags in the db', () => {
    cy.get(':nth-child(2) > .meta-value').invoke('text').then((text)=>{
      const movieTags = text
      const movieTagsFromDB = text //This is a simulation step.
      expect(movieTags).to.equal(movieTagsFromDB)
     
    })
    
  })

  it('Movie description is the same as the text in the db', () => {
    cy.get('#movieSynopsis').invoke('text').then((text)=>{
      const movieDescription = text
      const movieDescriptionFromDB = text //This is a simulation step.
      expect(movieDescription).to.equal(movieDescriptionFromDB)
     
    })
    
  })


  it('Banner is same as db file', () => {

    cy.get('hero-image-poster > div').invoke('attr','data-bg-srcset').then(function(e){
      const movieBannerFromDB = e  //This is a simulation step. In reality, I would use the title I obtained from the homepage, go verify in the DB to find the ID that matches the image of clicked movie. So I could store the file name that I have in db to another variable
      const movieBanner = e
      expect(movieBanner).to.equal(movieBannerFromDB)
    })
  })

  it('Movie Poster is same as db file', () => {

    cy.get('.posterImage').invoke('attr','src').then(function(e){
      const moviePosterFromDB = e  //This is a simulation step. 
      const moviePoster = e
      expect(moviePoster).to.equal(moviePosterFromDB)
    })
  })






  it('Similar Movies are associated with selected movie', () => {

   cy.get('.slick-current > .VideosCarousel__item > .VideosCarousel__item-link > .VideosCarousel__image-container > .VideosCarousel__image').invoke('attr','data-src').then(function(e){
      const similarMovieA = e  //This is a simulation step. 
      const similarMovieAFromDB = e
      expect(similarMovieA).to.equal(similarMovieAFromDB)
    })

    cy.get('[data-slick-index="1"] > .VideosCarousel__item > .VideosCarousel__item-link > .VideosCarousel__image-container > .VideosCarousel__image').invoke('attr','data-src').then(function(e){
      const similarMovieB = e  //This is a simulation step. 
      const similarMovieBFromDB = e
      expect(similarMovieB).to.equal(similarMovieBFromDB)
    })

    cy.get('[data-slick-index="2"] > .VideosCarousel__item > .VideosCarousel__item-link > .VideosCarousel__image-container > .VideosCarousel__image').invoke('attr','data-src').then(function(e){
      const similarMovieC = e  //This is a simulation step. 
      const similarMovieCFromDB = e
      expect(similarMovieC).to.equal(similarMovieCFromDB)
    })

    cy.get('[data-slick-index="3"] > .VideosCarousel__item > .VideosCarousel__item-link > .VideosCarousel__image-container > .VideosCarousel__image').invoke('attr','data-src').then(function(e){
      const similarMovieD = e  //This is a simulation step. 
      const similarMovieDFromDB = e
      expect(similarMovieD).to.equal(similarMovieDFromDB)
    })

  })



})