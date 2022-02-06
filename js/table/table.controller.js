const tableController = (function (model, view) {
	const tableDOM = view.getTableDOMStrings();
	const elementsDOM = view.elements;
	const bids = model.getBids();
	view.renderBids(bids);
	view.counter(bids);

	function setupEventListener() {
		elementsDOM.inputType.addEventListener('change', filterBids);
		elementsDOM.blockStatusFilter.addEventListener('click', filterBids);
		elementsDOM.blockNavigation.addEventListener('click', filterBids);
		elementsDOM.table.addEventListener('click', onEditBtn);
	}

	function onEditBtn(e) {
		if (e.target.closest(tableDOM.editItem)) {
			const editItem = e.target.closest(tableDOM.listItems).querySelector(tableDOM.valueOrderId).innerText;
			model.editItem(editItem);
		}
	}

	function filterBids(e) {
		let filter;
		let filteredBids;
		const statusFilter = e.target.dataset.filters;

		statusFilter ? filter = model.filterSwitch('status', e.target.dataset.filters) : null
		this.value ? filter = model.filterSwitch('products', this.value) : null
		filteredBids = model.filterBids(filter);
		view.renderBids(filteredBids);
		statusFilter === 'Archive' ? view.renderItemArchive(bids) : null
	}

	return {
		init: function () {
			setupEventListener();
		},
	};
})(model, view);

tableController.init();
