import { ConvertorResponseType } from "../react-app-env";

enum ValuteTypes {
  EUR = 'EUR',
  USD = 'USD',
  PLN = 'PLN'
}


const BASE_URL = 'https://api.exchangerate.host/convert?from=UAH&to=';



const request = async (valute: ValuteTypes) => {
  try {
    const response = await fetch(`${BASE_URL}${valute}`);

    return response.json();
  } catch (error) {
    console.log(error);
    
  }
}

export const getUahToUsd = async (): Promise<ConvertorResponseType> => {
  console.log('fet1');
  

  const responseCourse = await request(ValuteTypes.USD);
  console.log('fet2');

  return responseCourse;
}

export const getUahToEur = async (): Promise<ConvertorResponseType> => {
  console.log('fet3');

  const responseCourse = await request(ValuteTypes.EUR);

  return responseCourse;
}

export const getUahToPln = async (): Promise<ConvertorResponseType> => {
  const responseCourse = await request(ValuteTypes.PLN);

  return responseCourse;
}
