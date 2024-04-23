import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.scss']
})
export class ShowBlogComponent implements OnInit{

blog:any
constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any ,public dialogRef: MatDialogRef<ShowBlogComponent>,) { }

ngOnInit():void{
this.blog=this.dialogData
}
}
