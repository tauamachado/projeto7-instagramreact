import { useState } from "react";

export default function User(props) {
    const [username, setUsername] = useState(props.name)
    const [imagemPerfil, setImagemPerfil] = useState(props.image)

    function trocarNome() {
        const novoNome = prompt("Qual é o novo nome de usuário?")
        if (novoNome !== null && novoNome !== undefined && novoNome !== "") {
            setUsername(novoNome)
        }
    }

    function trocarImagem() {
        const novaFoto = prompt("Qual é o URL da nova foto de perfil?")
        if (novaFoto !== null && novaFoto !== undefined && novaFoto !== "") {
            setImagemPerfil(novaFoto)
        }
    }

    return (
        <div className="usuario">
            <img onClick={trocarImagem} src={imagemPerfil} alt="imagem de perfil" data-test="profile-image" />
            <div className="texto">
                <span>
                <strong data-test="name">{username}</strong>
                <ion-icon onClick={trocarNome} name="pencil" data-test="edit-name"></ion-icon>
                </span>
            </div>
            </div>
    );
}

