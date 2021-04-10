let _performanceService = null

class PerformanceController {
    constructor({PerformanceService}){
        //variable de tipo privada
        _performanceService = PerformanceService 
    }

    async get(req, res) {
        const { performanceId } = req.params
        const performance = await _performanceService.get(performanceId)
        return res.send(performance)
    }

    async getAll(req, res) {
        const performances = await _performanceService.getAll()
        return res.send(performances)
    }

    async create(req, res) {
        const { body } = req
        const performance = await _performanceService.create(body)
        return res.send(performance)
    }

    async update(req, res) {
        const { body } = req
        const { performanceId } = req.params
        const updatePerformance = await _performanceService.update(performanceId, body)
        return res.send(updatePerformance)
    }

    async delete(req, res) {
        const { performanceId } = req.params
        const performance = await _performanceService.delete(performanceId)
        return res.send(performance)
    }
}

module.exports = PerformanceController