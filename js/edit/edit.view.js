const view = (function() {

    const editDOMStrings = {
        allItemsCounter: '#all-items',
		newItemCounter: '#new',
        idOrder: '[data-edit-id]',
        dateOrder: '#date-order',
        nameOrder: '#name-order',
        emailOrder: '#email-order',
        phoneOrder: '#phone-order',
        saveBtn: '#save-changes'
    }

    const elements = {
        statusOrder: document.querySelector('#status-order'),
        select: document.querySelector('#edit-select'),
        archiveBtn: document.querySelector('[data-archive]')
    }

    function renderBid(item) {
        document.querySelector(editDOMStrings.idOrder).innerHTML = item.orderId
        document.querySelector(editDOMStrings.dateOrder).innerHTML = item.date
        document.querySelector(editDOMStrings.nameOrder).value = item.userName
        document.querySelector(editDOMStrings.emailOrder).value = item.email
        document.querySelector(editDOMStrings.phoneOrder).value = item.phone
        elements.statusOrder.value = item.statusItem
        elements.select.value = item.value
    }

    function getFormData() {
    
        return {
            id: document.querySelector(editDOMStrings.idOrder).innerHTML,
            userName: document.querySelector(editDOMStrings.nameOrder).value,
            email: document.querySelector(editDOMStrings.emailOrder).value,
            phone: document.querySelector(editDOMStrings.phoneOrder).value,
            value: elements.select.value,
            statusItem: elements.statusOrder.value,
            date: document.querySelector(editDOMStrings.dateOrder).innerText
        }
    }

    function counter(orders) {
		document.querySelector(editDOMStrings.allItemsCounter).innerText = orders.length
		document.querySelector(editDOMStrings.newItemCounter).innerText = orders.length
	}

    function onBtnSaveInArchive() {

        return {
            id: document.querySelector(editDOMStrings.idOrder).innerHTML,
            userName: document.querySelector(editDOMStrings.nameOrder).value,
            email: document.querySelector(editDOMStrings.emailOrder).value,
            phone: document.querySelector(editDOMStrings.phoneOrder).value,
            value: elements.select.value,
            date: document.querySelector(editDOMStrings.dateOrder).innerText,
            statusItem: elements.statusOrder.value = 'Archive',
        }
    }

    return {
        onBtnSaveInArchive,
        getFormData,
        counter,
        renderBid,
        editDOMStrings,
        elements,
    }
})()