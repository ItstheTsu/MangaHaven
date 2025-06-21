import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function MangaHaven() {
  useEffect(() => {
    // Load Disqus embed script
    const d = document;
    const s = d.createElement("script");
    s.src = "https://mangahaven-com.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);

    // Load Disqus count script
    const countScript = d.createElement("script");
    countScript.id = "dsq-count-scr";
    countScript.src = "//mangahaven-com.disqus.com/count.js";
    countScript.async = true;
    (d.head || d.body).appendChild(countScript);

    // Cleanup scripts on unmount
    return () => {
      (d.head || d.body).removeChild(s);
      (d.head || d.body).removeChild(countScript);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Mangá Haven</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
          crossOrigin="anonymous"
        />
        {/* Boxicons */}
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        {/* Favicon */}
        <link rel="shortcut icon" href="../img/logos/Mangá Haven.png" type="image/x-icon" />
        {/* Your custom CSS */}
        <link rel="stylesheet" href="../css/style.css" />
        {/* FontAwesome CDN for icons used in footer */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
      </Helmet>

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
            <div className="collapse navbar-collapse navbarLetters" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="../pages/index.html">
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
                  <a className="nav-link" href="../pages/manhwas.html">
                    Manhwas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="../pages/AboutUs.html">
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
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Pesquisar
              </button>
            </form>
          </div>
        </nav>
      </header>

      <main>
        <section className="about">
          <div className="img-left img-top">
            <img src="../img/assets/SVG's/Book.svg" alt="" />
          </div>
          <div className="description-about">
            <p>
              No coração da paixão pelos mangás e da cultura japonesa, nasceu o Mangá Haven. Fundado por um grupo de
              entusiastas ávidos por compartilhar sua devoção pela arte das histórias em quadrinhos japonesas, o Mangá
              Haven se tornou um refúgio acolhedor para todos os amantes desse mundo fascinante.
            </p>
            <p>
              Nossa missão é criar uma plataforma online que não apenas ofereça uma extensa coleção de mangás, mas também
              seja um espaço onde a comunidade possa se reunir, se expressar e celebrar sua paixão compartilhada.
              Acreditamos que os mangás têm o poder de unir pessoas, transcender barreiras culturais e contar histórias
              que ressoam profundamente com diversas audiências em todo o mundo.
            </p>
          </div>
          <div className="img-right img-bottom">
            <img src="../img/assets/SVG's/Book-2.svg" alt="" />
          </div>
        </section>
      </main>

      <footer>
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
                    Bem-vindo ao Manga Haven, seu refúgio definitivo para explorar o emocionante mundo dos mangás! Aqui,
                    nossa paixão pela arte e narrativa japonesa se une para trazer a você uma experiência única e
                    cativante. Navegue por nossa vasta coleção de mangás cuidadosamente selecionados e mergulhe em
                    histórias emocionantes, personagens cativantes e ilustrações deslumbrantes.
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
                    <i className="fas fa-envelope me-3"></i>
                    mangahaven@support.com
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
}
