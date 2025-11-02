@echo off
cd /d "C:\Users\Disath Damsutha\Desktop\my-website"

git add .
git commit -m "Auto update at %date% %time%"
git push origin main

echo.
echo ✅ Auto update complete!
timeout /t 60 >nul
