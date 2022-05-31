import React, {useState} from "react";
import {Button, Card, Col} from "react-bootstrap";
import JoLPlayer from "jol-player";
import DeliteVideo from "./DeliteVideo";
import Icon from "@mdi/react";
import {mdiPlus} from "@mdi/js";



    export const VideoTile = (props) => {

        const [formShown1, setFormShown1]=useState(false)

    return (

        <Col>
            <Card>
                <JoLPlayer
                    option={{
                        videoSrc:"/video/get-file?filepath=" + props.video.path, //getting video from the sever
                        width: 400,
                        height: 300,
                        pausePlacement: "center",
                        language: "en",
                    }}
                />
                <Card.Body>
                    <Card.Title>{props.video.title}</Card.Title>
                    <Card.Text>
                        Tags: {props.video.tagIds}
                            <DeliteVideo formShown1={formShown1}
                                         setFormShown1={setFormShown1}
                                         videoID={props.video.id} // Video id for delete video
                                         />
                        <Button variant="info" onClick={() => setFormShown1(true)}>
                            Delete video
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    )}
