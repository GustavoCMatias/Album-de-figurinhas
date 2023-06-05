import { w } from "windstitch"

export const LoginDiv = w.div(
    `bg-white 
    md:h-screen 
    md:w-1/3
    flex
    items-center
    md:static

    h-5/6 
    w-5/6
    absolute
    `
)
export const Screen = w.div(
    `
    md:h-full
    bg-neutral-300
    flex
    md:justify-end
    md:items-stretch
    relative

    h-screen
    w-full
    items-center
    justify-center
    `
)

export const Form = w.form(`
  flex
  flex-col
  items-center
  w-full

`)

export const Input = w.input(`	
    
    
    h-20
    bg-neutral-300
    text-xl
    text-black
    font-bold
    px-5
    rounded-xl
    `, 
    {
        variants:{
            place: {
                signin: `
                    w-4/5
                    mb-7
                `,
                signup: `
                    w-full
                    max-w-4/5
                    mb-4
                    ml-4
                    

                `
            }
        }
    });

export const Button = w.button(`
  w-4/5
  h-20
  bg-green-500
  rounded-xl

  text-xl
  text-black
  font-bold
`);

export const LogoPhoto = w.div(`
    md:w-2/3
    max-h-screen
    flex
    flex-col
    items-center
    overflow-hidden
    md:static

    relative

    
`)
