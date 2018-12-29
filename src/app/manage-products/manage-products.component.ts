import { Component, OnInit, ViewChild } from '@angular/core';
import {ManageService} from '../manage.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {DataSource} from '@angular/cdk/collections'

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  
  id;
  name;
  type;
  description;
  image;
  price;
  selectedObj ={}
  data =[];
  // displayedColumns: string[] = ['id', 'name', 'type', 'price'];
  // dataSource = new MatTableDataSource<PeriodicElement>(this.data);

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
  /// table
  // displayedColumns = ['id', 'name', 'description', 'type'];
  // dataSource = this.data;

  // radio button
  collection: string[] = ['man', 'woman', 'baby'];
 

  //dataOfProduct =this.manageService.Product;
  constructor(private manageService :ManageService,private route:Router) { }
  
  // reactive form way 
  addForm =new FormGroup({
    id:new FormControl(null),
    name:new FormControl(null),
    type:new FormControl(null),
    description:new FormControl(null),
    image:new FormControl(null),
    price:new FormControl(null)

  
  })

  addProduct(){
    let obj={id:this.addForm.value.id,name:this.addForm.value.name,type:this.addForm.value.type,description:this.addForm.value.description,
      image:this.addForm.value.image,price:this.addForm.value.price}
    this.manageService.addNewProduct(obj).subscribe(res =>this.selectedObj = res )
    console.log(this.addForm)
  }

  
  ngOnInit() {

    
    this.manageService.getProduct().subscribe(pro => this.data=pro);
    // this.dataSource.paginator = this.paginator;
  }
 
   //with out reactive form
//  addProduct(){
//     let obj={id:this.id,name:this.name,type:this.type,description:this.description}
//   this.manageService.addNewProduct(obj).subscribe(res =>this.selectedObj = res )
//  }


 delete(id){
 //this. id =this.manageService.getProductById;
    this.manageService.delet(id).subscribe(re=> console.log(re));
   
      }

      
onClick(id){
  this.route.navigate(['/editProduct',id]);
  
        }
/*

      addNew(addProduct){

      console.log(addProduct);
     
      
      
    }
    */
  }

  

  // export interface PeriodicElement {
  //   id: number;
  //   name: string;
   
  //   type:string;
  // description:string;
  // image:string;
  // price:number;
  // }