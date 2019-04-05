const {expect} = require('chai');
const Artist = require('./../../../models/artist')

describe('artist',()=>{
  describe('name', ()=>{
    it('should be at leat 2 characters', async ()=>{
      try {
        let artist = new Artist({name: 'a'});
        await artist.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal('Name must be between 2 and 10 characters');
      } finally {

      }
    });
    it('should be less than 10 characters', async ()=>{
      try {
        let artist = new Artist({name: 'abcdefghjklq'});
        await artist.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal('Name must be between 2 and 10 characters');
      } finally {

      }
    });
    it('should only contain letters', async ()=>{
      try {
        let artist = new Artist({name: '2'});
        await artist.validate();
      } catch (error) {
        expect(error.errors[0].message).to.equal(
          'Name must only contain letters');
      } finally {

      }
    });

  });
});
