# Hello World Template generator
Yeoman generator for custom templates

## How to use the Creatio Template generator 

Supported [Node](https://nodejs.org/es/) version: **v16.15.1**
```bash
$ node -v 
```

Install [Yeoman](https://yeoman.io/):
```bash
$ npm install -g yo
```
 
Download and install the generator via npm:
```bash
$ npm i -g @creatioai/generator-helloworldtemplate
```
 
Use the yeoman:
```bash
$ yo @creatioai/helloworldtemplate
```
 
Once we have the structure of the template in the *"template"* folder, modify the *.json* files (*template_name.json* and *sceneXX.json* in the *"Scenes"* folder) to fill in the desired information and add the necessary assets in the *"Assets"* folder.
 
With the desired content inside *"template"* folder, we can now generate the zip, executing on our machine:
```bash
$ npm run package
```
 
We will have created a *"packages"* folder, with the content of our template and inside, a *"package"* folder, which contains the *.zip* file that we need to upload to the web page in order to create the template.
 
Finally, it is recommended to delete the *"packages"* and *"template"* folders once the template has been uploaded and we make sure that everything is fine.
 
**Note:** The lines in this tutorial that start with "$" are commands to be executed on a console.
