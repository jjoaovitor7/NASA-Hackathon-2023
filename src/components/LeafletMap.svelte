<script type="js">
  // @ts-nocheck

  import { onMount, onDestroy } from "svelte";
  import { RingLoader } from "svelte-loading-spinners";

  let map;
  export let data;

  onMount(async () => {

    const L = await import("leaflet");
    const Lmaker = await import("leaflet.markercluster");
    (await import("svelte-loading-spinners")).RingLoader;

    map = L.map("leaflet-map");
    map.setView([-10.9092, -37.0745], 13.4);

    L.Map.addInitHook(function () {
      if (L?.Map?.container !== undefined) {
        L.Map.container._L_map = map;
      }
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const LeafIcon = L.Icon.extend({
      options: {
        iconSize: [16, 28],
        iconAnchor: [16, 28],
        shadowAnchor: [16, 28],
        popupAnchor: [-8, -40],
      },
    });

    const icon = new LeafIcon({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });


    let markers = new Lmaker.MarkerClusterGroup();
    data.forEach((item, idx) => {
      [
        "Site ID",
        "GEO/Terra/Aqua Satellite Match Table",
        "CALIPSO Satellite Match Table",
        "Ground Image Up",
        "Ground Image Down",
        "Ground Image North",
        "Ground Image South",
        "Ground Image East",
        "Ground Image West",
        "Observation Id",
        "Observation Elevation",
        "Altocumulus",
        "Stratocumulus",
        "Cumulonimbus",
        "Fog",
        "Smoke",
        "Haze",
        "Volcanic Ash",
        "Dust",
        "Sand",
        "Spray",
        "Heavy Snow",
        "Blowing Snow",
        "Surface Snow/Ice",
        "Cirrocumulus",
        "GEO Snow",
        "GEO Low Ice",
        "GEO Longitude",
        "GEO Latitude",
        "Is GLOBE Trained",
        "is Citizen Science",
        "Terra Satellite",
        "Terra Longitude",
        "Terra Latitude",
        "Terra Date",
        "Terra Time",
        "Terra Total Cloud Cover",
        "Terra Low Cloud Altitude",
        "Terra Low Cloud Opt",
        "Terra Low Cloud Cover",
        "Terra Low Cloud Phase",
        "Terra Low Cloud Temp (K)",
        "Terra Mid Cloud Altitude",
        "Terra Mid Cloud Opt",
        "Terra Mid Cloud Cover",
        "Terra Mid Cloud Phase",
        "Terra Mid Cloud Temp (K)",
        "Terra High Cloud Altitude",
        "Terra High Cloud Opt",
        "Terra High Cloud Cover",
        "Terra High Cloud Phase",
        "Terra High Cloud Temp (K)",
        "Terra Vzen",
        "Terra Szen",
        "Terra Wind",
        "Terra Snow",
        "Terra Ocean",
        "Aqua Satellite",
        "Aqua Longitude",
        "Aqua Latitude",
        "Aqua Date",
        "Aqua Time",
        "Aqua Total_Cloud_Cover",
        "Aqua Low Cloud Altitude",
        "Aqua Low Cloud Opt",
        "Aqua Low Cloud Cover",
        "Aqua Low Cloud Phase",
        "Aqua Low Cloud Temp (K)",
        "Aqua Mid Cloud Altitude",
        "Aqua Mid Cloud Opt",
        "Aqua Mid Cloud Cover",
        "Aqua Mid Cloud Phase",
        "Aqua Mid Cloud Temp (K)",
        "Aqua High Cloud Altitude",
        "Aqua High Cloud Opt",
        "Aqua High Cloud Cover",
        "Aqua High Cloud Phase",
        "Aqua High Cloud Temp (K)",
        "Aqua Sat Vzen",
        "Aqua Sat Szen",
        "Aqua Wind",
        "Aqua Snow",
        "Aqua Ocean",
      ].forEach((e) => delete item[e]);
      const keys = Object.keys(item);
      const popup = L.popup().setContent(
        keys
          .map((k) => `<p>${k}: ${item[k]}</p>`)
          .toString()
          .replaceAll(",", "")
      );
      L.marker([
        parseFloat(item["Observation Latitude"]),
        parseFloat(item["Observation Longitude"]),
      ], {icon: icon})
        .addTo(markers)
        .bindPopup(popup);
      markers.addTo(map);
    });

    document.getElementById("loader").remove();
    document.getElementById("leaflet-map").style.filter = "unset";

    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    map.dragging.disable();
    map.removeControl(map.zoomControl);
  });

  onDestroy(async () => {
    if (map) {
      console.log("Unloading Leaflet map.");
      map.remove();
    }
  });
</script>

<section class="position-relative">
  <div id="loader" class="center position-absolute">
    <RingLoader color="#000" size={128} />
  </div>

  <div class="d-flex justify-content-end">
    <button
      id="btn-resetview"
      class="my-2"
      on:click={map.setView([-10.9092, -37.0745], 13.4)}>Resetar visão</button
    >
  </div>

  <div id="leaflet-map">
    <div bind:this={map} let:data />
  </div>
</section>

<style>
  @import "leaflet/dist/leaflet.css";
  @import "leaflet.markercluster/dist/MarkerCluster.css";
  @import "leaflet.markercluster/dist/MarkerCluster.Default.css";

  #leaflet-map {
    min-height: 1024px;
    border-radius: 2rem;
    filter: blur(4px);
    transition: all 1.6s;
  }

  #btn-resetview {
    border: none;
    padding: 4px 16px;
    color: #000;
    font-size: 0.8rem;
    border-radius: 0.4rem;
    transition: all 256ms;
    transform-origin: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      inset 0px -2px 4px rgba(0, 0, 0, 0.25);
  }

  #btn-resetview:hover {
    cursor: pointer;
    transform: scale(0.975);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
</style>
