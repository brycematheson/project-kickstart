# New Project Kickstart
For every new freelance website that I do, I've noticed a lot of redundancy. I finally got red up with recreating the same files and folders over and over again. This repo solves that by having a ready-built template to start from.

It comes complete with my custom gulp file that includes the following tasks:
* Autoprefixes CSS (up to the last 2 browser versions)
* Minifies the CSS
* Concatenates CSS
* Compresses/optimized images
* Minifies HTML
* Concatenates JS
* Minifies JS
* Terminal Error Handling
* LiveReload

# Instructions
1. If node is not already installed on your machine, you can do so by by visiting https://nodejs.org/download/. The install process is quick. You can check to see that you already have node installed on your machine by typing `npm -v` in a terminal. If you see anything OTHER than a number (i.e. 1.4.28), then you need to install node.

Additionally, you can update node/npm by using the following commands:

    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable

2. Next, install gulp globally by entering `sudo npm install -g gulp` in your terminal. Again, you can check to see that gulp is already installed on your machine by typing `gulp -v`.

3. Once node and gulp are installed, clone this repo to your local machine by typing `git clone https://github.com/brycematheson/project-kickstart.git`. Then `cd` into the 'project-kickstart' folder. You can rename this if you'd like.

4. Next, type `sudo npm install`. This will look through the package.json file and install any missing dependencies required by the gulp file. Be patient, this could take a while.

5. Once that finishes, type `gulp` to begin the Gulp task.

6. In your favorite text editor (I prefer Sublime), make changes to the files in the `src` directory. Gulp will automatically watch these files, and rerun the various tasks if it detects any changes to the files.

7. LiveReload is also supported in the gulpfile. Install the 'LiveReload' extension (https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en), enable it, check the box under the extension settings that says "Allow access to file URLs", and then open `build/index.html` in your browser. Upon making changes, Chrome and Gulp will automatically update to reflect.

Happy coding!
