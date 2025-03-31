import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HandlingEventsComponent } from './handling-events/handling-events.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ConditionalRenderingComponent } from './conditional-rendering/conditional-rendering.component';
import { DirectivesComponent } from './directives/directives.component';
import { UseServiceComponent } from './use-service/use-service.component';
import { RoutingComponent } from './routing/routing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './admin.guard';
import { SettingsComponent } from './settings/settings.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ConfirmExitGuard } from './confirmexit.guard';
import { ProfileComponent } from './profile/profile.component';
import { UserResolver } from './user.resolver';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

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
  { path: 'rendering', component: ConditionalRenderingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'service', component: UseServiceComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivateChild: [AdminGuard],
    children: [{ path: 'settings', component: SettingsComponent }],
  },
  {
    path: 'editprofile',
    component: EditprofileComponent,
    canDeactivate: [ConfirmExitGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: { user: UserResolver },
  },
  //defining a route with a parameter
  //:id is a dynamic route parameter
  { path: 'user/:id', component: UserComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },

  //redirect
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  //wild card
  { path: '**', component: NotFoundComponent },
];
