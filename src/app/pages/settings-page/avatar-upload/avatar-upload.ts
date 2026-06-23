import { Component, signal } from '@angular/core';
import { SvgIcon } from '../../../common-ui/svg-icon/svg-icon';
import { Dnd } from '../../../common-ui/directives/dnd';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-avatar-upload',
  imports: [SvgIcon, Dnd, FormsModule],
  templateUrl: './avatar-upload.html',
  styleUrl: './avatar-upload.scss',
})
export class AvatarUpload {
  preview = signal<string>('/assets/imgs/avatar-placeholder');

  avatar: File | null = null;

  fileBrouserHandler(event: Event) {
    //@ts-ignore

    const file: FileList = (event.target as HTMLInputElement)?.files?.[0];
    //@ts-ignore

    this.processFile(file);
  }
  onFileDroped(file: File) {
    this.processFile(file);
  }

  processFile(file: File | null | undefined) {
    //@ts-ignore
    if (!file || !file.type.match('image')) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      this.preview.set(event.target?.result?.toString() ?? '');
    };
    //@ts-ignore
    reader.readAsDataURL(file);
    this.avatar = file;
  }
}
