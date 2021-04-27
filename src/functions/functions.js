export const hoursToFloat = (value, planHourStart = 0) => {
  let temp;
  temp = value.split(":");
  temp[0] = temp[0] - planHourStart;
  temp[1] =
    temp[1] / 60 === 0 ? 0 : parseFloat((temp[1] / 60).toString().slice(1));
  temp = temp[0] + temp[1];
  return temp;
};

