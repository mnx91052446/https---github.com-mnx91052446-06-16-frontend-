import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  test:any;
  localData:any;
  

  ngOnInit(): void {
    this.getData();
  }

  constructor(private http:HttpClient){
  }


  getData(){
    const apiUrl = "http://localhost:8080/api/beverage/all";
    this.http.get(apiUrl).subscribe(
      data => {this.localData = data, console.log(this.localData)})
  }
  
  

  

}
