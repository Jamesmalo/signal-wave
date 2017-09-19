const Point =require("./Point.js");

const Wave = function(array){
  let numberOfPoints = array.length;
  let points = array;
  let transformedPoints = array;
  let range = calculateSpan(array,"y");
  let period = calculateSpan(array, "x");

  function getRange(){return range;}
  function getPeriod(){return period;}
  function getPointArray(){return points;}

  function shiftX(value){
     for(var a=0;a<numberOfPoints; a++){
      let tempx = transformedPoints[a].getX();
      let tempy = transformedPoints[a].getY();
      tempx += value;
      transformedPoints[a] = new Point(tempx,tempy);
        }
    }
  function shiftY(value){
      for(vara=0;a<numberOfPoints; a++){
       let tempx = transformedPoints[a].getX();
       let tempy = transformedPoints[a].getY();
       tempy += value;
       transformedPoints[a] = new Point(tempx,tempy);
   }
  }
  function stretchX(value){
      for(vara=0;a<numberOfPoints; a++){
       let tempx = transformedPoints[a].getX();
       let tempy = transformedPoints[a].getY();
       tempx += value;
       transformedPoints[a] = new Point(tempx,tempy);
   }
  }
  function stretchY(value){
      for(var a=0;a<numberOfPoints; a++){
       let tempx = transformedPoints[a].getX();
       let tempy = transformedPoints[a].getY();
       tempy += value;
       transformedPoints[a] = new Point(tempx,tempy);
   }
  }
  function transform(){
    return transformedPoints;
  }
  function outputOf(xvalue){
    let position = xvalue % period;
    return points[position].getY();
  }
  function calculateSpan(array,coor){
      let min=points[0];
      let max=points[0];

        if(coor == "x"){
         for(let a = 1;a < numberOfPoints;a++){
             if(points[a].getX() < min){
                 min = points[a].getX();
             }
             if(points[a].getX() > max){
                 max = points[a].getX();
             }
         }
      }
      return max-min;
        if(coor == "y"){
            for(let a = 1;a < numberOfPoints;a++){
                if(points[a].getY() < min){
                    min = points[a].getY();
                }
                if(points[a].getY() > max){
                    max = points[a].getY();
                }
            }
        }
     return max-min;
  }
  return{shiftX,shiftY,stretchY,stretchX,transform,outputOf,range,period}
}
module.exports = Wave;
