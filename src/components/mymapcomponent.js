import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import PlaceMap from '../images/mapplace.svg'

const ProlocArrow = () => <img src={PlaceMap} style={{width:64}} alt="seta que mostra no mapa onde está a Proloc"/>

class MyMapComponent extends Component {
  static defaultProps = {
    center: {
      lat: -23.542364,
      lng: -46.640329
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyACtxCUJqJjeEdmNGqwwlh_rE2v_REi7Qk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <ProlocArrow
            lat={-23.542364}
            lng={-46.640329}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MyMapComponent;

