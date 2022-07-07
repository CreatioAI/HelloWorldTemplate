'use strict';

const Generator = require('yeoman-generator');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = class extends Generator { 
    
    async prompting() {
      const {templateName} = await this.prompt([
        {
          name: "templateName",
          message: "What is your template name?"
        },
      ]);
      this.templateName = templateName;
    }

    writing() {
      mkdirp.sync(path.join('template', 'Assets'));
      mkdirp.sync(path.join('template', 'Scenes'));
      const destinationPathTemplate = path.resolve('template', `template_${this.templateName}.json`);
      const destinationPathScene = path.resolve(`template/Scenes`, `scene1.json`);
      const destinationPathImage = path.resolve(`template/Assets`, `image1.png`);
      const destinationPathPackage = path.resolve(`./`, `package.json`);
      const destinationPathWebpack = path.resolve(`./`, `webpack.config.js`);

      this.fs.copyTpl(
        this.templatePath('template.json'),
        this.destinationPath(destinationPathTemplate),
        { templateName: `${this.templateName}` }
      );
      this.fs.copyTpl(
        this.templatePath('example_scene.json'),
        this.destinationPath(destinationPathScene),
      );
      this.fs.copyTpl(
        this.templatePath('example_image.png'),
        this.destinationPath(destinationPathImage),
      );
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath(destinationPathPackage),
      );
      this.fs.copyTpl(
        this.templatePath('webpack.config.js'),
        this.destinationPath(destinationPathWebpack),
      );
    }

    end() {
      this.log(' ');
      this.log('NEXT STEP: ');
      this.log('To generate the zip run: $ npm run package');
    }
    
  };