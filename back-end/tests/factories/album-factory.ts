import { prisma } from '@/config';
import { faker } from '@faker-js/faker';


export async function createAlbum() {
    return await prisma.album.create({
        data: {
            name: faker.animal.bird(),
            cover: faker.image.url(),


        }
    }
    );
}

export async function createPage(albumId: number, pageNumber: number) {
    
    return await prisma.page.create({
        data: {
            pageNumber,
            title: faker.animal.cat(),
            color: faker.color.rgb(),
            albumid: albumId
        }
    }
    );
}

export async function createFigurinha(pageId: number, figurinhaNumber: number) {
    return await prisma.figurinha.create({
        data: {
            name: faker.animal.fish(),
            description: faker.lorem.text(),
            image: faker.image.url(),
            figurinhaNumber,
            pageId: pageId
        }
    }
    );
}

export async function createUserFigurinhaRelation(userId: number, figurinhaId: number, quantidade?:number) {
    return await prisma.userFigurinha.create({
        data: {
            userId,
            figurinhaId,
            quantidade: quantidade|| faker.number.int({ min: 0, max: 5 })
        }
    }
    );
}