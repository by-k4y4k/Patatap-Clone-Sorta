var circles = [];

// whenever a key is pressed:
function onKeyDown() {
  // get the boundaries of the viewport (points should not exceed these)
  var maxPoint = new Point(view.size.width, view.size.height);
  // get a random point
  var ranPoint = Point.random();
  // constrain that point within the prev. defined boundaries
  var point = maxPoint * ranPoint;
  // make a circle at the random point
  var newCircle = new Path.Circle(new Point(point), 500);
  // fill the circle with orange
  newCircle.fillColor = "orange";
  // finally, push it to the array for animation
  circles.push(newCircle);
}

// do something on every frame: animate
function onFrame() {
  for (var i = 0; i < circles.length; i++) {
    // every frame, add 1 to the hue, which changes its colour
    circles[i].fillColor.hue += 1;
    // every frame, make the circle 90% of its previous size (scale down)
    circles[i].scale(0.9);
  }
}
