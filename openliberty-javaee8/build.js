#!/usr/bin/jjs -fv
var cmd = "docker build --no-cache -t airhacks/openliberty-javaee8 ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
