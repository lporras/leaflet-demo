// import { Controller } from "@hotwired/stimulus"
// import L from "leaflet"
// import * as GeoSearch from "leaflet-geosearch"

// export default class extends Controller {
//   static targets = ["container"]

//   containerTargetConnected() {
//     this.map = L.map(this.containerTarget).setView([51.505, -0.09], 13);

//     L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

//     const search = new GeoSearch.GeoSearchControl({
//       style: 'bar',
//       provider: new GeoSearch.OpenStreetMapProvider(),
//     });

//     this.map.addControl(search);
//   }

//   disconnect(){
//     this.map.remove()
//   }
// }

export default class extends Controller {
  connect() {
    console.log("map controller")
  }
}