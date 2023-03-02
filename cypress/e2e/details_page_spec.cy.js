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
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      response: 200,
      body : {
        "videos": [{"id":1,"movie_id":436270,"key":"I9B6rwW35GQ","site":"YouTube","type":"Featurette"},{"id":2,"movie_id":436270,"key":"b1pMQasDnhM","site":"YouTube","type":"Clip"},{"id":3,"movie_id":436270,"key":"F_pYZ2HEW3E","site":"YouTube","type":"Featurette"}]
      }
    });
    cy.get('.movie-details-section > button').click();
  });

  it('As a user, when I visit the details page, I should still see the header displayed', () => {
    cy.get('header');
  });

  it('As a user, when I visit the details page, I should see the movies title displayed', () => {
    cy.get('.title').contains('Black Adam');
  });

  it('As a user, when I visit the details page, I should see the movies genres displayed', () => {
    cy.get('.genre').eq(0).contains('Action');
    cy.get('.genre').eq(1).contains('Fantasy');
    cy.get('.genre').eq(2).contains('Science Fiction');
  });

  it('As a user, when I visit the details page, I should see the movies detail cards displayed', () => {
    cy.get('.detail-card').eq(0).contains('4');
    cy.get('.detail-card').eq(1).contains('R');
    cy.get('.detail-card').eq(2).contains('10/19/2022');
    cy.get('.detail-card').eq(3).contains('$2');
    cy.get('.detail-card').eq(4).contains('125 min');
  });

  it('As a user, when I visit the details page, I should see the movies description displayed', () => {
    cy.get('.description > p').contains('Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.');
  });

  it('As a user, when I visit the details page, I should see the movies iMDB rating displayed', () => {
    cy.get('.rating > p').contains('4/10');
  });

  it('As a user, when I visit the details page, I should see the movies video cards displayed', () => {
    cy.get('.video-card').eq(0).invoke('attr', 'src').should('eq', 'https://www.youtube.com/embed/I9B6rwW35GQ');
    cy.get('.video-card').eq(1).invoke('attr', 'src').should('eq', 'https://www.youtube.com/embed/b1pMQasDnhM');
    cy.get('.video-card').eq(2).invoke('attr', 'src').should('eq', 'https://www.youtube.com/embed/F_pYZ2HEW3E');
  });
});