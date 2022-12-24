import axios from "axios"

export class CountryService {

    getCountries() {
        return axios.get('/assets/data/countriesCity.json')
            .then(res => res.data.data);
    }
}