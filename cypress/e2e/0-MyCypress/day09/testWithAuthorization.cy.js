describe('Test  with Auth.', () => {
    /* 

 {
  "firstname": "John",
  "lastname": "Smith",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2018-01-01",
    "checkout": "2019-01-01"
  },
  "additionalneeds": "Breakfast"
}
    
    */
    it('Test01-GET', () => {
        cy.request({
            url: 'https://restful-booker.herokuapp.com/booking/221',
            method: 'GET',
            auth: {
              "username" : "admin",
              "password" : "password123"

            },
            "token": "abc123"  // auth ya da token dan birini eklemesek de olur; burda ikisini de ekledik
        }).then((response) => {
                expect(response.body.firstname).to.eq('John')
        })
    });
    // bu test ile postman de yaptıgimiz islemleri aslinda cypress'e yaptiriyoruz.
    
    it.only('Test02-POST', () => {
      cy.request({
        url: 'https://restful-booker.herokuapp.com/booking',
        method: 'POST',
        auth: {
          "username" : "admin",
          "password" : "password123"

        },
        "token": "abc123",
        body: { 
          "firstname": "Bihter",
          "lastname": "Unal",
          "totalprice": 111,
          "depositpaid": true,
          "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
          },
          "additionalneeds": "Breakfast"
        }
    }).then((response) => {
      expect(response.body.booking.firstname).to.eq('Bihter')
      expect(response.body.booking.bookingdates.checkin).to.eq('2018-01-01')
    })
    });
});

