# better-replace

- No need to remember to add `g` every time
- Less junk passed to the replacer function

```sh
npm i better-replace
```

<!--js
const betterReplace = require('./')
-->

```js
betterReplace(
	/'(\w)/,
	char => `'${char}${char}${char}`,
	`How's it going y'all?  What's the haps`
) // => `How'sss it going y'aaall?  What'sss the haps`

betterReplace(
	/(\d):(\d)/g,
	(first, second) => `${second}-${first}`,
	'1:2 3:4'
) // => '2-1 4-3'
```

# License

[WTFPL](http://wtfpl2.com)
