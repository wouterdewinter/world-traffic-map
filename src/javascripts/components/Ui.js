import React from 'react';
import h from 'react-hyperscript';
import text from '../text';
import Menu from './Menu';
import Map from './Map';
import Home from './Home';
import Usage from './Usage';
import Widget from './Widget';
import Chart from './Chart';

class Ui extends React.Component {
    render() {
        let infoPanel = null;

        if (this.props.showInfo && this.props.mapId === 'demo') {
            infoPanel = h(Home, {
                onClose: this.props.infoClose,
                onCreateMap: this.props.newMapId
            });
        } else if (this.props.showInfo) {
            infoPanel = h(Usage, {
                onClose: this.props.infoClose,
                mapId: this.props.mapId
            });
        }

        return (
            h('div', [
                h(Map, {
                    onMapReady: this.props.onMapReady,
                    onMapChange: this.props.onMapChange,
                    mapUpdateNeeded: this.props.mapUpdateNeeded,
                    onUpdateMapComplete: this.props.onUpdateMapComplete,
                    lng: this.props.lng,
                    lat: this.props.lat,
                    zoom: this.props.zoom
                }),
                h(Menu, {onClick: this.props.toggleMenu}),
                infoPanel,
                h(Widget, {total: this.props.total})
                //h(Chart, {data: this.props.chartData, domain: {x: [0, 300], y: [0, 50]}})
            ])
        );
    }
}

export default Ui;