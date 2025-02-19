const fse = require('fs-extra');
fse.mkdirpSync('text-file1');
const file = 'text-file1/file1.txt';
fse.ensureFileSync(file);
fse.mkdirpSync('text-file2');
fse.moveSync('text-file1/file1.txt','text-file2/file1.txt');
fse.mkdirpSync('text-file3');
fse.copySync('text-file2/file1.txt','text-file3/file1.txt');
fse.removeSync('text-file2/file1.txt');
 fse.removeSync('text-file3/file1.txt');
fse.removeSync('text-file1');
fse.removeSync('text-file2');
fse.removeSync('text-file3');

