function cookies (functions) {
    const container = document.querySelector('.cookies-container');
    const save = document.querySelector('.cookies-save');

    function getFormPref() {
        return Array.from(document.querySelectorAll('[data-function]')).filter(el => el.checked).map(el => el.getAttribute('data-function'));
    }

    function activateFunctions(pref) {
        pref.forEach((f) => functions[f]());
        console.log(pref);
        console.log(functions);
    }

    function handleSave() {
        const pref = getFormPref();
        activateFunctions(pref);
    }

    save.addEventListener('click', handleSave);
}

function marketing() {
    console.log('Função de Marketing')
}

function analytics() {
    console.log('Função de Analytics')

}

cookies({
    marketing,
    analytics,
});