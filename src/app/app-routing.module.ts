import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogInfoComponent } from './components/dogInfo/dogInfo.component';
import { DogsListComponent } from './components/dogsList/dogsList.component';

const routes: Routes = [
  { path: "home", component: DogsListComponent },
  { path: "home/:id", component: DogInfoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
