export const announceTicket = (token: string | number, counter: string | number) => {
    const audio = new Audio('/ding.wav');

    const utterance = new SpeechSynthesisUtterance(
        `Patient with queue number ${token}, please proceed to counter ${counter}`
    );

    const voices = window.speechSynthesis.getVoices();

    const femaleVoice = voices.find(voice =>
        voice.name.includes("Female") ||
        voice.name.includes("Zira") ||
        voice.name.includes("Samantha")
    );

    if (femaleVoice) {
        utterance.voice = femaleVoice;
    }

    utterance.rate = 0.9;
    utterance.pitch = 1.2;
    utterance.volume = 1;

    audio.onended = () => {
        window.speechSynthesis.speak(utterance);
    }

    audio.play().catch((err) => console.error("Audio playback failed:", err));
}