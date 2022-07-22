import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vegetable } from '../vegetable';
import { VegetableService } from '../vegetable.service';

@Component({
  selector: 'app-vegetable-details',
  templateUrl: './vegetable-details.component.html',
  styleUrls: ['./vegetable-details.component.css']
})
export class VegetableDetailsComponent implements OnInit {

 
    id:number
    vegetable:Vegetable
    constructor(private route: ActivatedRoute, private vegetableService: VegetableService) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.vegetableService.getVegetableById(this.id).subscribe(data =>{
        this.vegetable=data;
      });
    }
  
  }

