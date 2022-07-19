import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, setQuery, setUahToEur } from "../../store";
import { getQuerySelector, getUahToEurCourseSelector } from "../../store/selectors";

export const UahToEur: React.FC = () => {

  const [valueToCalc, setValueToCalc] = useState<number>(0);

  const dispatch = useDispatch<AppDispatch>();

  const inEur = useSelector(getUahToEurCourseSelector);

  const query = useSelector(getQuerySelector);

  const showCalc = () => {
    if (inEur) {
      return inEur.info.rate;
    }

    dispatch(setUahToEur());

    return 0;
  }

  useEffect(() => {
    setValueToCalc(Number(query));
  }, []);

  return (
    <div>
      <input 
        type="number" 
        value={query}
        className="input is-primary"
        placeholder='Enter the number'
        onChange={({ target }) => dispatch(setQuery(target.value))}
        onKeyDown={({ key }) => {
          if (key === 'Enter') {
            setValueToCalc(Number(query));
          }
        }}
      />

      <button 
        type="button"
        onClick={() => setValueToCalc(Number(query))}
      >
        Convert
      </button>

      <h1>UAH - EUR {valueToCalc * showCalc()}</h1>
    </div>
  )
}