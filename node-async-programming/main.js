var fs = require('fs');
var async = require('async');
var start = new Date().getTime();
var files = fs.readdirSync('.');

//for (var i = 0; i < files.length; i++) {
//    if (stat.isFile()) {
//        console.log(content);
//    }
//}

fs.readFile(file).then( function success(content){}, function(error){});


async.each(files,
    function readfile(file, done){
        console.log('read file');
        fs.stat(file, function afterReadStat(err, stat){
            if ( stat.isFile() ){
                fs.readFile(file, function afterReadFile(err, content){
                    done();
                });
            }else{
                done();
            }
        });
    },
    function readAll(){
        console.log('finished all');
        var end = new Date().getTime();
        console.log(end-start);
    }
);



