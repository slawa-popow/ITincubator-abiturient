
import { YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer } from "@yandex/ymaps3-types";
import { Mappable } from "./Mappable";



export class CustomMap {
    private yandexMap: YMap | null = null;
    private layer: YMapDefaultSchemeLayer | null = null;
    
    constructor(private rootHTMLcontainer: HTMLElement) {
        ymaps3.ready.then(() => {
            this.yandexMap = new ymaps3.YMap(this.rootHTMLcontainer, {
                location: {
                  zoom: 1,
                  center: [0, 0]
                }
              });
              this.layer = new ymaps3.YMapDefaultSchemeLayer({}); // слой обязательно
              this.yandexMap.addChild(this.layer);
              this.yandexMap?.addChild(new ymaps3.YMapDefaultFeaturesLayer({}));
            });
    }

    public addMarker(mappable: Mappable): void {
      this.addNewMarkerLayer(mappable);
    }

    private addNewMarkerLayer( mappable: Mappable): void {
      // так импорт типов из пакетов => промис
      ymaps3.import('@yandex/ymaps3-markers@0.0.1').then(({YMapDefaultMarker}) => {
        const [lat, lng] = mappable.coords;
        const marker = new YMapDefaultMarker({
          id: this.getID(`id-${mappable?.name || mappable?.companyName}`),
          title: mappable.name,
          coordinates: [lat, lng],
          color: mappable.colorLabel,
          subtitle: (mappable.companyName) ? `company: ${mappable.companyName}` : '',
          draggable: true,
          mapFollowsOnDrag: true,
          onClick: mappable.clickHandler  // this это marker
        });
        this.yandexMap?.addChild(marker); 
      }); 
    } 

    private getID(str: string): string {
      return str.split(' ').map(v => {
        return v[0].toUpperCase() + v.slice(1);
      }).join('-');
    }


}