# presentation
(slide 1) <br>
Hello, my name IS Danil. I am a student of Rolling Scopes school.
Theme of my presentation is canvas, lets figure out what is it.
I propose get to our favorite MDN and W3C and try to find the answer to the question: what is canvas? <br>
(slide 2)<br>
We will find there the following:
- Canvas is HTML 5 element, part of HTML5 API
- Used for drawing and animation directly in HTML, with JS scripting
- Created by Apple for dashboard widgets
- Now openly developed as a W3C spec

Good, but I still have no idea what it is.
Ok, what can it do?<br>
(slide 3.1)<br>
Documentation will show us next:
- Draw shapes, images and text on the fly
- Respond to user input
- Animation without Flash (It's cool, I don't need to confirm the permission start Flash)
- Create interactive charts and graphs

Sounds cool, byt i prefer to see it.
Let's try to find the examples on the same W3C.<br>
(slide 3.2)<br>
You can draw line, circle, text?<br>
(slide 3.3)<br>
 Wow, it can draw  gradient too. And we need to write seven lines of code  and some of them is function that take strange arguments. Not impressive. Maybe we just forget about it and use photoshop?
Let’s give the last chance and try to find examples of work with canvas in google.<br>
(slide 3.4)<br>
And we can find img on canvas. It looks better.<br>
(slide 3.5)<br>
Graphic on canvas. It is useful.<br>
(slide 3.6)<br>
Site with animation<br>
(slide 3.7)<br>
Animation can be responsive<br>
(slide 3.8)<br>
And even games on canvas.<br>
You proved your competence.
 I cannot wait to start use it, but first, let's take a look at your supporting.<br>
 (slide 4)<br>
As wee see it’s real good.<br>
 (slide 5.1)<br>
Getting started<br>
 (slide 5.2)<br>
At first add tag canvas to HTML file and some styles. ADD border to see position of our canvas.
Height and width need to be set explicitly via attributes. 
Most browsers will display the <canvas> element with the following default values: height: 150px, width: 300px;  
For example, if we set the width of canvas via CSS equal 500px, element on the page will take 500px but inside canvas will be 300px;
Text between opening  and closing  tags will show up (appears), when browser don’t support this API.
ID is not neсessary, but we will need it in future
Let’s look what we create<br>
 (slide 5.3)<br>
As expected, some area with  green border.
Next thing that we need to understand, before move on, it's how shapes position in canvas.<br>
 (slide 5.4)<br>
Canvas uses the standard screen-based coordinate system.<br>
 (slide 5.5)<br>
You should agree it’s hard to orient. That’s why we add prepared grid to our canvas.<br>
 (slide 5.6)<br> And we will get smth like that.
Next we need to create JS file.<br> 
 (slide 5.7)<br>
First we get our element with the help of getElementById. Then we should take context.
we will use 2D rendering context. 
There is also other contex, for example, WebGL uses 3D context.
But what is context?
 (slide 5.8)<br>
Need to understand that the canvas is initially blank. To display something, a script first needs to access the rendering context and draw on it.
Later, we always will use it.
Unlike SVG, <canvas> only supports one primitive shape: rectangles. All other shapes must be created by combining one or more paths, lists of points connected by lines. 
Luckily, we have an assortment of path drawing functions.
 (slide 5.9)<br>
One of them is fillRect - Draws a filled rectangle. Where x and y specify the position on the canvas, width and height provide the rectangle's size.
Oh, great. Let’s try to create smth else.
 (slide 5.10)<br>
To draw the line, we need:
  - Set up path
  - Start position
  - End position
  - Use the method stroke to draw the line<br>
  
  (slide 5.11)<br>
Black color is boring. 
If we want to make our shapes colorful, we need to add property fillStyle and strokeStyle. And width to make line wider.<br>
(slide 5.12)<br>As good students, we should  to clear board, so we use clearRect.
Оk,  now we can draw simple figures. If we сombined them and add some of animation, could happen smth more or less interesting. 
Let’s do it.<br>
(slide 6.1)<br>
First. We create a circle.<br>
(slide 6.2)<br>
Second. We create another circle.<br>
(slide 6.3)<br>
Then we add the text that we transform and rotate<br>
(slide 6.4)<br>
Take a picture, and add it too.<br>
(slide 6.5)<br>
Cool, we have a nice static picture. But I want to add some dynamic.<br>
(slide 6.6)<br>
Pattern to create animation is next:
  - Remember all the shapes on the canvas
  - Clear the canvas
  - More shapes, transform, or make them interact
  - Redraw shapes with new position
  - Loop through<br>
  
 (slide 6.7)<br>
And we got something like this<br>
 (slide 7)<br> Thank you





















