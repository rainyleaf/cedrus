import React from 'react'

const Form = props => (
  <form id="todo-form" onSubmit={props.handleSubmit}>
    <label htmlFor="text">
      Task Name:
      {!props.text &&
        props.warningMessage && (
          <span className="warning">{props.warningMessage}</span>
        )}
    </label>
    <input
      name="text"
      type="text"
      onChange={props.handleChange}
      value={props.text}
    />

    <button type="submit" disabled={!props.text}>
      Submit
    </button>
    {props.errorMessage && <div className="error">{props.errorMessage}</div>}
  </form>
)

export default Form
