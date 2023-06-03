import { w } from "windstitch"

export const LoginDiv = w.div(
    `bg-white 
    h-screen 
    w-1/3
    flex
    items-center
    `
)
export const Screen = w.div(
    `
    h-full
    bg-neutral-300
    flex
    justify-end
    relative
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
    w-2/3
    h-full
    flex
    flex-col
    items-center
    
`)
