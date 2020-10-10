export class ProductFactory {

  private price: number;
  private description: string;
  private quantityAvailable: number;

  constructor() {
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getPrice(): number {
    return this.price;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public resetDescription(): string {
    return this.description;
  }

  public setQuantityAvailable(quantityAvailable: number): void {
    this.quantityAvailable = quantityAvailable;
  }

  public getQuantityAvailable(): number {
    return this.quantityAvailable;
  }

}
