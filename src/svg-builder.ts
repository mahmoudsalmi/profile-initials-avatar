
export interface IOptions {
  bgColor?: string;
  color?: string;
  fontFamily?: string;
}

export function buildSvgDataUri(initials: string, opts?: IOptions): string {
  let options: IOptions = {
    ...{
      bgColor: '#000',
      color: '#fff',
      fontFamily: 'Fira-sans'
    },
    ...opts,
  };

  let svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
      <circle cx="500" cy="500" r="500" fill="#${options.bgColor}" />
      <text 
        x="50%" 
        y="50%" 
        dominant-baseline="central" 
        text-anchor="middle" 
        letter-spacing="${initials.length > 2 ? '-10' : 0}" 
        font-size="${initials.length > 2 ? 450 : 550}"
        font-family="'Fira Code', monospace"
        font-weight="400"
        fill="#${options.color}" 
      >
        ${initials}
      </text>
    </svg>
  `

  return "data:image/svg+xml," + encodeURIComponent(svg);
}
