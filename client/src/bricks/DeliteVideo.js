import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

const DeliteVideo = (props) => {

    const [tokenData, setTokenData] = useState("");

    async function deleteVideoHandler() {
        const axios = require('axios')

        axios.post('/video/delete', {
            id: props.videoID,
            token: tokenData
        })
            .then(function (response) {
                console.log(response);
            })
    }

    return (
        <>

            <Modal show={props.formShown1} onHide={()=>props.setFormShown1(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Add the token for deleting video</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                          onChange={(e)=>{setTokenData(e.currentTarget.value)}}//??

                            />
                        </Form.Group>
                        <Button variant="primary" onClick={deleteVideoHandler} >
                            Delete video
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default DeliteVideo;