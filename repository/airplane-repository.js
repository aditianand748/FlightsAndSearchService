const {Airplane} = require('../module/index');
class AirplaneRepository {
    async getAirplane(id) {
        try{
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong at the repository layer");
            throw {error};
        }
    }
}
module.exports = AirplaneRepository;