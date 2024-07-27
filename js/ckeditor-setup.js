// ckeditor-config.js
window.initCKEditor = function (elementId) {
    const element = document.querySelector('#' + elementId);
    if (!element) {
        console.error('Element not found:', elementId);
        return;
    }

    ClassicEditor
        .create(element, {
            toolbar: {
                items: [
                    'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'mediaEmbed', '|', 'undo', 'redo'
                ]
            },
            mediaEmbed: {
                previewsInData: true
            }
        })
        .then(editor => {
            window.editorInstance = editor; // Guarda la instancia del editor en una variable global
            console.log('Editor was initialized', editor);
        })
        .catch(error => {
            console.error('Error initializing the editor:', error);
        });
};


window.getCKEditorData = function () {
    if (window.editorInstance) {
        return window.editorInstance.getData();
    } else {
        console.error('CKEditor instance is not initialized');
        return '';
    }
};

// ckeditor-config.js
window.getCKEditorData = function () {
    if (window.editorInstance) {
        const data = window.editorInstance.getData();
        console.log('CKEditor Data:', data); // Verifica el valor aquí
        return data;
    } else {
        console.error('CKEditor instance is not initialized');
        return '';
    }
};

