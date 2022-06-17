import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular/ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('ckeditorWithCustomPlugin')
  ckeditor: ElementRef;

  editorConfig: CKEditor5.Config = {
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
    ],
  };

  ngAfterViewInit(): void {
    ClassicEditor.create(document.querySelector('#editor'), this.editorConfig)
      .then((editor) => {
        console.log('Editor was initialized', editor);
      })
      .catch((error) => {
        console.error(error.stack);
      });
  }
}
