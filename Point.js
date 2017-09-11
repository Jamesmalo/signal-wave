const Point = require('./Signal Module')

const Point = function(xcor,ycor){
  let x = xcor;
  let y = ycor;

  function getX(){return x;}
  function getY(){return y;}

  function magnitude(){
    let dist = Math.sqrt(x*x+y*y);
      return dist;
  }

  function distanceTo(p2){
    let xsquared = (x-p2.getX())*(x-p2.getX());
    let ysquared = (x-p2.getY())*(x-p2.getY());
  }

  function direction(){
    return Math.atan(y/x)*180/Math.PI;
  }

  return(getX,getY,magnitude,distanceTo,direction)
}

Module.exports = Point;
