export function Sobre() {
    return (
        <div className="text-justify">
            <h1 className="titulo">Sobre</h1>

            <p className="mb-4">O Grupo <span className="meSocorre">MeSocorre</span> tem como proposta de solução para decréscimo da taxa de absenteísmo do Hospital das Clínicas (HC-USP) a implementação de um navegador in-app e melhorias de UX no aplicativo e site.</p>

            <h2 className="font-bold mb-2 text-lg">Problemática</h2>
            <div>
                <p className="mb-2">
                    O problema relatado pela unidade da rede Hospital das Clínicas, o HC-USP, foi o altíssimo índice de absenteísmo (cerca de 20%) em relação a consultas realizadas de forma remota por intermédio do aplicativo Portal do Paciente HC.
                    Contudo, segundo alguns pacientes que evadiram consultas, a causa dessa evasão se dá:
                </p>
                <ul>
                    <li className="ml-4 mb-2">• Interface confusa;</li>
                    <li className="ml-4 mb-2">• Divergências que o navegador externo ao app lida com o redirecionamento ao site;</li>
                    <li className="ml-4 mb-2">• Hardware obsoleto utilizado pelos pacientes (com ênfase para pouca oferta de memória RAM e ROM);</li>
                    <li className="ml-4 mb-2">• Baixa afinidade tecnológica, principalmente entre idosos e pessoas com alguma deficiência.</li>
                </ul>
                <p className="mb-4">
                    Desse modo, a nossa proposta de solução é, principalmente, evitar mais downloads desnecessários e facilitar a interface do usuário, principalmente para aqueles com menor afinidade tecnológica. Para isso, adicionaremos um navegador simples dentro do próprio aplicativo, aproveitando o já existente site do HC-USP para teleatendimento e faremos um retrabalho no design do app.
                </p>
            </div>
            <h1 className="titulo">Contato</h1>
            <p>Para dúvidas, sugestões ou parcerias, entre em contato pelo e-mail: <span className="text-blue-800 underline">fiapchallenge2025@gmail.com</span></p>
        </div>
    )
}