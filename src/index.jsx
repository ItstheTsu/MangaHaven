import React, { useEffect } from "react";

const MangaHaven = () => {
  useEffect(() => {
    // Carregar script Disqus dinamicamente (como no HTML original)
    const d = document;
    const s = d.createElement("script");
    s.src = "https://mangahaven-com.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);

    return () => {
      // Cleanup script se componente desmontar
      const existingScript = d.querySelector(
        "script[src='https://mangahaven-com.disqus.com/embed.js']"
      );
      if (existingScript) existingScript.remove();
      // Também limpar o container do Disqus para evitar duplicação
      const disqusThread = d.getElementById("disqus_thread");
      if (disqusThread) disqusThread.innerHTML = "";
    };
  }, []);

  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid logo">
            <a className="navbar-brand logo-img" href="/index.html">
              <img
                src="../img/logos/Mangá Haven.png"
                alt="logo11"
                // ideal importar imagens no React (ver nota abaixo)
              />
            </a>
            <p className="logo-text">MANGÁ HAVEN</p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navbarLetters"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="../pages/index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../pages/mangas.html">
                    Mangás
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Escolher uma categoria
                  </a>
                  <ul className="dropdown-menu">
                    {[
                      "Ação",
                      "Aventura",
                      "Drama",
                      "Terror",
                      "Suspense",
                      "Mágia",
                      "Artes marciais",
                      "Fantasia",
                      "Adulto",
                    ].map((categoria) => (
                      <li key={categoria}>
                        <a className="dropdown-item" href="#">
                          {categoria}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../pages/manhwas.html">
                    Manhwas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../pages/AboutUs.html">
                    Sobre Nós
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../pages/Contact.html">
                    Entrar em contato
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../pages/MyList.html">
                    Minha lista
                  </a>
                </li>
              </ul>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Pesquisar
              </button>
            </form>
          </div>
        </nav>
      </header>

      <main>
        <section className="container-block" style={{ background: "#fff" }}>
          <div className="name-item">
            <h1 className="titleRow">Mais Famosos</h1>
            <div className="itens-rows">
              {[
                { src: "../img/assets/capas/Berserk.jpg", title: "BERSERK" },
                { src: "../img/assets/capas/Black Clover.jpg", title: "Black Clover" },
                { src: "../img/assets/capas/Jujutsu.webp", title: "Jujutsu Kaisen" },
                { src: "../img/assets/capas/Kimetsu no Yaiba.webp", title: "Kimetsu no Yaiba" },
                { src: "../img/assets/capas/Nanatsu no Taizai.jpg", title: "Nanatsu no Taizai" },
                { src: "../img/assets/capas/Blue Lock.webp", title: "Blue Lock" },
                { src: "../img/assets/capas/Lookism.jpg", title: "Lookism" },
                { src: "../img/assets/capas/Martial Peak.webp", title: "Martial Peak" },
                { src: "../img/assets/capas/Mashle.jpg", title: "Mashle" },
                {
                  src: "../img/assets/capas/Omniscient Reader's Viewpoint.jpg",
                  title: "Omniscient Reader's Viewpoint",
                },
                { src: "../img/assets/capas/One Piece.jpg", title: "One Piece" },
                {
                  src: "../img/assets/capas/Reincarnation of the Battle god.webp",
                  title: "Reincarnation of the Battle god",
                },
              ].map(({ src, title }) => (
                <div className="item" key={title}>
                  <img src={src} alt={title} />
                  <div className="item-name">
                    <h3>{title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Continuar para a seção "Adicionados recentemente" e "Séries Preferidas dos Moderadores" similarmente */}
            {/* ... */}

            <div id="disqus_thread"></div>
          </div>
        </section>
      </main>

      <footer>
        {/* Footer similar ao HTML original, convertido para JSX */}
        <footer className="text-center text-lg-start bg-light text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block" style={{ fontSize: "2rem" }}>
              Se conecte com a gente:
            </div>
            <div>
              {/* Ícones de redes sociais podem ser importados via react-icons ou outro método */}
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6
                    className="text-uppercase fw-bold mb-4"
                    style={{ fontSize: "2rem" }}
                  >
                    <i className="fas fa-gem me-3"></i>Mangá Haven
                  </h6>
                  <p style={{ fontSize: "1.2rem" }}>
                    Bem-vindo ao Manga Haven, seu refúgio definitivo para explorar o emocionante mundo dos
                    mangás! Aqui, nossa paixão pela arte e narrativa japonesa se une para trazer a você uma
                    experiência única e cativante. Navegue por nossa vasta coleção de mangás cuidadosamente
                    selecionados e mergulhe em histórias emocionantes, personagens cativantes e ilustrações
                    deslumbrantes.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6
                    className="text-uppercase fw-bold mb-4"
                    style={{ fontSize: "2rem" }}
                  >
                    Mangás
                  </h6>
                  <p>
                    <a href="#!" className="text-reset" style={{ fontSize: "1.2rem" }}>
                      Comprar
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset" style={{ fontSize: "1.2rem" }}>
                      ler Online
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset" style={{ fontSize: "1.2rem" }}>
                      Comprar BR
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6
                    className="text-uppercase fw-bold mb-4"
                    style={{ fontSize: "2rem" }}
                  >
                    Links Usáveis
                  </h6>
                  <p>
                    <a href="#!" className="text-reset" style={{ fontSize: "1.2rem" }}>
                      Preços
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset" style={{ fontSize: "1.2rem" }}>
                      Configurações
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset" style={{ fontSize: "1.2rem" }}>
                      Ajuda
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4" style={{ fontSize: "2rem" }}>
                    Contato
                  </h6>
                  <p style={{ fontSize: "1.2rem" }}>
                    <i className="fas fa-home me-3"></i> Assis, SP 198438-60, BR
                  </p>
                  <p style={{ fontSize: "1.2rem" }}>
                    <i className="fas fa-envelope me-3"></i> mangahaven@support.com
                  </p>
                  <p style={{ fontSize: "1.2rem" }}>
                    <i className="fas fa-phone me-3"></i> + 55 998256634
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", fontSize: "1.2rem" }}
          >
            © 2023 Copyright:
            <a className="text-reset fw-bold" href="https://mangaheaven.com/">
              MangaHaven.com
            </a>
          </div>
        </footer>
      </footer>
    </>
  );
};

export default MangaHaven;