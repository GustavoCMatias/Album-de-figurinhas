import { prisma } from '@/config';
import { faker } from '@faker-js/faker';


export async function createAlbum() {
    return await prisma.album.create({
        data: {
            name:faker.animal.bird(),
            cover: faker.image.urlPicsumPhotos(),
            

        }
    }
    );
}