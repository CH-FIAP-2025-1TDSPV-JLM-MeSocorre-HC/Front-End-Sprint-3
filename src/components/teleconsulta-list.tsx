import type { Teleconsulta } from "../types/teleconsulta";
import { TeleconsultaResume } from "./teleconsulta-resume";

interface TeleconsultaListProps {
  teleconsultas: Teleconsulta[];
  removeTeleconsulta: (id: string) => void;
}

export function TeleconsultaList({ teleconsultas, removeTeleconsulta }: TeleconsultaListProps) {
  return (
    <>
      {teleconsultas.map((value) => (
        <TeleconsultaResume 
          key={value.id} // importante para o React
          removeTeleconsulta={removeTeleconsulta} 
          teleconsulta={value} 
        />
      ))}
    </>
  );
}
