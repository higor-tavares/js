const Client = require('../src/Client.js');
const { expect, describe, it } = require('@jest/globals');
describe('Client', () => {
    it('should create a new client', () => {
        const client = new Client('Higor', 'higor@gmail.com','Rua 1');
        expect(client.name).toBe('Higor');
})})