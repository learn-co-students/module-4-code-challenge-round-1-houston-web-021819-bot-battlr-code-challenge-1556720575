import React from 'react'

const SortBar = (props) => (
  <div className="row">
    <div className="ui form">
      <div className="inline fields">
        <label>Sort By: </label>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="" onChange={props.handleChange} checked={props.sort === "" ? true : false} />
            <label>ID</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="health" onChange={props.handleChange} checked={props.sort === "health" ? true : false} />
            <label>Health</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="damage" onChange={props.handleChange} checked={props.sort === "damage" ? true : false} />
            <label>Damage</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="armor" onChange={props.handleChange} checked={props.sort === "armor" ? true : false} />
            <label>Armor</label>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SortBar
