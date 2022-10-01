import DecoupledEditor from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
import './css/style.css';

DecoupledEditor.create(document.querySelector('.document-editor__editable')).then(editor => {
    console.log(editor);
}).catch(err => {
    console.log(err);
})