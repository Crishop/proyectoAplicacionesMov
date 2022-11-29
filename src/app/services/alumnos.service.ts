import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Alumno from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(
    private firestore: Firestore
  ) { }

  agregarAlumno(alumno: Alumno){
    const alumnoRef = collection(this.firestore,'alumnos')
    return addDoc(alumnoRef, alumno);
  }
}
