
import { YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer } from "@yandex/ymaps3-types";

import { User } from "./User";
import { Company } from "./Company";


export class CustomMap {
    private yandexMap: YMap | null = null;
    private layer: YMapDefaultSchemeLayer | null = null;
    private markerLayer: YMapDefaultFeaturesLayer | null = null;
    

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
              
            });
    }

    public addUserMarker(user: User): void {
      this.addNewMarkerLayer({name: user.name, location: user.coords});
    }

    public addCompanyMarker(company: Company): void {

    }

    private addNewMarkerLayer( obj: {name: string; location: number[]}): void{
      // так импорт типов из пакетов => промис
      ymaps3.import('@yandex/ymaps3-markers@0.0.1').then(({YMapDefaultMarker}) => {
          this.markerLayer = new ymaps3.YMapDefaultFeaturesLayer({});
          this.yandexMap?.addChild(this.markerLayer);
          const [lat, lng] = obj.location;
          this.yandexMap?.setLocation({zoom: 2, center: [lng, lat]});
          const marker = new YMapDefaultMarker({
            title: obj.name,
            coordinates: [lat, lng]
          });
          this.yandexMap?.addChild(marker); 
      }); 
          
       
    } 


}