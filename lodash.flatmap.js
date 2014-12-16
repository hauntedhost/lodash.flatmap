_.mixin({
  flattenShallow: function(array) {
    return _.flatten(array, true);
  },
});

_.mixin({
  flatMap: _.compose(_.flattenShallow, _.map)
});
