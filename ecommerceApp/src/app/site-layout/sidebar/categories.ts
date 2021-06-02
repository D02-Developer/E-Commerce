export class Category {

    constructor(data: any) {
        this.id = data.id;
        this.categoryName = data.categoryName;
    }
    public id: string;
    public categoryName: string;
}
