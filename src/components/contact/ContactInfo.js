import React from 'react';
import { MailOutlined, EnvironmentOutlined } from '@ant-design/icons'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
function ContactInfo(props) {
 const style = {
  width: '400px',
  height: '400px'
    }
    const initialCenter = {
            lat: 23.822350,
            lng: 90.365417
          }
    return <div >
            <div className='contact-info-box'>
                <div className='contact-info-box-icon'>
                    <MailOutlined/>
                 </div>
                <div className='contact-info-text'>
                    <span style={{fontSize: 18}}>Email Me At</span><br />
                    <span style={{color: 'gray'}}>afsana2013nipa@gmail.com</span>
                </div>
        </div>
         <div className='contact-info-box'>

                <div className='contact-info-text'>
                    <div>
                    <Map
                        google={props.google}
                        zoom={15}
                        style={style}
                        initialCenter= {initialCenter}
                    >
 
                            <Marker onClick={props.onMarkerClick}
                                    name={'Current location'} />
                    
                            <InfoWindow onClose={props.onInfoWindowClose}>
                                
                            </InfoWindow>
                        </Map>
                    </div>
                </div>
         </div>
  </div>;
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDo3lw-SbLUgHnkohHYHFUj-eFyB2i2SmY")
})(ContactInfo)
