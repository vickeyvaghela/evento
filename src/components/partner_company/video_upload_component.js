import axios from "axios";
import { React ,useState,useEffect,ref, useImperativeHandle, forwardRef} from "react";
import { API_URL } from "../../constants";

var token = `Token ${localStorage.getItem("token")}`;

function VideoUpload({pcid,submitCounter,title,route,formFieldname,uploadedVideo}) {

    const [files, setFiles] = useState([])
    const [videoUrls, setVideoUrls] = useState([])
    const [uploadedVideoUrls, setUploadedVideoUrls] = useState([])


    useEffect(() => {
        if (submitCounter>0) {
            uploadMultipleVideo()
        }
        getUploadedVideos()
    }, [submitCounter,uploadedVideo])
    
     
    function getUploadedVideos() {
         
        let temp = [] 
        uploadedVideo?.map(videoObj=>{
            temp.push("http://eventopackage.com"+videoObj.video_file)
        })
        setUploadedVideoUrls(temp)
    }

    function filePickerHandler(e) {
        // console.log(e.target.files.length);
        console.log(e.target.files);
        let imageArray = [];
        let imageUrlArray = [];
        for (let i = 0; i < e.target.files.length; i++) {
            imageArray.push(e.target.files[i])
            imageUrlArray.push(URL.createObjectURL(e.target.files[i]))
        }
        setFiles(imageArray);
        console.log(URL.createObjectURL(imageArray[0]));
        setVideoUrls(imageUrlArray)
    }

    function videoRemoveHandler(index) {
        setVideoUrls([...videoUrls.slice(0, index), ...videoUrls.slice(index + 1)])
        files.splice(index, 1)
    }

    
    async function uploadMultipleVideo() {
        const form = new FormData()
        form.append(formFieldname, files)
        form.append('pc', pcid)

        const response = await axios.post(API_URL+route, form, { headers: { "Content-Type": "application/json", Authorization: token } })
        if (response.data.isSuccess) {
            alert(response.data.message)
        }
    }


    return (
        <div>
            <div className="p-v-main video-uploder">
                <h1>{title}</h1>
                <div className="poster-m">
                    <div className="images-selctor ">
                        <input
                            onChange={filePickerHandler}
                            type="file"
                            multiple
                            className="file-input"
                            name=""
                            accept="video/*"
                        />
                    </div>
                </div>
            </div>
            <div className="ph-main">
                <span>Uploaded Video</span>
                <div className="img-holder">
                {
                        uploadedVideoUrls.map((item,index)=>
                        <div className="video-main">
                        <div className="vedio-item">
                            <div className="o-video">
                                <video
                                    style={{height:"100%",width:"100%"}}
                                    controls
                                    src={item}
                                    allowfullscreen
                                ></video>
                            </div>
                            <button disabled onClick={(e) => { e.preventDefault(); videoRemoveHandler(index) }} >Remove</button>
                        </div>
                    </div>
                        )
                    }
                    {
                        videoUrls.map((item,index)=>
                        <div className="video-main">
                        <div className="vedio-item">
                            <div className="o-video">
                                <video
                                    style={{height:"100%",width:"100%"}}
                                    controls
                                    src={item}
                                    allowfullscreen
                                ></video>
                            </div>
                            <button onClick={(e) => { e.preventDefault(); videoRemoveHandler(index) }} >Remove</button>
                        </div>
                    </div>
                        )
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default VideoUpload