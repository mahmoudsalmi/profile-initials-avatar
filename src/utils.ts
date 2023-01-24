export function getById<T>(id: string): T {
  return document.getElementById(id) as T;
}

export function buildAndAddImg(parent: HTMLElement, src: string, width: string): void {
  let imgEl: HTMLImageElement = document.createElement('img');
  imgEl.src = src;
  imgEl.style.width = width;
  parent.innerHTML = '';
  parent.appendChild(imgEl);
}
