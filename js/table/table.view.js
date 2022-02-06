const view = (function () {

	const newEl = `<tr class="list-items" style="display: %display%;">
							<th scope="row" class="order-id">%id%</th>
							<td class="date">%date%</td>
							<td class="value">%value%</td>
							<td class="user-name">%name%</td>
							<td class="email">%email%</td>
							<td class="phone">%phone%</td>
							<td>
								<div class="badge badge-pill %status%" data-status>%statusItem%</div>
							</td>
							<td>
								<a href="/edit.html" class="edit">Edit</a>
							</td>
						</tr>`;
	let renderItem;

	const tableDOMStrings = {
		listItems: '.list-items',
		elValue: 'td.value',
		editItem: '.edit',
		phoneValue: '.phone',
		emailValue: '.email',
		elUsernameValue: '.user-name',
		dateValue: '.date',
		valueOrderId: '.order-id',
		satatusFilterBtn: '[data-filters]',
		badge: '.badge-pill',
	};

	const elements = {
		statusFilterBtns: document.querySelectorAll('[data-filters]'),
		filters: document.querySelector('[data-filters]'),
		table: document.querySelector('#table-list'),
		newCounter: document.querySelector('#new'),
		allItemsCounter: document.querySelector('#all-items'),
		inputType: document.querySelector('#filter-product'),
		blockStatusFilter: document.querySelector('[aria-label]'),
		blockNavigation: document.querySelector('[data-navigation]'),
	};

	const getInput = () => elements.inputType.value;

	function counter(orders) {
		elements.allItemsCounter.innerText = orders.length;
		elements.newCounter.innerText = orders.length;
	}

	function renderBids(orders) {
		elements.table.innerHTML = '';

		orders.forEach((el) => {
			renderEl(el)

			if (el.statusItem === 'New' || el.statusItem === 'Failure') {
				renderItem = renderItem.replace('%status%', 'badge-danger')

			} else if (el.statusItem === 'In work' || el.statusItem === 'Payment expected') {
				renderItem = renderItem.replace('%status%', 'badge-warning')

			} else if (el.statusItem === 'Completed') {
				renderItem = renderItem.replace('%status%', 'badge-success')

			} else if (el.statusItem === 'Archive') {
				renderItem = newEl.replace('%display%', 'none')
			}

			elements.table.insertAdjacentHTML('afterbegin', renderItem);
		});
		
	}

	function renderItemArchive(orders) {
		orders.forEach((el) => {
			if (el.statusItem === 'Archive') {
				renderEl(el)
				renderItem = renderItem.replace('%status%', 'badge-success')
			} else {
				renderItem = renderItem.replace('%display%', 'none')
			}
			elements.table.insertAdjacentHTML('afterbegin', renderItem);
		})
	}

	function renderEl(el) {
		renderItem = newEl.replace('%id%', el.id)
		renderItem = renderItem.replace('%date%', el.date)
		renderItem = renderItem.replace('%value%', el.value)
		renderItem = renderItem.replace('%name%', el.userName)
		renderItem = renderItem.replace('%email%', el.email)
		renderItem = renderItem.replace('%phone%', el.phone)
		renderItem = renderItem.replace('%statusItem%', el.statusItem)
	}

	return {
		renderEl,
		renderItemArchive,
		getInput,
		counter,
		renderBids,
		elements,
		getTableDOMStrings: function () {
			return tableDOMStrings;
		},
	};
})();
