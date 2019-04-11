###Approach
-----------------
Starting from my boilerplate-checklist repository (https://github.com/rainyleaf/boilerplate-checklist), which is a repo I've been working from in the last day or so for practice. It's FSA's boilerplate + some functionality from other Fullstack workshops.

Also taking some stuff from my Grace Shopper project from Fullstack.

###The Stack:
 - React and Redux frontend
 - postgreSQL database
 - Sequelize for models and querying
 - Express api
 - Material UI for styling (if time allows) because it's way faster than trying to flexbox my way to victory

####1.5 hr plan (until 4pm)
-------------------
#####Tier 1:
 - database models: x
    - user x
        - name, password. Covered already in boilerplate.
    - clothingItem x
        - category (string: top, pants, shorts, dress, skirt, underwear, socks, head, accessory, other)
        - imageUrl (url) - in normal circumstances I would not reference images hosted somewhere I don't control, but in the interest of time I'm going to do that today instead of downloading a bunch of images of clothes
        - dominant color (probably will use https://github.com/lokesh/color-thief if time permits)
            - string for now, but this will be changed to an array of ints when the color thief library is incorporated
        - heaviness (int - 1-5 range with 1 being lightest)
  - associations: x
    - user hasMany clothingItem
    - clothingItem belongsTo user (not many to many because I'm thinking this would start out small and personal, with not many people having the same exact article of clothing. Plus, different levels of wear (mostly from washing it) can alter the color of clothes. My pants aren't as black as my shirt!)

  - seed x

 - components:
    - all-clothing: displays all images. You can click them to see details.
    - clothing-details: displays details for one article of clothing.
    - add-clothing: Form for adding a new clothing article to your colleciton.