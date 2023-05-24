import { print } from "./print";
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";


const rootMap = document.getElementById('Mmap') as HTMLElement;
const customMap = new CustomMap(rootMap);


customMap.addUserMarker(new User());   


