let express = require('express');
let bodyParser = require('body-parser');

let _ = require('underscore');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());


interface Hero {
  id: number,
  name: string
}


const heroData = {
  heroes: []
};

app.route('/heroes')
  .get((req: any, res: any) => {
  console.log('GET');
    res.status(200).json(heroData)
  })
  .delete((request: any, response: any) => {
    console.log('deleting hero');
    const heroIndex = request.body;
    if (heroData.heroes.length) {
      heroData.heroes.splice(heroIndex, 1);
      response.status(200).send();
    } else {
      response.status(404).send();
    }
  })
  .post((req: any, res: any) => {
  console.log('request -> ', req.body);
    heroData.heroes.push(req.body);
    res.status(200).send();
  });

let server = app.listen(8080, function () {
  console.log('Server running at https://localhost:8080')
});
