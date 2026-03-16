import { Pergunta } from "./pergunta"

export interface Quiz {
  id: number
  titulo: string
  descricao: string
  perguntas: Pergunta[]
}