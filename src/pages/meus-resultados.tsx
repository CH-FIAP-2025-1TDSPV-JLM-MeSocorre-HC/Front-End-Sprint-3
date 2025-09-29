import { useState } from "react";
import { Microscope, Image } from "lucide-react";

export function MeusResultados() {
  const [selected, setSelected] = useState<"laboratorio" | "imagem">(
    "laboratorio"
  );

  return (
    <>
      <h2 className="titulo">Meus Resultados</h2>
      <div className="flex h-24">
        <div
          onClick={() => setSelected("laboratorio")}
          className={`flex-1 flex flex-col items-center justify-center cursor-pointer transition-colors 
            ${selected === "laboratorio" ? "text-[#0077C8] bg-blue-50" : "text-gray-400 hover:bg-gray-200"}
          `}
        >
          <Microscope
            className="h-8 w-8 stroke-1"
          />
          <h4>Laboratório</h4>
        </div>

        <div
          onClick={() => setSelected("imagem")}
          className={`flex-1 flex flex-col items-center justify-center cursor-pointer transition-colors 
            ${selected === "imagem" ? "text-[#0077C8] bg-blue-50" : "text-gray-400 hover:bg-gray-200"}
          `}
        >
          <Image
            className="h-8 w-8 stroke-1"
          />
          <h4>Imagem</h4>
        </div>
      </div>
    </>
  );
}
