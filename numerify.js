
derivedKey = window.__INITIAL_DATA__.state.player.songAbstract.chordInfo.derivedKey;
keys = window.__INITIAL_DATA__.state.player.songAbstract.chordSummary;

var dict = {};

dict['C']=1;
dict['D']=2;
dict['E']=3;
dict['F']=4;
dict['G']=5;
dict['A']=6;
dict['B']=7;


transposer=dict[derivedKey[0]];

keys.forEach((item, i) => {
  console.log(item);
  if (dict[item[0]] >= transposer)
  {transposed_value =dict[item[0]] -transposer + 1 }
  else
  {transposed_value = 8 - dict[item[0]] }

  console.log(transposed_value);
  /next: find the distinct css labels and align with keys provided
  //label_class='.label-'.concat(item.replace(':','_'));
//  document.querySelectorAll(label_class).forEach(e => e.innerHTML= transposed_value);
});

//console.log(item,'.label-'.concat(item.replace(':','_')))
//document.querySelectorAll(label_class).forEach(e => e.classList.remove(label_class.slice(1,)));
