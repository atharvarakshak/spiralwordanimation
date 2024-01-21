let speech = new SpeechSynthesisUtterance();
let voices = new []
let selectedVoice = document.querySelector("select")


window.SpeechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i )=> (voiceSelect.options[i] = new Option(voice.name,i)));
}
document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
