const task2 = {
  sortData: function (obj, objCond) {
    let resObjNotSort = { result: [] };
    let { include, sort_by } = objCond.condition;
    let includesValues = [];

    for (let i = 0; i < include.length; i++) {
      for (const key in include[i]) {
        includesValues.push(include[i][key]);
      }
    }

    for (const key in obj) {
      for (let i = 0; i < obj[key].length; i++) {
        for (const key1 in obj[key][i]) {
          if (includesValues.includes(obj[key][i][key1])) {
            resObjNotSort["result"].push(obj[key][i]);
          }
        }
      }
    }

    let sort_byArr = [];
    for (let i = 0; i < resObjNotSort["result"].length; i++) {
      for (let k = 0; k < sort_by.length; k++) {
        console.log();
        if (resObjNotSort["result"][i].hasOwnProperty(sort_by[k])) {
          sort_byArr.push(resObjNotSort["result"][i][sort_by[k]]);
        }
      }
    }

    sort_byArr = sort_byArr.sort();
    let resultFinish = { result: [] };
    for (let k = 0; k < sort_byArr.length; k++) {
      for (let i = 0; i < resObjNotSort.result.length; i++) {
        if (resObjNotSort.result[i][sort_by] === sort_byArr[k]) {
          resultFinish["result"].push(resObjNotSort.result[i]);
        }
      }
    }
    return resultFinish;
  },

  objData: {
    data: [
      { name: "John", email: "john2@mail.com" },
      { name: "John", email: "john1@mail.com" },
      { name: "Jane", email: "jane@mail.com" },
    ],
  },

  objCondition: {
    condition: { include: [{ name: "John" }], sort_by: ["email"] },
  },

  
};

export const sortData = task2.sortData;
export const objData = task2.objData;
export const objCondition = task2.objCondition;
