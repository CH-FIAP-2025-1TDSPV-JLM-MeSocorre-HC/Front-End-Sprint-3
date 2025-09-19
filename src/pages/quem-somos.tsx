import { Aluno } from "../components/aluno";

export function QuemSomos() {
    return (
        <>
            <h2>Quem Somos</h2>
            <Aluno 
                id="1"
                nome="Johnny Dias Mathias Junior"
                rm={566516}
                github="https://github.com/johnny-mathias"
                linkedin="https://www.linkedin.com/in/johnny-mathias-dev/"
             />
             <Aluno 
                id="2"
                nome="Luisa Ganasevici de Abreu"
                rm={563403}
                github="https://github.com/luisa-ganasevici"
                linkedin="https://www.linkedin.com/in/luisa-ganasevici-316824356/"
             />
             <Aluno 
                id="3"
                nome="Matheus Arazin de Oliveira"
                rm={556649}
                github="https://github.com/Mathzoba"
                linkedin="https://www.linkedin.com/in/"
             />
             
        </>
    )
}