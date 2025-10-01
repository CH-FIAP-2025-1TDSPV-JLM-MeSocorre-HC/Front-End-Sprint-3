import type { Agendamentos } from "../types/agendamentos";
import { useForm } from "react-hook-form";
import { AgendamentosSchema, type AgendamentosFormData } from "../schemas/agendamentos-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

interface AgendamentosFormProps {
  onAdd: (agendamentos: Agendamentos) => void;
}

export function AgendamentosForm({ onAdd }: AgendamentosFormProps) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AgendamentosFormData>({
    resolver: zodResolver(AgendamentosSchema),
  });

  function onSubmit(data: AgendamentosFormData): void {
    const agendamentos: Agendamentos = {
      id: crypto.randomUUID(),
      titulo: data.titulo,
      data: data.data,
      hora: data.hora,
      endereco: data.endereco,
      profissional: data.profissional,
    };

    onAdd(agendamentos);   // adiciona no estado do App
    reset();               // limpa o formulário
    navigate("/"); // redireciona para a lista
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow rounded-xl p-4 flex flex-col gap-3 mb-5 w-4/5"
    >
      <label htmlFor="Agendamentos-titulo">Tipo do Agendamento</label>
      <input
        type="text"
        id="Agendamentos-titulo"
        placeholder="Tipo do Agendamento"
        className="border rounded p-2"
        {...register("titulo")}
      />
      {errors.titulo && <p className="text-red-500">{errors.titulo.message}</p>}

      <label htmlFor="Agendamentos-data">Data</label>
      <input
        type="date"
        id="Agendamentos-data"
        className="border rounded p-2"
        {...register("data")}
      />
      {errors.data && <p className="text-red-500">{errors.data.message}</p>}

      <label htmlFor="Agendamentos-hora">Horário</label>
      <input
        type="time"
        id="Agendamentos-hora"
        placeholder="Horário"
        className="border rounded p-2"
        {...register("hora")}
      />
      {errors.hora && <p className="text-red-500">{errors.hora.message}</p>}

      <label htmlFor="Agendamentos-endereco">Endereço</label>
      <input
        type="text"
        id="Agendamentos-endereco"
        placeholder="Endereço da consulta"
        className="border rounded p-2"
        {...register("endereco")}
      />
      {errors.endereco && <p className="text-red-500">{errors.endereco.message}</p>}

      <label htmlFor="Agendamentos-profissional">Profissional</label>
      <input
        type="text"
        id="Agendamentos-profissional"
        placeholder="Nome do profissional"
        className="border rounded p-2"
        {...register("profissional")}
      />
      {errors.profissional && <p className="text-red-500">{errors.profissional.message}</p>}

      <button
        type="submit"
        className="bg-[#0077c8] text-white px-4 py-2 rounded-xl hover:bg-blue-700"
      >
        Adicionar Agendamento
      </button>
    </form>
  );
}
