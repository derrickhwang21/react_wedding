import React, { Component } from 'react'

export default class MyWidget extends Component {
    componentDidMount() {

        window.skyscanner.widgets.load();
    
      }
    
      render() {
        return (
          <div
            data-skyscanner-widget="FlightSearchWidget"
            data-locale="en-US"
            data-destination-iata-code="'TPE'"></div>
        )
      }
}
