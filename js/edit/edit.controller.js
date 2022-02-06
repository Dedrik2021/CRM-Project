const editController = (function(model, view) {

    const bids = model.getBids()
    view.counter(bids)
    const bidEdit = model.getBidEdit()
    view.renderBid(bidEdit)

    function setupEventListener() {
        const editDOM = view.editDOMStrings;
        const elementsDOM = view.elements;
        document.querySelector(editDOM.saveBtn).addEventListener('click', onSaveChangesBtn)
        elementsDOM.archiveBtn.addEventListener('click', onArchiveBtn)
    }

    function onArchiveBtn() {
        const archiveData = view.onBtnSaveInArchive()
        model.updateBid(archiveData)
    }

    function onSaveChangesBtn() {
        const data = view.getFormData()
        model.updateBid(data)
    }
    
    return {
        init: function() {
            setupEventListener()
        }
    }
})(model, view)

editController.init()