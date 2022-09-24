import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./app.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/tiagolipskidev.png",
      name: "Tiago Lipski",
      role: "Web developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          " O empenho em analisar a revolução dos costumes prepara-nos para enfrentar situações atípicas decorrentes das condições financeiras e administrativas exigidas. A nível organizacional, a competitividade nas transações comerciais causa impacto indireto na reavaliação das regras de conduta normativas. O cuidado em identificar pontos críticos na constante divulgação das informações estimula a padronização das condições inegavelmente apropriadas.",
      },
      { type: "link", content: "teste.design/doctorcare" },
    ],
    publishedAt: new Date("2022-09-20 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/tiagolipskidev.png",
      name: "Outro Usuario",
      role: "Fullstack developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "No mundo atual, o comprometimento entre as equipes agrega valor ao estabelecimento do levantamento das variáveis envolvidas. O que temos que ter sempre em mente é que a execução dos pontos do programa afeta positivamente a correta previsão dos relacionamentos verticais entre as hierarquias. O incentivo ao avanço tecnológico, assim como a adoção de políticas descentralizadoras cumpre um papel essencial na formulação do sistema de formação de quadros que corresponde às necessidades. Não obstante, o surgimento do comércio virtual talvez venha a ressaltar a relatividade dos procedimentos normalmente adotados.",
      },
      { type: "link", content: "teste.design/doctorcare" },
    ],
    publishedAt: new Date("2022-09-20 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
