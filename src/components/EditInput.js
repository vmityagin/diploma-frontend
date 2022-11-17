import React from 'react';

function EditInput({errorMessage, label, onChange, value, validList, id, ...input}) {
  const [ formValid, setFormValid ] = React.useState(false);
  const [ focused, setFocused ] = React.useState(false);

  function handleFocus(e) {
    setFocused(true);
  }

  return (
    <div className="profile__box">
      <p className="profile__caption">{label}</p>
      <input
        {...input}
        className="profile__info"
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        value={value}
        required
      />
    </div>
  );
}

export default EditInput;
