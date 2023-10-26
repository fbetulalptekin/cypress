describe('Json object', () => {
    it('key value', () => {
        cy.visit('/')
        
        const simpleJson = {'key1': 'value1', 'key2': 'value2'}
        
        console.log(simpleJson.key1)
        console.log(simpleJson["key2"])

        const arrayDegerler = ['deger1', 'deger2', 'deger3', 'deger4', 'deger5'];

        console.log(arrayDegerler[0])

        const arrayDegerler2 = [{'d1': 'v1', 'd2': 'v2'}, {'k3': 'v3', 'k2': 'v4'}]

        console.log(arrayDegerler2[1].k3)

        const body = {
            "student": [{
                          "name": "selin",
                          "lastname": "tas",
                          "number": "178"
                          },
                        {
                          "name": "helin",
                          "lastname": "tas",
                          "number": "179"
                          }
                        
                        ]
                    }

        console.log(body.student[1].number)            
    });
});