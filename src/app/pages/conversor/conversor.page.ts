import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnDestroy {

  qrString = 'Prueba numero ';
  scannedResults : any;

  constructor(private router: Router) { }

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
      const result = await BarcodeScanner.startScan();
      console.log(result);
      if (result?.hasContent) {
        this.scannedResults = result.content;
        BarcodeScanner.showBackground();
        document.querySelector('body').classList.remove('scanner-active');
        console.log(this.scannedResults);
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
  }

ngOnDestroy(): void {
  this.stopScan();
}

}
