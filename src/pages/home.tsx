export function Home() {
    return (
        <>
            <h2 className="titulo">
                Meus Agendamentos
            </h2>
            <div className="flex bg-gray-100 rounded-xl min-h-20">
                <div className="basis-2xl rounded-s-xl p-4">
                    <h4 className="text-[#0077C8] font-bold text-lg">Fisioterapia</h4>
                    <p className="text-gray-600"><span className="font-bold">Endereço: </span>Hospital das Clínicas FMUSP - R. Dr. Ovídio Pires de Campos, 225 - Cerqueira César, São Paulo - SP, 05403-010</p>
                </div>
                <div className="bg-blue-100 p-4 basis-sm rounded-xl flex items-center justify-center">
                    <p>Segunda-feira, 06/10/2025</p>
                </div>
            </div>

                    
                   
        </>
    )
}