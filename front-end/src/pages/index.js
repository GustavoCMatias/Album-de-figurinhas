import { LoginDiv, Screen, Input, Button, Form, LogoPhoto } from '@/components/login'
import { Inter } from 'next/font/google'
import React from 'react'
import { SignUpPage } from '@/components/signUpComponents'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [display, setDisplay] = React.useState(false)
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


          <Form onSubmit={() => alert('foi')}>
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
            <p className='text-base mt-10 text-black font-bold underline-offset-2' onClick={() => setDisplay(true)}>Não tenho conta</p>
          </Form>
        </LoginDiv>
      </Screen >
    </>
  )
}