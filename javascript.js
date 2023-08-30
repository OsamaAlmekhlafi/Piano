// تحديد المفاتيح وتعيين الأصوات المقابلة
const keys = document.querySelectorAll('.piano-key');
const sounds = {
    C: 'C.wav',
    'C#': 'note1.wav',
    D: 'note6.wav',
    'D#': 'note2.wav',
    E: 'note7.wav',
    F: 'note1.wav',
    'F#': 'note3.wav',
    G: 'note1.wav',
    'G#': 'note4.wav',
    A: 'A.wav',
    'A#': 'note5.wav',
    B: 'note2.wav'
};

// Function to playSound
function playSound(note) {
    const audio = new Audio('notes/' + sounds[note]);
    audio.play();
}

// إضافة حدث النقر لتشغيل الصوت عند النقر على المفتاح
keys.forEach(key => {
    key.addEventListener('click', function () {
        const note = this.dataset.note;
        playSound(note);
    });
});


