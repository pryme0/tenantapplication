import {
  LocationChangeEventInterface,
} from '@Interface/index';

export const onLocationChangeEvent = async (
    payload: LocationChangeEventInterface,
  ) => {
    if (payload.event.target.name.includes('country')) {
      payload.setCountry(payload.event.target.value);
      const states = await payload.updateUserState(payload.event.target.value);
      return payload.setStates(states);
    }
    if (payload.event.target.name.includes('state')) {
      const cities = await payload.updateUserCities(
        payload.country,
        payload.event.target.value,
      );
      return payload.setCities(cities);
    }
  };