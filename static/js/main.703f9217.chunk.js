(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/author.15ceff50.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/profile-example2.34afc4f1.png"},52:function(e,t,a){e.exports=a.p+"static/media/likes-animation.2893eb72.gif"},53:function(e,t,a){e.exports=a.p+"static/media/summary-en.4f608080.png"},60:function(e,t,a){e.exports=a(74)},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(7),l=a.n(s),r=a(29),o=a(17),u=a(36),m=a(37),d=a(40),c=a(25),h=a(110),p=a(111),g=a(16),k=a(114),f=a(108),y=function(e){return n.a.createElement(k.a,{display:"flex",justifyContent:"flex-end"},n.a.createElement(f.a,null,n.a.createElement(g.b,{to:{pathname:e.link1Route}},e.link1),n.a.createElement(g.b,{to:{pathname:e.link2Route}},e.link2)))},v=(a(31),function(e){return n.a.createElement("header",{className:"header"},n.a.createElement(h.a,{maxWidth:"lg"},n.a.createElement(p.a,{container:!0,spacing:3},n.a.createElement(p.a,{item:!0,xs:3},n.a.createElement("strong",{className:"logo"},n.a.createElement(g.b,{to:"/top-7-android-games/"},n.a.createElement("svg",{width:"33",height:"33",viewBox:"0 0 79.6 69"},n.a.createElement("polygon",{fill:"#FFFFFF",points:"50.9,64.1 71.3,64.1 56.2,38.1 41.3,64.1 38.4,69 0,69 39.8,0 59,33.2 79.6,69 48.1,69"}))))),n.a.createElement(p.a,{item:!0,xs:9},e.nav.map((function(e,t){return n.a.createElement(y,{key:t,link1:e.link1,link2:e.link2,link1Route:e.link1Route,link2Route:e.link2Route})}))))))}),b=function(e){return n.a.createElement("article",{className:"article"},n.a.createElement("h3",null,e.title),n.a.createElement("p",null,e.textPrev),n.a.createElement("iframe",{width:"100%",height:"400px",src:e.url,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),n.a.createElement("p",null,e.textNext),n.a.createElement("a",{href:e.link,className:"storeLink"},e.linkText))},w=a(50),E=a.n(w),x=function(e){return n.a.createElement("div",{className:"sidebar-article"},n.a.createElement("p",null,e.item.title),n.a.createElement("img",{src:E.a,alt:"author"}),n.a.createElement("strong",null,"David McCourt"))},j=n.a.createContext(),S=function(){return n.a.createElement(j.Consumer,null,(function(e){return e?e.map((function(e,t){return n.a.createElement(x,{key:t,item:e})})):null}))},A=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("main",{className:"main"},n.a.createElement(h.a,{maxWidth:"lg"},n.a.createElement("h1",null,this.props.mainTitle[0].text),n.a.createElement(p.a,{container:!0,spacing:3},n.a.createElement(p.a,{item:!0,md:8},this.props.articles.map((function(e,t){return n.a.createElement(b,{key:t,title:e.title,url:e.url,textPrev:e.textPrev,textNext:e.textNext,link:e.link,linkText:e.linkText})}))),n.a.createElement(p.a,{item:!0,md:4},n.a.createElement(S,null)))))}}]),t}(i.Component),T=a(51),P=a.n(T),N=a(52),D=a.n(N),I=a(53),G=a.n(I),R=function(e){return n.a.createElement("div",{className:"guide"},n.a.createElement(h.a,{maxWidth:"lg"},n.a.createElement("h1",null,e.articles[0].mainTitle),n.a.createElement("section",{className:"buildInfo"},n.a.createElement("h3",null,e.articles[0].title1),n.a.createElement(p.a,{container:!0,spacing:3},n.a.createElement(p.a,{item:!0,xs:4,sm:2,md:1},n.a.createElement("img",{src:P.a,alt:"profile",className:"profileImg"})),n.a.createElement(p.a,{item:!0,xs:8,sm:10,md:11},n.a.createElement("p",null,e.articles[0].text1)))),n.a.createElement("section",{className:"buildInfo"},n.a.createElement("h3",null,e.articles[0].title2),n.a.createElement(p.a,{container:!0,spacing:3},n.a.createElement(p.a,{item:!0,xs:4,sm:3,md:1},n.a.createElement("img",{src:D.a,alt:"profile",className:"likesImg"})),n.a.createElement(p.a,{item:!0,xs:8,sm:9,md:11},n.a.createElement("p",null,e.articles[0].text2)))),n.a.createElement("section",{className:"buildInfo"},n.a.createElement("h3",null,e.articles[0].title3),n.a.createElement(p.a,{container:!0,spacing:3},n.a.createElement(p.a,{item:!0,sm:6},n.a.createElement("img",{src:G.a,alt:"profile",className:"summaryImg"})),n.a.createElement(p.a,{item:!0,sm:6},n.a.createElement("p",null,e.articles[0].text3))))))},F=a(112),z=a(113),L=a(115),M=Object(F.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1)}},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}})),C=function(e){console.log(e);var t=e.texts[0],a=M();return n.a.createElement("div",{className:"contacts"},n.a.createElement(h.a,{maxWidth:"lg"},n.a.createElement("h1",null,t.title),n.a.createElement("section",{className:"contact-section"},n.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"off"},n.a.createElement(p.a,{container:!0,spacing:3},n.a.createElement(p.a,{item:!0,xs:12,md:6},n.a.createElement(z.a,{label:t.labelName,style:{margin:8},placeholder:t.placeholderName,fullWidth:!0,margin:"normal"})),n.a.createElement(p.a,{item:!0,xs:12,md:6},n.a.createElement(z.a,{label:t.labelEmail,style:{margin:8},placeholder:t.placeholderEmail,fullWidth:!0,margin:"normal"})),n.a.createElement(p.a,{item:!0,xs:12,md:12},n.a.createElement(z.a,{label:t.labelMessage,style:{margin:8},placeholder:t.placeholderMessage,fullWidth:!0,multiline:!0,rows:"5"}))),n.a.createElement(L.a,{variant:"contained",className:"btn-submit",color:"primary"},"Send")))))},W=function(e){return n.a.createElement("footer",{className:"footer"},n.a.createElement(h.a,{maxWidth:"lg"},n.a.createElement(p.a,{container:!0,spacing:3},n.a.createElement(p.a,{item:!0,xs:2},n.a.createElement("strong",{className:"logo"},n.a.createElement(g.b,{to:"/top-7-android-games/"},n.a.createElement("svg",{width:"33",height:"33",viewBox:"0 0 79.6 69"},n.a.createElement("polygon",{fill:"#FFFFFF",points:"50.9,64.1 71.3,64.1 56.2,38.1 41.3,64.1 38.4,69 0,69 39.8,0 59,33.2 79.6,69 48.1,69"}))))),n.a.createElement(p.a,{item:!0,xs:10},e.nav.map((function(e,t){return n.a.createElement(y,{key:t,link1:e.link1,link2:e.link2,link1Route:e.link1Route,link2Route:e.link2Route})}))))))},B=function(e){return n.a.createElement("ul",{className:"switcher"},n.a.createElement("li",null,n.a.createElement("span",{onClick:e.onClick},"ENG")),"\xa0|\xa0",n.a.createElement("li",null,n.a.createElement("span",{onClick:e.onClick},"DE")),"\xa0|\xa0",n.a.createElement("li",null,n.a.createElement("span",{onClick:e.onClick},"FI")))},K=(a(73),function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={languageApp:"ENG",navLinks:[{lang:"ENG",link1:"Guide",link1Route:"/top-7-android-games/guide",link2:"Contacts",link2Route:"/top-7-android-games/contacts"},{lang:"DE",link1:"Leiten",link1Route:"/top-7-android-games/guide",link2:"Kontakte",link2Route:"/top-7-android-games/contacts"},{lang:"FI",link1:"Opas",link1Route:"/top-7-android-games/guide",link2:"Yhteydet",link2Route:"/top-7-android-games/contacts"}],contacts:[{lang:"ENG",title:"Contacts",labelName:"Your name",placeholderName:"Name",labelEmail:"Your email",placeholderEmail:"Email",labelMessage:"Your message",placeholderMessage:"Message",buttonText:"Send"},{lang:"DE",title:"Kontakte",labelName:"Dein Name",placeholderName:"Name",labelEmail:"Dein email",placeholderEmail:"Email",labelMessage:"Deine Nachricht",placeholderMessage:"Nachricht",buttonText:"Senden"},{lang:"FI",title:"Yhteydet",labelName:"Sinun nimesi",placeholderName:"nimesi",labelEmail:"Sinun email",placeholderEmail:"Email",labelMessage:"Viestisi",placeholderMessage:"Viestisi",buttonText:"L\xe4hett\xe4\xe4"}],sidebarItems:[{lang:"ENG",title:"The 5 best Android smartphones for under $300"},{lang:"ENG",title:"The best true wireless earbuds you can buy in 2019"},{lang:"DE",title:"Die 5 besten Android-Smartphones f\xfcr unter 300 US-Dollar"},{lang:"DE",title:"Die besten echten kabellosen Ohrh\xf6rer, die Sie 2019 kaufen k\xf6nnen"},{lang:"FI",title:"5 parasta Android-\xe4lypuhelinta alle 300 dollaria"},{lang:"FI",title:"Parhaimmat tosi langattomat korvakuulokkeet, joita voit ostaa vuonna 2019"}],guideContent:[{lang:"ENG",mainTitle:"Build your reputation in the world's largest Android community",title1:"What is your level?",text1:"The number next to every user's profile picture is the level of that user. By helping and contributing to the community, you increase your level.The higher your level, the more reputation you have in the community.",title2:"How to get points",text2:"All you need to do is make your posts or comments helpful, insightful, funny or positive and you'll get upvotes. For each upvote you'll get 50 points!",title3:"Summary of your points",text3:"When you visit your own user profile you'll see an overview of your activities. The numbers show you how often each event has occurred. The bars display the proportions of these activities to your overall activity."},{lang:"DE",mainTitle:"Bauen Sie Ihren Ruf in der weltweit gr\xf6\xdften Android-Community auf",title1:"Was ist dein Level?",text1:"Die Zahl neben dem Profilbild jedes Benutzers ist die Ebene dieses Benutzers. Indem Sie helfen und einen Beitrag zur Community leisten, steigern Sie Ihr Level. Je h\xf6her Ihr Level, desto mehr Ansehen haben Sie in der Community.",title2:"Wie bekomme ich Punkte?",text2:"Alles, was Sie tun m\xfcssen, ist, Ihre Posts oder Kommentare hilfreich, aufschlussreich, lustig oder positiv zu gestalten, und Sie erhalten positive Stimmen. F\xfcr jede positive Bewertung erhalten Sie 50 Punkte!",title3:"Zusammenfassung Ihrer Punkte",text3:"Wenn Sie Ihr eigenes Benutzerprofil besuchen, sehen Sie eine \xdcbersicht Ihrer Aktivit\xe4ten. Die Zahlen zeigen Ihnen, wie oft jedes Ereignis aufgetreten ist. In den Balken werden die Anteile dieser Aktivit\xe4ten an Ihrer Gesamtaktivit\xe4t angezeigt."},{lang:"FI",mainTitle:"Rakenna mainettasi maailman suurimmassa Android-yhteis\xf6ss\xe4",title1:"Mik\xe4 on tasosi?",text1:"Jokaisen k\xe4ytt\xe4j\xe4n profiilikuvan vieress\xe4 oleva numero on k\xe4ytt\xe4j\xe4n taso. Auttamalla ja my\xf6t\xe4vaikuttamalla yhteis\xf6\xf6n nostat tasoasi. Mit\xe4 korkeampi tasosi, sit\xe4 enemm\xe4n maineesi sinulla on yhteis\xf6ss\xe4.",title2:"Kuinka saada pisteit\xe4",text2:"Ainoa mit\xe4 sinun t\xe4ytyy tehd\xe4, on tehd\xe4 viesteist\xe4si tai kommentteistasi hy\xf6dyllisi\xe4, oivallisia, hauskoja tai positiivisia ja saat positiivisia \xe4\xe4ni\xe4. Jokaisesta \xe4\xe4nestyksest\xe4 saat 50 pistett\xe4!",title3:"Yhteenveto huomioistasi",text3:"When you visit your own user profile you'll see an overview of your activities. The numbers show you how often each event has occurred. The bars display the proportions of these activities to your overall activity."}],mainTitle:[{lang:"ENG",text:"Feast your eyes on the Android games with the best graphics"},{lang:"DE",text:"Bewundern Sie die Android-Spiele mit der besten Grafik"},{lang:"FI",text:"Nauti silm\xe4si Android-peleist\xe4 parhaalla grafiikalla"}],articles:[{lang:"ENG",title:"Nimian Legends: BrightRidge",link:"https://play.google.com/store/apps/details?id=com.protopop.brightridge",url:"https://www.youtube.com/embed/2WMzFkCcQyE",textPrev:"This single-dev project has been a long time in the making, but still offers one of the most graphically impressive titles on Android to date. This open-world adventure game offers an extensive settings menu to dial up graphical fidelity to suit your smartphones, and the maximum quality on high-end smartphones can be breathtaking.",textNext:"Nimian Legends: Brightridge offers a couple of story modes to play through this lush fantasy world. There are quests to complete and enemies to overcome, and it's also possible to free- roam the game's environment, taking snapshots and shapeshifting your character from different types of humans to creatures like wolves, butterflies, birds or even mighty dragons and Lord of the Rings style tree-men. For 3 bucks with no in-app purchases, there's plenty of keep you entertained, whether you like a challenge or just want to casually explore and discover the beautiful game areas",linkText:"Get it on the Play Store"},{lang:"ENG",title:"Returner 77",link:"https://play.google.com/store/apps/details?id=com.FantasticYes.Returner77",textPrev:"Puzzle games aren't usually known for their fantastic visuals, but Returner 77 is a headscratcher that packages its conundrums in an absolutely beautiful sci-fi world set in a futuristic Earth after an alien invasion. You're tasked with exploring an alien spaceship - you have to figure out how to operate advanced technology with the potential to restore the human race.",url:"https://www.youtube.com/embed/-RiFQTrOp2U",textNext:"While the story provides plenty of atmosphere, it's mainly an excuse to pose some puzzles for you to ponder (seriously, do the aliens really need such complicated doors?). The alien technology in question is built around crystals and light projections which are portrayed with plenty of graphical flourish. The game costs $4.99 , but if that sounds like a lot you can download a demo version and try the first two levels for free.",linkText:"Get it on the Play Store"},{lang:"ENG",title:"Asphalt 9: Legends",link:"https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM",url:"https://www.youtube.com/embed/4_2EIOvFNtY",textPrev:"Gameloft's Asphalt series has established the standard for realistic-looking racing games on Android. The latest iteration, Asphalt 9: Legends, certainly doesn't disappoint when it comes to visuals, featuring the prettiest vehicles for you to live out your automotive fantasies. The wide selection of famous cars (about 50) includes Ferrari, Porsche, Lamborghini and more. Collect prized models such as the Aston Martin Vulcan, Ford GT, Nissan GT-R Nismo, Ferrari 488 GTB, LaFerrari and the McLaren P1, and then drive them around exotic locales. Don't worry about hurting your beautiful car though, Asphalt 9 Legends still encourages aggressive, hi-octane racing where you'll slam your rivals off-road, but always look good while doing it.",textNext:"Gameloft has perfected racing with touch controls, and the incredible graphics really give you an immersive feeling as you speed along the tracks and admire your car. As is tradition with this game series, you can download and play for free, but in-app purchases are there to tempt you if you want the coolest cars straight away.",linkText:"Get it on the Play Store"},{lang:"ENG",title:"Darkness Rises",link:"https://play.google.com/store/apps/details?id=com.nexon.da3.global",textPrev:"We all know the stereotype of the shallow person who you can't help but like because they are seriously really good-looking. Darkness Rises is a free-to-play action RPG that fits this to a T. It's far from the deepest RPG out there - the world is generic and story/levels are basically on-rails, but boy does it have eye-candy in spades.",url:"https://www.youtube.com/embed/Prh1D9gp5Ig",textNext:"There are four archetypal classes to choose from: warrior, sorceress, assassin and barbarian. The game encourages you to have all four on the go. Each class has a different feel and playstyle, as well as different looking weapons and armor. Be warned...only your first character can have their 'beauty' fine-tuned for free (and only once)...after the first time, it costs in-game resources",linkText:"Get it on the Play Store"},{lang:"ENG",title:"Shadowgun Legends",link:"https://play.google.com/store/apps/details?id=com.madfingergames.legends&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT",url:"https://www.youtube.com/embed/ZVWOD0AzO8E",textPrev:"Shadowgun Legends is the latest offering from Madfinger Games, the team behind the graphically impressive zombie apocalypse shooter Dead Trigger 2. It's a first person shooter that boasts beautiful, colorful visuals. Shadowgun Legends is a real treat for the eyes, with lush graphics and a futuristic setting that will remind gamers of classic AAA PC/console titles such as Destiny and Halo.",textNext:"The emphasis given to visuals fits in with the game's economic model, which offers in-app purchases for cosmetic items. However the meat of the game: an extensive single player campaign, as well as multiplayer, versus and co-op team challenges, still looks gorgeous without coughing up dough for the pimp-out loot. ",linkText:"Get it on the Play Store"},{lang:"ENG",title:"Tekken Mobile",link:"https://play.google.com/store/apps/details?id=eu.bandainamcoent.tekkenmobile&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT",textPrev:"Tekken Mobile brings the hugely popular fighting series to mobile, and looks real good doing it. While not the most technical fighting game out on Android, it's certainly the most graphically impressive.",url:"https://www.youtube.com/embed/pp84Kt7CaDg",textNext:"Be warned, Bandai Namco's offering for mobile devices is a different beast from Tekken on other platforms. Nominally free, the game is full of micro-transactions and fiddly in-game currencies and stat-building. The sophisticated controls that characteristic the Tekken games have been scaled down to a limited repertoire of taps and swipes, with 2D movement only",linkText:"Get it on the Play Store"},{lang:"ENG",title:"Sdorica Sunset",link:"https://play.google.com/store/apps/details?id=com.rayark.sdorica&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT",textPrev:"Rayark is known for developing high quality premium paid mobile games, but Sdorica Sunset is the studio's take on that ubiquitous but much-maligned concept, the free-to-play mobile RPG. It's a genre oversaturated with poor-quality offerings, but fortunately, Sdorica Sunset manages to make the free-to-play model shine with a combination of charming design and well-crafted mechanics",url:"https://www.youtube.com/embed/2aY7il7zuNk",textNext:"Battles involve a surprising amount of strategy - discovering what moves different matches perform for which character, and then deploying them at the right time, countering the enemy attack patterns or deploying a character's specific action when it has the most impact. ",linkText:"Get it on the Play Store"},{lang:"DE",title:"Nimian Legends: BrightRidge",link:"https://play.google.com/store/apps/details?id=com.protopop.brightridge",url:"https://www.youtube.com/embed/2WMzFkCcQyE",textPrev:"Dieses Single-Dev-Projekt war lange in der Entwicklung, bietet aber immer noch einen der grafisch eindrucksvollsten Titel f\xfcr Android. Dieses weltoffene Abenteuerspiel bietet ein umfangreiches Einstellungsmen\xfc, mit dem Sie die Wiedergabetreue f\xfcr Ihr Smartphone einstellen k\xf6nnen. Die maximale Qualit\xe4t von High-End-Smartphones ist atemberaubend.",textNext:"Nimian Legends: Brightridge bietet einige Story-Modi zum Durchspielen dieser \xfcppigen Fantasiewelt. Es gibt Quests zu erledigen und Feinde zu \xfcberwinden, und es ist auch m\xf6glich, die Umgebung des Spiels frei zu durchstreifen, Schnappsch\xfcsse zu machen und deinen Charakter von verschiedenen Arten von Menschen zu Kreaturen wie W\xf6lfen, Schmetterlingen, V\xf6geln oder sogar m\xe4chtigen Drachen und Herr der Ringe zu ver\xe4ndern Stil Baum-M\xe4nner. F\xfcr 3 Dollar ohne In-App-K\xe4ufe gibt es jede Menge Unterhaltung, egal ob Sie eine Herausforderung m\xf6gen oder einfach nur die sch\xf6nen Spielbereiche erkunden und entdecken m\xf6chten",linkText:"Laden Sie es im Play Store herunter"},{lang:"DE",title:"Returner 77",link:"https://play.google.com/store/apps/details?id=com.FantasticYes.Returner77",textPrev:"Puzzlespiele sind normalerweise nicht f\xfcr ihre fantastische Grafik bekannt, aber Returner 77 ist ein Headscratcher, der nach einer au\xdferirdischen Invasion seine R\xe4tsel in einer absolut sch\xf6nen Science-Fiction-Welt in einer futuristischen Erde packt. Du musst ein au\xdferirdisches Raumschiff erforschen - du musst herausfinden, wie man fortschrittliche Technologien einsetzt, mit denen die menschliche Rasse wiederhergestellt werden kann.",url:"https://www.youtube.com/embed/-RiFQTrOp2U",textNext:"W\xe4hrend die Geschichte viel Atmosph\xe4re bietet, ist es haupts\xe4chlich eine Ausrede, um ein paar R\xe4tsel zu stellen, \xfcber die Sie nachdenken k\xf6nnen (im Ernst, brauchen die Au\xdferirdischen wirklich so komplizierte T\xfcren?). Die fragliche Alien-Technologie basiert auf Kristallen und Lichtprojektionen, die mit viel grafischem Glanz dargestellt werden. Das Spiel kostet 4,99 US-Dollar, aber wenn das viel klingt, k\xf6nnen Sie eine Demoversion herunterladen und die ersten beiden Levels kostenlos ausprobieren.",linkText:"Laden Sie es im Play Store herunter"},{lang:"DE",title:"Asphalt 9: Legends",link:"https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM",url:"https://www.youtube.com/embed/4_2EIOvFNtY",textPrev:"Gamelofts Asphalt-Serie hat den Standard f\xfcr realistisch aussehende Rennspiele auf Android gesetzt. Die neueste Version, Asphalt 9: Legends, entt\xe4uscht nicht, wenn es um Visuals geht. Sie enth\xe4lt die sch\xf6nsten Fahrzeuge, mit denen Sie Ihre automobilen Fantasien ausleben k\xf6nnen. Die gro\xdfe Auswahl an ber\xfchmten Autos (ca. 50) umfasst Ferrari, Porsche, Lamborghini und mehr. Sammle begehrte Modelle wie den Aston Martin Vulcan, den Ford GT, den Nissan GT-R Nismo, den Ferrari 488 GTB, den LaFerrari und den McLaren P1 und fahre mit ihnen durch exotische Gegenden. Machen Sie sich keine Sorgen, Ihr sch\xf6nes Auto zu verletzen. Asphalt 9 Legends f\xf6rdert weiterhin aggressive Rennen mit hoher Oktanzahl, bei denen Sie Ihre Konkurrenten im Gel\xe4nde schlagen, aber dabei immer gut aussehen.",textNext:"Gameloft hat den Rennsport mit Touch-Steuerung perfektioniert, und die unglaubliche Grafik vermittelt Ihnen ein beeindruckendes Gef\xfchl, wenn Sie \xfcber die Rennstrecken rasen und Ihr Auto bewundern. Wie es bei dieser Spieleserie Tradition ist, k\xf6nnen Sie sie kostenlos herunterladen und spielen, aber In-App-K\xe4ufe sind dazu da, Sie zu verf\xfchren, wenn Sie sofort die coolsten Autos wollen.",linkText:"Laden Sie es im Play Store herunter"},{lang:"DE",title:"Darkness Rises",link:"https://play.google.com/store/apps/details?id=com.nexon.da3.global",textPrev:"Wir alle kennen das Stereotyp einer seichten Person, der man nur zustimmen kann, weil sie wirklich gut aussieht. Darkness Rises ist ein kostenloses Action-Rollenspiel, das zu einem T passt. Es ist weit davon entfernt, das tiefste Rollenspiel der Welt zu sein - die Welt ist generisch und die Story / Levels sind im Grunde genommen auf Schienen, aber der Junge hat einen Hingucker Pik.",url:"https://www.youtube.com/embed/Prh1D9gp5Ig",textNext:"Es stehen vier archetypische Klassen zur Auswahl: Krieger, Zauberin, Attent\xe4ter und Barbar. Das Spiel ermutigt Sie, alle vier auf dem Sprung zu haben. Jede Klasse hat ein anderes Spielgef\xfchl und einen anderen Spielstil sowie unterschiedlich aussehende Waffen und R\xfcstungen. Seien Sie gewarnt ... nur Ihr erster Charakter kann seine 'Sch\xf6nheit' kostenlos (und nur einmal) optimieren ... nach dem ersten Mal kostet es im Spiel Ressourcen",linkText:"Laden Sie es im Play Store herunter"},{lang:"DE",title:"Shadowgun Legends",link:"https://play.google.com/store/apps/details?id=com.madfingergames.legends&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT",url:"https://www.youtube.com/embed/ZVWOD0AzO8E",textPrev:"Shadowgun Legends ist das neueste Angebot von Madfinger Games, dem Team hinter dem grafisch eindrucksvollen Zombie-Apokalypse-Shooter Dead Trigger 2. Es ist ein Ego-Shooter mit einer wundersch\xf6nen, farbenfrohen Grafik. Shadowgun Legends ist ein wahrer Augenschmaus mit \xfcppiger Grafik und einer futuristischen Umgebung, die Gamer an klassische AAA-PC- / Konsolentitel wie Destiny und Halo erinnert.",textNext:"Die Betonung der Grafik passt zum Wirtschaftsmodell des Spiels, das In-App-K\xe4ufe f\xfcr Kosmetikartikel anbietet. Das Wichtigste im Spiel: Eine umfangreiche Einzelspieler-Kampagne sowie Mehrspieler-, Versus- und Koop-Team-Herausforderungen sehen immer noch gro\xdfartig aus, ohne den Teig f\xfcr die Zuh\xe4lter-Beute abzuspucken.",linkText:"Laden Sie es im Play Store herunter"},{lang:"DE",title:"Tekken Mobile",link:"https://play.google.com/store/apps/details?id=eu.bandainamcoent.tekkenmobile&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT",textPrev:"Tekken Mobile bringt die \xe4u\xdferst beliebte Kampfserie auf das Handy und sieht dabei wirklich gut aus. Obwohl es nicht das technischste Kampfspiel f\xfcr Android ist, ist es mit Sicherheit das grafisch beeindruckendste.",url:"https://www.youtube.com/embed/pp84Kt7CaDg",textNext:"Seien Sie gewarnt, das Angebot von Bandai Namco f\xfcr mobile Ger\xe4te unterscheidet sich von Tekken auf anderen Plattformen. Das Spiel ist nominell kostenlos und voller Mikrotransaktionen, komplizierter Spielw\xe4hrungen und der Erstellung von Statistiken. Die ausgekl\xfcgelten Steuerelemente, die f\xfcr die Tekken-Spiele charakteristisch sind, wurden auf ein begrenztes Repertoire an Taps und Swipes mit nur 2D-Bewegung verkleinert",linkText:"Laden Sie es im Play Store herunter"},{lang:"DE",title:"Sdorica Sunset",link:"https://play.google.com/store/apps/details?id=com.rayark.sdorica&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT",textPrev:"Rayark ist bekannt f\xfcr die Entwicklung hochwertiger, kostenpflichtiger Handyspiele, aber Sdorica Sunset ist die Interpretation des allgegenw\xe4rtigen, aber h\xe4ufig b\xf6sartigen Konzepts des Studios, dem kostenlosen mobilen Rollenspiel. Es ist ein Genre, das mit Angeboten von schlechter Qualit\xe4t \xfcberlastet ist, aber gl\xfccklicherweise gelingt es Sdorica Sunset, das frei spielbare Modell mit einer Kombination aus charmantem Design und gut gemachter Mechanik zum Leuchten zu bringen",url:"https://www.youtube.com/embed/2aY7il7zuNk",textNext:"Gefechte beinhalten eine \xfcberraschend gro\xdfe Menge an Strategien: Finden Sie heraus, welche Bewegungen verschiedene Matches f\xfcr welchen Charakter ausf\xfchren, und setzen Sie sie dann zur richtigen Zeit ein, um den feindlichen Angriffsmustern entgegenzuwirken, oder setzen Sie die spezifische Aktion eines Charakters ein, wenn sie den gr\xf6\xdften Einfluss hat.",linkText:"Laden Sie es im Play Store herunter"},{lang:"FI",title:"Nimian Legends: BrightRidge",link:"https://play.google.com/store/apps/details?id=com.protopop.brightridge",url:"https://www.youtube.com/embed/2WMzFkCcQyE",textPrev:"T\xe4m\xe4 yhden kehitt\xe4j\xe4n projekti on ollut pitk\xe4\xe4n tekemisess\xe4, mutta tarjoaa silti yhden graafisesti vaikuttavimmista nimikkeist\xe4 Androidilla. T\xe4m\xe4 avoimen maailman seikkailupeli tarjoaa laajan asetusvalikon, jonka avulla graafinen uskollisuus voidaan valita \xe4lypuhelimiesi mukaan, ja huippuluokan \xe4lypuhelimien maksimilaatu voi olla henke\xe4salpaava.",textNext:"Nimian Legends: Brightridge tarjoaa pari tarinatilaa pelataksesi t\xe4m\xe4n rehev\xe4n fantasiamaailman l\xe4pi. On teht\xe4vi\xe4, jotka on t\xe4ytett\xe4v\xe4, ja viholliset ylitett\xe4viss\xe4, ja on my\xf6s mahdollista vapauttaa pelin toimintaymp\xe4rist\xf6 vapaana, ottaen tilannekuvia ja muotoja, jotka siirt\xe4v\xe4t hahmosi erityyppisist\xe4 ihmisist\xe4 olentoihin, kuten susia, perhosia, lintuja tai jopa mahtavia lohik\xe4\xe4rmeit\xe4 ja Lord of the Rings -sarjaa. tyyli puu-miehet. Kolmella dollarilla ilman sovelluksen sis\xe4isi\xe4 ostoja on paljon viihdett\xe4, olitpa sitten haaste vai haluatko vain rentoutua tutkimaan ja l\xf6yt\xe4m\xe4\xe4n kauniita pelialueita.",linkText:"Hanki se Play Kaupasta"},{lang:"FI",title:"Returner 77",link:"https://play.google.com/store/apps/details?id=com.FantasticYes.Returner77",textPrev:"Pulmapelej\xe4 ei yleens\xe4 tunneta fantastisista visuaaleistaan, mutta Returner 77 on p\xe4\xe4harja, joka pakata rahansa ehdottomasti kauniiseen sci-fi-maailmaan, joka on asetettu futuristiseen maahan ulkomaalaisen hy\xf6kk\xe4yksen j\xe4lkeen. Sinun teht\xe4v\xe4si on tutkia vieraita avaruusaluksia - sinun on selvitett\xe4v\xe4, kuinka edistynytt\xe4 tekniikkaa voidaan k\xe4ytt\xe4\xe4 palauttamalla ihmiskunta.",url:"https://www.youtube.com/embed/-RiFQTrOp2U",textNext:"Vaikka tarina tarjoaa runsaasti ilmapiiri\xe4, se on p\xe4\xe4asiassa tekosyyn\xe4 palapelien asettamiselle pohdintaa varten (tosiaanko tarvitsevatko ulkomaalaiset todella niin monimutkaisia \u200b\u200bovia?). Kyseinen ulkomaalainen tekniikka on rakennettu kiteiden ja valoprojektioiden ymp\xe4rille, joita kuvataan runsaalla graafisella kukoistuksella. Peli maksaa 4,99 dollaria, mutta jos t\xe4m\xe4 kuulostaa paljon, voit ladata esittelyversion ja kokeilla kahta ensimm\xe4ist\xe4 tasoa ilmaiseksi.",linkText:"Hanki se Play Kaupasta"},{lang:"FI",title:"Asphalt 9: Legends",link:"https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM",url:"https://www.youtube.com/embed/4_2EIOvFNtY",textPrev:"Gameloftin Asphalt-sarja on luonut standardin realistisen n\xe4k\xf6isilt\xe4 kilpapeleilt\xe4 Androidilla. Viimeisin toisto, Asphalt 9: Legends, ei varmasti pet\xe4, kun kyse on visuaalista esityksest\xe4, jossa on kauneimmat ajoneuvot, joiden avulla voit el\xe4\xe4 autoteoksesi. Laajaan kuuluisten autojen (noin 50) valikoimaan kuuluu Ferrari, Porsche, Lamborghini ja paljon muuta. Ker\xe4\xe4 arvostettuja malleja, kuten Aston Martin Vulcan, Ford GT, Nissan GT-R Nismo, Ferrari 488 GTB, LaFerrari ja McLaren P1, ja aja sitten niit\xe4 eksoottisten alueiden ymp\xe4ri. \xc4l\xe4 ole huolissasi siit\xe4, ett\xe4 vahingoittat kaunista autoasi, Asphalt 9 Legends kannustaa silti aggressiivisia, hi-oktaanil\xe4istett\xe4vi\xe4 kilpa-aikoja, joissa ly\xf6 kilpailijaasi maastossa, mutta n\xe4yt\xe4t aina hyv\xe4lt\xe4 tekeess\xe4\xe4n sit\xe4.",textNext:"Gameloft on hienostanut kilpa-ohjausta kosketuss\xe4\xe4timill\xe4, ja uskomaton grafiikka antaa sinulle todella kiehtovan tunteen kiihdytt\xe4ess\xe4si teill\xe4 ja ihailemalla autoasi. Kuten t\xe4m\xe4n pelisarjan perinne, voit ladata ja pelata ilmaiseksi, mutta sovelluksen sis\xe4iset ostot houkuttelevat sinua, jos haluat viileimm\xe4t autot heti.",linkText:"Hanki se Play Kaupasta"},{lang:"FI",title:"Darkness Rises",link:"https://play.google.com/store/apps/details?id=com.nexon.da3.global",textPrev:"Me kaikki tied\xe4mme stereotyypin matalasta henkil\xf6st\xe4, jolle et voi auttaa, mutta pid\xe4t siit\xe4, koska he ovat todella todella hyv\xe4nn\xe4k\xf6isi\xe4. Darkness Rises on ilmaiseksi pelattava toiminta-RPG, joka sopii t\xe4h\xe4n T: lle. Se ei ole kaukana syvimm\xe4st\xe4 RPG: st\xe4 - maailma on yleinen ja tarina / tasot ovat pohjimmiltaan kiskoilla, mutta poikalla on siin\xe4 silm\xe4karkkia pata.",url:"https://www.youtube.com/embed/Prh1D9gp5Ig",textNext:"Valittavana on nelj\xe4 arkkityyppist\xe4 luokkaa: soturi, velho, salamurhaaja ja barbaari. Peli kannustaa sinua olemaan kaikki nelj\xe4 liikkeell\xe4. Jokaisella luokalla on erilainen tunnelma ja leikkityyli, samoin kuin eri n\xe4k\xf6iset aseet ja panssarit. Varoita, ett\xe4 vain ensimm\xe4isen hahmoni voi \u201ckauneuden\u201d hienos\xe4\xe4t\xe4\xe4 ilmaiseksi (ja vain kerran) ... ensimm\xe4isen kerran se maksaa pelin sis\xe4iset resurssit",linkText:"Hanki se Play Kaupasta"},{lang:"FI",title:"Shadowgun Legends",link:"https://play.google.com/store/apps/details?id=com.madfingergames.legends&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT",url:"https://www.youtube.com/embed/ZVWOD0AzO8E",textPrev:"Shadowgun Legends on Madfinger Games -yhti\xf6n viimeisin tarjous, joka on graafisesti vaikuttavan zombie-apokalypsisy\xf6ritt\xe4j\xe4n Dead Trigger 2: n takana oleva joukkue. Se on ensimm\xe4isen persoonan ampuja, jolla on kauniit, v\xe4rikk\xe4\xe4t visuaalit. Shadowgun Legends on todellinen herkku silmille rehev\xe4ll\xe4 grafiikalla ja futuristisella ymp\xe4rist\xf6ll\xe4, joka muistuttaa pelaajia klassisista AAA PC / -konsolinimikkeist\xe4, kuten Destiny ja Halo.",textNext:"Visuaalinen painotus sopii pelin taloudelliseen malliin, joka tarjoaa kosmeettisten tuotteiden sovelluksen sis\xe4isi\xe4 ostoja. Pelin liha: laaja yhden pelaajan kampanja, samoin kuin moninpelin versio ja co-op-joukkueen haasteet, n\xe4ytt\xe4\xe4 silti upealta ilman ymm\xe4rryst\xe4 taikinaa pimp-out ry\xf6st\xe4j\xe4lle.",linkText:"Hanki se Play Kaupasta"},{lang:"FI",title:"Tekken Mobile",link:"https://play.google.com/store/apps/details?id=eu.bandainamcoent.tekkenmobile&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT",textPrev:"Tekken Mobile tuo eritt\xe4in suositun taistelusarjan matkapuhelimeen ja n\xe4ytt\xe4\xe4 todella hyv\xe4lt\xe4 tekem\xe4ll\xe4 sit\xe4. Vaikka se ei olekin teknisin taistelupeli Androidilla, se on varmasti graafisesti vaikuttavin.",url:"https://www.youtube.com/embed/pp84Kt7CaDg",textNext:"Varoita, Bandai Namcon tarjoama mobiililaite on erilainen peto kuin Tekken muilla alustoilla. Nimellisesti ilmainen, peli on t\xe4ynn\xe4 mikrotapahtumia ja siististi pelin sis\xe4isi\xe4 valuuttoja ja tilastoja. Tekken-peleille ominaiset hienostuneet s\xe4\xe4timet on pienennetty rajatuksi hana- ja pyyhk\xe4isyohjelmaan, vain 2D-liikkeell\xe4",linkText:"Hanki se Play Kaupasta"},{lang:"FI",title:"Sdorica Sunset",link:"https://play.google.com/store/apps/details?id=com.rayark.sdorica&referrer=utm_source%3DAndroidPIT%26utm_medium%3DAndroidPIT%26utm_campaign%3DAndroidPIT",textPrev:"Rayark tunnetaan kehitett\xe4v\xe4n korkealaatuisia maksettuja mobiilipelej\xe4, mutta Sdorica Sunset on studion omaksuma tuo kaikkialla oleva, mutta paljon malloitu konsepti, vapaasti pelattava mobiili RPG. Se on tyylilaji, joka on tyydyttynyt huonolaatuisilla tarjouksilla, mutta onneksi Sdorica Sunset onnistuu saamaan vapaasti pelattavan mallin loistamaan yhdist\xe4m\xe4ll\xe4 vieh\xe4tt\xe4v\xe4 muotoilu ja hyvin muotoillut mekaniikka",url:"https://www.youtube.com/embed/2aY7il7zuNk",textNext:"Taisteluihin sis\xe4ltyy yll\xe4tt\xe4v\xe4n suuri m\xe4\xe4r\xe4 strategiaa - selvitet\xe4\xe4n, mit\xe4 liikkeit\xe4 eri ottelut suorittavat jollakin hahmolla, ja sitten otetaan ne k\xe4ytt\xf6\xf6n oikeaan aikaan, torjutaan vihollisen hy\xf6kk\xe4ysmalleja tai otetaan k\xe4ytt\xf6\xf6n hahmon tietty toiminta, kun sill\xe4 on eniten vaikutuksia.",linkText:"Hanki se Play Kaupasta"}]},a.switchHandler=function(e){a.setState({languageApp:e.target.textContent})},a.filteredArticles=function(){return a.state.articles.filter((function(e){return e.lang===a.state.languageApp}))},a.filteredMainTitles=function(){return a.state.mainTitle.filter((function(e){return e.lang===a.state.languageApp}))},a.filteredNav=function(){return a.state.navLinks.filter((function(e){return e.lang===a.state.languageApp}))},a.filteredSidebar=function(){return a.state.sidebarItems.filter((function(e){return e.lang===a.state.languageApp}))},a.filteredGuideContent=function(){return a.state.guideContent.filter((function(e){return e.lang===a.state.languageApp}))},a.filteredContactsContent=function(){return a.state.contacts.filter((function(e){return e.lang===a.state.languageApp}))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(j.Provider,{value:this.filteredSidebar()},n.a.createElement(n.a.Fragment,null,n.a.createElement(B,{onClick:this.switchHandler}),n.a.createElement(v,{nav:this.filteredNav(),lang:this.state.languageApp}),n.a.createElement(c.a,{path:"/top-7-android-games/",exact:!0,render:function(t){return n.a.createElement(A,Object.assign({},t,{lang:e.state.languageApp,mainTitle:e.filteredMainTitles(),articles:e.filteredArticles()}))}}),n.a.createElement(c.a,{path:"/top-7-android-games/guide",render:function(t){return n.a.createElement(R,Object.assign({},t,{lang:e.state.languageApp,articles:e.filteredGuideContent()}))}}),n.a.createElement(c.a,{path:"/top-7-android-games/contacts",render:function(t){return n.a.createElement(C,Object.assign({},t,{lang:e.state.languageApp,texts:e.filteredContactsContent()}))}}),n.a.createElement(W,{nav:this.filteredNav(),lang:this.state.languageApp})))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n.a.createElement(g.a,null,n.a.createElement(K,null));l.a.render(O,document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[60,1,2]]]);
//# sourceMappingURL=main.703f9217.chunk.js.map