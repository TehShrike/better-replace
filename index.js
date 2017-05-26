module.exports = function replace(regex, replacerFunction, string){
	return string.replace(forceGlobal(regex), (match, ...rest) => {
		const captures = rest.slice(0, -2)
		return replacerFunction(...captures)
	})
}

function forceGlobal(regex) {
	const isGlobal = regex.flags.split('').some(flag => flag === 'g')

	return isGlobal ? regex : new RegExp(regex, regex.flags + 'g')
}
