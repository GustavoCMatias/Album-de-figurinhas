import apiAuth from "@/services/apiAuth";
import React from "react";
import { w } from "windstitch";
import { Button, Input } from "./login";

export function SignUpPage({ display, setDisplay }) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confPassword, setConfPassword] = React.useState('')
    const [photo, setPhoto] = React.useState('')
    const [username, setUsername] = React.useState('')



    const handleClick = (event) => {
        if (event.target === event.currentTarget) {
            // Lógica a ser executada quando a div maior for clicada (e não a div menor)
            setDisplay(false)
        }
    };

    function createAccount(e) {
        e.preventDefault();

        if (password !== confPassword) {
            setEmail('');
            setPassword('');
            setConfPassword('');
            setPhoto('');
            setUsername('');
            return alert('As senhas não batem!')

        }

        apiAuth
            .signUp({ email, password, username, userphoto: photo })
            .then((res) => {
                setDisplay(false)
            })
            .catch((err) => {
                console.log('ERROR MESSAGE:', err.response.data);
                if (err.response.status === 409) {
                    if(err.response.data.message === 'There is already an user with given username'){
                        alert('This username is already being used. Chose another one!')
                    } else{
                        alert('This email is already being used. Chose another one!')
                    }
                        
                } else if (err.response.status === 422) {
                    alert('Something went wrong, verify your information and try again')
                } else (
                    alert('Something went wrong, please try again later')
                );
            });
    }

    return (
        <div className={`w-full h-full z-10 absolute backdrop-filter backdrop-blur flex items-center ${display ? '' : 'hidden'}`} onClick={handleClick}>
            <div className="bg-white w-5/6 sm:w-3/4 h-5/6 min-h-min sm:h-3/4 m-auto shadow-black shadow-2xl rounded-3xl ">
                <form onSubmit={createAccount} className="w-full h-full flex flex-col items-center">
                    <Row>
                        <Input
                            place="signup"
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            place="signup"
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Row>

                    <Row>

                        <Input
                            place="signup"
                            type="password"
                            placeholder="senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Input
                            place="signup"
                            type="password"
                            placeholder="Confirme a senha"
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                        />
                    </Row>

                    <Row>
                        <Input
                            place="signup"
                            type="text"
                            placeholder="profile picture"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                        />

                    </Row>

                    <Row><Button>Cadastrar</Button></Row>
                </form>

            </div>
        </div>
    )
}

// export const Row = w.div(
//     `
//     w-4/5
//     flex
//     m-auto
//     justify-center	


//     `
// )

export const Row = w.div(
    `
    w-4/5
    flex
    flex-wrap	
    md:flex-nowrap
    m-auto
    justify-center	


    `
)