import { MoveRight } from "lucide-react";

export function Contato() {
    return (
        <div className="flex flex-col">
            <h1 className="titulo">Contato</h1>
            <h2 className="font-bold mb-2">Telefone (HC-USP):</h2>
                <p className="ml-2 mb-6">&bull; (11) 2661-0000</p>
            
            <h2 className="flex font-bold text-[#0077C8] mb-4 gap-x-2"><MoveRight/>Como podemos te ajudar?</h2>
            <div className="ml-9 mb-6">
                <h3 className="font-bold mb-2">Central de Atendimento:</h3>
                    <p className="ml-4">&bull; (11) 2661-7025</p>
            </div>
            

            <h2 className="flex font-bold text-[#0077C8] mb-4 gap-x-2"><MoveRight/>Informações por e-mail:</h2>

            <div className="ml-9 mb-6">
                <h3 className="font-bold mb-2"> Dúvidas gerais:</h3>
                    <p className="ml-2 mb-4">&bull; faleconosco.hcx@hc.fm.usp.br</p>

                <h3 className="font-bold mb-2">Dúvidas sobre educação a distância:</h3>
                    <p className="ml-2">&bull; hcxonline.hcx@hc.fm.usp.br</p>
            </div>

            <h2>Nossa Localização</h2>
            
            <h3>HCX Fmusp</h3>

                <p>Endereço: Rua. Dr. Ovídio Pires de Campos, 471</p>
                <p>05403-010 – São Paulo – SP</p>
            
            <p className="ml-2 text-gray-600">&bull; Horário de Atendimento: segunda a sexta das 8h às 19h e aos sábados das 8h às 13h</p>

        </div>
    )
}