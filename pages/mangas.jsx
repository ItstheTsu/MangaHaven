import React from "react";

export default function MangaHaven() {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid logo">
            <a className="navbar-brand logo-img" href="index.html">
              <img
                src="../img/logos/Mangá Haven.png"
                alt="logo11"
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
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse navbarLetters"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="../pages/index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="../pages/mangas.html">
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
                    <li>
                      <a className="dropdown-item" href="#">
                        Ação
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Aventura
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Drama
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Terror
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Suspense
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mágia
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Artes marciais
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fantasia
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Adulto
                      </a>
                    </li>
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
        <section className="title">
          <h1 style={{ textAlign: "center", color: "#fff" }} className="titleRow">
            Mangás
          </h1>
        </section>
        <section className="custom-grid">
          <div className="itens-grid-cc">
            {[
              {
                img: "../img/assets/capas/One Piece.jpg",
                alt: "Capa do mangá One Piece",
                title: "One Piece",
                author: "Oda, Eiichiro",
                chapter: "Capítulo 1088",
              },
              {
                img: "../img/assets/capas/Black Clover.jpg",
                alt: "Capa do mangá Black Clover",
                title: "Black Clover",
                author: "Tabata, Yuuki",
                chapter: "Capítulo 366",
              },
              {
                img: "../img/assets/capas/Jujutsu.webp",
                alt: "Capa do mangá Jujutsu Kaisen",
                title: "Jujutsu Kaisen",
                author: "Gege, Akutami",
                chapter: "Capítulo 230",
              },
              {
                img: "../img/assets/capas/Nanatsu no Taizai.jpg",
                alt: "Capa do mangá Nanatsu no Taizai",
                title: "Nanatsu no Taizai",
                author: "Suzuki, Nakaba",
                chapter: "Capítulo 300 - Completo",
              },
              {
                img: "../img/assets/capas/Berserk.jpg",
                alt: "Capa do mangá Berserk",
                title: "Berserk",
                author: "Miura, Kentarou",
                chapter: "Capítulo 373 - Completo",
              },
              {
                img: "../img/assets/capas/One punch man.webp",
                alt: "Capa do mangá One Punch Man",
                title: "One Punch Man",
                author: "ONE & Murata, Yusuke (Arte)",
                chapter: "Capítulo 224",
              },
              {
                img: "../img/assets/capas/Shuumatsu no walküre.jpg",
                alt: "Capa do mangá Shuumatsu no walküre",
                title: "Shuumatsu no walküre",
                author: "Umemura, Shinya & Ajichika (Arte)",
                chapter: "Capítulo 80",
              },
              {
                img: "../img/assets/capas/Kimetsu no Yaiba.webp",
                alt: "Capa do mangá Kimetsu no Yaiba",
                title: "Kimetsu no Yaiba",
                author: "Gotouge, Koyoharu",
                chapter: "Capítulo 205 - Completo",
              },
              {
                img: "../img/assets/capas/Mashle.jpg",
                alt: "Capa do mangá Mashle",
                title: "Mashle",
                author: "Koumoto, Hajime",
                chapter: "Capítulo 162 - Completo",
              },
              {
                img: "../img/assets/capas/Blue Lock.webp",
                alt: "Capa do mangá Blue Lock",
                title: "Blue Lock",
                author: "Kaneshiro, Muneyuki & Nomura, Yuusuke (Arte)",
                chapter: "Capítulo 227",
              },
            ].map(({ img, alt, title, author, chapter }, i) => (
              <article className="ct-card" key={i}>
                <div className="img-card">
                  <img src={img} alt={alt} />
                </div>
                <div className="info-card">
                  <div className="ct-card-name">
                    <h3 className="titleCard">{title}</h3>
                  </div>
                  <div className="author-card">
                    <h3 style={{ textDecoration: "underline" }}>{author}</h3>
                  </div>
                  <div className="caps-card">
                    <h3>{chapter}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span style={{ fontSize: "2rem" }}>Se conecte com a gente:</span>
          </div>
          {/* Right */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
        </section>

        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ fontSize: "2rem" }}>
                  <i className="fas fa-gem me-3" />
                  Mangá Haven
                </h6>
                <p style={{ fontSize: "1.2rem" }}>
                  Bem-vindo ao Manga Haven, seu refúgio definitivo para explorar o emocionante mundo dos mangás! Aqui,
                  nossa paixão pela arte e narrativa japonesa se une para trazer a você uma experiência única e
                  cativante. Navegue por nossa vasta coleção de mangás cuidadosamente selecionados e mergulhe em histórias
                  emocionantes, personagens cativantes e ilustrações deslumbrantes.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ fontSize: "2rem" }}>
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
                <h6 className="text-uppercase fw-bold mb-4" style={{ fontSize: "2rem" }}>
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
                  <i className="fas fa-home me-3" />
                  Assis, SP 198438-60, BR
                </p>
                <p style={{ fontSize: "1.2rem" }}>
                  <i className="fas fa-envelope me-3" />
                  mangahaven@support.com
                </p>
                <p style={{ fontSize: "1.2rem" }}>
                  <i className="fas fa-phone me-3" />
                  + 55 998256634
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
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
    </>
  );
}
