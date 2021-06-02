// export interface Products {
//     productId: string;
//     categoryId: number;
//     productName: string;
//     description: string;
//     rating: string;
//     price: number;
//     productImg: string;
//     isAvailable: boolean;
//     color: string;
//     review: number;
// }

export class Products {

    constructor(data: any) {
        this.productId = data.id;
        this.categoryId = data.categoryId;
        this.productName = data.name;
        this.description = data.description;
        this.rating = data.rating;
        this.price = data.price;
        this.productImg = data.productImg;
        this.isAvailable = data.is_available;
        this.vendor_name = data.vendor_name;
        this.review = data.review;
    }
    public productId: string;
    public categoryId: number;
    public productName: string;
    public description: string;
    public rating: string;
    public price: number;
    public productImg: string;
    public isAvailable: boolean;
    public vendor_name: string;
    public review: number;
}
