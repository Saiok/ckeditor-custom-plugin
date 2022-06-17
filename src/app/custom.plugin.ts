import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

class CustomPlugin extends Plugin {
  [property: string]: any;

  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('customPlugin', (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Custom button',
        withText: true,
        tooltip: true,
      });

      // Callback executed once the toolbar icon is clicked.
      view.on('execute', () => {
        console.log('Custom plugin executed');
      });

      return view;
    });
  }
}
