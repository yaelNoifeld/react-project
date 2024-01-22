import axios from "axios";
import { observable, action, makeObservable, runInAction } from "mobx";

class Details {
    data = null;
    constructor() {
        makeObservable(this, {
            data: observable,
            addDetails: action
        });
        this.fetchData();
        if (this.data === null) {
            const details = {
                name: "Real estate",
                address: "Hanarkisim 16 Haifa",
                phone: "04-8449023",
                owner: "Moshe choen",
                logo: "https://coding-academy.org/images/ca_logo.png",
                description: "The best real-estate",
            };
            this.addDetails(details);
        }
    }

    fetchData() {
        axios.get("http://localhost:8787/businessData").then((res) => {
            this.data = res.data;
        });
    }
    addDetails(details) {
        fetch("http://localhost:8787/businessData", {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            console.log(res);
            if(res.status===200){
                runInAction(() => {
                    this.data = details;
                })
            }
        })
    }
}
export default new Details();
