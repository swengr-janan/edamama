import { ThrowStmt } from '@angular/compiler';

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description='', price=0, imageUrl='https://lh3.googleusercontent.com/proxy/K08SUnGTE5C4lZ2yP_tTthi-jp4kbKAXlpy_Re1HZOH5PXcnGl2nanwm0HHeQ87i59pbZM_jrJuxK2wX2vbZVWzzDUJ9ZXoId3pKiGH2bKRcsnBV8YSU-QdiikUz47JnrQ'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}
