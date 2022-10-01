import DecoupledEditor from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';


import './css/style.css';

DecoupledEditor.create(document.querySelector('.document-editor__editable'), {
    plugins: [Essentials, Paragraph, Bold],
}).then(editor => {
    console.log(editor);
    window.editor = editor;
    editor.model.change(writer => {
        window.writer = writer;
    });
}).catch(err => {
    console.log(err);
});

document.querySelector("#bold").addEventListener("click", function(e){
    e.preventDefault();
    // Save selection
    const selectionRange = editor.model.document.selection.getFirstRange();

    // Execute command
    editor.execute('bold');

    // Restore selection
    editor.editing.view.focus();
    editor.model.change(writer => {
        writer.setSelection(selectionRange);
    });
});