const body = document.body;

const lightBtn = document.querySelector('#light') as HTMLInputElement;
const darkBtn = document.querySelector('#dark') as HTMLInputElement;
const solarBtn = document.querySelector('#solar') as HTMLInputElement;

const theme: string | null = localStorage.getItem('theme');
const isSolar: string | null = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

lightBtn.addEventListener('click', (): void => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
});

darkBtn.addEventListener('click', (): void => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
});

solarBtn.addEventListener('click', (): void => {
  if (body.classList.contains('solar')) {
    body.classList.remove('solar');
    solarBtn.style.cssText = `--bg-solar: var(--yellow)`;
    solarBtn.innerText = 'solarize';
    localStorage.removeItem('isSolar');
  } else {
    solarBtn.style.cssText = `--bg-solar: white`;
    body.classList.add('solar');
    solarBtn.innerText = 'normalize';
    localStorage.setItem('isSolar', 'true');
  }
});
