describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: {
        "movies":[{"id":436270,"poster_path":"https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg","title":"Black Adam","average_rating":4,"release_date":"2022-10-19"},{"id":724495,"poster_path":"https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg","title":"The Woman King","average_rating":4,"release_date":"2022-09-15"},{"id":1013860,"poster_path":"https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//kmzppWh7ljL6K9fXW72bPN3gKwu.jpg","title":"R.I.P.D. 2: Rise of the Damned","average_rating":7,"release_date":"2022-11-15"},{"id":505642,"poster_path":"https://image.tmdb.org/t/p/original//ps2oKfhY6DL3alynlSqY97gHSsg.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg","title":"Black Panther: Wakanda Forever","average_rating":4,"release_date":"2022-11-09"} ]
      }
    });
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      body: {
        "movie":{"id":436270,"title":"Black Adam","poster_path":"https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg","release_date":"2022-10-19","overview":"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.","genres":["Action","Fantasy","Science Fiction"],"budget":200000000,"revenue":384571691,"runtime":125,"tagline":"The world needed a hero. It got Black Adam.","average_rating":4}
      }
    });
    cy.visit('http://localhost:3000/');
  });

  it('As a user, when I load the application, I can see the title of the application.', () => {
    cy.get('h1.main-heading').contains('MOVIE APP')
  });

  it('As a user, when I load the application, I can see a collection of movies.', () => {
    cy.get('.movies-container').children();
  });

  it('As a user, when I load the application, I can see some of the current movies details displayed', () => {
    cy.get('.movie-details-section > h2').contains('Black Adam');
    cy.get('p[name="rating"]').contains('4/10');
    cy.get('.details').contains('2022');
    cy.get('.tagline').contains('The world needed a hero. It got Black Adam.');
  });

  it('As a user, when I click on the learn more button, I’m shown additional details about that movie.', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      body: {
        "movie":{"id":436270,"title":"Black Adam","poster_path":"https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg","release_date":"2022-10-19","overview":"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.","genres":["Action","Fantasy","Science Fiction"],"budget":200000000,"revenue":384571691,"runtime":125,"tagline":"The world needed a hero. It got Black Adam.","average_rating":4}
      }
    });
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 200,
      body: {
        "videos":[{"id":1,"movie_id":436270,"key":"I9B6rwW35GQ","site":"YouTube","type":"Featurette"},{"id":2,"movie_id":436270,"key":"b1pMQasDnhM","site":"YouTube","type":"Clip"}]
      }
    });
    cy.get('section > button').click();
    cy.get('.description > p').contains('Nearly 5,000 years after he was bestowed')
  });

  it('As a user, when I double click on the movie poster, I’m shown additional details about that movie.', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      body: {
        "movie":{"id":436270,"title":"Black Adam","poster_path":"https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg","release_date":"2022-10-19","overview":"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.","genres":["Action","Fantasy","Science Fiction"],"budget":200000000,"revenue":384571691,"runtime":125,"tagline":"The world needed a hero. It got Black Adam.","average_rating":4}
      }
    });
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 200,
      body: {
        "videos":[{"id":1,"movie_id":436270,"key":"I9B6rwW35GQ","site":"YouTube","type":"Featurette"},{"id":2,"movie_id":436270,"key":"b1pMQasDnhM","site":"YouTube","type":"Clip"}]
      }
    });
    cy.get('.movies-container').children().first().dblclick();
    cy.get('.description > p').contains('Nearly 5,000 years after he was bestowed')
  });

  it('As a user, when I click on the home button, I’m taken back to the main page.', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      body: {
        "movie":{"id":436270,"title":"Black Adam","poster_path":"https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg","release_date":"2022-10-19","overview":"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.","genres":["Action","Fantasy","Science Fiction"],"budget":200000000,"revenue":384571691,"runtime":125,"tagline":"The world needed a hero. It got Black Adam.","average_rating":4}
      }
    });
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 200,
      body: {
        "videos":[{"id":1,"movie_id":436270,"key":"I9B6rwW35GQ","site":"YouTube","type":"Featurette"},{"id":2,"movie_id":436270,"key":"b1pMQasDnhM","site":"YouTube","type":"Clip"}]
      }
    });
    cy.get('.movies-container').children().first().dblclick();
    cy.get('.description > p').contains('Nearly 5,000 years after he was bestowed');
    cy.get('.logo').click();
    cy.get('.movies-container');
  });
});


// USER STORIES

// As a user, when I load the application, I can see the title of the application.
// As a user, when I load the application, I can see a collection of movies.
// As a user, when I click on a movie, I’m shown additional details about that movie.
// Any other user stories you might have already should also be tested.
//