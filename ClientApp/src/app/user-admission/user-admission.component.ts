import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-admission',
  templateUrl: './user-admission.component.html',
  styleUrls: ['./user-admission.component.scss']
})

export class UserAdmissionComponent implements OnInit {
  url: any;

  constructor(private activeroute:ActivatedRoute) { 
    activeroute.url.subscribe(url =>
       this.url = url[0].path
       )
  }

  ngOnInit(): void {
  }

}
