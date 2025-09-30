import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { AlunoProps } from "../types/aluno-props";

export function Aluno({ nome, img, rm, github, linkedin }: AlunoProps) {
    return (
        <div className="mt-6">
            <h4>{nome}</h4>
            <div>
                <img src={img} alt={`Integrante ${nome}`}
                    className="block mx-auto m-1 mb-4 w-32 h-32
                                rounded-full border-3 border-solid object-cover" />
                <p>1TDSPV</p>
                <p>RM: {rm}</p>
            </div>
            <div className="flex gap-4 mt-2 place-content-center mt-4">
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
            </div>
        </div>
    );
}