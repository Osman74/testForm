function send() {
	let Answers = document.getElementsByTagName('input');
	for(let i = 0; i < Answers.length; ++i)
		console.log(Answers[i].value)
}