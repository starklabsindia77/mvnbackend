const Guid = require('guid');
const fs = require('fs');
exports.convertBase64ToFile = async (attahedFileCode, attachmentType) =>{
    const base64String = attahedFileCode;
    if(base64String && base64String.length <= 50){
      return attahedFileCode;
    }
    // Replace dots and @ with underscores in the email for the folder name
    let base64Data;
    if(attachmentType == "png" || attachmentType == "jpg" || attachmentType == "jpeg") {
        base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');
        const fileName = Guid.create().value+"."+attachmentType;
        const folderPath = 'attachments';
        // Check if the folder exists, if not, create it.
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
        const filePath = `${folderPath}/${fileName}`;
        fs.writeFile(filePath, buffer, (err) => {
        if (err) throw err;
            console.log('The file has been saved!');
        });
        const attachmentPath = fileName;
        return attachmentPath;
    } else if(attachmentType == "pdf"){
        base64Data = base64String.replace(/^data:application\/\w+;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');
        const fileName = Guid.create().value+"."+attachmentType;
        const folderPath = `attachments`;
        const filePath = `${folderPath}/${fileName}`;
        fs.writeFile(filePath, buffer, (err) => {
        if (err) throw err;
            console.log('The file has been saved!');
        });
        const attachmentPath = fileName;
        return attachmentPath
    } else {
            console.log('only jpeg, jpg, png  and pdf allowed');
    }
  }