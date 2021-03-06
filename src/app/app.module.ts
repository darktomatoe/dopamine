import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './services/electron.service';
import { AppearanceService } from './services/appearance/appearance.service';
import { IndexingService } from './services/indexing/indexing.service';
import { TranslatorService } from './services/translator/translator.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CollectionComponent } from './components/collection/collection.component';
import { SettingsComponent } from './components/settings/settings.component';
import { InformationComponent } from './components/information/information.component';
import { WindowControlsComponent } from './components/window-controls/window-controls.component';
import { LogoFullComponent } from './components/logo-full/logo-full.component';
import { ColorThemeSwitcherComponent } from './components/color-theme-switcher/color-theme-switcher.component';
import { StepIndicatorComponent } from './components/step-indicator/step-indicator.component';

import { MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatSlideToggleModule, MatTooltipModule } from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';

import { TrackRepository } from './data/entities/trackRepository';

import { Settings } from './core/settings';
import { Logger } from './core/logger';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WebviewDirective,
    LoadingComponent,
    WelcomeComponent,
    CollectionComponent,
    SettingsComponent,
    InformationComponent,
    WindowControlsComponent,
    LogoFullComponent,
    StepIndicatorComponent,
    ColorThemeSwitcherComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ElectronService,
    AppearanceService,
    IndexingService,
    TranslatorService,
    Settings,
    Logger,
    TrackRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
