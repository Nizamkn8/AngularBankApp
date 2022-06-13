import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-regstr',
  templateUrl: './regstr.component.html',
  styleUrls: ['./regstr.component.css']
})
export class RegstrComponent implements OnInit {
  uname = "";
  acno = "";
  pswd = "";

  //register form
  registerForm = this.fb.group({
    uname : "",
    acno : "",
    pswd : ""
  })
 

  constructor(private ds: DataService, private router: Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

 register(){
   var uname = this.uname
   var acno = this.acno
   var pswd = this.pswd

   const result =  this.ds.register(uname,acno,pswd)

   if (result){
     alert("Successfully registered")
     this.router.navigateByUrl("")
   }

   else{
     alert("Already existing customer.... Please login!")
   }
 }

}
