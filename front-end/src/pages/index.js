import { LoginDiv, Screen, Input, Button, Form, LogoPhoto } from '@/components/login'
import { Inter } from 'next/font/google'
import React from 'react'
import { SignUpPage } from '@/components/signUpComponents'
import { useRouter } from 'next/router'
import apiAuth from '@/services/apiAuth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [display, setDisplay] = React.useState(false)

  const router = useRouter();

  function signIn(e) {
    e.preventDefault();

    apiAuth
        .singIn({email, password})
        .then((res) => {
            console.log('SOU O RES.DATA', res.data.token);
            router.push('/outro')

        })
        .catch((err) => {
            console.log(err.response);
            if (err.response.status === 401) {
                alert('Verify your email address or password!')
            } else (
                alert('Something went wrong, please try again later')
            );

            if (!email || !password) {
                alert(`attention: ${err.response.data}`)
            }
        });
}

  return (
    <>

      <Screen>
        <SignUpPage display={display} setDisplay={setDisplay}/>
        <LogoPhoto>

          <img
            src="/album.jpeg"
            alt="Albun Photo"
            className='h-auto max-h-screen w-full object-cover'
          />
        </LogoPhoto>
        <LoginDiv>


          <Form onSubmit={signIn}>
            <p className='text-4xl mb-10 mt-3 text-green-500 font-bold '>Meu Album</p>
            <Input
              place='signin'
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              place='signin'
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button>Entrar</Button>
            <p className='text-base mt-10 text-black font-bold underline-offset-2 cursor-pointer' onClick={() => setDisplay(true)}>Não tenho conta</p>
          </Form>
        </LoginDiv>
      </Screen >
    </>
  )
}