export interface Asistente {
  id: string;
  identificacion: number;
  nombre: string;
  idEvento: string;
  estadoAsistencia: string;
}

export type crearAsistenteDto = Omit<Asistente, "id">;
export type actualizarAsistenteDto = Partial<Asistente>;
