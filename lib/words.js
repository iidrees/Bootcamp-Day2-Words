module.exports = function words(str) {
	let countWord = {};
	let arrWords = str.replace(/[\r\n\s\t]/g, " ").replace("  ", " ").split(" ");
	for (let i =0; i < arrWords.length; i++) {
		let wordCount = arrWords[i];
		count = 0;
		for (let k = 0; k < arrWords.length; k++) {
			if (wordCount === arrWords[k]){
				count += 1;
			}
		}
		countWord[wordCount] = count;
	}
	return countWord;
}