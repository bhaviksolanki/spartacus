import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomVariantSelectorComponent } from './custom-variant-selector/custom-variant-selector.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';

/**
 * Customizing PDP page - Product Variant Selector section
 * @author : Bhavik Solanki
 */

@NgModule({
  declarations: [
    CustomVariantSelectorComponent
  ],
  imports: [
    CommonModule, ConfigModule.withConfig({
      cmsComponents:{
        ProductVariantSelectorComponent:{
          component:CustomVariantSelectorComponent
        }
      }
    }as CmsConfig)
  ]
})
export class CustomPdpModule { }
