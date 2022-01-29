const getTempInF = (tempInK) => {
  return (tempInK - 273.15) * 1.8 + 32;
}

export default getTempInF;