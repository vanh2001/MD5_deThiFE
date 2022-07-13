import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ToursService} from '../../service/tours.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css']
})
export class EditTourComponent implements OnInit {
  tourForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  id: number;
  obj: any;
  constructor(private tourService: ToursService,
              private activatedRoute: ActivatedRoute,
              private router: Router
              // ActivatedRoute lấy dữ liệu trên đường dẫn
  ) {
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
        description: new FormControl(tour.description),
      });
    });
  }

  update(id: number) {
    this.obj = {
      title: this.tourForm.value.name,
      price: this.tourForm.value.price,
      description: this.tourForm.value.description,
    };
    this.tourService.update(id, this.obj).subscribe(() => {
      this.router.navigate(['/tour']);
      alert('Edit tour successfully');
    }, e => {
      console.log(e);
    });
  }
}
