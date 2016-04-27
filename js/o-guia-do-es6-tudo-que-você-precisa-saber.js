// https://medium.com/@matheusml/o-guia-do-es6-tudo-que-voc%C3%AA-precisa-saber-8c287876325f#.hnfi2v217

console.log("")
console.log("========= Declaração de variáveis =========")
console.log("||")
console.log("||")
console.log("========= VAR X LET =========")
console.log("")

	// var 

		function doSomenthing() {
			var a = 1;
			if(true) {
				var b = 2;
			}
			var c = a + b;
			console.log(c)
		}

		doSomenthing();

		function doSomenthingElse() {
			let a = 1
			if(true) {
				let b = 2
			}
			let c = a + b
			console.log(c)
		}

		try {
			doSomenthingElse()
		} catch(e) {
			console.log("%c" + e, 'color: red');
		}

		for(var i= 0; i < 5; i++) {}
		for(let j= 0; j < 5; j++) {}

		console.log(i)
		
		try {
			console.log(j)
		} catch(e) {
			console.log('%c' + e , 'color: red');
		}

console.log("")
console.log("========= LET X CONST =========")
console.log("")

	let a = 1
	a = 2
	console.log(a)

	const b =1
	try {
		b = 2
		console.log(b)
	} catch(e) {
		console.log('%c' + e , 'color: red');
	}

	const obj = {
		property: 1
	}

	obj.property = 2
	console.log(obj.property)

console.log("")
console.log("========= Parâmetro de funções =========")	
console.log("||")
console.log("||")
console.log("========= DEFAULT PARAMETERS =========")
console.log("")

	var multiply = function(x, y) {
		y = y | 1;
		return x * y;
	}
	console.log(multiply(4, 4))
	console.log(multiply(3))

	const multiply2 = (x, y = 1) => x * y;
	console.log(multiply2(3, 2))
	console.log(multiply2(3))

console.log("")
console.log("========= REST PARAMETERS =========")
console.log("")	

	// ES5

		var sum = function() {
			var result = 0;
			for(var i = 0; i < arguments.length; i++) {
				result += arguments[i];
			}
			return result;
		}

		console.log(sum(1, 2, 3, 4, 5))

	// ES6

		function sum2(...numbers) {
			let result = 0
			numbers.forEach( (number) => {
				result += number 
			}) 
			return result
		}

		console.log(sum2(1, 2, 3, 4, 5))

	// FUNCIONAL
	
		const sum3 = (...numbers) => numbers.reduce( (acc, current) => acc + current, 0)
		console.log(sum3(1, 2, 3, 4, 5))

	// MAIS UMA ABORDAGEM	

		function sum4(start, ...numbers) {
			 let result = start;
			 numbers.forEach((number) => {
				result += number;	
			 })
			 return result;
		}

		console.log(sum4(10, 1, 2, 3, 4, 5))

		// MAIS UMA ABORDAGEM(2)

		const sum5 = (start, ...numbers) => numbers.reduce( (acc, current) => acc + current, start )
		console.log(sum5(10, 1, 2, 3, 4, 5))

console.log("")
console.log("========= Programação Funcional =========")	
console.log("||")
console.log("||")
console.log("========= ARROW FUNCTIONS =========")
console.log("")

	// ES5

		var sum6 = function(x, y) {
			return x + y;
		}
		console.log(sum6(1,2))

	// ES6
		
		const sum7 = (x, y) => x + y
		console.log(sum7(1,3))

	// Problema com o escopo do this do ES5 

		function Widget() {
			
			var button = document.getElementById('es5');
			button.addEventListener('click', function() {
			    this.doSomething();
			});

		}

		Widget();

		// Resolvendo com ES6

		function Widget2() {
			const button = document.getElementById('es6')
			button.addEventListener('click', () => {
				this.doSomething() 
			})
		}

		Widget2();

console.log("")
console.log("========= DESTRUTURING =========")
console.log("")		





