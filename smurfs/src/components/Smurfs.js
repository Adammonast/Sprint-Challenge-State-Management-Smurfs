import React, {useState} from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf} from "../actions/actions";
import Loader from "react-loader-spinner";

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs
    };
};

const Smurfs = props => {
    const [newSmurf, setNewSmurf] = useState("");

    const handleChanges = e => {
        setNewSmurf(e.target.value);
    };

    return (
        <div>
            <button onClick={props.fetchSmurfs}>Get Smurf</button>
            {!props.smurfs && !props.isLoading && (
                <h2>Find Smurfs</h2>
            )}
            {props.isLoading && (
                <Loader 
                    type="ThreeDots"
                    color="#19607C"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            )}
            {props.smurfs && !props.isLoading && <h2>{props.smurfs.name}</h2>}
            {props.smurfs && !props.isLoading && <h2>{props.smurfs.age}</h2>}
            {props.smurfs && !props.isLoading && <h2>{props.smurfs.height}</h2>}

            <div className="smurf-list">
                <h3>Add Smurfs!</h3>
                {props.smurfs.map((smurf, index) => (
                    <div key={index}>
                        <p>{smurf.name}</p>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                    </div>
                ))}
                <input
                    placeholder="Name" 
                    className="name-input"
                    type="text" 
                    name="smurfName"
                    value={newSmurf}
                    onChange={handleChanges}
                />
                <input 
                    placeholder="Age"
                    className="age-input"
                    type="text" 
                    name="smurfAge"
                    value={newSmurf}
                    onChange={handleChanges}
                />
                <input 
                    placeholder="Height"
                    className="height-input"
                    type="text" 
                    name="smurfHeight"
                    value={newSmurf}
                    onChange={handleChanges}
                />

                <button onClick ={() => props.addSmurf(newSmurf)}>Add Smurf</button>
            </div>
        </div>
    )
};
  
  export default connect(
    mapStateToProps,
    { fetchSmurfs, addSmurf }
  )(Smurfs);