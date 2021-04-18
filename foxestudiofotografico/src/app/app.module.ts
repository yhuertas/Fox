import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'


import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ChatComponent } from './components/chat/chat.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { ShowOpinionsComponent } from './components/show-opinions/show-opinions.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    IndexComponent,
    ContactenosComponent,
    PortafolioComponent,
    ChatComponent,
    QuienessomosComponent,
    AdminComponent,
    LoginComponent,
    ShowOpinionsComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
