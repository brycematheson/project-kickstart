# New Project Kickstart
I got sick of remaking the same files and folders and everything, and so here is my basic new project template. It comes complete with my custom gulp file that includes tasks for minimizing css, concatenating css, autoprefixing, concatenating javascript files, minifying javascript files, livereload, and lots more.

# Instructions
1. Install node by visiting https://nodejs.org/download/. You can check to see if node is already installed by typing `npm -v` in a terminal. If you see anything OTHER than a number (i.e. 1.4.28), then you need to install node.

2. Install gulp by entering `sudo npm install -g gulp` in your terminal. You can check to see that gulp is already installed by typing `gulp -v`.

3. Once those two dependencies are installed, navigate to your project directory. Then type `git clone https://github.com/brycematheson/project-kickstart.git`.

4. Next, type `sudo npm install`. This will look through the package.json file and check for any missing dependencies.

5. Once that finishes, type `gulp` to begin the Gulp task.

6. In your favorite text editor (I prefer Sublime), make changes to the files in the `src` directory. Gulp will automatically watch these files, and reload any changes upon saving.

7. Additionally, you can have gulp automatically reload `index.html` in your browser by installing the 'LiveReload' browser extension in Chrome.

Happy coding!
