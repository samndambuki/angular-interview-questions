import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HandlingEventsComponent } from './handling-events/handling-events.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';

export const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'childcomponent', component: ChildComponent },
  { path: 'parentcomponent', component: ParentComponent },
  { path: 'template', component: TemplateDrivenFormComponent },
  { path: 'reactive', component: ReactiveFormsComponent },
  { path: 'events', component: HandlingEventsComponent },
  { path: 'hooks', component: LifecycleHooksComponent },
];
