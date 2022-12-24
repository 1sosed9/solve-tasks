import { convert,obj,extensionValues,obj1,task1Obj } from "./modules/task1Module.mjs";
import { sortData, objData, objCondition } from "./modules/task2Module.mjs";
import { findPoint, anyPoint, distance } from "./modules/task3Module.mjs";
// Task1.
console.log(convert(obj));
// Розширення:
extensionValues.call(task1Obj, "km", 1000000);
console.log(convert(obj1));

// Task2.
console.log(sortData(objData, objCondition));

// Task3.
console.log(distance(findPoint, anyPoint));
console.log(findPoint);
