var fs = require('fs');

fs.readdir('./', function(err, files) {
    if (err) throw err;
    //zostawiam do zapytania dlaczego w pętli for files[f] zwraca zawsze ostatni plik zamiast tego przez który przechodzi pętla skoro argument data jest prawidłowy???
    /*for ( f in files ) {
        var fileArr = files[f].split('.');
        var fileName = fileArr[0] + '_copy.' + fileArr[1];
        fs.readFile(files[f], 'utf-8', function(err, data) {     
            if (err) throw err;
            fs.writeFile(fileName, data, function(err) {
                if (err) throw err;
                console.log(files[f] + ' saved as ' + fileName);
            });
        });
        
    }*/
    files.forEach(function(file) {
        var fileArr = file.split('.');
        var fileName = fileArr[0] + '_copy.' + fileArr[1];
        fs.readFile(file, 'utf-8', function(err, data) {
            if (err) throw err;            
            fs.writeFile(fileName, data, function(err) {
                if (err) throw err;
                console.log(file + ' saved as ' + fileName);
            });
        });
    });
});