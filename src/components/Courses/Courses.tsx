import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, setUahToEur, setUahToPln, setUahToUsd } from "../../store";
import { getLoadingEurSelector, getLoadingPlnSelector, getLoadingUsdSelector, getUahToEurCourseSelector, getUahToPlnCourseSelector, getuahToUsdCourseSelector } from "../../store/selectors";

import './Courses.css';

export const Courses: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  const courseToUsd = useSelector(getuahToUsdCourseSelector);

  const courseToEur = useSelector(getUahToEurCourseSelector);

  const courseToPln = useSelector(getUahToPlnCourseSelector);

  useEffect(() => {
    if (!courseToUsd || !courseToPln || !courseToEur) {
      dispatch(setUahToUsd());
      dispatch(setUahToEur());
      dispatch(setUahToPln());
    }
  }, []);

  const isLoadingUsd = useSelector(getLoadingUsdSelector);

  const isLoadingEur = useSelector(getLoadingEurSelector);

  const isLoadingPln = useSelector(getLoadingPlnSelector);

  return (
    <div className="courses">
      UAH to USD:
      <span className="tag is-black">{ !isLoadingUsd ? courseToUsd?.info.rate : 'Loading...'}</span>
      UAH to EUR:
      <span className="tag is-black">{ !isLoadingEur ? courseToEur?.info.rate : 'Loading...' }</span>
      UAH to PLN:
      <span className="tag is-black">{ !isLoadingPln ? courseToPln?.info.rate : 'Loading...' }</span>
    </div>
  )
}