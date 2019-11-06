import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.css']
})
export class ViewMessageComponent implements OnInit {
myMsg : boolean;

  constructor(private router : ActivatedRoute) {
  }

  ngOnInit() {
    this.myMsg = this.router.snapshot.queryParams['myMsg'] === "true" ? true : false;
    this.router.queryParams.subscribe((params)=>{
        this.myMsg = params['myMsg'] === "true" ? true : false;
    });
  }
}
