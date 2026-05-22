import s from "./App.module.css";
// Mantido as imagens originais (.jpg) do primeiro código
import img1 from '/01.jpg';
import img2 from '/02.jpg';
import img3 from '/03.jpg';

function App() {
  // Função de Scroll Suave
  const navTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Função para o botão enviar
  const enviar = () => {
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <>
      <nav>
        <span className={s.navItems} onClick={() => navTo("s1")}>
          <i className="fa-regular fa-address-card"></i>
          <a href="#s1" className={s.navWords}>Jogo</a>
        </span>
        <span className={s.navItems} onClick={() => navTo("s2")}>
          <i className="fa-solid fa-car-side"></i>
          <a href="#s2" className={s.navWords}>Carros</a>
        </span>
        <span className={s.navItems} onClick={() => navTo("s3")}>
          <i className="fa-brands fa-square-youtube"></i>
          <a href="#s3" className={s.navWords}>Vídeo</a>
        </span>
        <span className={s.navItems} onClick={() => navTo("s4")}>
          <i className="fa-solid fa-phone"></i>
          <a href="#s4" className={s.navWords}>Contato</a>
        </span>
      </nav>

      <main>
        <section className={s.s1} id="s1">
          <h1>BMW M3 GTR</h1>
          <h2>O melhor carro esportivo do mundo.</h2>
        </section>

        <section className={s.s2} id="s2">
          <div className={s.card}>
            <img
              width="300px"
              height="auto"
              src={img1} /* Voltou a ser img1 */
              alt="Carro 01"
            />
            <div>
              <h4>BMW M3 GTR</h4>
              <p>
                O BMW M3 GTR é um ícone dos jogos de corrida, conhecido por seu visual inesquecível e desempenho nas pistas.
              </p>
            </div>
          </div>

          <div className={s.card}>
            <img
              width="300px"
              height="auto"
              src={img2} /* Voltou a ser img2 */
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
              src={img3} /* Voltou a ser img3 */
              alt="Carro 03"
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

        <section className={s.s3} id="s3">
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

        <section className={s.s4} id="s4">
          <h3>CONTATO</h3>
          <div className={s.formulario}>
            <label htmlFor="nome">Nome: </label>
            <input type="text" id="nome" placeholder="Digite seu nome" />
            
            <label htmlFor="assunto">Mensagem: </label>
            <textarea id="assunto" placeholder="Digite sua mensagem"></textarea>
            
            <button onClick={enviar}>ENVIAR</button>
          </div>
        </section>
      </main>

      <footer>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </footer>
    </>
  );
}

export default App;