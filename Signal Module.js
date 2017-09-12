let Signal = function(){
  let numberOfPoints = array.length;
  let points = array;
  let transformedPoints = array;
  let range;
  let period;

  function getRange(){return range;}
  function getPeriod(){return period;}
  function getPointArray(){return points;}

  function shiftX(value){
    transformedPoints.getX()=points.getx+value;
  }
  function shiftY(value){
    transformedPoints.getY()=points.gety+value;
  }
  function stretchX(value){
    Points.getX()=points.getx*value;
  }
  function stretchY(value){
    Points.getY()=points.gety*value;
  }
  function transformation(){
    return transformedPoints;
  }
  function outputOf(xvalue){
    for(let x = 0;x < points.length;x++){
      
    }
  }
  function calculateSpan(){

  }
  return{shiftX,shiftY,stretchY,stretchX,transformation,outputOf}
}
