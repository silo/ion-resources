# ion-resources

Base on [https://github.com/AlexDisler/cordova-splash](https://github.com/AlexDisler/cordova-splash) and [https://github.com/AlexDisler/cordova-icon](https://github.com/AlexDisler/cordova-icon) and [https://github.com/helixhuang/ionic-resources](https://github.com/helixhuang/ionic-resources)

Automatic splash screen and icon generator for Cordova/Ionic alternative for ionic cloud generator.
Create a splash screen (2732x2732) and an icon (1024x1024) once in the resources folder of your Cordova project and use cordova-resgen to automatically crop and copy it for all the platforms your project supports (currenty works with iOS, Android and Windows 10).

### Installation
Install it globally:
`$ npm install ion-resources -g`
run it with:
``ion-resources``
or install it locally:
`$ npm install ion-resources --save`
then you can run it like this:
`./node-modules/.bin/ion-resources`

### Requirements

- GraphicsMagick installed (*Mac*: `brew install graphicsmagick`, *Debian/Ubuntu*: `sudo apt-get install graphicsmagick`, *Windows*: [See here](http://www.graphicsmagick.org/INSTALL-windows.html))
- At least one platform was added to your project ([cordova platforms docs](http://cordova.apache.org/docs/en/edge/guide_platforms_index.md.html#Platform%20Guides))
- Cordova's config.xml file must exist in the root folder ([cordova config.xml docs](http://cordova.apache.org/docs/en/edge/config_ref_index.md.html#The%20config.xml%20File))

### Usage

Create a `splash.png` and a 'icon.png' file in the root folder of your cordova project and run:

    $ ionic-resources
    $ ionic-resources --icon
    $ ionic-resources --splash


### License

MIT
