const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    for(const item of items.querySelectorAll('.item')){
      const checkbox = item.querySelector('input');
      checkbox.addEventListener('change', finish);
      const span = item.querySelector('span');
      span.addEventListener('click', edit);
      const del = item.querySelector('button');
      del.addEventListener('click', deleteItem);
    }
  }

  function formHandler(e) {
    e.preventDefault();

    var list = document.getElementsByClassName('items');
    var input = document.getElementsByClassName('form__input');
    var li = document.createElement("li");
    var check = document.createElement("input");
    var span = document.createElement("span");
    var button = document.createElement("button");
    check.setAttribute("class", "item__checkbox");
    span.setAttribute("class", "item__text");
    li.setAttribute('class', "item");
    button.setAttribute("class", "item__button");
    li.appendChild(document.createTextNode(e));

    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    const checkbox = e.target;
    const parent = checkbox.parentNode;

    parent.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {    
    const first = e.target;
    console.log(first);
    const text = first.innerHTML;
    console.log(text);
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'searchField');
    input.setAttribute('required', true);
    first.el = input;
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    const button = e.target;
    const parent = button.parentNode;

    parent.parentNode.removeChild(parent);
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
