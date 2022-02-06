const view = (function() {

    const formDOMStrings = {
        form: '#addForm',
        inputName: '#input__name',
        inputPhone: '#input__phone',
        inputEmail: '#input__email',
        inputType: '#index-select',
    }

    function getInput() {
            
        return {
            userName: document.querySelector(formDOMStrings.inputName).value,
            phone: document.querySelector(formDOMStrings.inputPhone).value,
            email: document.querySelector(formDOMStrings.inputEmail).value,
            type: document.querySelector(formDOMStrings.inputType).value,
            value: document.querySelector(formDOMStrings.inputType).value
        }
    }

    function clearFields() {
        const nameInput = document.querySelector(formDOMStrings.inputName)
        const phoneInput = document.querySelector(formDOMStrings.inputPhone)
        const emailInput = document.querySelector(formDOMStrings.inputEmail)

        nameInput.value = '';
        nameInput.focus()
        phoneInput.value = '';
        emailInput.value = '';
    }

    return {
        clearFields,
        getInput,
        formDOMStrings,
    }

})()