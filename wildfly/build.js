#!/usr/bin/jjs -fv
var cmd = "docker build -t airhacks/wildfly:12.0.0.Final ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);