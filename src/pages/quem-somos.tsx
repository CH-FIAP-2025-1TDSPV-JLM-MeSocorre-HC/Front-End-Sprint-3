import { Aluno } from "../components/aluno";
import johnny from "../assets/members-pics/johnny.jpeg";
import luisa from "../assets/members-pics/luisa.jpg";
import matheus from "../assets/members-pics/matheus.jpeg";


export function QuemSomos() {
    return (
        <>
            <h2 className="titulo">
                Quem Somos
            </h2>
            <article className="flex flex-col text-center place-content-center">                
                <div className="flex flex-row place-content-around">
                    <div className="bg-[#0077C8] rounded-xl p-2 text-white mb-4 w-70 h-80">
                        <Aluno 
                        id="1"
                        nome="Johnny Dias Mathias Junior"
                        img={johnny}
                        rm={566516}
                        github="https://github.com/johnny-mathias"
                        linkedin="https://www.linkedin.com/in/johnny-mathias-dev/"
                    />
                    </div>
                    <div className="bg-[#008bc7] rounded-xl p-2 text-white mb-4 w-70 h-80">
                        <Aluno 
                        id="2"
                        nome="Luisa Ganasevici de Abreu"
                        img={luisa}
                        rm={563403}
                        github="https://github.com/luisa-ganasevici"
                        linkedin="https://www.linkedin.com/in/luisa-ganasevici-316824356/"
                    />
                    </div>
                    <div className="bg-[#009aa1] rounded-xl p-2 text-white mb-4 w-70 h-80">
                        <Aluno 
                        id="3"
                        nome="Matheus Arazin de Oliveira"
                        img={matheus}
                        rm={556649}
                        github="https://github.com/Mathzoba"
                        linkedin="https://www.linkedin.com/in/matheus-arazin/"
                    />
                    </div>
                </div>
            </article>
            <div className="flex items-center justify-center mt-4 gap-2">
                <h2>
                    Equipe <span className="meSocorre">MeSocorre</span>
                </h2>
            </div>
        </>
    )
}