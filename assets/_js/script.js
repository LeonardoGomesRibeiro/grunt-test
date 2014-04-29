(function(window, document) {
	var obj = function(){
		return {
			init: function (argument) {
				console.log(this.sum(3, 5));
			},

			sum: function (n1, n2) {
				return n1 + n2;
			}
		};
	};

	obj().init()

})(window, document);