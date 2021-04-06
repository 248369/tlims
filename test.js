let msg = "david";
                let speech = new SpeechSynthesisUtterance();
                speech.lang = "en";
                speech.text = msg;
                speech.volume = 1;
                speech.rate = 1;
                speech.pitch = 1;
                speechSynthesis.cancel();
                window.speechSynthesis.speak(speech);