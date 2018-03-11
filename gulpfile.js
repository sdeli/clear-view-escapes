/*
GULP AUTOMATISATION FILE

Most important methods
	gulp.task
	gulp.start
	gulp.watch

to create a procedure which can be called from the command line like: gulp procedure-name call
gulp.task("name" function(){ ... })

*/

require("./gulp/tasks/style.js");
require("./gulp/tasks/watch.js");