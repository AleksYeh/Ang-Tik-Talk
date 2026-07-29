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
  readonly preview = signal<string>('/assets/imgs/avatar-placeholder');

  avatar: File | null = null;

  fileBrowserHandler(event: Event) {
    const file: FileList | File | null = (event.target as HTMLInputElement)?.files?.[0] ?? null;

    this.processFile(file);
  }
  onFileDroped(file: File) {
    this.processFile(file);
  }

  private processFile(file: File | null | undefined) {
    if (!file || !file.type.match('image')) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      this.preview.set(event.target?.result?.toString() ?? '');
    };

    reader.readAsDataURL(file);
    this.avatar = file;
  }
}
