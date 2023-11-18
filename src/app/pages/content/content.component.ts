import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://i.pinimg.com/originals/cc/ed/5a/cced5a055436f9f0ed1ef11160ac2318.gif";
  contentTitle: string = "Zenitsu o Brabo";
  contentDescription: string = "aksjldhklasjjdaslkdjaslkdjasldjsaldjsal";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => console.log(value.get("id")))
  }

}
