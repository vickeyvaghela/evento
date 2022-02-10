import axios from "axios";
import { React ,useState,useEffect,ref, useImperativeHandle, forwardRef} from "react";
import { API_URL } from "../../constants";


var token = `Token ${localStorage.getItem("token")}`;

const PhotoUpload=({pcid,submitCounter,route,title}) =>{
    const [files, setFiles] = useState([])
    const [imgUrls, setImgUrls] = useState([])


    useEffect(() => {
        if (submitCounter>0) {
            uploadMultipleImage()
        }
    
    }, [submitCounter])
    

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
        setImgUrls(imageUrlArray)
    }

    function imageRemoveHandler(index) {
        setImgUrls([...imgUrls.slice(0, index), ...imgUrls.slice(index + 1)])
        files.splice(index, 1)
    }

    
    async function uploadMultipleImage() {
        console.log("called from outside");
        // const form = new FormData()
        // form.append('photo_file', files)
        // form.append('pc', pcid)

        // const response = await axios.post(API_URL+route, form, { headers: { "Content-Type": "application/json", Authorization: token } })
        // if (response.data.isSuccess) {
        //     alert(response.data.message)
        // }
    }

    return (
        <div>
            <div className="p-v-main">
                <h1>{title}</h1>
                <div className="poster-m">
                    <div className="images-selctor ">
                        <input
                            onChange={filePickerHandler}
                            type="file"
                            multiple
                            className="file-input"
                            name=""
                            accept="image/*"
                        />
                    </div>
                </div>
            </div>
            <div className="ph-main">
                <span>Uploaded Photo</span>
                <div className="img-holder">
                    {imgUrls.map((item, index) =>
                        <div key={index} className="photo-box p">
                            <div className="images-selctor ">
                                <img src={item} className="img-fluid" alt="" />
                                <button onClick={(e) => { e.preventDefault(); imageRemoveHandler(index) }} >Remove</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default (PhotoUpload)