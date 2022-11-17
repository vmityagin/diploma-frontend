import React from 'react';

function FormInput({ errorMessage, label, onChange, value, validList, id, ...input}) {
  const [ focused, setFocused ] = React.useState(false);

  function handleFocus(e) {
    setFocused(true);
  }

  return (
    <div className="form__box">
      <p className="form__text">{label}</p>
      <input
        {...input}
        className="form__input"
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className={focused && !validList ?  "form__error" : "form__label"} >
        {errorMessage}
      </span>
    </div>
  );
}

export default FormInput;
