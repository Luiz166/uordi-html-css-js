import DecoupledEditor from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";

import './css/style.css';

DecoupledEditor.create(document.querySelector('.document-editor__editable'), {
    plugins: [Essentials, Paragraph, Bold, Italic, Strikethrough, Underline, Subscript],
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
document.querySelector("#italic").addEventListener("click", function(e){
    e.preventDefault();
    // Save selection
    const selectionRange = editor.model.document.selection.getFirstRange();

    // Execute command
    editor.execute('italic');

    // Restore selection
    editor.editing.view.focus();
    editor.model.change(writer => {
        writer.setSelection(selectionRange);
    });
});
document.querySelector("#strikethrough").addEventListener("click", function(e){
    e.preventDefault();
    // Save selection
    const selectionRange = editor.model.document.selection.getFirstRange();

    // Execute command
    editor.execute('strikethrough');

    // Restore selection
    editor.editing.view.focus();
    editor.model.change(writer => {
        writer.setSelection(selectionRange);
    });
});
document.querySelector("#underline").addEventListener("click", function(e){
    e.preventDefault();
    // Save selection
    const selectionRange = editor.model.document.selection.getFirstRange();

    // Execute command
    editor.execute('underline');

    // Restore selection
    editor.editing.view.focus();
    editor.model.change(writer => {
        writer.setSelection(selectionRange);
    });
});
document.querySelector("#subscribe").addEventListener("click", function(e){
    e.preventDefault();
    // Save selection
    const selectionRange = editor.model.document.selection.getFirstRange();

    // Execute command
    editor.execute('subscript');

    // Restore selection
    editor.editing.view.focus();
    editor.model.change(writer => {
        writer.setSelection(selectionRange);
    });
});