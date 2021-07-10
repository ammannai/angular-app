import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Pet } from '../models/pet';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-donate-pet',
  templateUrl: './donate-pet.component.html',
  styleUrls: ['./donate-pet.component.css']
})
export class DonatePetComponent implements OnInit {
petForm : FormGroup;
pet : Pet ;


  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService
  ) {}

  ngOnInit() {
    this.petForm = this.formBuilder.group({
      id:[''],
      genderPet:['',Validators.required],
      age:['',Validators.required],
      description:['',Validators.required],
      imagePet:['',Validators.required]
    })
  }
  postPet(pet : any) {
    this.pet.id = this.petForm.value.id;
    this.pet.genderPet = this.petForm.value.genderPet;
    this.pet.age = this.petForm.value.age;
    this.pet.description = this.petForm.value.description;
    this.pet.imagePet = this.petForm.value.imagePet;
  this.api.postPet(this.pet).subscribe(res => {
    console.log(res);
    alert ('Pet Posted yeah');
  },
  err => {
    alert('Something went wrong');
  }
  )
  }

}
