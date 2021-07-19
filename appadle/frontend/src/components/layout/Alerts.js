import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



export class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps){
       const {error,alert, message}= this.props;
       if (error !== prevProps.error){
           if (error.msg.name) alert.error(`Nombre: ${error.msg.name.join()}`);
           if (error.msg.tel) alert.error(`Telefono: ${error.msg.tel.join()}`);
           if (error.msg.courtQty) alert.error(`Canchas: ${error.msg.courtQty.join()}`);
           if (error.msg.material) alert.error(`Material: ${error.msg.material.join()}`);
           if (error.msg.rating) alert.error(`Rating: ${error.msg.rating.join()}`);
           if (error.msg.address) alert.error(`Direccion: ${error.msg.address.join()}`);
       }
       if (message !== prevProps.message) {
           if (message.deletePlace) alert.success(message.deletePlace);
           if (message.addPlace) alert.success(message.addPlace);
       }
    }


    render() {
        return <Fragment />
        
    }
}

const mapStateToProps= state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
