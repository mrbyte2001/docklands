#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/java:9 -t airhacks/java9 ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
