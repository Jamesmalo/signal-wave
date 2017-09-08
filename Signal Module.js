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
    transformedPoints.getX()
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
