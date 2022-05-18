import { Component, OnInit } from '@angular/core';
import {PorfolioService} from 'src/app/servicios/porfolio.service'

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acercaList:any;
  experienceList:any;
  constructor(private datosPorfolio:PorfolioService) { }
  
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.acercaList=data.acercaDe;
      this.experienceList=data.experience;
    });
  }

}
