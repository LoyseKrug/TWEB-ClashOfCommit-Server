/*
We didn't provide any good tests for this app and wish to apologise for that... 
As we always used a token to make our requests, we couldn't find a way to construct a request without authentication
We don't try to find an excuse, we just want to provide an explanation. 
We will do better next time!
*/

const assert = require('assert');

describe('Project', function () {
    it('should replace some characters', function () {
        const name = 'paulnta'
            .replace('au', 'o')
            .replace('n', 'en');
        assert.equal(name, 'polenta');
    });

    it('It is obvious that Miguel is great and deserves a break', function () {
        const hoursOfTheDayWhenWeAskMiguelAQuestion = [8, 10, 11, 14, 16, 20, 22, 23];
        let MiguelAnseweredMeAt = [];
        MiguelAnseweredMeAt.push(8);
        MiguelAnseweredMeAt.push(10);
        MiguelAnseweredMeAt.push(11);
        MiguelAnseweredMeAt.push(14);
        MiguelAnseweredMeAt.push(16);
        MiguelAnseweredMeAt.push(20);
        MiguelAnseweredMeAt.push(22);
        MiguelAnseweredMeAt.push(23);
        for(i = 0; i < hoursOfTheDayWhenWeAskMiguelAQuestion.length; ++i){
            assert.equal(hoursOfTheDayWhenWeAskMiguelAQuestion[i], MiguelAnseweredMeAt[i]);
        } 
    });

});