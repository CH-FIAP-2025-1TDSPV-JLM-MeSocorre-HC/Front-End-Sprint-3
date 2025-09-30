import { Link } from "react-router-dom";
import sad from "../assets/sad.svg"

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-xl mb-12 text-red-600">
        Erro 404 - Página não encontrada
      </h1>

      <p className="mb-5 w-2/3 text-center text-gray-500">
        Ops! Parece que ocorreu um erro.
      </p>

      <img src={sad} alt="Garota triste" className="w-40 mb-8" />

      <p className="mb-5 text-gray-500">Mas tudo bem!</p>

      <Link
        className="bg-[#0077C8] mt-2 p-2 rounded-lg text-center text-white hover:bg-[#0065a8] max-w-64"
        to="/"
      >
        Clique aqui para voltar à página inicial
      </Link>
    </div>
  );
}
