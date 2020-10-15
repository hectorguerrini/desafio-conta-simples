import request from 'supertest';
import {Application} from 'express';
import App from '../src/config/app';
describe('Server localhost', () => {
    let appServer: Application;
    beforeAll( () => {
        appServer = App;
    });

    it('[GET] /', async (done) => {
        request(appServer)
          .get('/')          
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .expect({ message: 'Olá Conta Simples'})          
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });     
      it('[POST] /', async (done) => {
        request(appServer)
          .post('/')          
          .set('Accept', 'application/json')          
          .expect(404)          
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });            
});