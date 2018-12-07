var keyData = {
  a: {
    color: "red",
    sound: new Howl({
      src: ["../app/sounds/bubbles.mp3"]
    })
  },
  b: {
    color: "orange",
    sound: new Howl({
      src: ["../app/sounds/clay.mp3"]
    })
  },
  c: {
    color: "yellow",
    sound: new Howl({
      src: ["../app/sounds/confetti.mp3"]
    })
  },
  d: {
    color: "green",
    sound: new Howl({
      src: ["../app/sounds/corona.mp3"]
    })
  },
  e: {
    color: "blue",
    sound: new Howl({
      src: ["../app/sounds/dotted-spiral.mp3"]
    })
  },
  f: {
    color: "indigo",
    sound: new Howl({
      src: ["../app/sounds/flash-1.mp3"]
    })
  },
  g: {
    color: "violet",
    sound: new Howl({
      src: ["../app/sounds/flash-2.mp3"]
    })
  },
  h: {
    color: "#fe5f55",
    sound: new Howl({
      src: ["../app/sounds/flash-3.mp3"]
    })
  },
  i: {
    color: "#577399",
    sound: new Howl({
      src: ["../app/sounds/glimmer.mp3"]
    })
  },
  j: {
    color: "#e88d67",
    sound: new Howl({
      src: ["../app/sounds/moon.mp3"]
    })
  },
  k: {
    color: "#cc2936",
    sound: new Howl({
      src: ["../app/sounds/pinwheel.mp3"]
    })
  },
  l: {
    color: "#08415c",
    sound: new Howl({
      src: ["../app/sounds/piston-1.mp3"]
    })
  },
  m: {
    color: "#f1bf98",
    sound: new Howl({
      src: ["../app/sounds/piston-2.mp3"]
    })
  },
  n: {
    color: "#c792df",
    sound: new Howl({
      src: ["../app/sounds/piston-3.mp3"]
    })
  },
  o: {
    color: "#22d07f",
    sound: new Howl({
      src: ["../app/sounds/prism-1.mp3"]
    })
  },
  p: {
    color: "#ffc605",
    sound: new Howl({
      src: ["../app/sounds/prism-2.mp3"]
    })
  },
  q: {
    color: "#a17c6b",
    sound: new Howl({
      src: ["../app/sounds/splits.mp3"]
    })
  },
  r: {
    color: "#ee4266",
    sound: new Howl({
      src: ["../app/sounds/prism-3.mp3"]
    })
  },
  s: {
    color: "#3c887e",
    sound: new Howl({
      src: ["../app/sounds/squiggle.mp3"]
    })
  },
  t: {
    color: "#e0f239",
    sound: new Howl({
      src: ["../app/sounds/strike.mp3"]
    })
  },
  u: {
    color: "#ccbcbc",
    sound: new Howl({
      src: ["../app/sounds/suspension.mp3"]
    })
  },
  v: {
    color: "#59a5d8",
    sound: new Howl({
      src: ["../app/sounds/timer.mp3"]
    })
  },
  w: {
    color: "#fce694",
    sound: new Howl({
      src: ["../app/sounds/ufo.mp3"]
    })
  },
  x: {
    color: "#a29f15",
    sound: new Howl({
      src: ["../app/sounds/veil.mp3"]
    })
  },
  y: {
    color: "#bbd8b3",
    sound: new Howl({
      src: ["../app/sounds/wipe.mp3"]
    })
  },
  z: {
    color: "#f96900",
    sound: new Howl({
      src: ["../app/sounds/zig-zag.mp3"]
    })
  }
};

var circles = [];

// whenever a key is pressed:
function onKeyDown(e) {
  if (keyData[e.key]) {
    // get the boundaries of the viewport (points should not exceed these)
    var maxPoint = new Point(view.size.width, view.size.height);
    // get a random point
    var ranPoint = Point.random();
    // constrain that point within the prev. defined boundaries
    var point = maxPoint * ranPoint;
    // make a circle at the random point
    var newCircle = new Path.Circle(new Point(point), 500);
    // fill the circle with orange
    newCircle.fillColor = keyData[e.key].color;
    keyData[e.key].sound.play();

    // finally, push it to the array for animation
    circles.push(newCircle);
  }
  onFrame();
}

// do something on every frame: animate
function onFrame() {
  for (var i = 0; i < circles.length; i++) {
    // every frame, add 1 to the hue, which changes its colour
    circles[i].fillColor.hue += 1;
    // every frame, make the circle 90% of its previous size (scale down)
    circles[i].scale(0.85);
  }
}
