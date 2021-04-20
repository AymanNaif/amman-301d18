'use strict';
function Cartoon(contetn) {
  this.title = contetn.title;
  this.image_url = contetn.image_url;
  this.description = contetn.description;
  this.keyword = contetn.keyword;
  this.horns = contetn.horns;
}

let newObje = new Cartoon('ayman');
console.log(newObje.title);

Cartoon.prototype.render = function () {
  let objClone = $('.photo-template').clone();
  $('main').append(objClone);
  objClone.find('h2').text(this.title);
  objClone.find('img').attr('src',this.image_url);
  objClone.find('p').text(this.description);
  objClone.find('h5').text('its have '+this.horns+' horn');
  objClone.removeClass('.photo-template');
  objClone.attr('class', this.title);

};

Cartoon.readJson = () => {
  const ajaxSetting = {
    method: 'get',
    dataType: 'json'
  };
  $.ajax('data/page-1.json', ajaxSetting)
    .then(getData);
  function getData(data) {
    data.forEach(makeObject);
    function makeObject(item) {
      let newObj = new Cartoon(item);
      newObj.render();
    }
  }
};
$(() => Cartoon.readJson());

// make fillter #################################### below #####################################
// console.log(`${this.keyword}`);
// if ()


