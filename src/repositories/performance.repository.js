const BaseRepository = require("./base.repository");
let _performances = null;

class PerformanceRepository extends BaseRepository {
  constructor({ Performance }) {
    super(Performance);
    _performances = Performance;
  }
}

module.exports = PerformanceRepository;
