import React, { useState, useEffect } from "react";



import user1 from "../../assets/img/user-1.png"
// import user2 from "../../assets/img/user-2.png"
// import user3 from "../../assets/img/user-3.png"
// import user4 from "../../assets/img/user-4.png"
// import user5 from "../../assets/img/user-5.png"
// import user6 from "../../assets/img/user-6.png"
import StepperNotification from "./stepper_component";
import * as xlsx from 'xlsx'
import axios from "axios";
import { API_URL } from "../../constants";

var token = `Token ${localStorage.getItem("token")}`;

function SelectUser() {

    const [uploadedUsers, setUploadedUsers] = useState()
    const [formData, setFormData] = useState({});
    const [activeBox, setActiveBox] = useState(new Set([]))
    const [clientList, setClientList] = useState([])

    const setFormField = (field, value) => {

        setFormData(prevState => {
            localStorage.setItem("notificationData", JSON.stringify({
                ...prevState,
                [field]: value
            }))

            return {
                ...prevState,
                [field]: value
            };
        });

    }

    function checkBoxHandler(value) {

        let tempSet = activeBox;
        if (tempSet.has(value)) {
            tempSet.delete(value)
        } else {
            tempSet.add(value)
        }
        setActiveBox(tempSet)
        setFormField("userIds", Array.from(tempSet))
    }

    function selectAllHandler() {
        let tempSet = new Set();
        if(activeBox.size == 0){
            uploadedUsers?.map((item)=>{
                tempSet.add(item.id)
            })
    
            clientList?.map((item)=>{
                tempSet.add(item[0].userId)
            })
        }else{
            tempSet.clear()
        }

        setActiveBox(tempSet)
        // console.log(tempSet);
        setFormField("userIds", Array.from(tempSet))
    }

    async function fetchClientList() {
        const response = await axios.get(API_URL + "/clientslist", { headers: { "Content-Type": "application/json", Authorization: token } })
        console.log(response);
        if (!response.data.data) {
            alert("Unable to fetch user's list")
            return
        } else {
            setClientList(response.data.data)
        }
    }

    useEffect(() => {

        fetchClientList()

        let notificationData = JSON.parse(localStorage.getItem("notificationData"))
        if (notificationData) {
            setFormData(notificationData)
            setActiveBox(new Set(notificationData.userIds))
        }
    }, [])

    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                console.log(json);
                setUploadedUsers(json)
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }
    return (
        <main>
            
        <div className="continent-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
                        <a href="" className="back-btnt"><i className="icon-Back" aria-hidden="true"></i></a>
                        <h2>Create New Notification</h2>
                        <div className="e-btn">
                            <a href="" className="new-btn-creat"><i className="icon-plus" aria-hidden="true"></i> Add event</a>
                        </div>
                    </div>
                    <StepperNotification />

                    <div className="r-btn-group select-upload">
                        <div className="Select-User-holder">
                            <div className="cns-titel">
                                <span>Select User</span>
                            </div>
                            <div className="user-selction">
                                <label for="select-all">
                                    <input onClick={selectAllHandler} type="checkbox" name="" id="select-all" />
                                    <span>Select All</span>
                                </label>
                                {
                                    uploadedUsers?.map((item, index) =>
                                        <label key={item.id} for={`select-${item.id}`}>
                                            <input checked={activeBox.has(item.id)} onChange={() => checkBoxHandler(item.id)} type="checkbox" name="" id={`select-${item.id}`} />
                                            <div className="user-img">
                                                <img src={user1} alt="" />
                                            </div>
                                            <span>{item.name}</span>
                                        </label>
                                    )
                                }
                                
                                {clientList.length!=0 && 
                                    clientList?.map((item) =>
                                        <label key={item.userId} for={`select-${item.userId}`}>
                                            <input checked={activeBox.has(item.id)} onChange={() => checkBoxHandler(item.id)} type="checkbox" name="" id={`select-${item.userId}`} />
                                            <div className="user-img">
                                                <img style={{ height: 40, width: 40, borderRadius: 100 }} src={API_URL + item.profile_img} alt="" />
                                            </div>
                                            <span>{item.name} </span>
                                            <small>&nbsp;{item.email.slice(0,15)}</small>
                                        </label>
                                    )
                                }


                            </div>
                        </div>
                        <div className="Select-User-holder">
                            <div className="cns-titel">
                                <span>Upload Exel</span>
                            </div>
                            <div className="user-selction">
                                <div className="upload-e-file" for="exl-upload">
                                    <input onChange={readUploadFile} type="file" name="" id="exl-upload" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        </main>

    );
}



export default SelectUser;
