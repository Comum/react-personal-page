const isItWinterTime = () => {
    let currentDate = new Date()
    let month = currentDate.getMonth()
  
    if (month === 11 || month === 0 || month === 1) {
        return true;
    }
  
    return false;
}

export {
    isItWinterTime
}