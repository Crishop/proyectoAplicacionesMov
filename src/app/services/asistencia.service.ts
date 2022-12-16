import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Asistencia from '../interfaces/asistencia.interface';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(
    private firestore : Firestore
  ) { }
registrarAsistencia(asistencia: Asistencia){
  const asitenciaRef = collection(this.firestore,'asistencia')
  return addDoc(asitenciaRef, asistencia);
}
}
