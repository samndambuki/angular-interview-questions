import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../confirmexit.guard';

@Component({
  selector: 'app-editprofile',
  imports: [],
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css',
})

//this forces editprofile component to have a canDEactivate method
export class EditprofileComponent implements CanComponentDeactivate {
  canDeactivate(): boolean {
    return confirm('Are you sure you want to leave this page?');
  }
}
