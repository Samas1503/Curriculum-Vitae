import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { CurriculumComponent } from './cv/curriculum/curriculum.component';
import { CurriculumEditComponent } from './cv/curriculum-edit/curriculum-edit.component';
import { ContactoComponent } from './cv/contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  { path: 'cv', component: CurriculumComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit', component: CurriculumEditComponent },
  { path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
