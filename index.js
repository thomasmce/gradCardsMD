
var $marquee0 = document.getElementById('mar0');
var marquee0 = (window.m = new dynamicMarquee.Marquee($marquee0, {
  rate: -200,
}));

var $marquee = document.getElementById('mar1');
var marquee = (window.m = new dynamicMarquee.Marquee($marquee, {
  rate: -200,
}));
var $marquee2 = document.getElementById('mar2');
var marquee2 = (window.m = new dynamicMarquee.Marquee($marquee2, {
  rate: -100,
}));
var $marquee3 = document.getElementById('mar3');
var marquee3 = (window.m = new dynamicMarquee.Marquee($marquee3, {
  rate: -400,
}));
var $marquee4 = document.getElementById('mar4');
var marquee4 = (window.m = new dynamicMarquee.Marquee($marquee4, {
  rate: -300,
}));
var $marquee5 = document.getElementById('mar5');
var marquee5 = (window.m = new dynamicMarquee.Marquee($marquee5, {
  rate: -200,
}));
var $marquee6 = document.getElementById('mar6');
var marquee6 = (window.m = new dynamicMarquee.Marquee($marquee6, {
  rate: -100,
}));
var $marquee7 = document.getElementById('mar7');
var marquee7 = (window.m = new dynamicMarquee.Marquee($marquee7, {
  rate: -400,
}));
var $marquee8 = document.getElementById('mar8');
var marquee8 = (window.m = new dynamicMarquee.Marquee($marquee8, {
  rate: -300,
}));
var $marquee9 = document.getElementById('mar9');
var marquee9 = (window.m = new dynamicMarquee.Marquee($marquee9, {
  rate: -300,
}));
var $marquee10 = document.getElementById('mar10');
var marquee10 = (window.m = new dynamicMarquee.Marquee($marquee10, {
  rate: -100,
}));
var $marquee11 = document.getElementById('mar11');
var marquee11 = (window.m = new dynamicMarquee.Marquee($marquee11, {
  rate: -400,
}));
var $marquee12 = document.getElementById('mar12');
var marquee12 = (window.m = new dynamicMarquee.Marquee($marquee12, {
  rate: -300,
}));



window.l = dynamicMarquee.loop(
  marquee0,
  [
    function () {
      return 'THANK YOU!';
    },
  ],
  function () {
    var $separator = document.createElement('div');
    $separator.innerHTML = '&nbsp';
    return $separator;
  }
);


window.l = dynamicMarquee.loop(
  marquee,
  [
    function () {
      return 'THANK YOU!';
    },
  ],
  function () {
    var $separator = document.createElement('div');
    $separator.innerHTML = '&nbsp';
    return $separator;
  }
);

window.l = dynamicMarquee.loop(
  marquee2,
  [
    function () {
      return 'THANK YOU!';
    },
  ],
  function () {
    var $separator = document.createElement('div');
    $separator.innerHTML = '&nbsp';
    return $separator;
  }
);

window.l = dynamicMarquee.loop(
  marquee3,
  [
    function () {
      return 'THANK YOU!';
    },
  ],
  function () {
    var $separator = document.createElement('div');
    $separator.innerHTML = '&nbsp';
    return $separator;
  }
);

window.l = dynamicMarquee.loop(
  marquee4,
  [
    function () {
      return 'THANK YOU!';
    },
  ],
  function () {
    var $separator = document.createElement('div');
    $separator.innerHTML = '&nbsp';
    return $separator;
  }
);
window.l = dynamicMarquee.loop(
  marquee5,
  [
    function () {
      return 'THANK YOU!';
    },
  ],
  function () {
    var $separator = document.createElement('div');
    $separator.innerHTML = '&nbsp';
    return $separator;
  }
);
window.l = dynamicMarquee.loop(
  marquee6,
  [
    function () {
      return 'THANK YOU!';
    },
  ],
  function () {
    var $separator = document.createElement('div');
    $separator.innerHTML = '&nbsp';
    return $separator;
  }
);
window.l = dynamicMarquee.loop(
  marquee7,
  [
    function () {
      return 'THANK YOU!';
    },
  ],
  function () {
    var $separator = document.createElement('div');
    $separator.innerHTML = '&nbsp';
    return $separator;
  }
);
window.l = dynamicMarquee.loop(
  marquee8,
  [
    function () {
      return 'THANK YOU!';
    },
  ],
  function () {
    var $separator = document.createElement('div');
    $separator.innerHTML = '&nbsp';
    return $separator;
  }
);
window.l = dynamicMarquee.loop(
  marquee9,
  [
    function () {
      return 'THANK YOU!';
    },
  ],
  function () {
    var $separator = document.createElement('div');
    $separator.innerHTML = '&nbsp';
    return $separator;
  }
);
window.l = dynamicMarquee.loop(
  marquee10,
  [
    function () {
      return 'THANK YOU!';
    },
  ],
  function () {
    var $separator = document.createElement('div');
    $separator.innerHTML = '&nbsp';
    return $separator;
  }
);
window.l = dynamicMarquee.loop(
  marquee11,
  [
    function () {
      return 'THANK YOU!';
    },
  ],
  function () {
    var $separator = document.createElement('div');
    $separator.innerHTML = '&nbsp';
    return $separator;
  }
);
window.l = dynamicMarquee.loop(
  marquee12,
  [
    function () {
      return 'THANK YOU!';
    },
  ],
  function () {
    var $separator = document.createElement('div');
    $separator.innerHTML = '&nbsp';
    return $separator;
  }
);


anime({
  // targets: '.textBox1',
  translateX: 250, // -> '250px'
});
