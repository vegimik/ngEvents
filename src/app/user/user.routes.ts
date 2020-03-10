import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

export const userRoutes = [
    { path: 'profile', component: ProfileComponent },
    // { path: '**', component: PathNotFoundComponent },
    { path: 'login', component: LoginComponent }

]
