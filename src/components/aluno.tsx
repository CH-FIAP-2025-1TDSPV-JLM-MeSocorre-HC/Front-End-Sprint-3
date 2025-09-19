import { FaGithub, FaLinkedin } from "react-icons/fa";

interface AlunoProps {
    id: string;
    nome: string;
    rm: number;
    github: string;
    linkedin: string;
}

export function Aluno({ id, nome, rm, github, linkedin }: AlunoProps) {
    return (
        <div className="quemsomos-container">
            <div>
                <h4>Nome: {nome}</h4>
                <div>
                    <p>ID: {id}</p>
                    <p>RM: {rm}</p>
                </div>
                <div className="flex gap-4 mt-2">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} color="#0A66C2" />
                    </a>
                </div>
            </div>
        </div>
    );
}
