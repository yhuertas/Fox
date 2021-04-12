import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
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
    AdminComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
