import type { Teleconsulta } from "../types/teleconsulta";
import { useForm } from "react-hook-form";
import { teleconsultaSchema, type TeleconsultaFormData } from "../schemas/teleconsulta-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

interface TeleconsultaFormProps {
  onAdd: (teleconsulta: Teleconsulta) => void;
}

export function TeleconsultaForm({ onAdd }: TeleconsultaFormProps) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TeleconsultaFormData>({
    resolver: zodResolver(teleconsultaSchema),
  });

  function onSubmit(data: TeleconsultaFormData): void {
    const teleconsulta: Teleconsulta = {
      id: crypto.randomUUID(),
      titulo: data.titulo,
      data: data.data,
      hora: data.hora,
      profissional: data.profissional,
    };

    onAdd(teleconsulta);   // adiciona no estado do App
    reset();               // limpa o formulário
    navigate("/teleconsultas"); // redireciona para a lista
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow rounded-xl p-4 flex flex-col gap-3 mb-5 w-4/5"
    >
      <label htmlFor="teleconsulta-titulo">Tipo da teleconsulta</label>
      <input
        type="text"
        id="teleconsulta-titulo"
        placeholder="Tipo da teleconsulta"
        className="border rounded p-2"
        {...register("titulo")}
      />
      {errors.titulo && <p className="text-red-500">{errors.titulo.message}</p>}

      <label htmlFor="teleconsulta-data">Data</label>
      <input
        type="date"
        id="teleconsulta-data"
        className="border rounded p-2"
        {...register("data")}
      />
      {errors.data && <p className="text-red-500">{errors.data.message}</p>}

      <label htmlFor="teleconsulta-hora">Horário</label>
      <input
        type="time"
        id="teleconsulta-hora"
        placeholder="Horário"
        className="border rounded p-2"
        {...register("hora")}
      />
      {errors.hora && <p className="text-red-500">{errors.hora.message}</p>}

      <label htmlFor="teleconsulta-profissional">Profissional</label>
      <input
        type="text"
        id="teleconsulta-profissional"
        placeholder="Nome do profissional"
        className="border rounded p-2"
        {...register("profissional")}
      />
      {errors.profissional && <p className="text-red-500">{errors.profissional.message}</p>}

      <button
        type="submit"
        className="bg-[#0077c8] text-white px-4 py-2 rounded-xl hover:bg-blue-700"
      >
        Adicionar teleconsulta
      </button>
    </form>
  );
}
