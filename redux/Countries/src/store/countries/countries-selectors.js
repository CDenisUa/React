export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    countries: state.countries.list,
    qty: state.countries.list.length,
});

export const selectAllCountries = (state) => state.countries.list;
