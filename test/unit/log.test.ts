/* eslint-disable import/order */
import * as app from '../../src/app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('GET /log', () => {
    it('should GET paginated logs', () => {
        const pageSize = 5;
        return chai
            .request(app)
            .get('/log')
            .query({ page: 1, pageSize })
            .then((res) => {
                chai.expect(res.status).to.eql(200);
                chai.expect(res.body).to.have.keys('data', 'pagination');
                chai.expect(res.body.data).to.be.an('array').to.have.lengthOf.at.most(pageSize);
                chai.expect(res.body.pagination).to.be.an('object');
                chai.expect(res.body.pagination).to.have.property('page');
                chai.expect(res.body.pagination).to.have.property('pageSize');
                chai.expect(res.body.pagination).to.have.property('rowCount');
                chai.expect(res.body.pagination).to.have.property('pageCount');
            });
    });
});
