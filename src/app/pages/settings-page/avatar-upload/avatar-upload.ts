import { Component } from '@angular/core';
import { SvgIcon } from '../../../common-ui/svg-icon/svg-icon';

@Component({
  selector: 'app-avatar-upload',
  imports: [SvgIcon],
  templateUrl: './avatar-upload.html',
  styleUrl: './avatar-upload.scss',
})
export class AvatarUpload {
  fileBrouserHandler(event: Event) {
    const file: FileList = (event.target as HTMLInputElement)?.files?.[0];
    if (!file || !file.type.match('image')) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      event.target.result?.toString();
    };
  }
}
