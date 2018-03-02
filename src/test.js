function getZerosCount(number, base) {
	var tmp = [];
	var number = 10;
	var base = 10;
	var tmp = Prime(base);
	var primePower = tmp[1], primeBase = tmp[0];
	var power = 1;
	var result = 0;
	//base = startBase ^ a, WHERE startBase is prime number;
	while(number >= Math.pow(primeBase, power)){
		console.log(result)
		result = result + (number / Math.pow(primeBase, power));
		power++;
	}
	//result = Math.floor(1/primePower * result);
	console.log(primePower);
	
}

function baseToPrimeBase(number, base){
	var startPower = 1;
	var startBase = 2;
	for(; Math.pow(startBase, startPower) != base; startPower++){
		if(Math.pow(startBase, startPower) > base){
			console.log(startBase, startPower)
			startPower = 1;
			startBase++;
		}
	}
	return startBase;
}

function zeros(){
	var number = 55481864;
	var base = 224;
	var i, j, p, c, noz, k;
	noz = number;
	j = base;
	for(i = 2; i < base; i++){
		if(j % i == 0){
			p = 0;
			while(j % i == 0){
				p++;
				j = Math.floor(j / i);
			}
			c = 0;
			k = number;
			console.log(k + " " + i);
			while(k / i > 0){
				c = c + Math.floor(k / i);
				k = Math.floor(k / i);
			}
			noz = Math.floor(c/p);
		}
	}
	//console.log(c + " " + p);
}

function Prime(base){
	var result = [];
	var a = 2, b = 1;
	while(Math.pow(a, b) != base){
		if(Math.pow(a, b) > base){
			a++;
			b = 1;
		}
		else{
			b++;
		}
	}
	result[0] = a;
	result[1] = b;
	return result;
}

module.exports = function getZerosCount(number, base) {
	var i, j, p, c, noz, k;
	noz = number;
	j = base;
	for(i = 2; i < base; i++){
		if(j % i == 0){
			p = 0;
			while(j % i == 0){
				p++;
				j = Math.floor(j / i);
			}
			c = 0;
			k = number;
			while(k / i > 0){
				c = c + Math.floor(k / i);
				k = Math.floor(k / i);
			}
			noz = Math.round(c/p);
		}
	}
	return noz;
}

function fac(){
	var number = 60559525;
	var base = 147;
	var n = 13;
	var nn = n;
	var result = 0;
	while(number > n){
		result = result + Math.floor(number / n);
		n = n * 13;
	}

	console.log(result);
}

function raz(base){
	var base = 147;
	var result = [];
	var number = base;
	var curNumber = number;
	var probe = 2;
	while(curNumber != 1){
		if(curNumber % probe != 0){
			probe++;
		}
		else{
			curNumber = curNumber / probe;
			result.push(probe);
		}
	}
	var max = result[0];
	for(var i = 0; i < result.length; i++){
		if(max < result[i]){
			max = result[i];
		}
	}
	console.log(result);
}


fac();