@echo off
wmic process where "commandline like '%%-jar gtd%%'" call terminate
pause