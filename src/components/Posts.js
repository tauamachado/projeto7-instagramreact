export default function Posts() {
    const posts = [
        {
            id: 1,
            userName: "meowed",
            userImage: "assets/img/meowed.svg",
            contentImage: "assets/img/gato-telefone.svg",
            likedByImage: "assets/img/respondeai.svg",
            likedByText: "respondeai",
            initialLikesAmount: 101523,
        },
        {
            id: 2,
            userName: "barked",
            userImage: "assets/img/barked.svg",
            contentImage: "assets/img/dog.svg",
            likedByImage: "assets/img/adorable_animals.svg",
            likedByText: "adorable_animals",
            initialLikesAmount: 200541,
        }
    ];

    return (
        <div className="posts">
            {posts.map((p) => (
                <Post
                    key={p.id}
                    userName={p.userName}
                    userImage={p.userImage}
                    contentImage={p.contentImage}
                    likedByImage={p.likedByImage}
                    likedByText={p.likedByText}
                    initialLikesAmount={p.initialLikesAmount}
                />
            ))}
        </div>
    );
}

function Post(props) {
    return (
        <div class="post">
                <div class="topo">
                <div class="usuario">
                    <img src={props.userImage} alt={props.userName}/>
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                </div>

                <div class="conteudo">
                <img src={props.contentImage} alt="conteúdo"/>
                </div>

                <div class="fundo">
                <div class="acoes">
                    <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likedByImage} alt={props.likedByText}/>
                    <div class="texto">
                    Curtido por <strong>{props.likedByText}</strong> e <strong>outras {props.initialLikesAmount} pessoas</strong>
                    </div>
                </div>
                </div>
            </div>
            
    )
}