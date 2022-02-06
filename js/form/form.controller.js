const formController = (function(model, view) {

    function setupEventListener() {
        const formDOM = view.formDOMStrings
        document.querySelector(formDOM.form).addEventListener('submit', ctrlAddItem)
    }

    function ctrlAddItem(e) {
        e.preventDefault()
        const input = view.getInput()
        if(!isNaN(input.phone)) {
            model.addItem(input.type, input.userName, Number(input.phone), input.email, input.value)
            view.clearFields()
        } else {
            alert('Please enter a valid phone number!!!')
        }
        // generateTestData.init()
    }

    return {
        init: function() {
            setupEventListener()
        }
    }

})(model, view)

formController.init()

