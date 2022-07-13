import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToursService} from '../../service/tours.service';

@Component({
  selector: 'app-delete-tour',
  templateUrl: './delete-tour.component.html',
  styleUrls: ['./delete-tour.component.css']
})
export class DeleteTourComponent implements OnInit {

  tourForm: FormGroup;
  id: number;
  constructor(private tourService: ToursService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getTour(this.id);
    });
  }

  ngOnInit() {
  }

  getTour(id: number) {
    return this.tourService.getById(id).subscribe(tour => {
      this.tourForm = new FormGroup({
        title: new FormControl(tour.title),
        price: new FormControl(tour.price),
        description: new FormControl(tour.description)
      });
    });
  }

  delete(id: number) {
    this.tourService.delete(id).subscribe(() => {
      this.router.navigate(['/tour']);
      alert('Delete Tour successfully');
    }, e => {
      console.log(e);
    });
  }

}
