
function goBack() {
    window.history.back();
}

window.dotnetHelper = null; // Asegúrate de inicializar dotnetHelper en el componente Blazor

window.setDotnetHelper = function (dotnetHelper) {
    window.dotnetHelper = dotnetHelper;
};

window.toggleCollapse = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
        element.classList.toggle('show');
    }
};


