import { z } from 'zod';

export const teleconsultaSchema = z.object({
    titulo: z.string().nonempty('O título é obrigatório!'),
    end: z.string().nonempty('O endereço é obrigatório!'),
    data: z.string().nonempty('A data é obrigatória!'),
    profissional: z.string().nonempty('O nome do profissional é obrigatório!'),
});

export type TeleconsultaFormData = z.infer<typeof teleconsultaSchema>;