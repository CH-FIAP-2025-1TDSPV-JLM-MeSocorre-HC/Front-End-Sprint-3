import type { Teleconsulta } from "../types/teleconsulta";
import { useForm } from "react-hook-form";
import { teleconsultaSchema, type TeleconsultaFormData } from "../schemas/teleconsulta-schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface TeleconsultaFormProps {
  onAdd: (teleconsulta: Teleconsulta) => void;
}


export function WorkoutForm({ onAdd }: TeleconsultaFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TeleconsultaFormData>({
    resolver: zodResolver(teleconsultaSchema),
  });

  function onSubmit(data: TeleconsultaFormData): void {
    console.log(data);

    const teleconsulta: Teleconsulta = {
      id: crypto.randomUUID(),
      titulo: data.titulo,
      data: data.data,
      end: data.end,
      profissional: data.profissional,
    };

    onAdd(teleconsulta);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 mb-5 w-4/5"
    >
      <label htmlFor="teleconsulta-titulo">Título do treino</label>
      <input
        type="text"
        id="teleconsulta-titulo"
        placeholder="título do treino"
        className="border rounded p-2"
        {...register('titulo')}
      />

      {errors.titulo && <p className="text-red-500">{errors.titulo.message}</p>}

      <label htmlFor="teleconsulta-data">Data</label>
      <input
        type="date"
        id="teleconsulta-data"
        placeholder="Data"
        className="border rounded p-2"
        {...register('data')}
      />

      {errors.data && <p className="text-red-500">{errors.data.message}</p>}
      

      <label htmlFor="teleconsulta-end">Endereço</label>
      <input
        type="number"
        id="teleconsulta-end"
        placeholder="Endereço"
        className="border rounded p-2"
        {...register('end')}
      />

      {errors.end && <p className="text-red-500">{errors.end.message}</p>}

      <label htmlFor="teleconsulta-profissional">Nota</label>
      <input
        type="text"
        id="teleconsulta-profissional" 
        placeholder="Nota (Opcional)"
        className="border rounded p-2"
        {...register('profissional')}
        />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Adicionar treino
      </button>
    </form>
  );
}
