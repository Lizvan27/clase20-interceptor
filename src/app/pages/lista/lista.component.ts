import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  usuarios: any = [];

  constructor( private mostraU: ApiService){

  }
  ngOnInit(): void {
    this.mostraU.getMostrar().subscribe(
      res =>{
        console.log(res);
        this.usuarios = res;
      }, err =>{

      }
    );
  }

}


 