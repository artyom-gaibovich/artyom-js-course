
(
	function(global) {

		global.app = global.app || {}

		global.app.calc = global.app.calc || {}

		function add(a, b) {
			return a + b;
		}

		function sub(a,b) {
			return a - b
		}

		global.app.calc.add = add;
		global.app.calc.add = add;


	}
)(window)