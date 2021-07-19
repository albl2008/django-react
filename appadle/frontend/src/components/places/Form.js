import React, { Component } from 'react'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPlace } from '../../actions/places';

export class Form extends Component {
    state = {
        name: '',
        tel: '',
        courtQty: '',
        material:'',
        rating: '',
        address:''
    }
    static propTypes ={ 
        addPlace: PropTypes.func.isRequired
    }

    onChange = e => this.setState ({[e.target.name]: e.target.value });

    onSubmit = e =>{
        e.preventDefault();
        const { name, tel, courtQty, material, rating, address } = this.state;
        const place = ({ name, tel, courtQty, material, rating, address });
        this.props.addPlace(place);
        this.setState({
          name:'',
          tel:'',
          address:'',
          rating:'',
          courtQty:'',
          material:''
        })
    };

    render() {
        const { name, tel, courtQty, material, rating, address } = this.state;
        return (
          <div className="card card-body mt-4 mb-4 row">
            <h2>Add Place</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label>Telefono</label>
                <input
                  className="form-control"
                  type="number"
                  name="tel"
                  onChange={this.onChange}
                  value={tel}
                />
              </div>
              <div className="form-group">
                <label>Cantidad de Canchas</label>
                <input
                  className="form-control"
                  type="number"
                  name="courtQty"
                  onChange={this.onChange}
                  value={courtQty}
                />
              </div>
              <div className="form-group">
                <label>Material</label>
                <input
                  className="form-control"
                  type="text"
                  name="material"
                  onChange={this.onChange}
                  value={material}
                />
              </div>
              <div className="form-group">
                <label>Direccion</label>
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  onChange={this.onChange}
                  value={address}
                />
              </div>
              <div className="form-group">
                <label>Rating</label>
                <input
                  className="form-control"
                  type="number"
                  name="rating"
                  onChange={this.onChange}
                  value={rating}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Agregar
                </button>
              </div>
            </form>
          </div>
        );
      }
}

export default connect(null,{ addPlace })(Form);
