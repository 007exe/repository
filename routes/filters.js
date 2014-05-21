
var _ = require('underscore');

var filters = {
	branch_full: function(repository) {
		return repository.branch + '/' + repository.subgroup
	}
}

module.exports = {
	init: function (env) {
		for(var filter in filters)
			env.addFilter(filter, filters[filter])

		env.addFilter('map', function(array, filter) {
			console.log(array)
			if (!(filter in env.filters))
				throw new Error('Wrong filter name')
			return _.map(array, _.bind(env.filters[filter], env))
		})
	}
}