import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vegetable } from '../vegetable';
import { VegetableService } from '../vegetable.service';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css']
})
export class VegetableListComponent implements OnInit {

  
    vegetables: any[];
  
    constructor(private vegetableService: VegetableService,
      private router: Router) { }
  
    ngOnInit(): void {
      this.getVegetables();
    }
  
    private getVegetables(){
      this.vegetableService.getVegetablesList().subscribe(data => {
        this.vegetables = data;
      });
    }
  
    vegetableDetails(id: number){
      this.router.navigate(['vegetable-details', id]);
    }
  
    updateVegetable(id: number){
      this.router.navigate(['update-vegetable', id]);
    }
    
    deleteVegetable(id: number){
      this.vegetableService.deleteVegetable(id).subscribe( data => {
        console.log(data);
        this.getVegetables();
      })
    }
   
    
    }
  

 