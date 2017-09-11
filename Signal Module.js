let Signal = function(){
  let numberOfPoints = array.length;
  let points = array;
  let transformedPoints = [p1,p2,p3,p4,p5,p6]
  let range;
  let period;

  function getRange(){return range;}
  function getPeriod(){return period;}
  function getPointArray(){return points;}

  function shiftX(value){
    transformedPoints.getX(p1)
  }
  function shiftY(value){

  }
  function stretchX(value){

  }
  function stretchY(value){

  }
  function transformation(){
    return transformedPoints;
  }
  function outputOf(xvalue){

  }
  function calculateSpan(){

  }
  return{shiftX,shiftY,stretchY,stretchX,transformation,outputOf}
}
