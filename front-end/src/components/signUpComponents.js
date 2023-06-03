import React from "react";
import { w } from "windstitch";
import { Button, Input } from "./login";

export function SignUpPage({display, setDisplay}) {
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

    return (
        <div className={`w-full h-full z-10 absolute backdrop-filter backdrop-blur flex items-center ${display?'':'hidden'}`} onClick={handleClick}>
            <div className="bg-white w-3/4 h-3/4 m-auto shadow-black shadow-2xl rounded-3xl flex flex-col items-center">
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

            </div>
        </div>
    )
}

export const Row = w.div(
    `
    w-4/5
    flex
    m-auto
    justify-center	


    `
)