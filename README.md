###Ciliora-Secunda for gnome-shell 

---

* [Compatibility](#compatibility)
* [Installation](#installation)
* [Login Screen](#login-screen)
* [Tips](#tips)
* [Contributing](CONTRIBUTING.md)
* [Development](#development)
* [Preview](#preview)

---

####Compatibility

The latest version of this theme is on the master branch, and it supports gnome-shell `3.20`.

For older versions, check the available [releases](../../releases).

---

####Installation

* Move the `Ciliora-Secunda` directory into `~/.themes`.

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

    * If you already have a folder/file named `Ciliora-Secunda` in your `.themes` dir, it will be __deleted__.

* **Compile sass** whenever certain files change. _(Open `gulpfile.js` to see what files/folders are being watched.)_

* **Autoreload the theme** on save. _(No more `alt-f2 + rt`. :+1:)_

---

#####Generating the gresource file

You can use the provided `gresource-gen` script to generate a gresource from the theme (into the repo's root dir by default.)  
Make sure to update the `asset_dirs` variable in case you change your dirs.

**Script dependencies:**

* glib-compile-schemas
* gdk-pixbuf-pixdata

**You should know how to restore the default theme in case the generated file is not working and crashes gnome-shell.**

---

<img src="http://orig12.deviantart.net/9173/f/2016/232/4/4/ciliora_secunda_shell_by_zagortenay333-d86qzm2.png" id="preview">
<sup>**Screenshot info:** [Wallpaper](http://nosphere.deviantart.com/art/Ns-Wp-03-447969721), [Icons](https://github.com/moka-project/moka-icon-theme)</sup>
