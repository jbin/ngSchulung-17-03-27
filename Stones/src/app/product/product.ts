export class Product {
    id: number;
    name: string;
    price: number;
    weight: number;

    constructor(id: number, name: string, price: number, weight: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.weight = weight;
    }
}
