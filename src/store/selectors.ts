import { State } from ".";

export const getuahToUsdCourseSelector = ({ uahToUsdCourse }: State) => uahToUsdCourse; 

export const getLoadingUsdSelector = ({ loadingUSD }: State) => loadingUSD;

export const getUahToEurCourseSelector = ({ uahToEurCourse } : State) => uahToEurCourse;

export const getLoadingEurSelector = ({ loadingEUR }: State) => loadingEUR;

export const getUahToPlnCourseSelector = ({ uahToPlnCourse }: State) => uahToPlnCourse;

export const getLoadingPlnSelector = ({ loadingPln }: State) => loadingPln;

export const getQuerySelector = ({ query } : State) => query;

