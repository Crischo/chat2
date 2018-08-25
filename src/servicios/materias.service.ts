





import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

 import {Cab} from './Cab';


@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(private http: HttpClient) {
console.log('service is working!');
   }
   getData(){
    return this.http.get<Cab[]>('http://yavirac.edu.ec/ignug/server/carrera/leer')
   }
}
