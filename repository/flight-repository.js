const {Flights} = require('../models/index');
const { Op } = require('sequelize');
class FlightRepository {
    #createFilter(data) {
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice) {
            Object.assign(filter,{price: {[Op.lte]: data.minPrice}});
        }
        if(data.maxPrice) {
            Object.assign(filter,{price: {[Op.gte]: data.minPrice}});
        }
        console.log(filter);
        return filter;
    }
    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
    async getFlight(data) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAllFlights(data) {
        try {
            const filterobject = this.createFilter(filter);
            const flight = await Flights.findAll();
            return flights;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;