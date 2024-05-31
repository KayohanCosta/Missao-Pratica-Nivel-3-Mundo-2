import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 0,
    titulo: "O Senhor dos Anéis",
    resumo:
      "Uma saga de fantasia que narra a jornada de um grupo de heróis em busca de destruir um anel maligno e derrotar seu criador.",
    autores: ["J.R.R. Tolkien"],
  },
  {
    codigo: 2,
    codEditora: 1,
    titulo: "1984",
    resumo:
      "Um romance distópico que descreve um regime totalitário onde a verdade é manipulada e a liberdade individual é suprimida.",
    autores: ["George Orwell"],
  },
  {
    codigo: 3,
    codEditora: 2,
    titulo: "O Auto da Compadecida",
    resumo:
      "Uma peça teatral que mistura comédia, drama e crítica social, retratando as aventuras de João Grilo e Chicó no sertão nordestino.",
    autores: ["Ariano Suassuna"],
  },
];

class ControleLivro {
  obterLivros = () => {
    return livros;
  };
  incluir = (novoObjeto: Livro) => {
    const novoCodigo =
      livros.length > 0
        ? Math.max(...livros.map((livro) => livro.codigo)) + 1
        : 1;
    novoObjeto.codigo = novoCodigo;
    livros.push(novoObjeto);
  };
  excluir = (codigo: number) => {
    const objetoaExcluir = livros.findIndex((i) => i.codigo === codigo);
    livros.splice(objetoaExcluir, 1);
  };
}

export default ControleLivro;
