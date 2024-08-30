import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';

/**
 * Customizing PDP page - Product Variant Selector section
 * @author : Bhavik Solanki
 */

@Component({
  selector: 'app-custom-variant-selector',
  templateUrl: './custom-variant-selector.component.html',
  styleUrls: ['./custom-variant-selector.component.scss']
})
export class CustomVariantSelectorComponent implements OnInit {

  product$: Observable<Product | null> = this.currentProductService.getProduct();

  variantStyles: any;
  variantSizes: any;
  currentStyleUrl: string | undefined;
  showAddToCart: boolean = false;
  currentSizeHtml: string | undefined;

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
    this.product$.subscribe(product => {
      if (product?.baseOptions) {
        const baseOption0 = product.baseOptions[0];
        const baseOption1 = product.baseOptions[1];
  
        if (baseOption0?.options && baseOption0.options.length > 0 && baseOption0.variantType === 'ApparelStyleVariantProduct') {
          this.variantStyles = baseOption0.options;
          this.variantSizes = product.variantOptions;
          this.currentStyleUrl = product.url;
        } else if (baseOption1?.options && baseOption1.options.length > 0 && baseOption0?.variantType === 'ApparelSizeVariantProduct') {
          this.variantStyles = baseOption1.options;
          this.variantSizes = baseOption0.options;
          this.currentStyleUrl = baseOption1.selected?.url;
        }

      }
    });
  }

  selectVariantSize(variantSize: any): void {
    if (this.isSizeAvailable(variantSize)) {
      this.currentStyleUrl = variantSize.url;
      this.currentSizeHtml = this.getSizeHtml(variantSize);
    }
  }

  isSizeAvailable(variantSize: any): boolean {
    return variantSize.stock?.stockLevel > 0 && variantSize.stock?.stockLevelStatus !== 'outOfStock';
  }

  getSizeHtml(variantSize: any): string {
    return variantSize.variantOptionQualifiers
      .filter((qualifier: any) => qualifier.qualifier === 'size')
      .map((qualifier: any) => `${qualifier.name} ${qualifier.value}`)
      .join(', ');
  }
}
