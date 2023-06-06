import jwt from 'jsonwebtoken';
import { faker } from '@faker-js/faker';
import httpStatus from 'http-status';



import supertest from 'supertest';
import { cleanDb, generateValidToken } from '../helpers';
import app, { init } from '@/app';
import { createAlbum } from '../factories/album-factory';
import { createUser } from '../factories';

const api = supertest(app);

beforeAll(async () => {
    await init();
  });
  
  beforeEach(async () => {
    await cleanDb();
  });



describe('GET /album/all', () => {



    it('should respond with status 401 if no token is given', async () => {
        const response = await api.get('/album/all');
    
        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
      });
    
      it('should respond with status 401 if given token is not valid', async () => {
        const token = faker.lorem.word();
    
        const response = await api.get('/album/all').set('Authorization', `Bearer ${token}`);
    
        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
      });
    
      it('should respond with status 401 if there is no session for given token', async () => {
        const userWithoutSession = await createUser();
        const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);
    
        const response = await api.get('/album/all').set('Authorization', `Bearer ${token}`);
    
        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
      });

      describe('when token is valid', () => {
        it('Should return 200 and data',async () => {
            
            const user = await createUser();
            const token = await generateValidToken(user);
            await createAlbum();
    
            const response = await api.get('/album/all').set('Authorization', `Bearer ${token}`);
            expect(response.statusCode).toEqual(200);
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    cover: expect.any(String)
                })
            ]))
        })
      })
    
})
    