import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { getPlaces, deletePlace } from '../../actions/places'

export class Places extends Component {
    static propTypes = {
        places: PropTypes.array.isRequired,
        getPlaces: PropTypes.func.isRequired,
        deletePlace: PropTypes.func.isRequired
    };

    componentDidMount(){
        this.props.getPlaces();
    }

    render() {
        return (
           <Fragment>
             <h2>Complejos</h2>

             
             <table className="table table-striped">
                 <thead>
                     <tr>
                         <th>ID</th>
                         <th>Nombre</th>
                         <th>Telefono</th>
                         <th>Canchas</th>
                         <th>Material</th>
                         <th>Rating</th>
                         <th></th>
                     </tr>
                 </thead>
                 <tbody>
                     {this.props.places.map(place=>(
                         <tr className="table-active" key={place.id}>
                             <td>{place.id}</td>
                             <td>{place.name}</td>
                             <td>{place.tel}</td>
                             <td>{place.courtQty}</td>
                             <td>{place.material}</td>
                             <td>{place.rating}/5</td>
                             <td>
                                 <button onClick={this.props.deletePlace.bind(this,place.id)} className="m-1 btn btn-danger btn-sm"><i alt="Llamar" className="bi-whatsapp"></i> </button>
                                 <button className="m-1 btn btn-primary btn-sm"><i alt="Ubicacion" className="bi-geo-alt"></i> </button>
                                 <button className="m-1 btn btn-primary btn-sm"><i alt="Reservar" className="bi-clock"></i></button>
                             </td>
                             
                         </tr>
                     ))}
                 </tbody>
             </table>

           </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    places: state.places.places
});

export default connect(
    mapStateToProps, 
    { getPlaces, deletePlace }
    )(Places);
