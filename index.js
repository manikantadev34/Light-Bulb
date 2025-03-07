	//Implicit Conversion
	console.log("5" + true);             // "5true" (String)
	console.log("5" + 2);                  // "52" (String)
	console.log("5" - true);            //4 (Number)
	console.log("5" - 2);               //3 (Number)
	console.log("5" +false);          //5 (Number)
	console.log("5" +null);          //5 (Number)
	console.log("5" +undefined);  // NaN (Not a Number
	console.log("10px" - 2);       // NaN (Cannot conve
	// Boolean Context
	if (0) console.log("Truthy!");
	else console.log("Zero is falsy");
	// "Zero is false
	//Explicit Conversion
	console.log(String(123));         // "123"
	console.log(Number("2"));      // 2
	console.log(parseInt("123abc"));  //123
	console.log(parseFloat("123.56a"));//123.56
	console.log(Number(null));// 0
	console.log(Number (undefined));	// NaN
	console.log(Number("ab"));	// NaN
	console.log(5 * "abc");	// NaN
	console.log(Boolean(1));	// true
	console.log(Boolean (null));    // false
	console.log(Boolean (undefined));// false
