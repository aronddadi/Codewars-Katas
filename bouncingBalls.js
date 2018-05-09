function bouncingBall(h,  bounce,  window) {
  let bounces = 0; // the bounces we're gonna submit
  if( h>0 && bounce>0  && bounce <1 && window<h){
  // If all the conditions are true we can count the bounces AND the falling that the mom is going to witness
    while (h>window){ 
      h= h*bounce;
      bounces++;
      if(h>window){
      bounces++
      }
    }
    return bounces;
  }
  else{ // otherwise goodbye
    return -1;
  }
}