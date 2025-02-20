# Hello World

Hi, I'm Carmen and I like to code. I like it enough that I like helping everyone who's got even the faintest inclination towards learning to code, as best as I can.

This repository is going to host the code I've written for events where I've taught coding. You'll have generative art ideas, text & typography play, physical computing, and web design. Even if you're coming from absolute baseline - you haven't even written your first "Hello World" code - you can use the resources here to build up your skills. I want you to learn something cool and run with it. 

### Mission

My goal is to provide resources and information that is always free to use. Learning is a right, and especially if you're learning through the library system, every resources made available to you shouldn't be paywalled. I will aim to list costs or stipulations should they be relevant, but overwhelmingly, I want to focus on providing free content for all.

### Table of Contents
* [Circuit Playground](https://github.com/varsvisualizes/creative-coding-classes#circuit-playground)
* [Creative Coding Club](https://github.com/varsvisualizes/creative-coding-classes#creative-coding-club)
* [NaNoWriMo Prompt Generator](https://github.com/varsvisualizes/creative-coding-classes#nanowrimo-prompt-generator)
* [Web Design 101](https://github.com/varsvisualizes/creative-coding-classes#web-design-101)
* [Resources](https://github.com/varsvisualizes/creative-coding-classes)


# Circuit Playground
In 2022, I borrowed 4 Circuit Playground Bluefruits through SEFLIN. I ran a couple of physical computing programs during the summer, teaching the kids how to use CircuitPython. I think I also ran one session teaching Arduino.

I've also used the Circuit Playground for outreach - see more at [the Prizewheel repo](https://github.com/varsvisualizes/circuitplayground-prizewheel). I even used them for events, like [I Read Dead People](https://github.com/varsvisualizes/i-read-dead-people-props).

For libraries looking to access the Circuit Playgrounds, please get in touch with SEFLIN regarding their use. Let them know that the last time they were used was at the Acreage Branch Library.

If you want to purchase one for your own hobby practice, you can find them through Adafruit! I personally have used the Classic and Bluefruit, but not the Express--though seemingly, the majority of tutorials are tailored to the Express, so do what you will there. Make sure you have a USB-MicroB cable to connect the Circuit Playground to your computer.

# Creative Coding Club
Since 2023 I've hosted programs for kids and teenagers teaching them how to use p5.js. I decided to use p5.js because I wanted to give kids a chance at coding beyond a block editor like Scratch or MakeCode - let them really get their hands wet! Plus, p5.js is intentionally designed for creatives who are perhaps beginners at programming, so the code is more intuitive to follow for early coders.

I set up laptop computers with the [p5.js editor](https://editor.p5js.org/) from the webpage opened, plus the [documentation page](https://p5js.org/reference/) for easy reference. The kids sit at the laptops and type along with my code, which I have projected on a large TV screen. Sometimes I'll also have the fully-formed code printed out for them to read, if they want to skip ahead of where I am in the class.

In this repo I have sample codes that I'd present to the class. We would follow some or all of one example, depending on how quickly we were getting through material. Some of the examples are more complicated than what I would teach, but more made to show the kids what's possible. To run the codes yourself:

1. Download and extract the ZIP files onto your computer
2. Copy the text within the "sketch" file
3. Create a new file to edit on editor.p5.js
4. Delete the template sketch on the new file (the "function setup() {}" and "function draw() {}" parts)
5. Paste in the code from the sketch file
6. Run the sketch!

There may be codes where you'll need a library. I'll aim to provide those setup instructions as needed - though if I miss any, please feel free to let me know.

### December 2020: Snowman Animation

Before the creative coding club, there were one-off coding classes. My very first one was hosted virtually, and it was an animated snowman. You can wave his arm using your mouse.

![Snowcode](https://github.com/varsvisualizes/creative-coding-classes/assets/47091936/c5a76138-fc46-4860-9122-24af3c9bb012)

### September 2023: Generative Art

The first in-person creative coding club, as it's known today. I took inspiration from 5 artists and created interactive art based on their geometric styles, with an explanation on how digital artwork can be generative - actions taken can generate a new artwork, like clicking or moving the mouse.

![Hilma af Klint - Explosion _ 3D](https://github.com/varsvisualizes/creative-coding-classes/assets/47091936/8f2e5bca-cb9a-4dbb-b20e-2d13b7b3bc31)

### December 2023: Fractals

More snow-themed work: using snowflakes, the kids learned about fractals in mathematics in nature. This code also incentivized learning how changing paramters changed the shape, so there was plenty of room for experimentation. 

![fractal_basic](https://github.com/varsvisualizes/creative-coding-classes/assets/47091936/62bda7ab-a2fd-40f0-a01b-589fe322eda3)


### January 2024: Computer Vision

This session used the ml5 library and a computer vision library in combination with p5.js. I using a few [CodingTrain videos](https://www.youtube.com/watch?v=h8tk0hmWB44&list=PLRqwX-V7Uu6aG2RJHErXKSWFDXU4qo_ro) to understand PoseNet, plus [documentation from their page](https://learn.ml5js.org/#/reference/posenet), [examining Maya Mann's samples](https://googlecreativelab.github.io/posenet-sketchbook/), and [a PowerPoint from the University of Waterloo](https://student.cs.uwaterloo.ca/~cs105/W20_content/lectures/22_Video_and_Sound.pdf). 

![rat_shoulder](https://github.com/varsvisualizes/creative-coding-classes/assets/47091936/d69f8ec5-463f-4c42-95f7-8420b7d3741a)


### February 2024: Text-to-Speech

This was my event with more sign-ups than my previous ones, but I was sick so I couldn't host it :') Thankfully, my team sent an email to the attendees containing the materials I planned to go over. I hadn't had the chance to make a more personalized sketch, but I plan to do one myself and upload it in here. I'll note it here when I do!

I was going to use the [p5.js Speech library](https://idmnyu.github.io/p5.js-speech/), with [this handy-dandy example](https://editor.p5js.org/hao/sketches/8OhA3cn1J) as the basis for my sample sketch. As always, [CodingTrain had a video to follow along with](https://www.youtube.com/watch?app=desktop&v=v0CHV33wDsI) - he doesn't use the web editor, but the coding concepts are all the same, so you can follow along and modify using the sample sketch linked.

I think it would be fun to make a sketch combining the Speech-to-Text feature with PoseNet, so that as you speak, the words appear on the palm of your hand / in your mouth directly / etc.

### March 2024: DIY Controller

This event was a two-parter: Part 1 used the Makey-Makeys in conjunction with MakeCode Arcade, and part 2 used the Circuit Playground with Arduino and p5.js.

I don't have much documentation on part 1 because it's pretty easy to hit the ground running with the resources available on both the Makey-Makey site and the MakeCode site. Check some of those links out here:

* [A video tutorial](https://www.youtube.com/watch?v=3K84iHRFQ8w) showing how to use both Scratch and MakeCode
* [Making a controller with Play-Doh](https://makeymakey.com/blogs/how-to-instructions/create-a-controller-to-plug-and-play-1)
* [Connecting the Makey-Makey to MakeCode Arcade](https://makeymakey.com/blogs/how-to-instructions/getting-started-with-microsoft-makecode-arcade)

Part 2 is where things get interesting. This is because the p5.js, being browser-based, doesn't want to just allow anything to take control of the page. You'll need to use the p5.serial library to make the connection. [I found the instructions here helpful](https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/), but I'll break them down to their relevant parts below.

Here is your order of operations:

1. Download the [Arduino IDE](https://www.arduino.cc/en/software) and [p5.serial app](https://github.com/p5-serial/p5.serialcontrol/releases/tag/0.1.2)
2. Plug in your Circuit Playgruond and upload the Arduino code. Take note of which port connects to the Circuit Playground (for example, mine is COM3)
3. Make sure that the serial monitor on your Arduino IDE is closed
4. Open up the p5.serial app and select the port that connects to your Circuit Playground
5. Go on editor.p5.js and open up a sketch (or [practice with the one I've already made](https://editor.p5js.org/varsvisualizes/sketches/zQEjGcGlP)). Follow either step 6 or 7, but not both!
6. IF USING MY SKETCH: Edit line 19 so that your port is within the quotation marks. So it should be serial.open('YOUR COM HERE'), like how mine is serial.open('COM3')
7. IF MAKING A FRESH SKETCH: Copy and paste the code chunk generated by the p5.serial app, which automatically inputs your port in the code.
8. Run the p5.js sketch and tap the A4, A2, A3, and A5 capacitive touch pads on the Circuit Playground. Your dot should move around the screen!

You can change which touchpad do what by editing this code chunk in the Arduino sketch: 

```
  int left = CircuitPlayground.readCap(A4);
  int right = CircuitPlayground.readCap(A2);
  int up = CircuitPlayground.readCap(A3);
  int down = CircuitPlayground.readCap(A1);
```

Just make the changes you want, save the sketch, re-upload it to the Circuit Playground, and you should be good to go.

[Here is a breakdown on what each of the touchpads are designated for](https://learn.adafruit.com/adafruit-circuit-playground-bluefruit/pinouts), so you can better understand what you can and can't map. [This video](https://www.youtube.com/watch?v=AXbMM8rbhq8) created for the [Social Body Lab's Textile Game Controller Jam](https://github.com/socialbodylab/Textile-Game-Controller-Jam/tree/master) was the inspiration for making the p5.js sketch.

### April 2024: Poetry Generator

More to be posted as I prepare for this event!

# NaNoWriMo Prompt Generator
For NaNoWriMo 2022, I ran a virtual workshop walking attendees through creating a prompt generator. My prototype used lines from musicals I was obsessed with at the time. (and still today, honestly, but at this very moment I've chilled out the slightest bit)

At this time, I was using OpenProcessing as the editor. It's also free, but I don't get the same side-by-side viewing as I do with the native p5.js editor. The upside is that it automatically fills up the full page, which is a nice effect, I think. If you're using the editor.p5js.org page, shrink the wordSize variable to 30 (instead of its default at 50) for better results.

# Web Design 101
In March 2024 I hosted my first in-person coding class for adults. The aim was to create a 1-paged website, drawing inspiration from [freeCodeCamp's Responsive Web Design course](https://www.freecodecamp.org/learn/2022/responsive-web-design/). You can see [my sample webpage here](https://varsvisualizes.github.io/mr-whiskers/).

Full disclosure: I majorly overshot what could be accomplished in an hour. Our webpages really turned out something like this:

![mySite2_sample](https://github.com/varsvisualizes/creative-coding-classes/assets/47091936/5f51e9da-e059-4210-8e73-7b93dfb2fddf)

Initially, I felt disappointed that I couldn't help my class achieve the full vision I'd had in mind. However, for the attendees, it was - for the most part - their true first time coding anything, ever. That alone makes the outcome wildly special. They've jumped the hurdle of not knowing anything: now they know they can learn to code, because they've got the proof. My hope is that they will continue to grow and make even cooler things in the future.

I made a PDF full of resources, challenge ideas, and more web design fun - check it out in the PDF folder!

# Resources

## Circuit Playground

NOTE: As of late 2023, something's been up with CircuitPython burning onto the Circuit Playgrounds. The bootloader itself is messed up - the forums were all in a fuss about it, and I couldn't get any of the CircuitPlaygrounds running using Circuit Python. It drove me bananas for a solid 8 hours. Hopefully by the time you get your hands on a Circuit Playground, should you decide to try CircuitPython, the issue will be resolved. If not, good old Arduino is there for you.

* Hardware & Software
  * [Purchasing through Adafruit](https://www.adafruit.com/product/3333) (you can also use Digi-Key, Sparkfun, even Amazon)
  * [Setting Up CircuitPython](https://learn.adafruit.com/adafruit-circuit-playground-bluefruit/overview)
  * [Setting Up Arduino](https://learn.adafruit.com/introducing-circuit-playground/arduino)
* Learning Resources
  * The Arduino's Circuit Playground library will come with examples to try, so definitely explore those
  * [Tutorial ideas from Adafruit's page](https://learn.adafruit.com/category/bluefruit)
  * [John Gallagher's Circuit Python school](https://www.youtube.com/playlist?list=PL9VJ9OpT-IPSsQUWqQcNrVJqy4LhBjPX2)

I created a PDF for easily referencing functions in CircuitPython - check it out in the PDF folder!

## p5.js 
* [p5.js](https://p5js.org/)
* CodingTrain videos
  * [Nature of Code 2 playlist](https://thecodingtrain.com/tracks/the-nature-of-code-2)
  * [General YouTube channel](https://www.youtube.com/@TheCodingTrain)
* [HappyCoding tutorials](https://happycoding.io/tutorials/p5js/)

## Processing
* [Processing](https://processing.org/)
* [CodingTrain videos](https://www.youtube.com/watch?v=2VLaIr5Ckbs&list=PLRqwX-V7Uu6ZYJC7L-r6rX6utt6wwJCyi)
* ["The Nature of Code" by Daniel Shiffman](https://natureofcode.com/)
* [HappyCoding tutorials](https://happycoding.io/tutorials/processing/)

## Web Design & Front-End Development

* Learning
  * Udemy
    * Free with a library card!
    * I like Angela Yu's 100 Days of Full-Stack Development, and 100 Days of Python :)
  * CodeAcademy
    * Listed in the library's resource page, but much of the content is paywalled - I'm not sure if a library account is available for this site??
  * [freeCodeCamp](https://www.freecodecamp.org/)
* Doing
  * [VS Code Text Editor](https://code.visualstudio.com/)
    * I download this software so I can use the Live Server extension - that way I can see my work as I update it!
  * [CodePen](https://codepen.io/)

 ## Miscellanea

 You've made it this far. Here are some things I just think are neat.

 * [sadgrl.online personal webpage things](https://goblin-heart.net/sadgrl/projects/)
 * [JavaScript Neko pet](https://webneko.net/)
 * Circuit Playground Express + Crochet Skills = [DIY Dance Dance Revolution Mat](https://www.youtube.com/shorts/4NJ3nWqSJL4)
 * [The Arduino Uno tutorials I followed to get started in physical computing](https://learn.adafruit.com/experimenters-guide-for-metro/intro)
 * [Maya Man](https://www.mayaontheinter.net/), because I kind of love her
 * [Tigris Li](https://tigris.li/Work), with whom I am also obsessed
 * [Simone Giertz](https://www.simonegiertz.com/), the roboticist who really started it all for me
 * [Wearable robotics](https://urbanarmor.org/)
 * [KOBAKANT DIY](https://www.kobakant.at/DIY/)
 * [My dream home decor](https://youtube.com/shorts/43BV6Us-Deo?si=8DMUiDg84jvEjrG9)
