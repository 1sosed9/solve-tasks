// Емуляція прийняття даних у форматі JSON.
const objWithData = { distance: { unit: "m", value: 0.5 }, convert_to: "ft" };
const str = JSON.stringify(objWithData);
const clone = JSON.parse(str);

const task1 = {
  obj: {
    distance: { unit: "m", value: 0.5 },
    convert_to: "ft",
  },

  units: { m: 1000, cm: 10, in: 25.4, ft: 304.8 },

  // Створення додатку.
  convert: function (obj) {
    // Створюємо об'єкт, де значенням буде відношення мм до 1 вкзаної одиниці вимірювання і працюємо з цими значеннями.

    let { convert_to } = obj;
    let { unit, value } = obj.distance;
    let nameOfunits = Object.keys(task1.units);

    //   Перевіряємо, чи працює наш додаток з даними, які вказав юзер.
    if (nameOfunits.includes(unit) && nameOfunits.includes(convert_to)) {
      let valueInMm = value * task1.units[unit];
      let resultValue = valueInMm / task1.units[convert_to];
      resultValue = resultValue.toFixed(2);
      return { unit: convert_to, value: resultValue };
    } else {
      return "This unit is not convertible";
    }
  },

  // Створюємо метод, для розширення функціоналу.
  extensionValues: function (nameValue, numOfMm) {
    this.units[nameValue] = numOfMm;
  },

  // Об'єкт для перевірки працездатності розширення.
  obj1: {
    distance: { unit: "km", value: 0.5 },
    convert_to: "cm",
  },
};

export const obj = task1.obj;
export const obj1 = task1.obj1;
export const convert = task1.convert;
export const extensionValues = task1.extensionValues;
export const task1Obj = task1;
