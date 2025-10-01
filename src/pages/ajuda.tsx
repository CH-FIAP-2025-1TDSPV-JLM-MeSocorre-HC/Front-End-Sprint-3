import { Link } from "react-router-dom";

export function Ajuda() {
    return (
        <div>
            <h1 className="titulo">Perguntas Frequentes (FAQ)</h1>
            <section className="mr-8">
                <article>
                    <h3 className="pergunta">Como faço para confirmar meu agendamento?</h3>
                    <p className="resposta">• Você pode acessar a página de Agendamentos e clicar na opção de confirmação ao lado da consulta desejada. Também é possível confirmar pelo aplicativo oficial do HC-USP.</p>
                </article>
                <article>
                    <h3 className="pergunta">Receberei notificações de lembrete?</h3>
                    <p className="resposta">• Sim, você receberá notificações automáticas de lembrete para não esquecer suas consultas.</p>
                </article>
                <article>
                    <h3 className="pergunta">O que fazer se não puder comparecer à consulta?</h3>
                    <p className="resposta">• Recomendamos reagendar ou cancelar o quanto antes para liberar a vaga para outro paciente. Isso pode ser feito pelo navegador in-app ou pelo aplicativo oficial.</p>
                </article>
                <article>
                    <h3 className="pergunta">Como entro em contato com o suporte?</h3>
                    <p className="resposta">• Você pode ligar para o telefone da Central de Atendimento: <span className="text-black">(11) 2661-0000</span> ou acessar a página <Link to="/contato" className="text-[#0077c8] hover:underline">Contato</Link> para ver outras opções de contato</p>
                </article>
            </section>
        </div>
    )
}