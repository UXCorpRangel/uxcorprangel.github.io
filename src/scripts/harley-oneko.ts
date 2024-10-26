export default class HarleyOneko {
  private onekoEl: HTMLDivElement;
  private onekoPosX: number;
  private onekoPosY: number;
  private mousePosX: number;
  private mousePosY: number;
  private frameCount: number;
  private idleTime: number;
  private idleAnimation: string | null;
  private idleAnimationFrame: number;
  private onekoSpeed: number;
  private lastFrameTimestamp: number | null;
  private spriteSets: { [key: string]: [number, number][] };
  private onekoFile: string;

  constructor(onekoFile: string) {
    const INITIAL_POSITION_X = 1350;
    const INITIAL_POSITION_Y = 600;

    this.onekoEl = document.createElement('div');
    this.onekoPosX = INITIAL_POSITION_X; // Posición inicial en X
    this.onekoPosY = INITIAL_POSITION_Y; // Posición inicial en Y
    this.mousePosX = INITIAL_POSITION_X;
    this.mousePosY = INITIAL_POSITION_Y;
    this.frameCount = 0;
    this.idleTime = 0;
    this.idleAnimation = null;
    this.idleAnimationFrame = 0;
    this.onekoSpeed = 10;
    this.lastFrameTimestamp = null;
    this.onekoFile = onekoFile; // Guardar el archivo del sprite

    // Definición de las animaciones del sprite
    this.spriteSets = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [
        [-5, 0],
        [-6, 0],
        [-7, 0]
      ],
      scratchWallN: [
        [0, 0],
        [0, -1]
      ],
      scratchWallS: [
        [-7, -1],
        [-6, -2]
      ],
      scratchWallE: [
        [-2, -2],
        [-2, -3]
      ],
      scratchWallW: [
        [-4, 0],
        [-4, -1]
      ],
      tired: [[-3, -2]],
      sleeping: [
        [-2, 0],
        [-2, -1]
      ],
      N: [
        [-1, -2],
        [-1, -3]
      ],
      NE: [
        [0, -2],
        [0, -3]
      ],
      E: [
        [-3, 0],
        [-3, -1]
      ],
      SE: [
        [-5, -1],
        [-5, -2]
      ],
      S: [
        [-6, -3],
        [-7, -2]
      ],
      SW: [
        [-5, -3],
        [-6, -1]
      ],
      W: [
        [-4, -2],
        [-4, -3]
      ],
      NW: [
        [-1, 0],
        [-1, -1]
      ]
    };

    this.init();
  }

  private init() {
    this.onekoEl.ariaHidden = 'true';
    this.onekoEl.style.width = '32px';
    this.onekoEl.style.height = '32px';
    this.onekoEl.style.position = 'fixed';
    this.onekoEl.style.pointerEvents = 'none';
    this.onekoEl.style.imageRendering = 'pixelated';
    this.onekoEl.style.left = `${this.onekoPosX - 16}px`; // Ajuste para centrar
    this.onekoEl.style.top = `${this.onekoPosY - 16}px`; // Ajuste para centrar
    this.onekoEl.style.zIndex = '-2147483647';

    // Usar la imagen de sprite pasada al constructor
    this.onekoEl.style.backgroundImage = `url(${this.onekoFile})`;

    // Ajustar el tamaño del fondo (6 columnas x 4 filas de sprites)
    // this.onekoEl.style.backgroundSize = `${64 * 6}px ${64 * 4}px`;

    document.body.appendChild(this.onekoEl);

    document.addEventListener('pointermove', (event: MouseEvent) => {
      this.mousePosX = event.clientX;
      this.mousePosY = event.clientY;
      this.onekoEl.style.zIndex = '2147483647';
    });

    window.requestAnimationFrame(this.onAnimationFrame.bind(this));
  }

  private onAnimationFrame(timestamp: number) {
    if (!this.onekoEl.isConnected) return;

    if (!this.lastFrameTimestamp) this.lastFrameTimestamp = timestamp;

    if (timestamp - this.lastFrameTimestamp > 100) {
      this.lastFrameTimestamp = timestamp;
      this.frame();
    }

    window.requestAnimationFrame(this.onAnimationFrame.bind(this));
  }

  private setSprite(name: string, frame: number) {
    const sprite = this.spriteSets[name][frame % this.spriteSets[name].length];
    // Cambiar posición del fondo para el frame actual
    this.onekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  }

  private resetIdleAnimation() {
    this.idleAnimation = null;
    this.idleAnimationFrame = 0;
  }

  private idle() {
    this.idleTime += 1;

    if (this.idleTime > 10 && Math.random() < 0.005 && !this.idleAnimation) {
      const availableIdleAnimations = ['sleeping', 'scratchSelf'];

      if (this.onekoPosX < 32) availableIdleAnimations.push('scratchWallW');
      if (this.onekoPosY < 32) availableIdleAnimations.push('scratchWallN');
      if (this.onekoPosX > window.innerWidth - 32) availableIdleAnimations.push('scratchWallE');
      if (this.onekoPosY > window.innerHeight - 32) availableIdleAnimations.push('scratchWallS');

      this.idleAnimation = availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)];
    }

    switch (this.idleAnimation) {
      case 'sleeping':
        if (this.idleAnimationFrame < 8) {
          this.setSprite('tired', 0);
        } else {
          this.setSprite('sleeping', Math.floor(this.idleAnimationFrame / 4));
        }
        if (this.idleAnimationFrame > 192) {
          this.resetIdleAnimation();
        }
        break;

      case 'scratchWallN':
      case 'scratchWallS':
      case 'scratchWallE':
      case 'scratchWallW':
      case 'scratchSelf':
        this.setSprite(this.idleAnimation, this.idleAnimationFrame);
        if (this.idleAnimationFrame > 9) {
          this.resetIdleAnimation();
        }
        break;

      default:
        this.setSprite('idle', 0);
    }

    this.idleAnimationFrame += 1;
  }

  private frame() {
    this.frameCount += 1;

    const diffX = this.onekoPosX - this.mousePosX;
    const diffY = this.onekoPosY - this.mousePosY;
    const distance = Math.sqrt(diffX * diffX + diffY * diffY);

    if (distance < this.onekoSpeed || distance < 32) {
      this.idle();
      return;
    }

    this.idleAnimation = null;
    this.idleAnimationFrame = 0;

    if (this.idleTime > 1) {
      this.setSprite('alert', 0);
      this.idleTime = Math.min(this.idleTime, 7);
      this.idleTime -= 1;
      return;
    }

    let direction = '';
    direction += diffY / distance > 0.5 ? 'N' : '';
    direction += diffY / distance < -0.5 ? 'S' : '';
    direction += diffX / distance > 0.5 ? 'W' : '';
    direction += diffX / distance < -0.5 ? 'E' : '';

    this.setSprite(direction, this.frameCount);

    this.onekoPosX -= (diffX / distance) * this.onekoSpeed;
    this.onekoPosY -= (diffY / distance) * this.onekoSpeed;

    this.onekoPosX = Math.min(Math.max(16, this.onekoPosX), window.innerWidth - 16);
    this.onekoPosY = Math.min(Math.max(16, this.onekoPosY), window.innerHeight - 16);

    this.onekoEl.style.left = `${this.onekoPosX - 16}px`;
    this.onekoEl.style.top = `${this.onekoPosY - 16}px`;
  }
}
