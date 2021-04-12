import { Routes,RouterModule } from "@angular/router";

import { PortafolioComponent } from '../app/components/portafolio/portafolio.component'
import {IndexComponent} from '../app/components/index/index.component';
import {ContactenosComponent} from '../app/components/contactenos/contactenos.component';
import {ChatComponent} from '../app/components/chat/chat.component';
import {QuienessomosComponent} from '../app/components/quienessomos/quienessomos.component';
import { AdminComponent } from '../app/components/admin/admin.component'
import { LoginComponent} from '../app/components/login/login.component'

const appRoutes: Routes =[
    {path:'',component:IndexComponent},
    {path: 'portafolio', component:PortafolioComponent},
    {path:'index',component:IndexComponent},
    {path:'contactenos',component:ContactenosComponent},
    {path:'chat',component:ChatComponent},
    {path:'quienessomos',component:QuienessomosComponent},
    {path:'admin',component:AdminComponent},
    {path:'login',component:LoginComponent}
    


]

export const routing = RouterModule.forRoot(appRoutes)