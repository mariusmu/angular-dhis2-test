import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './src/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);