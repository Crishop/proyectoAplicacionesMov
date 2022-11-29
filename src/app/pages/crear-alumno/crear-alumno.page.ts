import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from 'src/app/services/alumnos.service';


@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.page.html',
  styleUrls: ['./crear-alumno.page.scss'],
})
export class CrearAlumnoPage implements OnInit {

  formulario : FormGroup;
  images:string[];
  constructor(
    private storage: Storage,
    private alumnoService: AlumnosService,
  ) { 
    this.images = [];
    
    this.formulario = new FormGroup({
        nombre: new FormControl('',Validators.required),
        apellido: new FormControl('',Validators.required),
        edad: new FormControl('',Validators.required),
        rut: new FormControl('',Validators.required),
        image: new FormControl,
      });
  }
  async ngOnInit() {
    this.listImages();
  }
  //Subir formulario de crear Alumno By Cristopher
  async onSubmit(){
    if(this.formulario.valid){
      console.log(this.formulario.value)
      const response = await this.alumnoService.agregarAlumno(this.formulario.value);
      console.log(response)
    }else{
      alert("Rellene los campos faltantes")
      this.formulario.markAllAsTouched();
    }
  }



  //Metodo para subir imagen a storage cloud - By cristopher
  cargarImagen($event: any){
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, `images/${file.name}`);
    

    uploadBytes(imgRef,file)
    .then(response => 
      {console.log(response)
      this.listImages();
      })
    .catch(error => console.log(error))
  }
  //Metodo para listar imagenes - Cristopher
  listImages(){
    const imagesRef = ref(this.storage,'images')
    listAll(imagesRef)
    .then(async response => {
      console.log(response);
      this.images = [];
      for (let item of response.items) {
        const url = await getDownloadURL(item);
        this.images.push(url);
      }
    })
    .catch(error => console.log(error))
  }
  
}
