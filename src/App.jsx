import s from "./App.module.css";

import image01 from '/01.webp'
import image02 from '/02.webp'
import image03 from '/03.webp'


function App() {
  //js

  return (
    <>
      <nav>
        <span className={s.navItems} onclick="navTo('s1')">
          <i class="fa-regular fa-address-card"></i>
          <a className={s.navWords}>Jogo</a>
        </span>
        <span className={s.navItems} onclick="navTo('s2')">
          <i class="fa-solid fa-car-side"></i>
          <a className={s.navWords}>Carros</a>
        </span>
        <span className={s.navItems} onclick="navTo('s3')">
          <i class="fa-brands fa-square-youtube"></i>
          <a className={s.navWords}>Vídeo</a>
        </span>
        <span className={s.navItems} onclick="navTo('s4')">
         <i class="fa-solid fa-phone"></i>
          <a className={s.navWords}>Contato</a>
        </span>
      </nav>
      <main>
        <section id="s1">
          <h1>BMW M3 GTR</h1>
          <h2>O melhor carro esportivo do mundo.</h2>
        </section>
        <section id="s2">
          <div className={s.card}>
            <img
              width="300px"
              height="auto"
              src={image01}
              alt="Carro 01"
            />
            <div>
              <h4>BMW M3 GTR</h4>
              <p>
                O BMW M3 GTR é um ícone dos jogos de corrida, conhecido por seu
              </p>
            </div>
          </div>
          <div className={s.card}>
            <img
              width="300px"
              height="auto"
              src={image02}
              alt="Carro 02"
            />
            <div>
              <h4>BMW M3 GTR</h4>
              <p>
                Desenvolvida com foco em pistas, ela combina aerodinâmica
                agressiva com redução de peso. Cada detalhe foi pensado para
                respostas rápidas em curvas e máxima eficiência em alta
                velocidade.
              </p>
            </div>
          </div>
          <div className={s.card}>
            <img
              width="300px"
              height="auto"
              src={image03}
              alt="Carro 3"
            />
            <div>
              <h4>BMW M3 GTR</h4>
              <p>
                O motor de 4.0 litros V8, com potência de 450 cavalos, é o
                coração pulsante do M3 GTR. Ele oferece uma aceleração impressionante
                e um som inconfundível, tornando cada corrida uma experiência
                emocionante.
              </p>
            </div>
          </div>
        </section>
        <section id="s3">
          <iframe
            className={s.vid}
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/FstXpvGzxZI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
        <section id="s4">
          <h3>CONTATO</h3>
          <div className={s.formulario}>
            <label for="nome">Nome: </label>
            <input type="text" id="nome" placeholder="Digite seu nome" />
            <label for="assunto">Mensagem: </label>
            <textarea id="assunto" placeholder="Digite sua mensagem"></textarea>
            <button onclick="enviar()">ENVIAR</button>
          </div>
        </section>
      </main>
      <footer>
        <a href="https://www.facebook.com" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </footer>
    </>
  );
}

export default App;
