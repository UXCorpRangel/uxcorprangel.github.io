const EASTER_EGG_WORD = 'harley';
let typedWord = '';

document.addEventListener('keydown', event => {
  typedWord += event.key.toLowerCase();

  if (typedWord.includes(EASTER_EGG_WORD)) {
    const audio = new Audio('/assets/audio/woof.ogg');
    audio.play();

    typedWord = '';
  }

  if (typedWord.length > 6) {
    typedWord = typedWord.slice(1);
  }
});
