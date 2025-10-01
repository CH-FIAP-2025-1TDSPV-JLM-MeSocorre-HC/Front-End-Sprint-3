import type { Teleconsulta } from "./teleconsulta";

export interface TeleconsultaProps {
    teleconsultas: Teleconsulta[];
    removeTeleconsulta: (id: string) => void;
}