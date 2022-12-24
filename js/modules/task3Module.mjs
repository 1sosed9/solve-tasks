const objTask3 = {
  findPoint: [6, 52, 21],

  anyPoint: [87, 16, 78],

  obj: {
    result: {
      random_point: [],
      search_points: [],
      calls: 0,
    },
  },

  distance: function (onePoint, twoPoint) {
    objTask3.obj.result.calls += 1;
    for (let i = 0; i < 100; i++) {
      let arr = [];
      for (let j = 0; j < 100; j++) {
        for (let k = 0; k < 100; k++) {
          arr[0] = i;
          arr[1] = j;
          arr[2] = k;
          objTask3.obj.result.search_points.push(arr);
          if (JSON.stringify(arr) === JSON.stringify(onePoint)) {
            for (let i = 0; i < 3; i++) {
              objTask3.obj.result.random_point.push(arr[i]);
            }
            return objTask3.obj;
          }
        }
      }
    }

    let dist = Math.sqrt(
      Math.pow(twoPoint[0] - onePoint[0], 2) +
        Math.pow(twoPoint[1] - onePoint[1], 2) +
        Math.pow(twoPoint[2] - onePoint[2], 2)
    );
    dist = Number(dist.toFixed(0));
    console.log(objTask3.obj);
  },
};

export const findPoint = objTask3.findPoint;
export const anyPoint = objTask3.anyPoint;
export const distance = objTask3.distance;
