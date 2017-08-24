
let Epoch1 = 0
let Throttle = (time) => {
  var Epoch2 = Date.now()
  //Calculating Throttle Time 
  if (Epoch2 - Epoch1 > time) {
    ResetEpoch()
    return true
  }
  else {
    return false
  }
}

let ResetEpoch = () => {
  Epoch1 = Date.now()
}

export { Throttle }