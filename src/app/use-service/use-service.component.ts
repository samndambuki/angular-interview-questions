import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-use-service',
  imports: [],
  templateUrl: './use-service.component.html',
  styleUrl: './use-service.component.css',
})
export class UseServiceComponent implements OnInit {
  //stores data received from data service
  message: string = '';
  //dependency injection
  //allows component to access methods and data from the service
  constructor(private dataService: DataService) {}
  //lifecycle hook that runs after component is initialized
  ngOnInit() {
    this.message = this.dataService.getMessage();
  }
}
