export function Receitas() {
    return (
        <div className="flex flex-col h-full">
            <h1 className="titulo">
                Minhas Receitas
            </h1>
            <div className="flex justify-center items-center basis-72">
                <p className="text-gray-500">Você não possui receitas recentes.</p>
            </div>
        </div>
    )
}