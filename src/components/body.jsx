import React from "react";

const stories = [
  { img: "assets/9gag.svg", user: "9gag" },
  { img: "assets/meowed.svg", user: "meowed" },
  { img: "assets/barked.svg", user: "barked" },
  { img: "assets/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
  { img: "assets/wawawicomics.svg", user: "wawawicomics" },
  { img: "assets/respondeai.svg", user: "respondeai" },
  { img: "assets/filomoderna.svg", user: "filomoderna" },
  { img: "assets/memeriagourmet.svg", user: "memeriagourmet" },
];

const posts = [
  {
    userImg: "assets/meowed.svg",
    user: "meowed",
    contentImg: "assets/gato-telefone.svg",
    likedByImg: "assets/respondeai.svg",
    likedByUser: "respondeai",
    likes: "101.523",
  },
  {
    userImg: "assets/barked.svg",
    user: "barked",
    contentImg: "assets/dog.svg",
    likedByImg: "assets/adorable_animals.svg",
    likedByUser: "adorable_animals",
    likes: "99.159",
  },
];

const suggestions = [
  { img: "assets/bad.vibes.memes.svg", name: "bad.vibes.memes", reason: "Segue você" },
  { img: "assets/chibirdart.svg", name: "chibirdart", reason: "Segue você" },
  { img: "assets/razoesparaacreditar.svg", name: "razoesparaacreditar", reason: "Novo no Instagram" },
  { img: "assets/adorable_animals.svg", name: "adorable_animals", reason: "Segue você" },
  { img: "assets/smallcutecats.svg", name: "smallcutecats", reason: "Segue você" },
];

export default function Body() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <div className="stories">
          {stories.map((story, index) => (
            <div className="story" key={index}>
              <div className="imagem">
                <img src={story.img} alt={story.user} />
              </div>
              <div className="usuario">{story.user}</div>
            </div>
          ))}
          <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

        <div className="posts">
          {posts.map((post, index) => (
            <div className="post" key={index}>
              <div className="topo">
                <div className="usuario">
                  <img src={post.userImg} alt={post.user} />
                  {post.user}
                </div>
                <div className="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>
              <div className="conteudo">
                <img src={post.contentImg} alt="post" />
              </div>
              <div className="fundo">
                <div className="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>
                <div className="curtidas">
                  <img src={post.likedByImg} alt={post.likedByUser} />
                  <div className="texto">
                    Curtido por <strong>{post.likedByUser}</strong> e <strong>outras {post.likes} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar">
        <div className="usuario">
          <img src="assets/catanacomics.svg" alt="imagem de perfil" />
          <div className="texto">
            <span>
              <strong>catanacomics</strong>
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>

        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {suggestions.map((s, index) => (
            <div className="sugestao" key={index}>
              <div className="usuario">
                <img src={s.img} alt={s.name} />
                <div className="texto">
                  <div className="nome">{s.name}</div>
                  <div className="razao">{s.reason}</div>
                </div>
              </div>
              <div className="seguir">Seguir</div>
            </div>
          ))}
        </div>
        <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
        <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </div>
    </div>
  );
}
