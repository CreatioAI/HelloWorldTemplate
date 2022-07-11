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
      const {visibility} = await this.prompt([
        {
          name: "visibility",
          message: "Do you want your template to be public or private? Type Public or Private"
        },
      ]);
      const {owner} = await this.prompt([
        {
          name: "owner",
          message: "Who is the owner of the template?"
        },
      ]);
      this.templateName = templateName;
      this.visibility = visibility;
      this.owner = owner;
    }

    writing() {
      mkdirp.sync(path.join('template', 'Assets'));
      mkdirp.sync(path.join('template', 'Scenes'));
      const destinationPathTemplate = path.resolve('template', `template_${this.templateName}.json`);
      const destinationPathScene1 = path.resolve(`template/Scenes`, `scene1.json`);
      const destinationPathScene2 = path.resolve(`template/Scenes`, `scene2.json`);
      const destinationPathVideo = path.resolve(`template/Assets`, `video1.mp4`);
      const destinationPathGif = path.resolve(`template/Assets`, `preview.gif`);
      const destinationPathPackage = path.resolve(`./`, `package.json`);
      const destinationPathWebpack = path.resolve(`./`, `webpack.config.js`);

      this.fs.copyTpl(
        this.templatePath('template.json'),
        this.destinationPath(destinationPathTemplate),
        { templateName: `${this.templateName}`,
          visibility: `${this.visibility}`,
          owner: `${this.owner}` }
      );
      this.fs.copyTpl(
        this.templatePath('example_scene1.json'),
        this.destinationPath(destinationPathScene1),
      );
      this.fs.copyTpl(
        this.templatePath('example_scene2.json'),
        this.destinationPath(destinationPathScene2),
      );
      this.fs.copyTpl(
        this.templatePath('example_video.mp4'),
        this.destinationPath(destinationPathVideo),
      );
      this.fs.copyTpl(
        this.templatePath('example_gif.gif'),
        this.destinationPath(destinationPathGif),
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