# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true

pin_all_from "app/javascript/controllers", under: "controllers"
pin "leaflet", to: "https://ga.jspm.io/npm:leaflet@1.8.0/dist/leaflet-src.js"
pin "leaflet-geosearch", to: "https://ga.jspm.io/npm:leaflet-geosearch@3.6.1/dist/geosearch.module.js"
