import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data = [{ name: 'Copa Brasil 76', cover: 'https://img.comunidades.net/alb/albumefigurinhas/albumcopabrasil1976cartelo.jpg' },
{ name: 'Copa 2018', cover: 'https://img.comunidades.net/alb/albumefigurinhas/RUSSIA_2018_.._ARB_4__1.jpg' },
{ name: 'YugiOh', cover: 'https://img.comunidades.net/alb/albumefigurinhas/3drvimg003ARB_Anime.jpg' },
{ name: 'Herois', cover: 'https://img.comunidades.net/alb/albumefigurinhas/herois_arb_7_01.jpg' },
{ name: 'Gogos', cover: 'https://img.comunidades.net/alb/albumefigurinhas/ARB_DF_001.jpg' },]



async function main() {
    await prisma.figurinha.deleteMany({});
    await prisma.page.deleteMany({});
    await prisma.album.deleteMany({});



    for (let i = 0; i < data.length; i++) {
        let album = await prisma.album.create({
            data: {
                name: data[i].name,
                cover: data[i].cover,
            }
        })

        for (let j = 0; j < 5; j++) {
            let page = await prisma.page.create({
                data: {
                    title: faker.animal.cat(),
                    color: faker.color.rgb(),
                    pageNumber: j + 1,
                    albumid: album.id
                }
            })
            for (let k = 0; k < 12; k++) {
                await prisma.figurinha.create({
                    data: {
                        name: faker.animal.fish(),
                        description: faker.lorem.text(),
                        image: faker.image.url(),
                        figurinhaNumber: j * 12 + 1 + k,
                        pageId: page.id
                    }
                })

            }

        }
    }

}

main()
    .then(() => {
        console.log("Registro rolou topmente");
    })
    .catch(e => {
        console.log(e);
        // process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })