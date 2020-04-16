import React, { useContext } from "react";
import classes from './FinishedUserWizard.module.scss';
import { RegisterFormContext } from "../../../../contexts/registerForm.context";

const FinishedUserWizard = () => {
  const { userDetails, setUserDetails } = useContext(RegisterFormContext);

  const handleChange = (e) => {
    const tmpUser = { ...userDetails };
    const releventKey = e.target.name;
    const inputValue = e.target.value;
    tmpUser[releventKey] = inputValue;
    console.log(tmpUser);
    setUserDetails(tmpUser);
  };

  return (
    <div className="FinishedUserWizard">
      <h2>תודה על ההרשמה!</h2>
      <h4>תוכל להתחבר למערכת עם הפרטים הבאים או לקבל הודעות מהחמ"ל</h4>
      <div className="userInfo-container">
        <form className={classes['userInfo-form']}>
          <div className="form-group">
            <input
              id="id"
              name="id"
              type="text"
              value={userDetails.id}
              onChange={handleChange}
              className="form-control w-100px m-auto mb-2"
              placeholder="שם משתמש(תעודת זהות)"
              required
            />
          </div>

          <div className="form-group">
            <input
              id="tel"
              name="tel"
              value={userDetails.tel}
              onChange={handleChange}
              type="password"
              className="form-control w-100px m-auto mb-2"
              placeholder="סיסמא(מספר טלפון)"
              required
            />
          </div>

          <button className="btn btn-success m-auto btn-lg">התחבר</button>
        </form>
      </div>
    </div>
  );
};

export default FinishedUserWizard;
