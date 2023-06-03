import { LoginDiv, Screen, Input, Button, Form, LogoPhoto } from '@/components/login'
import { Inter } from 'next/font/google'
import React from 'react'
import { SignUpPage } from '@/components/signUpComponents'

const inter = Inter({ subsets: ['latin'] })

export default function Home2() {


    return (
        <>

            <Screen>
                <LogoPhoto>

                    <img
                        src="/album.jpeg"
                        alt="Albun Photo"
                        className='h-auto max-h-screen w-full object-cover'
                    />
                </LogoPhoto>
            </Screen >
        </>
    )
}