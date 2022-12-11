import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AuthGuardModule } from '@angular/fire/auth-guard';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { getApp, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth, initializeAuth, indexedDBLocalPersistence } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { Capacitor } from '@capacitor/core';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
            provideFirebaseApp(() => initializeApp(environment.firebase)), 
            //provideAuth(() => getAuth()) -No sirve para sistema IOS -ByCris-
            provideAuth(() => {
              if (Capacitor.isNativePlatform()) {
                return initializeAuth(getApp(),{
                persistence:indexedDBLocalPersistence})
              }else{
                return getAuth()
              }
            }),
            provideFirestore(() => getFirestore()),
            AuthGuardModule,
            HttpClientModule,
            provideStorage(() => getStorage())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
