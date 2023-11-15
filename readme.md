# Visit the Balkans

This microsite is designed to present the Balkans as a unique destination offering a diversity of cultures, histories, landscapes, and traditions to explore.  

I structured the site around geographic specificity, ensuring each country within the Balkans region was adequately represented. This allows users to delve into each country individually, offering a comprehensive look at each destination.

## Implementation Decisions

The overall design and development of the website were guided by the objective of showcasing the Balkans' cultural and geographical diversity. I implemented a number of features to create an engaging, informative, and user-friendly interface.

- The **slide-in navigation sidebar** provides users with an overview of the website's contents, and enables quick access to each page. The navigation sidebar is accessible from the menu button in the global header, which is designed as a bordered word menu for increased affordance ([Interaction Design Foundation, 2023](#references)).

- The **hero section** is designed to engage users as soon as they land on the webpage. This section on the homepage includes a call-to-action to highlight the purpose of the website. On the country pages, the section gives a brief overview of the country's highlights before the user delves into the content. This approach aims to quickly capture user interest and guide them towards meaningful interactions.

- **Flexbox rows and grids** are utilised for the layout to create a responsive design that maintains its integrity across different screen sizes. This decision was motivated by the need for adaptability and visual consistency across multiple devices.


```CSS
    /* Media query for screens with max width of 992px, adjusting the flex direction 
    for tablet and mobile displays */
    @media screen and (max-width: 992px) {
        /* Change the flex direction of the row class to column */
        .row {
            flex-direction: column;
        }

        /* Adjust the width and height of image elements within the main section */
        main img {
            width: 100%;
            height: 50vw;
        }
    }
```

- A **call-to-action module** is placed at the bottom of each page to encourage users to download a travel brochure. This decision was driven by the goal of increasing user engagement and retention.

## Mockups vs Prototype

The initial mockups served as a blueprint during the development phase, outlining the website's layout, contents, colour scheme, and typography. I made some minor adjustments during the prototype phase to improve usability, performance, and aesthetics.

### Homepage

![Homepage mockup and prototype](/assets/images/readme-home.png)

- The mockups initially included a row of flag icons for the top navigation, with the menu button appearing on smaller devices. User feedback highlighted questions about whether these flags are widely identifiable, and if they would be recognised as navigation buttons. Accordingly, I **replaced the flag icons with a menu button** in the prototype so that users can immediately discern its purpose.

- Users expressed concerns about the readability of text overlayed on images. To address this, I **added text shadows to improve contrast** and add dimension to the overall layout. In addition, I added box shadows to the featured countries section, call-to-action module, and footer to highlight important content.

### Country Pages

![Country page mockup and prototype](/assets/images/readme-country.png)

- Users reported difficulties with identifying details in the country page images. In response to this, I **increased the size of the images** to enhance the visual appeal of the site but also provide users with a more immersive experience. By increasing the size of the images, users are able to get a more detailed visual representation of each country, enhancing their overall user experience.

- Users communicated frustration with scrolling back up to the top of country pages to access the menu. To improve the user experience, I **added a 'back-to-top' button** that appears once users start scrolling down the page. This button, when clicked or tapped, uses smooth scrolling to seamlessly take the user back to the top of the page. I chose to implement this button rather than a sticky navigation as it is less visually obstructive.

## Future Iterations/Improvements

There is a number of potential enhancements for future iterations:

- Adding interactivity to the map of the Balkans on the homepage, as an additional means of navigation and to provide a more immersive user experience.

- Improving the website content, such as the addition of links to external websites, to provide users with a more engaging platform and inspiring them to explore further. The website aims to be a valuable point of reference for users interested in travelling to the Balkans. More detailed, action-oriented content can also improve user engagement, increase returning visitors, and potentially lead to higher conversion rates.

## References

- 350 .org. (2010). Serbia: Rafting on the River Tara (National Park) [Photograph]. Flickr. https://www.flickr.com/photos/350org/5067327911
- Acka27. (2007). _Novi Sad | The center of the city_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Novi_Sad_-_Vojvodina.jpg
- Aleksic, I. (2011). _Nous on map_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Nis_center.JPG
- Bijonse. (2013). _Кањонот Матка 17 km југозападно од Скопје претставува кањон на реката Треска, која е десна притока на реката Вардар едиствената околна убавина ги привлекува и кајкарите, алпинистите,риболовците и нуркачите_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Matka_Canyon_,_112.JPG
- Bjeladinović, V. N. S. (n.d.). _A mixed train at the train station in Herceg Novi heading to Zelenika_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Narrow-Gauge-Railway_Dalmatinerbahn_Station-Herceg-Novi_(4).jpg
- Bonč. (2012). _Štrukli iz restorana "Okrugljak" u Zagrebu, pečeni (ispred) i kuhani (iza) servirani u jednom tanjuru_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:%C5%A0trukli_iz_Okrugljaka.jpg
- Buha, M. (2018). Nacionalni park Biogradska gora, najstarije zaštićeno prirodno dobro u Crnoj Gori [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Biogradska_gora_-_National_Park,_the_oldest_protected_natural_resource_in_Montenegro_14.jpg
- Chatriwala, O. (2013). _Making dua_ [Photograph]. Flickr. https://www.flickr.com/photos/omarsc/9276954150
- chrmoe. (2013). _zagreb @ night_ [Photograph]. Flickr. https://www.flickr.com/photos/fourme/10562438864
- CJ. (2012). _Mostar - Souvenir Shop_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Mostar_souvenir_shop.jpg
- Darlin, S. H. (2022). _Ohrid, North Macedonia_ [Photograph]. Flickr. https://www.flickr.com/photos/sharonhahndarlin/52347551819
- Dejan. (2008). _Synagogue in Subotica_ [Photograph]. Flickr. https://www.flickr.com/photos/serbianmess/2825812170/
- Delso, D. (2017). Anfiteatro de Pula, Croacia [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Anfiteatro_de_Pula,_Croacia,_2017-04-17,_DD_22-24_HDR.jpg
- dronepicr. (2019). _Aerial view of the Adriatic Sea at Stiniva Bay on Vis island in Croatia_ [Photograph]. Flickr. https://www.flickr.com/photos/132646954@N02/48608804397
- dronepicr. (2019). _The turquoise waters of the Adriatic Sea at Stiniva Bay on Vis island in Croatia_ [Photograph]. Flickr. https://www.flickr.com/photos/132646954@N02/48608659171
- Dufresne, D. (2007). _Cetinje, Montenegro_ [Photograph]. Flickr. https://www.flickr.com/photos/davduf/580368944
- Dufresne, D. (2007). _Mostar, Bosnia & Hercegovina_ [Photograph]. Flickr. https://www.flickr.com/photos/davduf/625441216/
- Duran242. (2017). _Центр города Битола, Македония_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Bitola_city,_Tito_street,_Macedonia.jpg
- Eminov, A. (2018). _A street in Old town (Čaršija), Skopje_ [Photograph]. Flickr. https://www.flickr.com/photos/aliarda/44574632971
- Eminov, A. (2018). _Some of Catherine's souvenirs from Macedonia: Opinci & slippers on apron_ [Photograph]. Flickr. https://www.flickr.com/photos/aliarda/30685435448
- Erskine-Kellie, J. (2018). _Blagaj, Dervish House and Buna River_ [Photograph]. Flickr. https://www.flickr.com/photos/jocelyn777/44304160421/
- Explorer1940. (2009). _Parade of ethnic costumes_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Ohrid_--_Ethnic_costumes,_Macedonia_01.jpg
- Europa Nostra. (2019). Belgrade Fortress and its Surroundings, SERBIA [Photograph]. Flickr. https://www.flickr.com/photos/europanostra/49173292613
- _Farmers' Market and Gazi Husrev-beg's Mosque at Baščaršija in the early 1960s_ [Photograph]. (n.d.). Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Sarajevo_Bascarsija_Market_Mosque_(2).jpg
- Freepik. (n.d.) _260 free icons of country flags designed by Freepik_ [Icons]. Flaticon. https://www.flaticon.com/packs/countrys-flags
- Ggia. (2009). _Crkva Gospa od Zdravlja_ [Photograph]. Wikipedia. https://en.wikipedia.org/wiki/File:20090719_Crkva_Gospa_od_Zdravlja_Kotor_Bay_Montenegro.jpg
- Grigorik, I. (2016). _Plitvice Lakes National Park Croatia_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Plitvice_Lakes_National_Park_Croatia_%28163088369%29.jpeg
- grvstudio. (n.d.). _Extra virgin olive oil_ [Photograph]. Freepik. https://www.freepik.com/premium-photo/extra-virgin-olive-oil_39506232.htm
- Halford, K. (2005). _Sarajevo, Bosnia_ [Photograph]. Flickr. https://www.flickr.com/photos/kashklick/45391729
- Halki, J. (2014). _View of Bay of Kotor from Mount Lovcen, Montenegro_ [Photograph]. Flickr. https://www.flickr.com/photos/120420083@N05/14898156558
- Imeao. (2020). _belgrade_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Belgrade_night_view_6.jpg
- Interaction Design Foundation. (2023, October 17). _Simple guidelines when you design for Mobile_. The Interaction Design Foundation. https://www.interaction-design.org/literature/article/designing-for-the-mobile-environment-some-simple-guidelines
- Işık, İ. (2015). _Bosnian Coffee Džezva 2_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Bosnian_Coffee_D%C5%BEezva_2_%28118608691%29.jpeg
- Janicek, P. (2016). _KOTOR_ [Photograph]. Flickr. https://www.flickr.com/photos/marsupilami92/25214140831
- JESHOOTS.com. (2017). _Photo of Person Writing on Notebook_ [Photograph]. Pexels. https://www.pexels.com/photo/photo-of-person-writing-on-notebook-834897/
- Jose, S. (2006). _Blank political map of Europe as in year 2006 by CIA WF European map_ [Map]. Wikipedia. https://en.wikipedia.org/wiki/File:Blank_political_map_Europe_in_2006_WF.svg
- Lehner, A. (2013). _Montenegro Ulcinj 2012 - Street fruit market_ [Photograph]. Flickr. https://www.flickr.com/photos/lehnin78/9298685483
- Magelan Travel. (2010). _Streets - Belgrade, Serbia_ [Photograph]. Flickr. https://www.flickr.com/photos/whltravel/4276605102
- Menkinoski, Z. (2011). _Anticki teatar -- Ohrid_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Anticki_teatar_--_Ohrid_1.jpg
- Milošević, P. (2012). _Bus transport in Belgrade, Serbia. Line No. 17 Konjarnik - Zemun_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Belgrade_bus_transport.JPG
- nalut86. (2009). _Prijepolje,Serbia...Mileseva,Serbian orthodox monastery..._ [Photograph]. Flickr. https://www.flickr.com/photos/29667720@N08/3971818605
- Nikolovski, D. (2013). _Охрид, Македонија_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Ohrid_$_%2826%29.JPG
- OpenAI. (2023). _ChatGPT_ (Sep 25 version) [Large language model]. https://chat.openai.com/chat
- Paut, Liubomir. (n.d.). _View at town Trogir, old touristic place in Croatia Europe with seagull's flying over city. Trogir town coastal view. Magnificent Trogir, Croatia. Sunny old Venetian town, Dalmatian Coast in Croatia_ [Photograph]. Adobe Stock. https://stock.adobe.com/au/images/view-at-town-trogir-old-touristic-place-in-croatia-europe-with-seagull-s-flying-over-city-trogir-town-coastal-view-magnificent-trogir-croatia-sunny-old-venetian-town-dalmatian-coast-in-croatia/241070666
- Pudelek. (2014). _Skopje, Macedonia - Archeological Museum of Macedonia and Bridge of Civilizations_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Skopje_2014_-_Archeological_Museum_of_Macedonia.JPG
- Recław, J. (2015). _Podgorica panorama_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Podgorica_panorama.jpg
- sailn1. (2015). _Lamb Peka_ [Photograph]. Flickr. https://www.flickr.com/photos/moondance38/19312342960
- Savchenko, N. (2016). Novi Sad [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Novi_Sad_%2830174503215%29.jpg
- Serhii, Z. (2018). _Gradske zidine i utvrde_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg
- Shanahan, Y. (2019). _Serbian Ćevapi_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Serbian_%C4%86evapi.jpg
- Skelanard. (2018). _A view of Sarajevo from the Yellow Fortress_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:A_view_of_Sarajevo_from_the_Yellow_Fortress.jpg
- Ssofija. (2017). _Ajvar on a slice of bread_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:%D0%90%D1%98%D0%B2%D0%B0%D1%80_%D0%B8_%D0%BB%D0%B5%D0%B1.jpg
- Tafreshi. (2015). _A man playing his guitar on a beach in Honolulu_ [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Man_playing_guitar_on_beach_%28iauga15-d1-21%29.jpg
- Vemaps. (2019). Grey Map of Bosnia and Herzegovina [Map]. Vemaps. https://vemaps.com/bosnia-and-herzegovina/ba-03
- Vemaps. (2019). _Grey Map of Croatia_ [Map]. Vemaps. https://vemaps.com/croatia/hr-03
- Vemaps. (2019). _Grey Map of Macedonia_ [Map]. Vemaps. https://vemaps.com/macedonia/mk-03
- Vemaps. (2019). _Grey Map of Montenegro_ [Map]. Vemaps. https://vemaps.com/montenegro/me-03
- Vemaps. (2019). _Grey Map of Serbia_ [Map]. Vemaps. https://vemaps.com/serbia/rs-03
- Verch, M. (2018). _Split Harbour, Croatia_ [Photograph]. Flickr. https://www.flickr.com/photos/30478819@N08/41631768182