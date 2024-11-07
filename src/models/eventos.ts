export interface Evento {
  id: string;
  nombre: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  ubicacion: string;
  organizador: string;
  capacidadMaxima: number;
  asistentes: string[];
}

export type crearEventoDto = Omit<Evento, "id">;
export type actualizarEventoDto = Partial<Evento>; 
