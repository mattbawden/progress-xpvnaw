import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const config = {
    apiKey: "AIzaSyAFoF_8ujsmxyjKUZDUZwhVIBs61YRD6CE",
    authDomain: "progress-f6d5c.firebaseapp.com",
    databaseURL: "https://progress-f6d5c.firebaseio.com",
    projectId: "progress-f6d5c",
    storageBucket: "progress-f6d5c.appspot.com",
    messagingSenderId: "102229161104",
    appId: "1:102229161104:web:8411fb804d62a90fa9d415",
    measurementId: "G-EWDZ8JCTS2"
  };

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
