import React,{useState,useEffect} from 'react'

const Notification = () => {
    const [notifications, setNotifications] = useState([])

    const getNotifications = () => {
        fetch("http://localhost:9002/notifications", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setNotifications(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getNotifications(), [notifications]);

    return (
        <div className="container-fluid py-4">
            <div className="card m-5" style={{width: "70rem"}}>
                <div className="card-header bg-gradient-primary opacity-6 text-white">
                    Notifications
                </div>
                <ul className="list-group list-group-flush">
                    {notifications.map((notification)=>{
                        return (
                            <li className="list-group-item"><span className='font-weight-bolder text-md '>{notification.customerName}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;{notification.message}</li>
                        )
                    })}                                   
                </ul>
            </div>
        </div>
    )
}

export default Notification
