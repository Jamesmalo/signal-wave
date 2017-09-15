let Signal = function(){
  let numberOfPoints = array.length;
  let points = array;
  let transformedPoints = array;
  let range =calculateSpan(points,"y");
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
       let tempx = transformedPoints[a].getX();
       let tempy = transformedpoints[a].getY();
       tempx += value;
       transformedPoints[a] = new Point(tempx,tempy);
  }
  function stretchY(value){
      for(var=0;a<numberOfPoints; a++)
       let tempx = transformedPoints[a].getX();
       let tempy = transformedpoints[a].getY();
       tempy += value;
       transformedPoints[a] = new Point(tempx,tempy);
  }
  function transformation(){
    return transformedPoints;
  }
  function outputOf(xvalue){
    for(let a = 0;a < points.length;a++){
        if(point.getX()[a] == xvalue){
            return points.getY();
        }
    }
    console.log("The x value has no y value.");
  }
  function calculateSpan(array,coor){
      if(coor=="x"){
          let min=points[0].getX();
          let max=points[0];
         for(let a = 1;a < points.length;a++){
             if(points[a].getX() >max){
                 max = points[a];
             }
             if(<min){

             }
         }
      }
      if(){}
     return max-min;
  }
  return{shiftX,shiftY,stretchY,stretchX,transformation,outputOf}
}
