function fold_to($distance) {
$folded = 0;
if($distance <= 0){
  return null;
  }
  else{
    for($i = .0001; $i < $distance; $i){
      $i += $i;
      $folded +=1;
    }
  }
  return $folded;
}