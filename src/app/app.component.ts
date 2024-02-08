import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { PostsListComponent } from './posts-list/posts-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NzButtonModule,NzLayoutModule,NzBreadCrumbModule,NzMenuModule, PostsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-17-test';
}
