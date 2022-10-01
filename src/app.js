import DecoupledEditor from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';


import './css/style.css';

DecoupledEditor.create(document.querySelector('.document-editor__editable'), {
    plugins: [Essentials, Paragraph],
}).then(editor => {
    console.log(editor);
}).catch(err => {
    console.log(err);
})