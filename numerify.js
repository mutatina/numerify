
derivedKey=window.__INITIAL_DATA__.state.player.songAbstract.chordInfo.derivedKey;
label_class='.label-'.concat(derivedKey.replace(':','_'));

document.querySelectorAll(label_class).forEach(e => e.innerHTML= 1);

document.querySelectorAll(label_class).forEach(e => e.classList.remove(label_class.slice(1,)));


keys =window.__INITIAL_DATA__.state.player.songAbstract.chordSummary



var dict = {};

dict['C:maj']=1;
dict['F:maj']=4;

Transposer=dict[derivedKey]

(dict[keys[0]]+Transposer) % 7

keys.forEach((item, i) => {
  conslole.log(item,'.label-'.concat(item.replace(':','_')))
});
