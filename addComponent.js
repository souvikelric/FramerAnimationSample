import path from "node:path";
import fs from "node:fs/promises";
import sync_fs from "fs";
import {fileURLToPath} from "node:url";
const fileName = fileURLToPath(import.meta.url);
const base_dir = path.dirname(fileName);

//get ex-paths variable which is described below and sample output is shown
const ex_paths = path.parse(base_dir);

// console.log(fileName);

// gets the current directory from where the command is being run
// console.log(process.env.INIT_CWD);

//gets the directory in which the test script resides
console.log(base_dir);
let extension = "jsx";
if(sync_fs.existsSync(path.resolve(base_dir,"tsconfig.json"))){
    extension = "tsx";
}

// resolves to an object as follows :
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\s.s.roy.chowdhury\\OneDrive - Accenture\\Desktop\\demo-react\\framer-examples',
//     base: 'framer3',
//     ext: '',
//     name: 'framer3'
//   }
// console.log(ex_paths);

let argsList = process.argv.slice(2)

if(argsList.length > 0){
    let componentFolder = argsList[0];
    let base_folder;
    let componentPath;
    if(argsList.length > 1){
        base_folder = argsList[1];
        componentPath = path.resolve(base_dir,'src',base_folder,componentFolder);
        // console.log(componentPath);
    }else{
        base_folder = 'components'
        componentPath = path.resolve(base_dir,'src',base_folder,componentFolder);
        // console.log(componentPath);
    }
    await fs.mkdir(componentPath,{recursive:true});
    console.log("Folder Created");
    // console.log(componentPath);

    async function createFile(){
        try{
        await fs.writeFile(`${componentPath}/${componentFolder}.${extension}`,"let x = 0");
        await fs.writeFile(`${componentPath}/${componentFolder}.module.css`,"");
        console.log("required files created")
        }
        catch(error){
            console.error("Error creating file",error);
        }
    }
    createFile();
}
else {
    console.log("No name provided for component")
}