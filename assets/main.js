function component() {
  var element = document.createElement('div');
  element.innerHTML = "Change Me";

  return element;
};

document.body.appendChild(component());

module.hot.accept();
