
var fs = require('fs');

module.exports = function(grunt) {

  grunt.registerMultiTask('testsetup', 'Symlink vendor files from modules.', function() {

    var src = this.file.src;
    var dest = this.file.dest;

    try{

      // describe paths for symlink
      console.log('dest', dest);
      console.log('src', src);

      // process symlink
      fs.symlinkSync(src, dest, 'file');

      // get paths and log success
      var rel = dest.substr(0, dest.lastIndexOf('/') + 1);
      grunt.log.ok('created symlink at ' + dest + 
        ' that points to ' + src +
        ' (relative to ' + rel +')'
      );
    }
    catch(e){
      if (e.code === 'EEXIST'){

        // link already exists
        return grunt.log.error(dest + ' already exists, skipping');
      }
      grunt.fail.warn(e);
    }


  });

};