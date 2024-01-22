import axios from 'axios';
import { observable, action, makeObservable, runInAction } from 'mobx';
class Appointments {
    data = [ 
        {
        id: "758",
        serviceType: "123",
        dateTime: "2021-06-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
        clientName: "אבי כהן",
        clientPhone: "050-1234567",
        clientEmail: "m@m.com",
    },{
        id: "4",
        serviceType: "123",
        dateTime: "2021-06-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
        clientName: "אבי כהן",
        clientPhone: "050-1234567",
        clientEmail: "m@m.com",
    }
];
    constructor() {

        makeObservable(this, {
            data: observable,
            addMeeting: action
        })
        this.fetchData();
    }
    fetchData() {
        axios.get("http://localhost:8787/appointments").then((res) => {
            runInAction(() => {
                this.data = res.data;
            });
        })
    }
    // addMeeting = action((meeting) => {
    //     try {
    //       const autoId = this.data.length > 0 ? String(Number(this.data[this.data.length - 1].id) + 1) : "1";
    //       const meetingWithId = { ...meeting, id: autoId };
    //       const res = axios.post("http://localhost:8787/appointment", meetingWithId);
    
    //       if (res.status ===200) {
    //         runInAction(() => {
    //           this.data.push(meetingWithId);
    //           console.log(`runInAction ${meetingWithId.id}`);
    //         });
    //       } else {
    //         console.error(`Failed to add service. Status code: ${res.status}`);
    //       }
    //     } catch (error) {
    //       console.error("Error adding service:", error);
    //     }
    //   });
    addMeeting(meeting) {
        const appointmentToAdd = {
            id: this.data.length+1,
            serviceType: meeting.serviceType,
            dateTime: meeting.dateTime,
            clientName: meeting.clientName,
            clientPhone: meeting.clientPhone,
            clientEmail: meeting.clientEmail,
        }
        fetch("http://localhost:8787/appointment", {
            method: 'POST',
            body: JSON.stringify(appointmentToAdd),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            console.log(res);
            if (res.status === 200) {
                runInAction(() => {
                    // dateOk(false);
                    this.data.push(appointmentToAdd);
                    console.log("addMeeting");
                });
                console.log("the appointment was added succesfully!");
            }
            else{
                // dateOk(true);
                // secondDate(true);
                console.log("enter an other appointment, the date is not available ");
            }
        })
    }
}
export default new Appointments();