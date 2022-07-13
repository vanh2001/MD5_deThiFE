import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Tours} from '../../model/tours';
import {ToursService} from '../../service/tours.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent implements OnInit {
  tourForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  obj: any;

  listTour: Tours[] = [];
  constructor(private tourService: ToursService,
              private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.obj = {
      title: this.tourForm.value.title,
      price: this.tourForm.value.price,
      description: this.tourForm.value.description
    };
    this.tourService.save(this.obj).subscribe( () => {
      alert('Save tour successfully');
      this.router.navigate(['/tour']);
    }, error => {
      // @ts-ignore
      console.log()('Error: ' , error);
    });
  }
}
