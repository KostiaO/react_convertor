import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ConvertorResponseType } from "../../react-app-env";
import { setQuery } from "../../store";
import { getQuerySelector } from "../../store/selectors";

interface Props {
  textToShow: string,
  inValute: ConvertorResponseType | null
}

export const UahToValute: React.FC<Props> = ({ inValute, textToShow }) => {

  const [valueToCalc, setValueToCalc] = useState<number>(0);

  const dispatch = useDispatch();

  const query = useSelector(getQuerySelector);


  const showCalc = () => {
    if (inValute) {
      return inValute?.info.rate;
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

      <h1>{textToShow} {valueToCalc * showCalc()}</h1>
    </div>
  )

}