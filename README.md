# Zukunftsfonds Mobile Site

Mobile site UI Design for the Zukunftsfonds project.

__Note:__ places outside Austria (i.e. birth places) do not have coordinates yet. I added coordinates 
manually for one place, to have a test example: __Badeutz__, birth place of __Wasilie Dimitrescul__.

__Note:__ there's currently an issue with the images hosted at the ÖAW server. A set of sample images
(hosted locally) is available for the Church St. Sava, and Prince Miloš Obrenović. 

## Updating Data

Download all places and actors to seperate files...

- Places <http://openatlas.orthodoxes-europa.at/api/0.2/query/?classes=E18&limit=9999&download=true>
- Actors <http://openatlas.orthodoxes-europa.at/api/0.2/query/?classes=E21&limit=9999&download=true>

...and replace the data files in the `/public/data` folder.
 

## TODOs

- Filter by projects?
- Make profile maps "static"?
- Instructions when search results are empty
- Data update


