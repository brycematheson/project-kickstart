# New Project Kickstart
For every new freelance website that I do, I got sick of recreating the same files and folders. This is my attempt at building a basic new project template. It comes complete with my custom gulp file that includes tasks for minimizing css, concatenating css, autoprefixing, concatenating javascript files, minifying javascript files, livereload, and more.

# Instructions
1. If node is not already installed on your machine, you can do so by by visiting https://nodejs.org/download/. The install process is quick. You can check to see that you already have node installed on your machine by typing `npm -v` in a terminal. If you see anything OTHER than a number (i.e. 1.4.28), then you need to install node.

2. Next, install gulp globally by entering `sudo npm install -g gulp` in your terminal. Again, you can check to see that gulp is already installed on your machine by typing `gulp -v`.

3. Once node and gulp are installed, navigate clone this repo to your local machine by typing `git clone https://github.com/brycematheson/project-kickstart.git`. Then `cd` into the 'project-kickstart' folder. You can rename this if you'd like.

4. Next, type `sudo npm install`. This will look through the package.json file and install any missing dependencies required by the gulp file. Be patient, this could take a while.

5. Once that finishes, type `gulp` to begin the Gulp task.

6. In your favorite text editor (I prefer Sublime), make changes to the files in the `src` directory. Gulp will automatically watch these files, and rerun the various tasks if it detects any changes to the files.

7. LiveReload is also supported in the gulpfile. Install the 'LiveReload' extension (https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CB4QFjAA&url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Flivereload%2Fjnihajbhpnppcggbcgedagnkighmdlei%3Fhl%3Den&ei=EYwTVaigBYiegwSVhoLgAQ&usg=AFQjCNE3uLWl-7EsJ9SPxfbqp4JErdhiTQ&sig2=n0iCjBfdqBOhqqrzn1KOhg&bvm=bv.89217033,d.eXY), enable it, and then open `build/index.html` in your browser. Upon making changes, Chrome and Gulp will automatically update to reflect.

Happy coding!
