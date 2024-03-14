import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { RecipeModule } from './recipes/recipe.module';


const aapRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  { path: 'recipes', loadChildren: () => import('./recipes/recipe.module').then(m => m.RecipeModule)},
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(aapRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
