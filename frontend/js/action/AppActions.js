import hints from '../stores/Hints';

let actions = {

	getSearchItems(config) {
		hints.url = `${config.url}?q=${config.q}&size=${config.size}`;
		hints.fetch({ reset: true });
	}

};

export default actions;