import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isAdmin : boolean = true

  test() {
    alert("Coucou")
  }

  constructor(
    private _router : Router
  ){}

  public actionSheetButtons = [
    {
      text: 'Execute Action',
      role: 'destructive',
      data: {
        action: 'delete',
      },
      handler: () => { this.test() }
    },
    {
      text: 'Afficher Liste',
      data: {
        action: 'share',
      },
      handler : () => {this._router.navigate(["tabs/tab1/liste"])}
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

}
