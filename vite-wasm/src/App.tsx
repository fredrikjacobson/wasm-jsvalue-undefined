import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import * as wasm from "point-cloud-tools";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let ego = {
      1: {
        position: {
          x: 664464.4382532013,
          y: 3997792.1371508962,
          z: 616.6081586747046,
        },
        rotation: {
          w: 0.7033385942960748,
          x: -0.00031942627055655886,
          y: 0.0029360106958474094,
          z: 0.710848858465478,
        },
      },
      2: {
        position: {
          x: 664464.4383952287,
          y: 3997792.1371132843,
          z: 616.6083381483515,
        },
        rotation: {
          w: 0.7033606558911168,
          x: -0.00027389275397883046,
          y: 0.002999130762906505,
          z: 0.7108267847667562,
        },
      },
      3: {
        position: {
          x: 664464.438400596,
          y: 3997792.1370826857,
          z: 616.6084279742968,
        },
        rotation: {
          w: 0.7033598835976481,
          x: -0.00027727216139158614,
          y: 0.0030150107621134824,
          z: 0.7108274804590462,
        },
      },
      4: {
        position: {
          x: 664464.4382797537,
          y: 3997792.137034125,
          z: 616.6082659274642,
        },
        rotation: {
          w: 0.7033417837058709,
          x: -0.0003272256550539068,
          y: 0.0030080122264582987,
          z: 0.7108453981557876,
        },
      },
      5: {
        position: {
          x: 664464.4383871803,
          y: 3997792.137009478,
          z: 616.6083896612672,
        },
        rotation: {
          w: 0.7033408375657084,
          x: -0.0002798886867786488,
          y: 0.0030282445899812954,
          z: 0.7108462686188864,
        },
      },
      6: {
        position: {
          x: 664464.438212848,
          y: 3997792.1369671114,
          z: 616.6081938524286,
        },
        rotation: {
          w: 0.7033697969842714,
          x: -0.0003103431599728808,
          y: 0.003035621420400443,
          z: 0.7108175696900155,
        },
      },
      7: {
        position: {
          x: 664464.4382635445,
          y: 3997792.137034636,
          z: 616.6082899413734,
        },
        rotation: {
          w: 0.7033761004940549,
          x: -0.00036546593541229074,
          y: 0.0030541911292207326,
          z: 0.7108112264201893,
        },
      },
      8: {
        position: {
          x: 664464.4383536555,
          y: 3997792.137337623,
          z: 616.6084221055455,
        },
        rotation: {
          w: 0.703353584080216,
          x: -0.00032082734330293196,
          y: 0.003084152527908353,
          z: 0.7108333987894174,
        },
      },
      9: {
        position: {
          x: 664464.4383515166,
          y: 3997792.13715814,
          z: 616.6084723625568,
        },
        rotation: {
          w: 0.7033527041873843,
          x: -0.0002579582889803497,
          y: 0.0030157083624690914,
          z: 0.7108345886863467,
        },
      },
      10: {
        position: {
          x: 664464.4383952048,
          y: 3997792.1373302364,
          z: 616.6085566856847,
        },
        rotation: {
          w: 0.7033757595059658,
          x: -0.00023680014127593153,
          y: 0.003006459249935349,
          z: 0.7108118218402656,
        },
      },
      11: {
        position: {
          x: 664464.4383787658,
          y: 3997792.137167458,
          z: 616.6086020716141,
        },
        rotation: {
          w: 0.7033583593815614,
          x: -0.00019189338261968352,
          y: 0.0030393411459006545,
          z: 0.7108289132206194,
        },
      },
      12: {
        position: {
          x: 664464.438241538,
          y: 3997792.137144141,
          z: 616.6083518517972,
        },
        rotation: {
          w: 0.7033324696979085,
          x: -0.0002539274549542439,
          y: 0.0029899618436271536,
          z: 0.710854719839196,
        },
      },
      13: {
        position: {
          x: 664464.4383910599,
          y: 3997792.1373172686,
          z: 616.6084204181218,
        },
        rotation: {
          w: 0.7033740634006028,
          x: -0.00025385168866959025,
          y: 0.002988258562017556,
          z: 0.7108135710616473,
        },
      },
      14: {
        position: {
          x: 664464.4384928327,
          y: 3997792.1372090876,
          z: 616.6085116642116,
        },
        rotation: {
          w: 0.7033683787886833,
          x: -0.00024821216942031175,
          y: 0.0029172836652718143,
          z: 0.7108194929564852,
        },
      },
      15: {
        position: {
          x: 664464.438556958,
          y: 3997792.1373272664,
          z: 616.6085807719319,
        },
        rotation: {
          w: 0.7033807892443089,
          x: -0.00027147379689435416,
          y: 0.002849191344854802,
          z: 0.7108074800765051,
        },
      },
      16: {
        position: {
          x: 664464.4384263462,
          y: 3997792.1373044546,
          z: 616.608510416584,
        },
        rotation: {
          w: 0.7033336790859914,
          x: -0.00027612098732303467,
          y: 0.002842670070780957,
          z: 0.7108541192448931,
        },
      },
      17: {
        position: {
          x: 664464.4384083941,
          y: 3997792.137177263,
          z: 616.6084601963051,
        },
        rotation: {
          w: 0.7033547035109955,
          x: -0.00032139416989399126,
          y: 0.0028095907602336463,
          z: 0.7108334291200064,
        },
      },
      18: {
        position: {
          x: 664464.4383791317,
          y: 3997792.137041715,
          z: 616.6085082630794,
        },
        rotation: {
          w: 0.7033743214772412,
          x: -0.0003383519055564722,
          y: 0.002823063441371956,
          z: 0.7108139557698797,
        },
      },
      19: {
        position: {
          x: 664464.4381377359,
          y: 3997792.13698616,
          z: 616.6086090453258,
        },
        rotation: {
          w: 0.7033376521606239,
          x: -0.00031788709772716245,
          y: 0.002907362582729385,
          z: 0.7108499090833359,
        },
      },
      20: {
        position: {
          x: 664464.4381554545,
          y: 3997792.1369161964,
          z: 616.6087189318539,
        },
        rotation: {
          w: 0.7033383600622463,
          x: -0.0002875836336815824,
          y: 0.0029678440540086993,
          z: 0.710848971626375,
        },
      },
      21: {
        position: {
          x: 664464.4380455433,
          y: 3997792.1373018743,
          z: 616.6086139738593,
        },
        rotation: {
          w: 0.7033381320295187,
          x: -0.0003125598787916063,
          y: 0.002995874624347723,
          z: 0.7108490691242303,
        },
      },
      22: {
        position: {
          x: 664464.4383015858,
          y: 3997792.1372828325,
          z: 616.6087613317079,
        },
        rotation: {
          w: 0.7033616070960416,
          x: -0.00028820331077620675,
          y: 0.002988629719991076,
          z: 0.7108258821220018,
        },
      },
      23: {
        position: {
          x: 664464.4384455645,
          y: 3997792.1374223023,
          z: 616.6088877890691,
        },
        rotation: {
          w: 0.7033528727319387,
          x: -0.00031330437680321567,
          y: 0.0030589483101040684,
          z: 0.710834214916061,
        },
      },
      24: {
        position: {
          x: 664464.4383272124,
          y: 3997792.1373264524,
          z: 616.608767047499,
        },
        rotation: {
          w: 0.7033488219783172,
          x: -0.0003070069746174428,
          y: 0.003091594375823425,
          z: 0.7108380845260378,
        },
      },
      25: {
        position: {
          x: 664464.4383503825,
          y: 3997792.1372314547,
          z: 616.6086479998221,
        },
        rotation: {
          w: 0.7033496723774904,
          x: -0.0003693161909134043,
          y: 0.003086486542438122,
          z: 0.710837235640376,
        },
      },
      26: {
        position: {
          x: 664464.4384595836,
          y: 3997792.1371218776,
          z: 616.6087799909045,
        },
        rotation: {
          w: 0.7033657421539221,
          x: -0.000339975535633629,
          y: 0.0030635722992353033,
          z: 0.7108214485408169,
        },
      },
      27: {
        position: {
          x: 664464.4382566635,
          y: 3997792.1371451463,
          z: 616.608721460438,
        },
        rotation: {
          w: 0.7033666261241546,
          x: -0.0002986838013563393,
          y: 0.003026172760251986,
          z: 0.7108207525959942,
        },
      },
      28: {
        position: {
          x: 664464.4384683657,
          y: 3997792.137351602,
          z: 616.6088695531896,
        },
        rotation: {
          w: 0.7033296937591927,
          x: -0.00028698037354601703,
          y: 0.002987602668245455,
          z: 0.7108574637359885,
        },
      },
      29: {
        position: {
          x: 664464.4383859445,
          y: 3997792.1371907676,
          z: 616.6087334127611,
        },
        rotation: {
          w: 0.703363714515238,
          x: -0.0003182308715540084,
          y: 0.0030199560989330634,
          z: 0.7108236516166296,
        },
      },
      30: {
        position: {
          x: 664464.4383530748,
          y: 3997792.1373231127,
          z: 616.6087085033978,
        },
        rotation: {
          w: 0.7033614438048125,
          x: -0.0002979972750505978,
          y: 0.0030200129683968313,
          z: 0.7108259070180999,
        },
      },
      31: {
        position: {
          x: 664464.4383909054,
          y: 3997792.1372952764,
          z: 616.6087545139113,
        },
        rotation: {
          w: 0.7033271995812741,
          x: -0.0002388201864688823,
          y: 0.0030545825191023307,
          z: 0.7108596646453612,
        },
      },
      32: {
        position: {
          x: 664464.4383917233,
          y: 3997792.1372433435,
          z: 616.6086965581926,
        },
        rotation: {
          w: 0.7033563631528463,
          x: -0.00020394327616457327,
          y: 0.0030231385691091264,
          z: 0.7108309542027087,
        },
      },
      33: {
        position: {
          x: 664464.4384533862,
          y: 3997792.1373825693,
          z: 616.6087515394843,
        },
        rotation: {
          w: 0.7033444813755363,
          x: -0.00018896205861915566,
          y: 0.003056962912319888,
          z: 0.7108425703274046,
        },
      },
      34: {
        position: {
          x: 664464.4385148581,
          y: 3997792.137432767,
          z: 616.6088282175635,
        },
        rotation: {
          w: 0.7033484778996225,
          x: -0.00015931468967001782,
          y: 0.003004305283874074,
          z: 0.7108388477038065,
        },
      },
      35: {
        position: {
          x: 664464.4382643421,
          y: 3997792.154678949,
          z: 616.6086145311608,
        },
        rotation: {
          w: 0.7033640432376901,
          x: 0.002186056231574254,
          y: 0.00041555244782408383,
          z: 0.7108263298124545,
        },
      },
      36: {
        position: {
          x: 664464.4382481724,
          y: 3997792.308832175,
          z: 616.6092143918407,
        },
        rotation: {
          w: 0.7034443287543561,
          x: 0.0034377470717869237,
          y: -0.0008849311853313417,
          z: 0.7107414967027049,
        },
      },
      37: {
        position: {
          x: 664464.4433237815,
          y: 3997792.762129865,
          z: 616.610364502023,
        },
        rotation: {
          w: 0.7037323723021544,
          x: 0.003381463239372126,
          y: 0.0002594773769127047,
          z: 0.7104570687605506,
        },
      },
      38: {
        position: {
          x: 664464.4520614314,
          y: 3997793.640746544,
          z: 616.6088542653683,
        },
        rotation: {
          w: 0.7041597907721854,
          x: 0.0025596966464849365,
          y: 0.0015599280756041552,
          z: 0.7100352129557725,
        },
      },
      39: {
        position: {
          x: 664464.4559922443,
          y: 3997794.9624558324,
          z: 616.6058669576721,
        },
        rotation: {
          w: 0.7046913753800796,
          x: 0.0012040284735943606,
          y: 0.0025815693172124322,
          z: 0.7095082460974128,
        },
      },
      40: {
        position: {
          x: 664464.4588707959,
          y: 3997796.698826827,
          z: 616.5976319327364,
        },
        rotation: {
          w: 0.7053127641877612,
          x: -0.0013228663317437009,
          y: 0.002102100213876602,
          z: 0.7088919070444935,
        },
      },
    };
    const res = wasm.transform_feature(
      JSON.stringify({
        timestamp: 0,
        geometry: {
          coordinates: [1.767956632380838, 7.045672484633968, 0],
          scale: [4.67567162443051, 7.045672484633968, 0],
          rotation: [0, 0, 0, 1],
          type: "Cube3D",
        },
      }),
      JSON.stringify([
        { frameId: "1", metadata: {}, relativeTimestamp: 0 },
        { frameId: "2", metadata: {}, relativeTimestamp: 499 },
        { frameId: "3", metadata: {}, relativeTimestamp: 999 },
        { frameId: "4", metadata: {}, relativeTimestamp: 1499 },
        { frameId: "5", metadata: {}, relativeTimestamp: 1999 },
        { frameId: "6", metadata: {}, relativeTimestamp: 2500 },
        { frameId: "7", metadata: {}, relativeTimestamp: 3000 },
        { frameId: "8", metadata: {}, relativeTimestamp: 3499 },
        { frameId: "9", metadata: {}, relativeTimestamp: 3999 },
        { frameId: "10", metadata: {}, relativeTimestamp: 4499 },
        { frameId: "11", metadata: {}, relativeTimestamp: 4999 },
        { frameId: "12", metadata: {}, relativeTimestamp: 5500 },
        { frameId: "13", metadata: {}, relativeTimestamp: 5999 },
        { frameId: "14", metadata: {}, relativeTimestamp: 6499 },
        { frameId: "15", metadata: {}, relativeTimestamp: 7000 },
        { frameId: "16", metadata: {}, relativeTimestamp: 7500 },
        { frameId: "17", metadata: {}, relativeTimestamp: 7999 },
        { frameId: "18", metadata: {}, relativeTimestamp: 8499 },
        { frameId: "19", metadata: {}, relativeTimestamp: 8999 },
        { frameId: "20", metadata: {}, relativeTimestamp: 9500 },
        { frameId: "21", metadata: {}, relativeTimestamp: 9999 },
        { frameId: "22", metadata: {}, relativeTimestamp: 10499 },
        { frameId: "23", metadata: {}, relativeTimestamp: 10999 },
        { frameId: "24", metadata: {}, relativeTimestamp: 11500 },
        { frameId: "25", metadata: {}, relativeTimestamp: 12000 },
        { frameId: "26", metadata: {}, relativeTimestamp: 12499 },
        { frameId: "27", metadata: {}, relativeTimestamp: 12999 },
        { frameId: "28", metadata: {}, relativeTimestamp: 13499 },
        { frameId: "29", metadata: {}, relativeTimestamp: 14000 },
        { frameId: "30", metadata: {}, relativeTimestamp: 14500 },
        { frameId: "31", metadata: {}, relativeTimestamp: 14999 },
        { frameId: "32", metadata: {}, relativeTimestamp: 15499 },
        { frameId: "33", metadata: {}, relativeTimestamp: 15999 },
        { frameId: "34", metadata: {}, relativeTimestamp: 16500 },
        { frameId: "35", metadata: {}, relativeTimestamp: 17000 },
        { frameId: "36", metadata: {}, relativeTimestamp: 17499 },
        { frameId: "37", metadata: {}, relativeTimestamp: 17999 },
        { frameId: "38", metadata: {}, relativeTimestamp: 18499 },
        { frameId: "39", metadata: {}, relativeTimestamp: 18999 },
        { frameId: "40", metadata: {}, relativeTimestamp: 19500 },
      ]),
      JSON.stringify(ego)
    );

    console.log(res);
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
