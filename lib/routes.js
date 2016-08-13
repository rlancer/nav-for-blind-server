console.log('routesss');
app.get('/poi', function (req, res) {
  (async()=> {
    try {

      const {lat, lon} = req.query;


      console.log('Reverse geocoding ', lat, lon);
      // todo for a given point return whats around
      const geoResp = await geocoder.reverse({lat, lon});

      if (geoResp.length > 0) {
        const {streetNumber, streetName} = geoResp[0];

        const say = `You are at ${streetName}, ${streetName}`;

        res.send({say, data: geoResp[0]});
      }
      else {
        // send error
        res.status(500).send({error: 'No results'});
      }

    }
    catch (err) {
      console.log(err);
      res.status(500).send({error: 'No results'});
    }
  })();


});
