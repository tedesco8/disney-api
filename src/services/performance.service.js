const BaseService = require("./base.service");
let _performanceRepository = null;
class CharacterService extends BaseService {
  constructor({ PerformanceRepository }) {
    super(PerformanceRepository);
    _performanceRepository = PerformanceRepository;
  }
}

module.exports = CharacterService;