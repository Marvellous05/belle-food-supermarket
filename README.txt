BELLE FOOD & SUPERMARKET WEBSITE
================================

This is the updated premium/mobile-first version.

1. PUT YOUR FILES IN assets/
--------------------------------
Use these exact filenames for the videos/images already shown in your VS Code folder:

hero.mp4
asunjollofvideo.mp4
freshFishPepperSoup.mp4
goatMeatPepperSoup.mp4
parfait.mp4
supermarket.mp4
logo.jpg
pexels-laudiatsr-10886018.jpg
Screenshot_20260904-141200.jpg

The website intentionally ignores goatMeat2.mp4 for now.

2. SUPERMARKET VIDEO
--------------------
Shorten supermarket.mp4 yourself to roughly 20–35 seconds, then replace the old file with the shortened file using the same filename: supermarket.mp4.

3. LOGO
--------
The site is wired to assets/logo.jpg, matching the filename in your VS Code folder.
If you rename it, change SITE.logo at the top of script.js.

4. WHATSAPP
-----------
Open script.js and replace:
  whatsapp: "234XXXXXXXXXX"
with the real Nigerian WhatsApp number, digits only.
Example format:
  whatsapp: "2348012345678"

5. GOOGLE MAPS
--------------
The Get Directions button already uses the Google Maps link supplied for Belle Food.
No large embedded map is used anymore.

6. VIDEO BEHAVIOUR
------------------
Videos are muted, autoplay, looping and have no controls.
The hero starts immediately. Other videos are played when they are near the screen and paused after leaving the screen to reduce CPU/battery/data use.

7. MENU CONTENT
---------------
No fake prices were added. Use WhatsApp to ask for current availability/prices.

8. DEPLOY
---------
Upload the whole folder to Netlify, GitHub Pages, or another static host. Keep the assets folder beside index.html.
