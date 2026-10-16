export type prioridade ="baixa" | "media" | "alta";
export type status = "pendente" | "em_andamento" | "concluida";

export interface Tarefa{
    readonly id:number;
    titulo : string;
    descricao?: string;
    prioridade: prioridade;
    status: status;
    tags: string[];
    criadaEm: Date;

}
export type Novatarefa = Omit<Tarefa,"id" | "criadaEm">;