import {Button, Modal, Form} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import TokenAlert from "./TokenAlert";

export const AddVideoForm = (props) => {
    const [formData, setFormData] = useState(false);
    const [tokenForm, setTokenForm] = useState(false);
    const [formDataVideo, setFormDataVideo] = useState()
    const [id, setId]=useState()
    const [token, SetToken] = useState()
    const [shown1, setShown1] = useState(true)
    const [disable, setDisable] = useState(true);



    const createVideo = () => { // creating a new object with a title, then id is added on the backend side
        fetch("video/create", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }

        })
            .then(response => response.json())
            .then(data=> {
                props.setVideoList(current => {
                    const newList = current.slice();//making a copy of array
                    newList.push(data)
                    return newList
                    // return [...current, {data,isload:false}];
                })
                // props.setFormShown(false); - change after
                setId(data.id)
                SetToken(data.token)
                setDisable(false)
                // alert("You token for deliting this video:" + token)
                // show to the user a token for update/delete video
            })
    }


    async function uploadVideo() {

        const form_data = new FormData()
        form_data.append("id", id)
        form_data.append("file", formDataVideo)

        for (let value of form_data.values()) {
            console.log(value);
        }

        await axios.post('/video/upload', form_data, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        })
            .then(response=>response)
            .then (props.setFormShown(false))
            .catch(error=>error)

    }



    // async function uploadVideo() {
    //
    //     const form_data = new FormData()
    //     form_data.append("id", id)
    //     form_data.append("file", formDataVideo)
    //
    //         for (let value of form_data.values()) {
    //         console.log(value);
    //     }
    //
    //     await axios.post('/video/upload', form_data, {
    //          headers: {
    //             "Content-Type": "multipart/form-data"
    //         },
    //     })
    //
    //         .then(response=> response)
    //     // .then((response)=> {
    //     //
    //     //        console.log(response.data);
    //     //     props.setVideoList(videoList =>{
    //     //         return videoList.map(el =>{
    //     //             if ( el.id === response.data.id){
    //     //                 el.isLoad=true
    //     //                 return el
    //     //             }
    //     //             return el
    //     //         });
    //     //
    //     //     });
    //     //     // props.setVideoList(response.data)
    //     // })
    //     .catch(error=>error)
    // }


    const tokenForms = () => {return  <TokenAlert token={token} setShown1={setShown1} shown1={shown1}/>}


    return (
        <>

            <Modal show={props.formShown} onHide={()=>props.setFormShown(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter a title for the video</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                          onChange={(event)=>
                                          {setFormData(current=>{
                                              const newData = {...current};
                                              newData.title = event.target.value;
                                              return newData;
                                          })}}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={createVideo} >
                            Save Changes
                        </Button>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Add video</Form.Label>
                            <Form.Control type="file"
                                          onChange={(e) =>
                                              setFormDataVideo(e.target.files[0])}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={(event)=> {uploadVideo(); tokenForms()}} disabled={disable}>
                        Upload video
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
