import jwt from 'jsonwebtoken';
import { faker } from '@faker-js/faker';
import httpStatus from 'http-status';



import supertest from 'supertest';
import { cleanDb, generateValidToken } from '../helpers';
import app, { init } from '@/app';
import { createAlbum, createFigurinha, createPage, createUserFigurinhaRelation } from '../factories/album-factory';
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
    it('Should return 200 and data', async () => {

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

describe('GET /album/my', () => {

  it('should respond with status 401 if no token is given', async () => {
    const response = await api.get('/album/my');

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it('should respond with status 401 if given token is not valid', async () => {
    const token = faker.lorem.word();

    const response = await api.get('/album/my').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it('should respond with status 401 if there is no session for given token', async () => {
    const userWithoutSession = await createUser();
    const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

    const response = await api.get('/album/my').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  describe('when token is valid', () => {
    it('Should return 200 and data', async () => {

      const user = await createUser();
      const token = await generateValidToken(user);
      const album = await createAlbum();
      let figurinhaId;
      for (let i = 0; i < 2; i++) {
        const page = await createPage(album.id, i + 1)
        for (let j = 0; j < 2; j++) {
          const figurinha = await createFigurinha(page.id, i * 2 + j + 1);
          figurinhaId = figurinha.id
        }
      }
      await createUserFigurinhaRelation(user.id, figurinhaId);

      const response = await api.get('/album/my').set('Authorization', `Bearer ${token}`);
      expect(response.statusCode).toEqual(200);
      expect(response.body).toEqual(expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          cover: expect.any(String),
          total_figurinhas: expect.any(Number),
          owned_figurinhas: expect.any(Number)

        })
      ]))
      expect(response.body[0].owned_figurinhas).toBeLessThanOrEqual(response.body[0].total_figurinhas)
    })
  })

})

describe('GET /album/:id', () => {

  it('should respond with status 401 if no token is given', async () => {
    const response = await api.get('/album/1');

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it('should respond with status 401 if given token is not valid', async () => {
    const token = faker.lorem.word();

    const response = await api.get('/album/1').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it('should respond with status 401 if there is no session for given token', async () => {
    const userWithoutSession = await createUser();
    const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

    const response = await api.get('/album/1').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  describe('when token is valid', () => {

    it('should respond with status 404 if there is no album with id', async () => {
      const user = await createUser();
      const token = await generateValidToken(user);

      const response = await api.get('/album/0').set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(httpStatus.NOT_FOUND);
    });

    it('should respond with status 403 if user is not associated with album', async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      const album = await createAlbum();

      const response = await api.get(`/album/${album.id}`).set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(httpStatus.FORBIDDEN);
    });

    it('Should return 200 and data', async () => {

      const user = await createUser();
      const token = await generateValidToken(user);
      const album = await createAlbum();
      let figurinhaId;
      for (let i = 0; i < 2; i++) {
        const page = await createPage(album.id, i + 1)
        for (let j = 0; j < 2; j++) {
          const figurinha = await createFigurinha(page.id, i * 2 + j + 1);
          figurinhaId = figurinha.id
        }
      }
      await createUserFigurinhaRelation(user.id, figurinhaId)

      const response = await api.get(`/album/${album.id}`).set('Authorization', `Bearer ${token}`);
      expect(response.statusCode).toEqual(200);

      const expectedResponse = {
        Pages: expect.arrayContaining([
          expect.objectContaining({
            Figurinhas: expect.arrayContaining([
              expect.objectContaining({
                createdAt: expect.any(String),
                description: expect.any(String),
                figurinhaNumber: expect.any(Number),
                id: expect.any(Number),
                image: expect.any(String),
                name: expect.any(String),
                pageId: expect.any(Number),
                updatedAt: expect.any(String),
              }),
            ]),
            albumid: expect.any(Number),
            color: expect.any(String),
            createdAt: expect.any(String),
            id: expect.any(Number),
            pageNumber: expect.any(Number),
            title: expect.any(String),
            updatedAt: expect.any(String),
          }),
        ]),
        cover: expect.any(String),
        createdAt: expect.any(String),
        id: expect.any(Number),
        name: expect.any(String),
        updatedAt: expect.any(String),
      };

      expect(response.body).toMatchObject(expectedResponse);

    })
  })

})
