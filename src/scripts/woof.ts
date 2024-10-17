const EASTER_EGG_WORD = 'harley';
let typedWord = '';

document.addEventListener('keydown', event => {
  typedWord += event.key.toLowerCase();

  if (typedWord.includes(EASTER_EGG_WORD)) {
    const audio = new Audio('/assets/audio/woof.ogg');
    audio.play();

    document.body.classList.add('woof');

    setTimeout(() => {
      document.body.classList.remove('woof');
    }, 1000);

    typedWord = '';
  }

  if (typedWord.length > 6) {
    typedWord = typedWord.slice(1);
  }
});
