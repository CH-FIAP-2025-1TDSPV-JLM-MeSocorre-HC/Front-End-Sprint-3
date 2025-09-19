import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { AlunoProps } from "../types/alunoProps";

export function Aluno({ nome, rm, github, linkedin }: AlunoProps) {
    return (
        <div className="flex place-content-center">
            <div className="bg-[#0077C8] p-2 rounded-xl text-white mb-4 w-70">
                <h4>{nome}</h4>
                <div>
                    <img src="assets/johnny.jpeg" alt="Integrante `${nome}`" />
                    <p>RM: {rm}</p>
                </div>
                <div className="flex gap-4 mt-2 place-content-center">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
}