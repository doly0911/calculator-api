const request = require("supertest");
const api = require("./api.calculator"); //Arrange

describe("Testing /add path", () => {
    test("it should return status code 200", done => {
        request(api)
            .get("/add?a=1&b=1") //Act
            .then(response => {
                expect(response.statusCode).toBe(200); //Assert
                done();
            });
    });

    test("it should return application/json content-type", done => {
        request(api)
            .get("/add?a=1&b=1") 
            .then(response => {
                expect(response.type).toBe("application/json");
                done();
            });
    });

    test("it should return a valid json object", done => {
        request(api)
            .get("/add?a=1&b=1") 
            .then(response => {
                expect(response.body).not.toBeNull();
                expect(response.body.result).not.toBeUndefined();
                done();
            });
    });

    test("it should return a correct answer", done => {
        request(api)
            .get("/add?a=4&b=1") 
            .then(response => {
                expect(response.body.result).toBe(5);
                done();
            });
    });
})