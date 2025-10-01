import { z } from 'zod';

export const teleconsultaSchema = z.object({
    titulo: z.string().nonempty('O tipo da consulta é obrigatório!'),
    data: z.string().nonempty('A data é obrigatória!'),
    hora: z.string().nonempty('O horário é obrigatório!'),
    profissional: z.string().nonempty('O nome do profissional é obrigatório!'),
});

export type TeleconsultaFormData = z.infer<typeof teleconsultaSchema>;