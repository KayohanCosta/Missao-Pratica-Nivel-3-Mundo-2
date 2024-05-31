import { controleLivro } from ".";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "DELETE") {
      const codigo: number = Number(req.query.codigo);
      controleLivro.excluir(codigo);

      res.status(200).json({ message: "Livro deletado com sucesso" });
    } else {
      res.status(405).json({ message: "Método não permitido" });
    }
  } catch (error) {
    res.status(500).json({ message: "Exceção ocorrida no servidor" });
  }
};
