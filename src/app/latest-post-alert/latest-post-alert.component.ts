import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { NzAlertModule } from 'ng-zorro-antd/alert';
@Component({
  selector: 'app-latest-post-alert',
  standalone: true,
  imports: [NzAlertModule],
  templateUrl: './latest-post-alert.component.html',
  styleUrl: './latest-post-alert.component.css'
})
export class LatestPostAlertComponent {
  @Input() latestPost?: Post;


}
