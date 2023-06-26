import { calculateFgColor, pickColor } from './colors';
import './main.scss';
import { buildSvgDataUri } from './svg-builder';
import { buildAndAddImg, getById } from './utils';

let thisYearEl: HTMLSpanElement = getById('thisYear');
thisYearEl.innerText = `${new Date().getFullYear()}`;

let paletteEl: HTMLDivElement = getById('palette');
for (let i = 1; i <= 10; i++) {
  const paletteItemEl = document.createElement('div');
  paletteItemEl.classList.add(`palette-item`);
  paletteItemEl.classList.add(`palette-clr-bg-${i}`);
  paletteEl.appendChild(paletteItemEl);
}

let initials = 'MS';
let initialsEl: HTMLInputElement = getById('initials');
initialsEl.value = initials;
updateAvatars(initials);

initialsEl.onkeyup = (evt: Event) => {
  let el = evt.target as HTMLInputElement;
  initials = el.value;
  updateAvatars(initials);
};

function updateAvatars(initials: string) {
  let [, bgColor] = pickColor(initials);
  let [, color] = calculateFgColor(bgColor);

  let avatarUri = buildSvgDataUri(initials, {bgColor, color});
  
  let avatarContainerLightEl: HTMLDivElement = getById('avatarContainerLight');
  buildAndAddImg(avatarContainerLightEl, avatarUri, '30rem');
  let avatarContainerDarkEl: HTMLDivElement = getById('avatarContainerDark');
  buildAndAddImg(avatarContainerDarkEl, avatarUri, '30rem');
  let avatarContainerBlueEl: HTMLDivElement = getById('avatarContainerBlue');
  buildAndAddImg(avatarContainerBlueEl, avatarUri, '30rem');
}

