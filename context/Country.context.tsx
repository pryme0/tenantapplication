import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CountryInterface, CityInterface, StateInterface } from '../interface';

export const CountryContext = createContext({
  countries: [],
  updateUserState: async (country: string): Promise<CountryInterface[]> => {
    return [{}];
  },
  updateUserCities: async (
    country: string,
    state: string,
  ): Promise<CityInterface[]> => {
    return [{}];
  },
});

export function CountryProvider({ children}) {
  const [countries, setCountries] = useState([]);

  const updateUserState = async (
    country: string,
  ): Promise<CountryInterface[]> => {
    const states = await axios.post(
      'https://countriesnow.space/api/v0.1/countries/states',
      {
        country: `${country}`,
      },
    );
    return states?.data?.data?.states;
  };

  const updateUserCities = async (
    country: string,
    state: string,
  ): Promise<StateInterface[]> => {
    const cities = await axios.post(
      'https://countriesnow.space/api/v0.1/countries/state/cities',
      {
        country: `${country}`,
        state: `${state}`,
      },
    );
    return cities?.data?.data.map((city: string) => ({ name: city }));
  };

  useEffect(() => {
    axios
      .get('https://countriesnow.space/api/v0.1/countries/capital')
      .then((data) => {
        setCountries(data.data.data);
      });
  }, []);

  return (
    <CountryContext.Provider
      value={{ countries, updateUserState, updateUserCities }}
    >
      {children}
    </CountryContext.Provider>
  );
}
