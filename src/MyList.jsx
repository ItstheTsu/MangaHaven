import React, { useState, useEffect } from "react";

const initialMangas = [
  {
    id: 1,
    title: "Martial Peak",
    author: "Momo II",
    chapter: "3409",
    img: "../img/assets/capas/Martial Peak.webp",
  },
  {
    id: 2,
    title: "Lookism",
    author: "Taejoon Park",
    chapter: "459",
    img: "../img/assets/capas/Lookism.jpg",
  },
  // Você pode adicionar mais itens aqui como exemplo
];

function MyList() {
  // Tenta carregar do localStorage, senão usa a lista inicial
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("mangaList");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialMangas;
      }
    } else {
      return initialMangas;
    }
  });

  // Sincroniza toda vez que a lista mudar
  useEffect(() => {
    localStorage.setItem("mangaList", JSON.stringify(list));
  }, [list]);

  // Remove item pelo id
  function handleRemove(id) {
    const filtered = list.filter((item) => item.id !== id);
    setList(filtered);
  }

  return (
    <main>
      <section className="myList container py-4">
        <h1 className="mb-4 text-center text-white">Minha Lista</h1>
        {list.length === 0 && (
          <p className="text-center text-white">Sua lista está vazia.</p>
        )}

        <div className="row">
          {list.map(({ id, title, author, chapter, img }) => (
            <div key={id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={img}
                  className="card-img-top"
                  alt={title}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    <strong>Autor:</strong> {author} <br />
                    <strong>Capítulo:</strong> {chapter}
                  </p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(id)}
                  >
                    Remover da lista
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MyList;