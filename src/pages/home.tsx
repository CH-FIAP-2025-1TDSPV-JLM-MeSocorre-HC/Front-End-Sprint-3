import { AgendamentosCard } from "../components/agendamentos-card";

export function Home() {
    return (
        <>
            <h2 className="titulo">
                Meus Agendamentos
            </h2>
            <AgendamentosCard
            id="1"
            titulo="Fisioterapia"
            end="Hospital das Clínicas FMUSP: R. Dr. Ovídio Pires de Campos, 225 - Cerqueira César, São Paulo - SP, 05403-010"
            data="Segunda-feira, 06/10/2025"
            />
            <AgendamentosCard
            id="2"
            titulo="Radioterapia"
            end="Hospital das Clínicas FMUSP: R. Dr. Ovídio Pires de Campos, 225 - Cerqueira César, São Paulo - SP, 05403-010"
            data="Terça-feira, 07/10/2025" />
        </>
    )
}