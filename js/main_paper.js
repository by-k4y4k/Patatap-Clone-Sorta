function onKeyDown(event) {
  var maxPoint = new Point(view.size.width, view.size.height);
  var ranPoint = Point.random();
  var point = maxPoint * ranPoint;

  new Path.Circle(new Point(point), 10).fillColor = "orange";
}
