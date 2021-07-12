import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { PetModel } from '../models/pet';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-donate-pet',
  templateUrl: './donate-pet.component.html',
  styleUrls: ['./donate-pet.component.css']
})
export class DonatePetComponent implements OnInit {
petForm : FormGroup;
pet : PetModel = new PetModel(1,'',0,'','') ;



  constructor(
    private formBuilder : FormBuilder,
    private api : ApiService
  ) {}

  ngOnInit() {
    this.petForm = this.formBuilder.group({
      genderPet:['',Validators.required],
      age:['0'],
      description:[''],
      imagePet:['',Validators.required]
    })
  }
  postPet() {
    this.pet.genderPet = this.petForm.value.genderPet;
    this.pet.age = this.petForm.value.age;
    this.pet.description = this.petForm.value.description;
    this.pet.imagePet = this.petForm.value.imagePet;
  this.api.postPet(this.pet).subscribe(res => {
    console.log(res);
    alert ('Pet Posted yeah');
    this.petForm.reset();
  },
  err => {
    alert('Something went wrong');
    this.petForm.reset();
  }
  )
  }

}
