const {FlightRepository, AirplaneRepository} = require('../repository/flight-repository');
const { compareTime } = require('../utils/helper');
class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightrepository = new FlightRepository();
    }

    async createFlight(data) {
        try{
            if(!compareTime(data.arrivalTime, data.depatureTime)){
                throw {error: 'Arrival Time cannot be less than Depature Time'};
            }
        const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
        const flight = await this.flightrepository.createFlight({...data, totalSeats:airplane.capacity});
        return flight;
        }
        catch (error) {
            console.log("something went wrong at the service layer");
            throw {error};
        }

    }
    async getFlightData() {

    }
}
module.exports = FlightService;
