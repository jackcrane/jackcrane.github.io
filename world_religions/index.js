// Written by Jack Crane in 2020 for Mrs. Spencer's world Religions class. Availible under GNU GPLv3. If you dont know what this means, it doesnt apply to you.

const religions = {
  judaism:[
    "Star of David",
    "Abraham",
    "Ten commandments",
    "Torah (or old testament)",
    "Temple",
    "Fasting",
    "Dietary Restrictions",
    "Jesus",
    "Savior is yet to come",
    "Dress Restrictions",
    "Pilgrimage",
    "Rabbis",
    "Diaspora"
  ],
  islam:[
    "Muhammad",
    "Quran",
    "Allah",
    "Five Pillars",
    "Dress Restrictions",
    "Pilgrimage",
    "Hijab",
    "Caliphs",
    "Imams"
  ],
  christianity:[
    "Monotheistic",
    "Church",
    "Bible",
    "New Testament",
    "Torah (or old testament)",
    "Trinity",
    "Preists",
    "Jesus",
    "Cross",
    "Pope",
    "Abraham",
    "Fasting",
    "Ten commandments"
  ],
  hinduism:[
    "Caste system",
    "Polytheistic",
    "Moksha",
    "Karma",
    "Dharma",
    "Vedas",
    "Arranged Marriages",
    "India",
    "Reincarnation",
    "No supreme being",
    "Upanishads",
    "Trinity",
    "Dietary Restrictions",
    "Moksha"
  ],
  buddhism:[
    "Polytheistic",
    "Nontheistic",
    "Tibets",
    "Sutras",
    "Monks",
    "India",
    "Reincarnation",
    "Nirvana",
    "Four noble truths",
    "Way of life",
    "Meditation",
    "Eightfold Path",
    "Siddhartha (Buddha)",
    "The Middle Way",
    "Cyclic",
    "Dharma",
    "Karma",
    "No supreme being",
    "Dietary Restrictions"
  ],
  confucianism:[
    "Confucius",
    "Monotheistic",
    "Male superiority",
    "Harmony",
    "Oriental",
    "Extends Buddhism",
    "Temple",
    "Shrine",
    "China",
    "Virtue",
    "Character",
    "Golden rule"
  ],
  taoism:[
    "Oriental",
    "Extends Buddhism",
    "China",
    "Temple",
    "Shrine",
    "Balance",
    "Contemplation",
    "Polytheistic",
    "Compassion",
    "Moderation",
    "Nature",
    "Lao Tzu"
  ],
  shintoism:[
    "Atheistic",
    "Japan",
    "Kami",
    "Spirits",
    "Altar",
    "Reflection",
    "Way of life",
  ]
}

function compareTo(arr1,arr2) {
  console.log(arr1)
  console.log(arr2)
  let returns = {
    arr1:[],
    arr2:[],
    overlap:[]
  };
  let overlap = [];
  for(let i = 0; i < arr1.length; i++) {
    if(arr2.indexOf(arr1[i]) != -1) {
      returns.overlap.push(arr1[i]);

    } else {
      returns.arr1.push(arr1[i]);
    }
  }
  for(let i = 0; i < arr2.length; i++) {
    if(arr1.indexOf(arr2[i]) != -1) {
      returns.overlap.push(arr2[i]);
    } else {
      returns.arr2.push(arr2[i]);
    }
  }
  let us = new Set(returns.overlap)
  returns.overlap = [...us];
  return returns;
}
global_attrs = [];
const Venn = {
  update:function() {
    let values = {
      inputOne:document.getElementById("rel1").value,
      inputTwo:document.getElementById("rel2").value,
    };
    let elements = {
      left:document.getElementById("left"),
      right:document.getElementById("right"),
      overlap:document.getElementById("overlap"),
      leftTitle:document.getElementById("leftTitle"),
      rightTitle:document.getElementById("rightTitle")
    }
    console.log(values);
    console.log(elements);
    rightTitle.innerHTML = values.inputOne;
    leftTitle.innerHTML = values.inputTwo;
    if(values.inputOne && values.inputTwo != "default") {
      let attrs = compareTo(religions[values.inputOne],religions[values.inputTwo]);
      global_attrs = attrs;
      console.log(attrs)
      left.innerHTML = "";
      right.innerHTML = "";
      overlap.innerHTML = "";
      left.appendChild(Venn.arrToList(attrs["arr1"]));
      overlap.appendChild(Venn.arrToList(attrs["overlap"]));
      right.appendChild(Venn.arrToList(attrs["arr2"]));
    }
  },
  arrToList:function(arr) {
    console.log(arr)
    let ul = document.createElement("ul");
    for(let i = 0; i < arr.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = arr[i];
      ul.appendChild(li)
    }
    return ul;
  }
}
