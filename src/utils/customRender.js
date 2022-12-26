import { render } from '@testing-library/react';
import fs from 'fs';

const customRender = (ui, options) => {
  const view = render(ui, { ...options });

  const style = document.createElement('style');
  style.innerHTML = fs.readFileSync('src/assets/css/index.css', 'utf8');
  document.head.appendChild(style);

  return view;
};

export * from '@testing-library/react';
export { customRender };
