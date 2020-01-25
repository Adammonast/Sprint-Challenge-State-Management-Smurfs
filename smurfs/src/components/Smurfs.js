import React, {useState} from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf} from "../actions/actions";
 
const mapStateToProps = state => {
   return {
       isFetching: state.isFetching,
       smurfs: state.smurfs
   };
};
 
const Smurfs = props => {
   const [newSmurf, setNewSmurf] = useState({
       name: "",
       age: "",
       height: ""
   });
 
   const handleChanges = e => {
       setNewSmurf({[e.target.name] : e.target.value});
   };
 
   const handleSubmit = e => {
       e.preventDefault();
       const {name, age, height} = newSmurf
       props.addSmurf({name, age, height});
   }
 
   console.log(newSmurf);
   return (
       <div>
           <h1>Smurfs!</h1>
           <button onClick={props.fetchSmurfs}>Get Smurf</button>
           {!props.smurfs && !props.isFetching && (<h2>Find Smurfs</h2>)}
 
           {props.smurfs && !props.isFetching && <h2>{props.smurfs.name}</h2>}
           {props.smurfs && !props.isFetching && <h2>{props.smurfs.age}</h2>}
           {props.smurfs && !props.isFetching && <h2>{props.smurfs.height}</h2>}
 
           <div className="smurf-list">
               {props.smurfs.map((smurf, index) => (
                   <div key={index}>
                       <p>{smurf.name}</p>
                       <p>{smurf.age}</p>
                       <p>{smurf.height}</p>
                   </div>
               ))}
               <form onSubmit={handleSubmit}>
               <input
                   placeholder="Name"
                   className="name-input"
                   type="text"
                   name="smurfName"
                   value={newSmurf.name}
                   onChange={handleChanges}
               />
               <input
                   placeholder="Age"
                   className="age-input"
                   type="text"
                   name="smurfAge"
                   value={newSmurf.age}
                   onChange={handleChanges}
               />
               <input
                   placeholder="Height"
                   className="height-input"
                   type="text"
                   name="smurfHeight"
                   value={newSmurf.height}
                   onChange={handleChanges}
               />
 
               <button type="submit">Add Smurf</button>
               </form>
           </div>
       </div>
   )
};

  export default connect(
   mapStateToProps,
   { fetchSmurfs, addSmurf }
 )(Smurfs);
