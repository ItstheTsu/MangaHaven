import React from "react";

export default function ManhwasPage() {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid logo">
            <a className="navbar-brand logo-img" href="index.html">
              <img src="../img/logos/Mangá Haven.png" alt="logo11" />
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
                    className="nav-link"
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
                  <a className="nav-link active" href="../pages/manhwas.html">
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
            Manhwas
          </h1>
        </section>
        <section className="custom-grid">
          <div className="itens-grid-cc">
            {[
              {
                img: "../img/assets/capas/Martial Peak.webp",
                title: "Martial Peak",
                author: "Momo II",
                chapter: "Capítulo 3409",
              },
              {
                img: "../img/assets/capas/Lookism.jpg",
                title: "Lookism",
                author: "Taejoon Park",
                chapter: "Capítulo 459",
              },
              {
                img: "../img/assets/capas/Reincarnation of the Battle god.webp",
                title: "투신 전 생기",
                author: "Cheongdam",
                chapter: "Capítulo 83",
              },
              {
                img: "../img/assets/capas/Sleeping Ranker.webp",
                title: "Sleeping Ranker",
                author: "Worok & Cheon Jin-hee (Arte)",
                chapter: "Capítulo 72",
              },
              {
                img: "../img/assets/capas/Solo Leveling.webp",
                title: "Solo Leveling",
                author: "Chugong & Disciples (Arte)",
                chapter: "Capítulo 200 - Completo",
              },
              {
                img: "../img/assets/capas/Tales of Demons and Gods.jpg",
                title: "Tales of Demons and Gods",
                author: "Mad Snail",
                chapter: "Capítulo 438",
              },
              {
                img: "../img/assets/capas/Omniscient Reader's Viewpoint.jpg",
                title: "전지적 독자 시점",
                author: "Sing-Shong & Sleepy-C (Arte)",
                chapter: "Capítulo 168",
              },
              {
                img: "../img/assets/capas/Volcanic Return.webp",
                title: "Volcanic Return",
                author: "Biga & Lico (Arte)",
                chapter: "Capítulo 82",
              },
              {
                img: "../img/assets/capas/My Dragon System.webp",
                title: "My Dragon System",
                author: "艾鲁猫漫画工作室",
                chapter: "Capítulo 22",
              },
              {
                img: "../img/assets/capas/I'm the fated villain.webp",
                title: "I'm the fated villain",
                author: "天命反派 & 绘术动漫 (Arte)",
                chapter: "Capítulo 93",
              },
            ].map(({ img, title, author, chapter }, i) => (
              <div className="ct-card" key={i}>
                <div className="img-card">
                  <img src={img} alt={title} />
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
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span style={{ fontSize: "2rem" }}>Se conecte com a gente:</span>
          </div>
          <div>
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
                <h6 className="text-uppercase fw-bold mb-4" style={{ fontSize: "2rem" }}>
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
    </>
  );
}