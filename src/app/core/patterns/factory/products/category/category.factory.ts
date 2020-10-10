import {ProductFactory} from '../product.factory';

export class CategoryFactory {
  category: string;
  image: string;

  constructor() {
  }

  public setCategory(name: string): void {
    this.category = name;
  }

  public getCategory(): string {
    return this.category;
  }

  public createProduct(): ProductFactory {
    return new ProductFactory();
  }

  public setImage(image: string): void {
    this.image = image;
  }

  public getImage(): string {
    return this.image;
  }

  public removeImage(): void {
    this.image = '';
  }

}
