import Backbone from 'backbone';
import Hint from '../models/Hint';

export default class HintsCollection extends Backbone.Collection {

	constructor() {
		super();
		this.model = Hint;
		this.total = null;
		this.took = null;
	}

	parse(resp, xhr) {
		this.total = resp.hits.total;
		this.took = resp.took;
		return resp.hits.hits;
	}
}