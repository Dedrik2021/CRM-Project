const model = (function () {
	let orders = [];
	let	itemEdit;

	const filters = {
		products: 'all',
		status: 'all'
	}

	function filterSwitch(prop, value) {
		filters[prop] = value
		return filters
	}

	function filterBids() {
		let filteredBids
		
		if (filters.products !== 'all') {
			filteredBids = orders.filter((el) => el.value === filters.products) 
		} else {
			filteredBids = [...orders]
		}

		if (filters.status !== 'all') {
			filteredBids = filteredBids.filter((el) => el.statusItem === filters.status)
		}
		return filteredBids
	}

	if (localStorage.getItem('orders')) {
		orders = JSON.parse(localStorage.getItem('orders'));
	}

	if (localStorage.getItem('itemEdit')) {
		itemEdit = JSON.parse(localStorage.getItem('itemEdit'));
	}

	const Course = function (id, userName, phone, email, value) {
		this.id = id;
		this.userName = userName;
		this.phone = phone;
		this.email = email;
		this.value = value;
		this.date = new Date().toLocaleDateString();
		this.statusItem = 'New';
	};

	function addItem(type, userName, phone, email, value) {
		let id = 1;
		if (orders.length > 0) {
			id = orders[orders.length - 1].id + 1;
		}

		let newItem = new Course(id, userName, phone, email, value);
		orders.push(newItem);
		localStorage.setItem('orders', JSON.stringify(orders));
		return newItem;
	}

	function editItem(itemEdit) {
		localStorage.setItem('itemEdit', JSON.stringify(itemEdit));
		return editItem;
	}

	function updateBid(data) {
		const index = orders.findIndex((order) => {
			return order.id == data.id
		})

		orders[index] = data
		localStorage.setItem('orders', JSON.stringify(orders));
	}

	function getBidEdit() {
		let editEl;

		orders.forEach((el) => {
			
			if (el.id == itemEdit) {
				editEl = {
					value: el.value,
					userName: el.userName,
					orderId: el.id,
					phone: el.phone,
					email: el.email,
					statusItem: el.statusItem,
					date: el.date,
				};
			}
		});
		return editEl;
	}

	const getBids = () => orders;

	return {
		filterBids,
		filterSwitch,
		updateBid,
		getBidEdit,
		editItem,
		getBids,
		addItem,
	};
})();
