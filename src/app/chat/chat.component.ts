import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
//variables
nombreValue = '';
mensajeValue = '';
mensajes: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.mensajes = db.list('mensajes').valueChanges();
   }

  ngOnInit() {
    
  }

}
