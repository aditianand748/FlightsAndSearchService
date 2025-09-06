const {CityService} = require('../services/index');
const create = async (req,res) => {
try{
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
        data: city,
        success: true,
        message: 'successfully created a city',
        err: {}
    });

} catch (error) {
    console.log(error);
    return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to create a city',
            err: error
        })
}
}

const destroy = async (req,res) => {
    try{
        const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
        data: city,
        success: true,
        message: 'successfully deleted a city',
        err: {}
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to delete a city',
            err: error
        });
    }
    
}
const get = async (req,res) => {
    try{  const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
        data: city,
        success: true,
        message: 'successfully fetched a city',
        err: {}
    });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to get a city',
            err: error
        });
    }
    
}
const update = async (req,res) => {
    try{
  const city = await cityService.updateCity(req.body);
    return res.status(200).json({
        data: city,
        success: true,
        message: 'successfully created a city',
        err: {}
    });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not able to create a city',
            err: error
        });
    }
    
}