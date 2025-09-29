import type { AgendamentosProps } from "../types/agendamentos-props";

export function AgendamentosCard({titulo, end, data}: AgendamentosProps) {
    return (
        <div className="flex bg-gray-100 rounded-xl min-h-20 mb-4">
            <div className="basis-full rounded-s-xl p-4">
                <h4 className="text-[#0077C8] font-bold text-lg mb-1">{titulo}</h4>
                <p className="text-gray-600"><span className="font-bold">Endereço: </span>{end}</p>
            </div>
            <div className="bg-blue-100 p-4 basis-128 rounded-xl flex items-center justify-center">
                <p>{data}</p>
            </div>
        </div>
    )
}
    