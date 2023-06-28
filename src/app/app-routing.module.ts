import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { E404Component } from './pages/e404/e404.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [

    // Rota para a página inicial caso não especificada.
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },

    // Rota para a página 'home'.
    {
      path: 'home',
      title: 'Página inicial',
      component: HomeComponent
    },

    // Rota para a página 'contacts'.
    {
      path: 'contacts',
      title: 'Faça Contato',
      component: ContactsComponent
    },

    // Rota para a página 'about'.
    {
      path: 'about',
      title: 'Sobre',
      component: AboutComponent
    },

    // Rota para a página 'e404'.
    {
      path: 'e404',
      title: 'Erro 404',
      component: E404Component
    },

    // Rota para 'profile'.
  {
    path: 'profile',
    title: 'Perfil do usuário',
    component: ProfileComponent
  },
    // Rota padrão para rotas inexistentes.
  // Deve ser SEMPRE a última rota!
{
  path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
}
];










@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
