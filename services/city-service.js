const { CityRepository } = require('../repository/index');

class CityService {
    constructor() {
        this.CityRepository = new CityRepository;
    }

    async createCity(data) {
        try{
            const city = await this.cityRepository.createCity(data);
            return city;
        }
        catch (error){
            console.log("something went wrong at the service layer");
            throw {error};
        }

    }

    async deleteCity(cityId) {
        try{
            const response = await this.cityRepository.deletecity(cityId);
            return city;        
        }
        catch (error){
            console.log("Something went wrong at the service layer");
            throw {error};
        }


    }

    async UpdateCity(cityId, data) {
        try{
            const city = await this.cityRepository.updatecity(cityId,data);
            return city;
        }
        catch (error) {
            console.log("something went wrong at the service layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getcity(cityId);
            return city;
        }
        catch (error) {
            console.log("something went wrong at the service layer");
            throw {error};
        }
    }
}