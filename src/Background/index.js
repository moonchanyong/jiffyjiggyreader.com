const runTimeHandler = typeof browser === 'undefined' ? chrome : browser;

const listener = (request, sender, sendResponse) => {
  switch (request.message) {
    case 'getToggleOnDefault': {
      const toggleOnDefault = localStorage.getItem('toggleOnDefault');
      sendResponse({ data: toggleOnDefault });
      break;
    }
    case 'setToggleOnDefault': {
      localStorage.setItem('toggleOnDefault', request.data);
      sendResponse({ success: true });
      break;
    }
    case 'getSaccadesInterval': {
      const saccadesInterval = localStorage.getItem('saccadesInterval');
      sendResponse({ data: saccadesInterval });
      break;
    }
    case 'setSaccadesInterval': {
      localStorage.setItem('saccadesInterval', request.data);
      sendResponse({ success: true });
      break;
    }
    case 'getFixationStrength': {
      sendResponse({ data: localStorage.getItem('fixationStrength') });
      break;
    }
    case 'getTextColor': {
      sendResponse({ data: localStorage.getItem('textColor') });
      break;
    }
    case 'setTextColor': {
      localStorage.setItem('textColor', request.data);
      sendResponse({ success: true });
      break;
    }
    case 'setFixationStrength': {
      localStorage.setItem('fixationStrength', request.data);
      sendResponse({ success: true });
      break;
    }
    default:
      break;
  }
};
runTimeHandler.runtime.onMessage.addListener(listener);
