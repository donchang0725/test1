window.popupOpen = false;

function eventCancel(event) {
  console.log(event);
  console.log('Cancel');
  window.popupOpen = false;
  document.getElementById('popupBody').style.display = 'none';
}

function eventConfirm(event) {
  console.log(event);
  console.log('Confirm');
  window.popupOpen = false;
  document.getElementById('popupBody').style.display = 'none';
}

document.onkeydown = function (event) {
  debugger
  if (event.keyCode === 73 /* i key */) {
    if (!document.getElementById('popupBody').style.display || document.getElementById('popupBody').style.display === 'none') {
      window.popupOpen = true;
      document.getElementById('popupBody').style.display = 'block';
    }
    if (event.shiftKey) {
      document.getElementById('popupKeyShift').style.display = 'block';
    } else if (event.ctrlKey) {
      document.getElementById('popupKeyCtrl').style.display = 'block';
    } else if (event.altKey) {
      document.getElementById('popupKeyAlt').style.display = 'block';
    }
  } else if (event.keyCode === 88 /* x key */ && window.popupOpen) {
    eventConfirm(event);
  } else if (event.key === 89 /* y key */ && window.popupOpen) {
    eventCancel(event);
  }
}