export class Product {
  id:number;
  name:string;
  description:string;
  price:number;
  imageUrl:string;

  constructor(id,name,description='',price=0,imageUrl='https://cdn11.bigcommerce.com/s-c9a80/images/stencil/500x659/products/8311/23238/Rubiks_Cube_with_Logo__89772.1591667964.jpg?c=2'){
    this.id=id
    this.name=name
    this.description=description
    this.price=price
    this.imageUrl=imageUrl
  }
}
