import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { AuthService} from './../../services/auth.service'
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnDestroy {

  asistencia : FormGroup;
  qrString = 'A2Rv*ptB.8Q6X6j*Y@rCcEFjV-yvHRZG';
  scannedResults : any;
  content_visibility = '';


  constructor(
    private asistenciaService: AsistenciaService,
    private auth: AuthService,
    private router : Router,
    private afAuth: Auth
    ) {
      this.asistencia = new FormGroup({
        email: new FormControl(auth.email(),[Validators.required, Validators.email]),
        nombre: new FormControl('', Validators.required),
        fecha: new FormControl(this.tiempo(), Validators.required),
        rut: new FormControl('', Validators.required),
      });
    }
    

  tiempo(){
    var fecha = new Date();
    return fecha;
  }


  async checkPermission(){
    try{
      const status = await BarcodeScanner.checkPermission({ force: true });
      if(status.granted){
        return true;
      }
      return false;
    }catch(e){
      console.log(e);
      return false;
    }
  };

  async escanear(){
    try {
      const permission = await this.checkPermission();
      if (!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility='hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      if (result?.hasContent) {
        this.scannedResults = result.content;
        BarcodeScanner.showBackground();
        document.querySelector('body').classList.remove('scanner-active');
        this.content_visibility='';
      }
    } catch (error) {
      console.log(error)
      this.stopScan();
    }
  }

  stopScan(){
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body')!.classList.remove('scanner-active');
    this.content_visibility='';
  }

  ngOnDestroy(): void {
    this.stopScan();
  }
  //Registrar asistencia
  async onSubmit(){
    if(this.asistencia.valid){
      console.log(this.asistencia.value)
      const response = await this.asistenciaService.registrarAsistencia(this.asistencia.value);
      console.log(response)
      alert("Registro de asistencia EXITOSO")
      this.router.navigate(['/bienvenida'])
    }else{
      alert("Rellene los campos faltantes")
      this.asistencia.markAllAsTouched();
    }
  }
  user$ = this.auth.estadoUsuario$.pipe(
    filter(state => state ? true : false)
  );
  email(){
    return this.afAuth.currentUser.email
  }

}
