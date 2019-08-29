@echo off
:wmic process where "commandline like '%%-jar gtd%%'" call terminate
::set path=C:\Program Files\Java\jre1.8.0_181\bin
set path=D:\Program Files\Java\jre8\bin
START "gtd" "%path%\javaw" -server -XX:MetaspaceSize=64m -XX:MaxMetaspaceSize=64m -Xms256m -Xmx512m -Xmn256m -Xss256k -XX:SurvivorRatio=8 -XX:+UseConcMarkSweepGC -jar gtd.jar
pause