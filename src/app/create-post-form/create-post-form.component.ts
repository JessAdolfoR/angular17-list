import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Post } from '../models/post.model';
import { NzInputModule } from 'ng-zorro-antd/input';
@Component({
  selector: 'app-create-post-form',
  standalone: true,
  imports: [NzFormModule, ReactiveFormsModule, NzButtonModule,NzInputModule],
  templateUrl: './create-post-form.component.html',
  styleUrl: './create-post-form.component.css'
})
export class CreatePostFormComponent {
  postForm: FormGroup;
  isLoading:boolean = false
  @Output() postCreated = new EventEmitter<Post>();
  constructor(private fb: FormBuilder, private postService: PostService) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(15)]],
      body: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      this.isLoading = true
      this.postService.createPost(this.postForm.value).subscribe(post => {
        this.isLoading = false
        this.postCreated.emit(post);
      });
    }
  }
}
