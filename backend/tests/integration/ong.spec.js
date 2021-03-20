const { idText, isExportDeclaration } = require("typescript");
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () =>{
    beforeEach( async () =>{
        await connection.migrate.latest();
    }) 

    afterAll( async () => {
        await connection.destroy();
    });

    it('shold be able to create a new ONG', async () =>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "teste2999",
            email: "bjaaj@ashuahs.com",
            whatsapp: "31983063928",
            city: "ouro preto",
            uf: "MG"
        });

       expect(response.body).toHaveProperty('id');
       expect(response.body.id).toHaveLength(8);
    })
})