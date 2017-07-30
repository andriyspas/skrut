import React, {Component} from 'react';
import LightboxGallery from '../containers/LightboxGallery';
import Header from '../components/Header';
import {Grid, Row, Col} from  'react-bootstrap';
import {GalleryItems} from "../constants/Images.js";

class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <Header/>

                <Grid>
                    <Row>
                        <Col>
                            <div className="gallery__title">Lorem Ipsum is simply</div>
                            <LightboxGallery images={ GalleryItems }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="gallery__title">Літо - грибна пора</div>
                            <LightboxGallery images={ GalleryItems }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="gallery__title">Відпочинок в Яремчі - вибирайте на свій смак!</div>
                            <LightboxGallery images={ GalleryItems }/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Gallery;