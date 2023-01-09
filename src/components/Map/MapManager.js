import { loadModules } from "esri-loader";

export default class MapManager {
  constructor({ container }) {
    this.view = null;
    this.initEventHandlers();
    this.initView();
    this.container = container;
  }

  initEventHandlers = () => {};

  initView = async () => {
    try {
      if (!this.view) {
        const [Map, MapView] = await loadModules([
          "esri/Map",
          "esri/views/MapView",
        ]);

        this.view = new MapView({
          container: this.container,
          map: new Map({
            basemap: "streets",
          }),
        });
        await this.view.when();
      }
    } catch (err) {
      console.warn(err);
    }
  };
}
