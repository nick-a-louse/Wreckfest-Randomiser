# Wreckfest Randomiser

## Trying to mix up Wednesday games night!

[Bugbear Entertainment](https://bugbeargames.com/) in a Finnish game developer, that developed and released the game [Wreckfest](https://order.wreckfestgame.com/) back in 2014.

During the pandemic, my friends and I couldn't spend much time together (obviously). Wednesday night became Playstation games night (and drinking more ridiculous beers. FYI [Vibrant Forest's Juicy Pupa](https://www.vibrantforest.co.uk/beer/pupa) is still one of my favourites). After we got bored of GTA online, didn't like Red Dead 2 multiplayer, we found Wreckfest.

2 years later we're still playing Wreckfest (although a bit less), but to keep it more interesting we needed a randomiser. A friend made something in Excel, but it was ugly and was a pain to filter.

I wanted to learn Javascript, CSS and HTML for a while, and this was the opportunity. While it would be interesting to use databases, server side code with a website running on top, I didn't want to pay to host it. I therefore went the json file route.

## How it works

### Updating the files

1) The Excel file has data taken from [fandom.com](https://wreckfest.fandom.com/wiki/Wreckfest_Wiki) - I've probably broken some rules doing so, but I was literally cut-and-pasting data into the spreadsheet (and saving the images in the subdirectory).
2) Save the worksheet as a csv file, and then convert it to JSON using something like [this](https://www.convertcsv.com/csv-to-json.htm) website.

If / when new tracks or cars are added, I'll try and update the data.

### How the code works

Pretty much the same process for both tracks and cars:

1) Checks which tick boxes are marked and stores them
2) Pulls the latest json file and sticks the data into a json object
3) Parses each Json object based on the ticket criteria
4) Adds index number of any entry that matches the criteria to a list
5) Selects a random entry from the list
6) Inserts the data into the HTML by querying the JSON object using the randomly chosen index number

I was lazy with the error capturing (i.e. no valid selections), but Hillstreet is one of the best tracks, and the Rocket RX is my favourite vehicles in the game.

## What else to add?

1) It would be cool to add more features like the different upgrades (i.e. you could specify you want a 250hp car, and it would select a vehicle and which upgrades)
2) A car randomiser that takes the number of players and randomoses cars with a simiiar rating the compete with (rather than all being in the same vehicle)
