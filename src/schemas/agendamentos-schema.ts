import { z } from 'zod';

export const AgendamentosSchema = z.object({
    titulo: z.string().nonempty('O tipo da consulta é obrigatório!'),
    data: z.string().nonempty('A data é obrigatória!'),
    hora: z.string().nonempty('O horário é obrigatório!'),
    endereco: z.string().nonempty('O endereço é obrigatório!'),
    profissional: z.string().nonempty('O nome do profissional é obrigatório!'),
});

export type AgendamentosFormData = z.infer<typeof AgendamentosSchema>;