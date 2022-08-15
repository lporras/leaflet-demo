import { Controller } from "@hotwired/stimulus"
import L from "leaflet"
import * as GeoSearch from "leaflet-geosearch"

export default class extends Controller {
  static targets = ["container", "address", "latitude", "longitude"]

  containerTargetConnected() {
    let defaultLocation = [51.505, -0.09]

    if (this.latitudeTarget.value.length > 0 && this.longitudeTarget.value.length > 0) {
      defaultLocation = [this.latitudeTarget.value, this.longitudeTarget.value]
    }

    this.map = L.map(this.containerTarget).setView(defaultLocation, 18);
    const provider = new GeoSearch.OpenStreetMapProvider();

    L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    const search = new GeoSearch.GeoSearchControl({
      style: 'bar',
      provider: provider,
      marker: {
        draggable: true,
      },
    });

    this.map.addControl(search);

    this.map.on('geosearch/showlocation', (event) => {
      let latLng = event.marker.getLatLng()

      this.addressTarget.value = event.location.label
      this.latitudeTarget.value = latLng.lat
      this.longitudeTarget.value = latLng.lng
    });

    this.map.on('geosearch/marker/dragend', (event) => {
      this.latitudeTarget.value = event.location.lat
      this.longitudeTarget.value = event.location.lng
    })

    if (this.addressTarget.value.length > 0) {
      let query = { query: this.addressTarget.value }

      provider.search(query).then((result) => {
        search.showResult(result[0], query)
      });

      search.searchElement.input.value = this.addressTarget.value
    }
  }

  disconnect(){
    this.map.remove()
  }
}