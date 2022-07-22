import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vegetable } from '../vegetable';
import { VegetableService } from '../vegetable.service';

@Component({
  selector: 'app-create-vegetable',
  templateUrl: './create-vegetable.component.html',
  styleUrls: ['./create-vegetable.component.css']
})
export class CreateVegetableComponent implements OnInit {

 

    vegetable: Vegetable = new Vegetable();
    constructor(private vegetableService: VegetableService,
      private router: Router) { }
  
    ngOnInit(): void {
    }
  
    saveVegetable(){
      this.vegetableService.createVegetable(this.vegetable).subscribe( data =>{
        console.log(data);
        this.goToVegetableList();
      },
      error => console.log(error));
    }
  
    goToVegetableList(){
      this.router.navigate(['/vegetables']);
    }
    
    onSubmit(){
      console.log(this.vegetable);
      this.saveVegetable();
    }
  }

