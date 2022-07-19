import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../store";
import { getQuerySelector, getuahToUsdCourseSelector } from "../../store/selectors";

export const UahToUsd: React.FC = () => {

  const [valueToCalc, setValueToCalc] = useState<number>(0);

  const dispatch = useDispatch();

  const query = useSelector(getQuerySelector);

  const inUsd = useSelector(getuahToUsdCourseSelector);

  const showCalc = () => {
    if (inUsd) {
      return inUsd?.info.rate;
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

      <h1>UAH - USD {valueToCalc * showCalc()}</h1>
    </div>
  )

}