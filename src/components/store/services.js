import { observable, action, makeObservable, runInAction } from 'mobx';
import axios from 'axios';


class Services {
  data = [];
  constructor() {
    makeObservable(this, {
      data: observable,
      addService: action,
      fetchData: action
    });
    this.initialize();
  }

  async initialize() {
    await this.fetchData();
    console.log(this.data);

    if (this.data.length === 0) {
      const service = {
        name: "meeting with the manager",
        description: "פגישת ייעוץ פרטנית בקליניקה",
        price: 500,
        duration: 60,
      };
      this.addService(service);
    }
  }

  fetchData() {
    return axios.get("http://localhost:8787/services").then((res) => {
      runInAction(() => {
        this.data = res.data;
      });
    });
  }

  addService = action((service) => {
    try {
      const autoId = this.data.length > 0 ? String(Number(this.data[this.data.length - 1].id) + 1) : "1";
      const serviceWithId = { ...service, id: autoId };
      const res = axios.post("http://localhost:8787/service", serviceWithId);

      if (res.status ===200) {
        runInAction(() => {
          this.data.push(serviceWithId);
          console.log(`runInAction ${serviceWithId.id}`);
        });
      } else {
        console.error(`Failed to add service. Status code: ${res.status}`);
      }
    } catch (error) {
      console.error("Error adding service:", error);
    }
  });
}

export default new Services();