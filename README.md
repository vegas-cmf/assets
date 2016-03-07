Vegas CMF Assets
================

To provide easiness of maintaining assets we prepared grunt and gulp tasks which allow you to download all dependencies from vendor directory. We have specified unique name - `vegas.json` - to store project's dependencies (and their overrides) in external libraries.

#### Example vegas.json

```json 
{
    "dependencies": {
        "bootstrap": "3.1.0"
    },
    "exportsOverride": {
        "bootstrap": {
            "js": [
                "dist/js/*.js",
                "dist/js/*.map"
            ],
            "css": [
                "dist/css/*.css",
                "dist/css/*.map"
            ],
            "fonts": "dist/fonts/*.*"
        }
    }

}
```

### Requirements

#### Grunt

```sh
$ npm install --global grunt-cli
```

#### Gulp

__If you have previously installed a version of gulp globally, please run `npm rm --global gulp`
to make sure your old version doesn't collide with gulp-cli.__

```sh
$ npm install --global gulp-cli
```

### Basic setup

Add the following script commands to your composer.json file

#### Grunt commands:

```shell
"scripts": {
    "post-install-cmd": [
        "cp -n ./vendor/vegas-cmf/assets/Gruntfile.js ./Gruntfile.js",
        "cp -n ./vendor/vegas-cmf/assets/grunt_package.json ./package.json",
        "cp -n ./vendor/vegas-cmf/assets/bower.json ./bower_base.json"
    ],
    "post-update-cmd": [
        "cp -n ./vendor/vegas-cmf/assets/Gruntfile.js ./Gruntfile.js || true",
        "cp -n ./vendor/vegas-cmf/assets/grunt_package.json ./package.json || true",
        "cp -n ./vendor/vegas-cmf/assets/bower.json ./bower_base.json || true"
    ]
}
```

#### Gulp commands:

```shell
"scripts": {

    "post-install-cmd": [
        "cp -n ./vendor/vegas-cmf/assets/gulpfile.js ./gulpfile.js",
        "cp -n ./vendor/vegas-cmf/assets/gulp_package.json ./package.json",
        "cp -n ./vendor/vegas-cmf/assets/bower.json ./bower_base.json"
    ],
    "post-update-cmd": [
        "cp -n ./vendor/vegas-cmf/assets/gulpfile.js ./gulpfile.js || true",
        "cp -n ./vendor/vegas-cmf/assets/gulp_package.json ./package.json || true",
        "cp -n ./vendor/vegas-cmf/assets/bower.json ./bower_base.json || true"
    ]
}
```

Run composer update or install command 

```shell
php composer.phar update
```

Install NPM packages

```shell
npm install
```
> Note: Use sudo in case of permission problems

### Run

Merge all assets to bower file and run bower install by a simple shell command

```shell
grunt
```

or:

```shell
gulp
```

#### Custom options

You can also run bower install or bower update task without merging assets from vendor. For grunt:

```shell
grunt bower:update // update

grunt bower:install // install
```

For gulp:

```shell
gulp bower
```
