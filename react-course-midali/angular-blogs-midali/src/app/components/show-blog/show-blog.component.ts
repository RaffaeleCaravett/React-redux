import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BlogDTO } from 'src/app/core/interfaces';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.scss']
})
export class ShowBlogComponent implements OnInit{

blog:any
insertBlogForm!:FormGroup
categories:any[]=[]
insertBlogError:string=""
insertBlogSubmitted:boolean=false
showSuccessMessage:string=''
constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any ,public dialogRef: MatDialogRef<ShowBlogComponent>,private blogService:BlogService) { }

ngOnInit():void{
this.blog=this.dialogData
this.blogService.getAllCategories().subscribe({
  next:(categories:any)=>{
    this.categories=categories
    },
    error:(err:any)=>{
this.categories=[]
    },
    complete:()=>{}
})
this.insertBlogForm= new FormGroup({
  titolo:new FormControl(this.blog.titolo,Validators.required),
  categoria:new FormControl(this.blog.categoria,Validators.required),
  testo:new FormControl(this.blog.testo,Validators.required),
  autore:new FormControl(this.blog.autore,Validators.required),
  tempoLettura:new FormControl(this.blog.tempoLettura,[Validators.required,Validators.min(1)]),
})
}

putBlog(){
  this.insertBlogError=""
  this.insertBlogSubmitted=true
if(this.insertBlogForm.valid){
let blog:BlogDTO={
  titolo:this.insertBlogForm.controls['titolo'].value,
  testo:this.insertBlogForm.controls['testo'].value,
  autore:this.insertBlogForm.controls['autore'].value,
  categoria:this.insertBlogForm.controls['categoria'].value,
  user_id:this.blog.user.id,
  tempoLettura:this.insertBlogForm.controls['tempoLettura'].value
}
this.blogService.put(this.blog.id,blog).subscribe(
  {
    next:(blog:any)=>{

      this.insertBlogError=""
     this.insertBlogSubmitted=false
     this.showSuccessMessage='Blog modificato con successo.'
      },
      error:(err:any)=>{
  this.insertBlogError=err.error.message
      },
      complete:()=>{}
  }
)
}else{
  this.insertBlogError="Compila tutto il form"
}
}

deleteBlog(){
  this.blogService.delete(this.blog.id).subscribe({
    next:(blog:any)=>{
      if(blog){
      this.insertBlogForm.reset()
      this.insertBlogError=""
      this.insertBlogSubmitted=false
      this.showSuccessMessage='Blog eliminato con successo.'
    }
  },
       error:(err:any)=>{
   this.insertBlogError=err.error.message
       },
       complete:()=>{}
  })
}

}
