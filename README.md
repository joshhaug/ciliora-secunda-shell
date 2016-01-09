###Ciliora-Secunda for gnome-shell 

---

* [Installation](#installation)
* [Login Screen](#login-screen)
* [Tips](#tips)
* [Compatibility](#compatibility)
* [Contributing](#contributing)
* [Development](#development)
* [Preview](#preview)

---

####Installation

* Put the `Ciliora-Secunda` folder into your `~/.themes` directory.

* Install the user-themes extension, and apply the theme in gnome-tweak-tool.

---

####Login Screen

In order to apply this theme to your login screen, move the `gnome-shell-theme.gresource` file into the `usr/share/gnome-shell` dir and restart gnome-shell.

* **Make sure that you backup the previous file before doing this!**

* **Be very careful when doing this! You could potentially break GDM and have a hard time logging back in if you screw up.**

* **Other themes won't look good until you restore the default root theme.**

* **Although rare, updates to the system could restore the old theme.**

---

####Tips

* To get rid of the overview background pattern, edit the gnome-shell.css file at selector `#overview`.

* To remove/change the activities icon, edit the gnome-shell.css file at selector `#panelActivities`. If you don't want to use an icon here, just get rid of that selector. The `menu-icons` folder contains a bunch of icons that you can try. :smile:

* To increase the max height of the calendar popup, edit the gnome-shell.css file at selector `#calendarArea`.

---

####Compatibility

The latest version of this theme is on the master branch, and it supports gnome-shell `3.18`.

For older versions, check the available [releases](../../releases).

---

####Development

This theme is written using the css preprocessor [sass](http://sass-lang.com/).  

You should use the provided `gulpfile.js` for improved workflow.

---

**In order to use gulp:**

* Install [nodejs](https://nodejs.org/) and [npm](https://www.npmjs.com/).
    * **NOTE:** If you want to contribute, make sure you run the nodejs version from the `.nvmrc` file. Use [Nvm.](https://github.com/creationix/nvm)

* Install [gulp](http://gulpjs.com/) globally:

        $ npm i -g gulp

* In the directory where the `gulpfile.js` file is, run:

    ```
    $ npm i
    ```

* In the same dir, run the following to use gulp:

    ```
    $ gulp
    ```

---

**Gulp will:**

* **Make a symlink of the** `Ciliora-Secunda` **folder inside the** `~/.themes` **dir.**

    * It will create a `~/.themes` dir if it doesn't exist already.

    * Even if you change the location of your working directory, running `gulp` will update the link.

    * **NOTE:** Make sure you don't have a folder named `Ciliora-Secunda` in this dir when you first run gulp.

* **Compile sass** whenever certain files change. _(Open `gulpfile.js` to see what files/folders are being watched.)_

* **Autoreload the theme** on save. _(No more `alt-f2 + rt`. :+1:)_

---

<img src="http://orig09.deviantart.net/6ca8/f/2016/002/3/8/ciliora_secunda_shell_by_zagortenay333-d86qzm2.png" id="preview">
<sup>**Screenshot info:** [Wallpaper](http://nosphere.deviantart.com/art/Ns-Wp-03-447969721), [Icons](http://samuelhewitt.com/moka)</sup>
