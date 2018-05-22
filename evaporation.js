function evaporator(content, evap_per_day, threshold){ 
  let time = 0;
  let cont= 100;
  while(cont>=threshold){
  cont = cont -  cont * (evap_per_day/100);
  time++
  }
  return time;
}