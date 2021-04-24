let button = document.querySelector('button')
let SpeechRecognition = window.webkitSpeechRecognition
let voice = new SpeechRecognition()
voice.lang = "en-Us"
voice.continuous = false


button.onclick = () => {
	voice.start()
	voice.onresult = (event) => {
		let result = event.results[0][0]['transcript']
        console.log(result)
		document.body.style.backgroundColor = result.replace(/\s/g, "")
	}

	voice.onspeechend = function() {
		voice.stop()
	}
}