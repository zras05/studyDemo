let str = 'Hello World', str1 = 'hello world', arr = [1, 2, 3]
let sass = [
	{
		nav: 'String',
		children: [
			{
				nav: 'length',
				code: {
					usage: 'length',
					effect: '获取字符串长度',
					sample: ['str.length', str.length]
				}
			},
			{
				nav: '索引',
				code: {
					usage: 'str[i]',
					effect: '通过下标获取字符串指定位置的字符，但是不能改变该索引对应的值',
					sample: ['str[2]', str[2], 'str[12]', str[12]]
				}
			},
			{
				nav: 'indexOf',
				code: {
					usage: 'indexOf',
					effect: '搜索指定字符串出现的位置,第一个参数表示要查找的元素，第二个参数表示要查找的起始位置可省略，若找到则返回对应元素所在的位置，否则返回-1',
					sample: ["str.indexOf('w')", str.indexOf('w'), "str.indexOf('w', 5)", str.indexOf('w', 5), "str.indexOf('w', 7)", str.indexOf('w', 7), "str.indexOf('W')", str.indexOf('W')]
				}
			},
			{
				nav: 'lastIndexOf',
				code: {
					usage: '搜索指定字符串最后出现的位置，在一个字符串中的指定位置向前搜索，第一个参数表示要查找的元素，第二个参数表示要查找的起始位置可省略，若找到则返回对应元素所在的位置，否则返回-1',
					effect: '',
					sample: []
				}
			},
			{
				nav: 'charAt',
				code: {
					usage: 'charAt',
					effect: '返回指定位置的字符。如果参数不在 0 与 str.length 之间，该方法将返回一个空字符串。',
					sample: ['str.charAt(1)', str.charAt(1), 'str.charAt(12)', str.charAt(12)]
				}
			},
			{
				nav: 'charCodeAt',
				code: {
					usage: 'charCodeAt',
					effect: '返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。如果参数不在 0 与 str.length 之间，该方法将返回NAN。',
					sample: ['str.charCodeAt(1)', str.charCodeAt(1), 'str.charCodeAt(12)', str.charCodeAt(12)]
				}
			},
			{
				nav: 'trim',
				code: {
					usage: 'trim',
					effect: '删除元素前置及后缀的所有空格，然后返回结果',
					sample: ['str.trim()', str.trim()]
				}
			},
			{
				nav: 'concat',
				code: {
					usage: 'concat',
					effect: '将一个或多个字符串拼接起来，返回拼接到的新的字符串，原字符串不变',
					sample: ["str.concat(' ', '!')", str.concat(' ', '!')]
				}
			},
			{
				nav: 'split',
				code: {
					usage: 'split',
					effect: '基于指定的分隔符将一个字符串分割成多个字符串，并将结果存放在一个数组中，可以传两个参数，第一个参数为分隔符，第二个参数用于指定返回数组的大小，若省略该参数，则返回整个数组',
					sample: ["str.split(' ')", str.split(' '), "str.split(' ', 1)", str.split(' ', 1)]
				}
			},
			{
				nav: 'join',
				code: {
					usage: 'join',
					effect: '将字符串数组连接成一个字符串,参数为要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。',
					sample: ['arr.join()', arr.join(), "arr.join('.')", arr.join('.')]
				}
			},
			{
				nav: 'slice',
				code: {
					usage: 'slice',
					effect: '返回被操作字符的子字符串，原字符串不变，接受两个参数，字符串的起始位置和结束位置，返回的字符串不包含结束位置的字符，第一个参数要小于第二个参数，否则返回"",若只有一个参数，返回起始位置到字符串结尾的所有字符串，若传递的参数为负数，将传入的负值与字符创的长度相加',
					sample: ['str.slice(3,7)', str.slice(3, 7), 'str.slice(3)', str.slice(3), 'str.slice(9,5)', str.slice(9, 5), 'str.slice(-7,-3)', str.slice(-7, -3), 'str.slice(5,9)', str.slice(5, 9)]
				}
			},
			{
				nav: 'substring',
				code: {
					usage: 'substring',
					effect: '当传入的参数是正数时，substring与slice的功能基本相同，唯一的区别是当第一个参数大于第二个参数时，方法将第二个参数作为截取的起始位置而将第一个参数作为截取结束的位置，且截取的字符串不包含第一个参数位置对应的值，当传入的参数是负值时，该方法会将所有的负值转化为0',
					sample: ['str.substring(3, 7)', str.substring(3, 7), 'str.substring(3)', str.substring(3), 'str.substring(9, 5)', str.substring(9, 5), 'str.substring(-7, -3)', str.substring(-7, -3), 'str.substring(-7, 3)', str.substring(-7, 3)]
				}
			},
			{
				nav: 'substr',
				code: {
					usage: 'substr',
					effect: '返回指定位置开始的指定长度的字符串，原字符串不变，若第二个参数缺省就一直截取到字符串结束，当传递的参数为负值时，方法会将负的第一个参数与字符串的长度相加，将负的第二个参数转化为0',
					sample: ['str.substr(0, 5)', str.substr(0, 5), 'str.substr(7)', str.substr(7), 'str.substr(-7,3)', str.substr(-7, 3), 'str.substr(-7,-3)', str.substr(-7, -3)]
				}
			},
			{
				nav: 'toUpperCase',
				code: {
					usage: 'toUpperCase',
					effect: '将字符串全部转为大写，并返回原字符串不变',
					sample: ['str.toUpperCase()', str.toUpperCase()]
				}
			},
			{
				nav: 'toLowerCase',
				code: {
					usage: 'toLowerCase',
					effect: '将字符串全部变小写，并返回原字符串不变',
					sample: ['str.toLowerCase()', str.toLowerCase()]
				}
			},
			{
				nav: 'replace',
				code: {
					usage: 'replace',
					effect: '替换指定字符，返回替换后新的字符串，对原有字符串有改变。(第一个参数可以是正则表达式) 只能替换一次 ',
					sample: ["str.replace('l','aaa')", str.replace('l','aaa')]
				}
			},
			{
				nav: 'repeat',
				code: {
					usage: 'repeat',
					effect: '返回一个新字符串，表示将原字符串重复n次。',
					sample: ['str.repeat(2)', str.repeat(2), 'str.repeat(0)', str.repeat(0)]
				}
			},
			{
				nav: 'match',
				code: {
					usage: 'match',
					effect: '在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。没找到则返回null',
					sample: ["str.match('o')", str.match('o'), "str.match('w')", str.match('w')]
				}
			},
			{
				nav: 'codePointAt',
				code: {
					usage: 'codePointAt',
					effect: '返回指定索引出的unicode字符',
					sample: ['str.codePointAt(0)', str.codePointAt(0)]
				}
			},
			{
				nav: 'includes',
				code: {
					usage: 'includes',
					effect: '返回一个布尔值，该值指示传入字符串是否包含在字符串对象中。',
					sample: ["str.includes('wo')", str.includes('wo'), "str.includes('wo', 2)", str.includes('wo', 2), "str.includes('Wo')", str.includes('Wo'), "str.includes('Wo', 3)", str.includes('Wo', 3)]
				}
			},
			{
				nav: 'startsWith',
				code: {
					usage: 'startsWith',
					effect: '判断字符串是否已指定字符串开始',
					sample: ["str.startsWith('H')", str.startsWith('H'), "str.startsWith('h')", str.startsWith('h')]
				}
			},
			{
				nav: 'endsWith',
				code: {
					usage: 'endsWith',
					effect: '判断字符串是否已指定字符串结束',
					sample: ["str.endsWith('d')", str.endsWith('d'), "str.endsWith('D')", str.endsWith('D')]
				}
			},
			{
				nav: 'padStart',
				code: {
					usage: 'padStart',
					effect: '把一个字符串填到另一个字符串，从字符串左边开始填充, 直到结果字符串到达提供的长度。字符串将在必要时会重复。',
					sample: ["str.padStart(18, 'abc')", str.padStart(18, 'abc')]
				}
			},
			{
				nav: 'padEnd',
				code: {
					usage: 'padEnd',
					effect: '把一个字符串填到另一个字符串，从字符串右边开始填充, 直到结果字符串到达提供的长度。字符串将在必要时会重复。',
					sample: ["str.padEnd(18, 'abc')", str.padEnd(18, 'abc')]
				}
			},
			{
				nav: 'localeCompare',
				code: {
					usage: 'localeCompare',
					effect: '用本地特定的顺序来比较两个字符串。如果 stringObject 小于 target，则 localeCompare() 返回小于 0 的数。如果 stringObject 大于 target，则该方法返回大于 0 的数。如果两个字符串相等，或根据本地排序规则没有区别，该方法返回 0。',
					sample: ['str.localeCompare(str1)', str.localeCompare(str1)]
				}
			},
			{
				nav: 'fromCharCode',
				code: {
					usage: 'fromCharCode',
					effect: '接受一个指定的 Unicode 值，然后返回一个字符串。',
					sample: ['String.fromCharCode(72,69,76,76,79)', String.fromCharCode(72, 69, 76, 76, 79)]
				}
			}
		]
	},
	{
		nav: 'Array',
		children: [
			{
				nav: '2111111',
				code: {
					usage: '',
					effect: '',
					sample: []
				}
			},
			{
				nav: '2333333',
				code: {
					usage: '',
					effect: '',
					sample: []
				}
			},
			{
				nav: '2444444',
				code: {
					usage: '',
					effect: '',
					sample: []
				}
			}
		]
	},
	{
		nav: 'Object',
		children: [
			{
				nav: '31111111111',
				code: {
					usage: '',
					effect: '',
					sample: []
				}
			},
			{
				nav: '32222222222',
				code: {
					usage: '',
					effect: '',
					sample: []
				}
			},
			{
				nav: '34444444444',
				code: {
					usage: '',
					effect: '',
					sample: []
				}
			}
		]
	}
]
exports.nav = sass