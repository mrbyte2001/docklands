#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/java:1.8 -t airhacks/java8 ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
