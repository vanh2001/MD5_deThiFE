import { Component, OnInit } from '@angular/core';
import {ToursService} from '../../service/tours.service';
import {Tours} from '../../model/tours';

@Component({
  selector: 'app-list-tour',
  templateUrl: './list-tour.component.html',
  styleUrls: ['./list-tour.component.css']
})
export class ListTourComponent implements OnInit {
  listTour: Tours[];

  constructor(private tourService: ToursService) { }

  ngOnInit(): void {
    this.tourService.getAll().subscribe( (data) => {
      console.log(data);
      this.listTour = data;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }

}
