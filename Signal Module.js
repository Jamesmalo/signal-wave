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
     for(var=0;a<numberOfPoints; a++)
      let tempx = transformedPoints[a].getX();
      let tempy = transformedpoints[a].getY();
      tempx += value;
      transformedPoints[a] = new Point(tempx,tempy);
    }
  function shiftY(value){
      for(var=0;a<numberOfPoints; a++)
       let tempx = transformedPoints[a].getX();
       let tempy = transformedpoints[a].getY();
       tempy += value;
       transformedPoints[a] = new Point(tempx,tempy);
  }
  function stretchX(value){
      for(var=0;a<numberOfPoints; a++)

  }
  function stretchY(value){

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
