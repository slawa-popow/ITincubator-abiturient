import { print } from "./print";
import type { LngLat} from "@yandex/ymaps3-types";

// import { User } from "./User";
// import { Company } from "./Company";
const rootMap = document.getElementById('Mmap') as HTMLElement;


ymaps3.ready.then(() => {
const map = new ymaps3.YMap(rootMap, {
    location: {
      zoom: 10,
      center: [37.588144, 55.733842]
    }
  });
  const layer = new ymaps3.YMapDefaultSchemeLayer({}); // слой обязательно
  map.addChild(layer);

});



