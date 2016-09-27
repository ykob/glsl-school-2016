import initDemo001 from './init/001.js'

const { pathname } = window.location;

const init = () => {
  switch (pathname.replace('index.html', '')) {
    case '/':
      break;
    case '/001.html':
      initDemo001();
      break;
    default:
  }
}
init();
