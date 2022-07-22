import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vegetable } from '../vegetable';
import { VegetableService } from '../vegetable.service';

@Component({
  selector: 'app-update-vegetable',
  templateUrl: './update-vegetable.component.html',
  styleUrls: ['./update-vegetable.component.css']
})
export class UpdateVegetableComponent implements OnInit {

 

    id: number;
    vegetable: Vegetable = new Vegetable();
    constructor(private vegetableService: VegetableService,
      private route: ActivatedRoute,
      private router: Router) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
      this.vegetableService.getVegetableById(this.id).subscribe(data => {
        this.vegetable = data;
      }, error => console.log(error));
    }
  
    onSubmit(){
      this.vegetableService.updateVegetable(this.id, this.vegetable).subscribe( data =>{
        this.goToVegetableList();
      }
      , error => console.log(error));
    }
  
    goToVegetableList(){
      this.router.navigate(['/vegetables']);
    }
  }

