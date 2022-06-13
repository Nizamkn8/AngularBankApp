import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "your perfect partner"
  acnum = "Account number please"
  acno = ""
  pswd = ""

 
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  //two way
  Login(){
    var acno = this.acno
    var pswd = this.pswd

    const result = this.ds.Login(acno,pswd)
  
    if (result){
      alert("Login Successfull")
      this.router.navigateByUrl("dashboard")

    }
   
  }

  

}

