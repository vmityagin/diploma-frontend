import React from 'react';
import Header from './Header';
import EditInput from "../components/EditInput";
import {CurrentUserContext} from '../context/CurrentUserContext';
import {inputsEdit, regularEmailRegExp} from '../utils/constants';

function Profile({signOut, successChangeUserData, loggedIn, isOpen}) {
  const userContext = React.useContext(CurrentUserContext);

  const [ isEdit, setIsEdit ] = React.useState(false);
  const [ isDisabled, setIsDisabled ] = React.useState(true);

  const [ validList, setValidList ] = React.useState({
    userName: false,
    userEmail: false,
  })
  const [ values, setValues ] = React.useState({
    userEmail: userContext.data.email,
    userName: userContext.data.name,
  })

  React.useEffect(() => {
    validValues();
}, [isEdit]);

function validValueInputChange(e) {
  if (e.target.name === "userEmail") {
    if (e.target.value.match(regularEmailRegExp)) {
      setValidList({...validList, [e.target.name]: true })
    } else {
      setIsDisabled(true);
      setValidList({...validList, [e.target.name]: false });
    }
  } else if (e.target.name === "userName") {
    if (e.target.value.length >= 2 && e.target.value.length <= 30) {
      setValidList({...validList, [e.target.name]: true })
    }  else {
      setIsDisabled(true);
      setValidList({...validList, [e.target.name]: false });
    }
  }
}

  function validValues() {
    values.userName.length >= 6 && values.userName.length <= 30 ? setValidList({...validList, userName: true }) : setValidList({...validList, userName: false });
    regularEmailRegExp.test(values.userEmail) ? setValidList({...validList, userEmail: true }) : setValidList({...validList, userEmail: false });
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
    validValueInputChange(e);
    e.target.value === '' && setIsDisabled(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsDisabled(true);
    successChangeUserData(values);
    setIsEdit(false);
  }

  function openEdit() {
    setIsEdit(true);
    validValues();
  }

  React.useEffect(() => {
    setIsDisabled(!Object.values(validList).every(el => el));
  }, [values])

  return (
    <div className="page">
      <Header
        loggedIn={loggedIn}
        onClick={isOpen}
      />
      <main >
        <form className="profile" onSubmit={handleSubmit}>
          <h1 className="profile__header">{`Привет, ${userContext.data.name}!`}</h1>
          {
            isEdit ?
              <>
                <div className="profile__about">
                  {inputsEdit.map((input) => (
                    <EditInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                      validList={validList[input.name]}
                    />
                    ))
                  }
                </div>
                <button
                  className="profile__submit"
                  onClick={handleSubmit}
                  disabled={isDisabled}
                >
                  Сохранить
                </button>
              </>
              :
              <>
                <div className="profile__about">
                  <div className="profile__box">
                    <p className="profile__caption">Имя</p>
                    <p className="profile__info profile__name">{userContext.data.name}</p>
                  </div>
                  <div className="noborder profile__box">
                    <p className="profile__caption">E-mail</p>
                    <p className="profile__info profile__email">{userContext.data.email}</p>
                  </div>
                </div>
                <button className="profile__button" onClick={openEdit}>
                  <p className="profile__edit">Редактировать</p>
                </button>
                <button className="profile__button" onClick={signOut}>
                  <p className="profile__logout">Выйти из аккаунта</p>
                </button>
              </>
          }
        </form>
      </main>
    </div>
  );
}

  export default Profile;
