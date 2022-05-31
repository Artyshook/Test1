import React, {useState} from 'react';
import {Alert, Button, Form, Modal} from "react-bootstrap";

function TokenAlert(props) {
    return (

        <>

            <Modal show={props.shown1} onHide={()=>props.setShown1(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Add the token for deleting video</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                          onChange={()=>{}}//??
                            />
                        </Form.Group>
                        <Button variant="primary"  >
                            Delete video
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );

}

export default TokenAlert;