module.exports = function() {

	function Unifier() {

	}

	Unifier.prototype.RemoveDuplicates = function(obj) {
		
		if(Object.prototype.toString.call(obj) === '[object Array]'){

			return obj.reduce(function(dup, element) {

				dup.indexOf(element) === -1 ? dup.push(element) : "";
				return dup;
			},[]);

		}else if(Object.prototype.toString.call(obj) === '[object String]'){

			return obj.split('').reduce(function(dup, element) {

				dup.indexOf(element) === -1 ? dup.push(element) : "";
				return dup;
			},[]).join('');

		}


	};

	return new Unifier();
}