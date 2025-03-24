import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

export const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'data-binding', component: DataBindingComponent },
];
