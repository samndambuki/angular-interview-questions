import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'childcomponent', component: ChildComponent },
  { path: 'parentcomponent', component: ParentComponent },
];
