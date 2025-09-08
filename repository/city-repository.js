const {op} = require('sequelize');

const { City } = require('../models/index');

class CityRepository{

    async createCity({ name }) {
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data,{
                where: {
                    id: cityId
                }

            });
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findbyPk(cityId);
            return City;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
async getAllCities(filter) {
    try {
        if(filter.name) {
            const cities = await City.find({
                where: {
                    name: {
                        [op.startsWith] : filter.name
                    }
                }
            });
            return cities;
        }
        const cities = await City.findAll();
        return cities;
    } catch (error) {
        console.log("somehing went wrong at the service-layer");
        throw {error};
    }
}


}
module.exports = CityRepository;