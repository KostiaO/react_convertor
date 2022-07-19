import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../store";
import { getQuerySelector, getUahToPlnCourseSelector } from "../../store/selectors";

export const UahToPln: React.FC = () => {
  const [valueToCalc, setValueToCalc] = useState<number>(0);

  const dispatch = useDispatch();

  const inPLN = useSelector(getUahToPlnCourseSelector);

  const query = useSelector(getQuerySelector);

  const showCalc = () => {
    if (inPLN) {
      return inPLN.info.rate;
    }

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

      <h1>UAH - PLN {valueToCalc * showCalc()}</h1>
    </div>
  )
}