// RUJISARAN MALAN //
function quickestPath({ portals }) {
    let fullBoard = new Array(201).fill(0);
    //console.log("🚀 ~ quickestPath ~ fullBoard:", fullBoard)
    for (let i = 0; i < portals.length; i++){
        const p = portals[i];
        fullBoard[p.location] = p.destination;
    }

    let walked = Array(201).fill(false);
    let q = [];
    q.push({pos:1 , cnt: 0});
    walked[1] = true;

    while (q.length){
        let cur = q.shift();
        console.log("🚀 ~ quickestPath ~ cur:", cur)
        if (cur.pos === 200){
            return cur.cnt
        }
        for (let step = 1; step <=11; step++){
            let next = cur.pos + step;
            if (next > 200){
                continue
            }
            while (fullBoard[next]){
                next = fullBoard[next]
            }
            if (walked[next]) continue;
                walked[next] = true;
                q.push({pos:next, cnt: cur.cnt+ 1});
            }
    }
    return -9999
}
const portals = [
  { location: 55, destination: 38 },
  { location: 14, destination: 35 },
  { location: 91, destination: 48 },
  { location: 39, destination: 89 },
  { location: 31, destination: 70 },
  { location: 30, destination: 8 },
  { location: 63, destination: 83 },
  { location: 3, destination: 39 },
  { location: 71, destination: 93 },
  { location: 44, destination: 65 },
  { location: 96, destination: 86 },
  { location: 79, destination: 42 },
  { location: 90, destination: 119 },
  { location: 120, destination: 151 },
  { location: 150, destination: 179 },
  { location: 180, destination: 200 }
];

console.log(quickestPath({ portals }));