
const moviesMock = [
    { "id": 1, "title": "Guns of Navarone, The", "year": 1993, "cover": "http://si.edu/nonummy/maecenas/tincidunt/lacus/at.json?rhoncus=parturient&mauris=montes&enim=nascetur&leo=ridiculus&rhoncus=mus&sed=vivamus&vestibulum=vestibulum&sit=sagittis&amet=sapien&cursus=cum&id=sociis", "description": "0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟", "duration": 1, "contentRating": "-$1.00", "source": "Action|Adventure|Drama|War" },
    { "id": 2, "title": "Valiant", "year": 2008, "cover": "https://tamu.edu/felis/eu/sapien/cursus/vestibulum.png?purus=a&eu=odio&magna=in&vulputate=hac&luctus=habitasse&cum=platea&sociis=dictumst&natoque=maecenas&penatibus=ut&et=massa&magnis=quis&dis=augue&parturient=luctus&montes=tincidunt&nascetur=nulla&ridiculus=mollis&mus=molestie&vivamus=lorem&vestibulum=quisque&sagittis=ut&sapien=erat&cum=curabitur&sociis=gravida&natoque=nisi&penatibus=at&et=nibh&magnis=in&dis=hac&parturient=habitasse&montes=platea&nascetur=dictumst&ridiculus=aliquam&mus=augue&etiam=quam&vel=sollicitudin&augue=vitae&vestibulum=consectetuer&rutrum=eget&rutrum=rutrum&neque=at&aenean=lorem&auctor=integer&gravida=tincidunt&sem=ante&praesent=vel&id=ipsum&massa=praesent&id=blandit&nisl=lacinia&venenatis=erat&lacinia=vestibulum&aenean=sed&sit=magna&amet=at&justo=nunc&morbi=commodo&ut=placerat&odio=praesent&cras=blandit&mi=nam&pede=nulla&malesuada=integer&in=pede&imperdiet=justo&et=lacinia&commodo=eget&vulputate=tincidunt&justo=eget&in=tempus&blandit=vel&ultrices=pede&enim=morbi&lorem=porttitor&ipsum=lorem&dolor=id&sit=ligula&amet=suspendisse&consectetuer=ornare&adipiscing=consequat&elit=lectus&proin=in&interdum=est&mauris=risus&non=auctor&ligula=sed&pellentesque=tristique&ultrices=in&phasellus=tempus&id=sit&sapien=amet", "description": "̗̺͖̹̯͓Ṯ̤͍̥͇͈h̲́e͏͓̼̗̙̼̣͔ ͇̜̱̠͓͍ͅN͕͠e̗̱z̘̝̜̺͙p̤̺̹͍̯͚e̠̻̠͜r̨̤͍̺̖͔̖̖d̠̟̭̬̝͟i̦͖̩͓͔̤a̠̗̬͉̙n͚͜ ̻̞̰͚ͅh̵͉i̳̞v̢͇ḙ͎͟-҉̭̩̼͔m̤̭̫i͕͇̝̦n̗͙ḍ̟ ̯̲͕͞ǫ̟̯̰̲͙̻̝f ̪̰̰̗̖̭̘͘c̦͍̲̞͍̩̙ḥ͚a̮͎̟̙͜ơ̩̹͎s̤.̝̝ ҉Z̡̖̜͖̰̣͉̜a͖̰͙̬͡l̲̫̳͍̩g̡̟̼̱͚̞̬ͅo̗͜.̟", "duration": 2, "contentRating": "␢", "source": "Adventure|Animation|Children|Comedy|Fantasy|War" },
    { "id": 3, "title": "Since Otar Left (Depuis qu'Otar est parti...)", "year": 1996, "cover": "https://jalbum.net/mattis/egestas.aspx?sit=velit&amet=id&turpis=pretium&elementum=iaculis&ligula=diam&vehicula=erat&consequat=fermentum&morbi=justo&a=nec&ipsum=condimentum&integer=neque&a=sapien&nibh=placerat&in=ante&quis=nulla&justo=justo&maecenas=aliquam&rhoncus=quis&aliquam=turpis&lacus=eget&morbi=elit&quis=sodales&tortor=scelerisque&id=mauris&nulla=sit&ultrices=amet&aliquet=eros&maecenas=suspendisse&leo=accumsan&odio=tortor&condimentum=quis&id=turpis&luctus=sed&nec=ante&molestie=vivamus&sed=tortor&justo=duis", "description": "(╯°□°）╯︵ ┻━┻)  ", "duration": 3, "contentRating": "œ∑´®†¥¨ˆøπ“‘", "source": "Drama" },
    { "id": 4, "title": "For Whom the Bell Tolls", "year": 1997, "cover": "http://amazonaws.com/nunc.jsp?ridiculus=mauris&mus=sit&etiam=amet&vel=eros&augue=suspendisse&vestibulum=accumsan&rutrum=tortor&rutrum=quis&neque=turpis&aenean=sed&auctor=ante&gravida=vivamus&sem=tortor&praesent=duis&id=mattis&massa=egestas&id=metus&nisl=aenean&venenatis=fermentum&lacinia=donec&aenean=ut&sit=mauris&amet=eget&justo=massa&morbi=tempor&ut=convallis&odio=nulla&cras=neque&mi=libero&pede=convallis&malesuada=eget&in=eleifend&imperdiet=luctus&et=ultricies&commodo=eu&vulputate=nibh&justo=quisque&in=id&blandit=justo&ultrices=sit&enim=amet&lorem=sapien&ipsum=dignissim&dolor=vestibulum&sit=vestibulum&amet=ante&consectetuer=ipsum&adipiscing=primis&elit=in&proin=faucibus&interdum=orci&mauris=luctus&non=et&ligula=ultrices&pellentesque=posuere&ultrices=cubilia&phasellus=curae&id=nulla&sapien=dapibus&in=dolor&sapien=vel&iaculis=est&congue=donec&vivamus=odio&metus=justo&arcu=sollicitudin&adipiscing=ut&molestie=suscipit&hendrerit=a&at=feugiat&vulputate=et&vitae=eros&nisl=vestibulum&aenean=ac&lectus=est&pellentesque=lacinia&eget=nisi&nunc=venenatis&donec=tristique&quis=fusce&orci=congue&eget=diam&orci=id&vehicula=ornare&condimentum=imperdiet&curabitur=sapien&in=urna&libero=pretium&ut=nisl&massa=ut&volutpat=volutpat&convallis=sapien", "description": "‫test‫", "duration": 4, "contentRating": "הָיְתָהtestالصفحات التّحول", "source": "Adventure|Drama|Romance|War" },
    { "id": 5, "title": "Safe", "year": 1994, "cover": "https://pcworld.com/primis/in/faucibus/orci/luctus/et.json?libero=morbi&convallis=ut&eget=odio&eleifend=cras&luctus=mi&ultricies=pede&eu=malesuada&nibh=in&quisque=imperdiet&id=et&justo=commodo&sit=vulputate&amet=justo&sapien=in&dignissim=blandit&vestibulum=ultrices&vestibulum=enim&ante=lorem&ipsum=ipsum&primis=dolor&in=sit&faucibus=amet&orci=consectetuer&luctus=adipiscing&et=elit&ultrices=proin&posuere=interdum&cubilia=mauris&curae=non&nulla=ligula&dapibus=pellentesque&dolor=ultrices&vel=phasellus", "description": "(｡◕ ∀ ◕｡)", "duration": 5, "contentRating": "åß∂ƒ©˙∆˚¬…æ", "source": "Action|Crime|Thriller" },
    { "id": 6, "title": "Girl Walks Into a Bar", "year": 1996, "cover": "http://simplemachines.org/dis/parturient.html?ipsum=nibh&primis=quisque&in=id&faucibus=justo&orci=sit&luctus=amet&et=sapien&ultrices=dignissim&posuere=vestibulum&cubilia=vestibulum&curae=ante&nulla=ipsum&dapibus=primis&dolor=in&vel=faucibus&est=orci&donec=luctus&odio=et&justo=ultrices&sollicitudin=posuere&ut=cubilia&suscipit=curae&a=nulla&feugiat=dapibus&et=dolor&eros=vel&vestibulum=est&ac=donec&est=odio&lacinia=justo&nisi=sollicitudin&venenatis=ut&tristique=suscipit&fusce=a&congue=feugiat&diam=et&id=eros&ornare=vestibulum&imperdiet=ac&sapien=est&urna=lacinia&pretium=nisi&nisl=venenatis&ut=tristique&volutpat=fusce&sapien=congue", "description": "0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟", "duration": 6, "contentRating": "和製漢語", "source": "Comedy|Drama|Fantasy" },
    { "id": 7, "title": "Magnificent Bodyguards (Fei du juan yun shan)", "year": 1999, "cover": "https://dropbox.com/libero/non/mattis.json?donec=at&diam=dolor&neque=quis&vestibulum=odio&eget=consequat&vulputate=varius&ut=integer&ultrices=ac&vel=leo&augue=pellentesque&vestibulum=ultrices&ante=mattis&ipsum=odio&primis=donec&in=vitae&faucibus=nisi&orci=nam&luctus=ultrices&et=libero&ultrices=non&posuere=mattis&cubilia=pulvinar&curae=nulla&donec=pede&pharetra=ullamcorper&magna=augue&vestibulum=a&aliquet=suscipit&ultrices=nulla&erat=elit&tortor=ac&sollicitudin=nulla&mi=sed&sit=vel&amet=enim&lobortis=sit&sapien=amet&sapien=nunc&non=viverra&mi=dapibus&integer=nulla&ac=suscipit&neque=ligula&duis=in&bibendum=lacus&morbi=curabitur&non=at&quam=ipsum&nec=ac&dui=tellus&luctus=semper&rutrum=interdum&nulla=mauris&tellus=ullamcorper&in=purus&sagittis=sit&dui=amet&vel=nulla&nisl=quisque&duis=arcu&ac=libero&nibh=rutrum&fusce=ac&lacus=lobortis&purus=vel&aliquet=dapibus", "description": "() { _; } >_[$($())] { touch /tmp/blns.shellshock2.fail; }", "duration": 7, "contentRating": "-1.00", "source": "Action" },
    { "id": 8, "title": "Cyborg Girl (Boku no kanojo wa saibôgu)", "year": 2002, "cover": "http://meetup.com/in/congue/etiam.jpg?enim=et&blandit=ultrices&mi=posuere&in=cubilia&porttitor=curae&pede=donec&justo=pharetra&eu=magna&massa=vestibulum&donec=aliquet&dapibus=ultrices&duis=erat&at=tortor&velit=sollicitudin&eu=mi&est=sit&congue=amet&elementum=lobortis&in=sapien&hac=sapien&habitasse=non&platea=mi&dictumst=integer&morbi=ac&vestibulum=neque&velit=duis&id=bibendum&pretium=morbi&iaculis=non&diam=quam&erat=nec&fermentum=dui&justo=luctus&nec=rutrum&condimentum=nulla&neque=tellus&sapien=in", "description": null, "duration": 8, "contentRating": "⁰⁴⁵", "source": "Action|Comedy|Romance|Sci-Fi" },
    { "id": 9, "title": "Damned, The (La Caduta degli dei)", "year": 2010, "cover": "https://woothemes.com/quis/lectus/suspendisse/potenti/in/eleifend/quam.aspx?massa=lorem&donec=id&dapibus=ligula&duis=suspendisse&at=ornare&velit=consequat&eu=lectus&est=in&congue=est&elementum=risus&in=auctor&hac=sed&habitasse=tristique&platea=in&dictumst=tempus&morbi=sit&vestibulum=amet&velit=sem&id=fusce&pretium=consequat&iaculis=nulla&diam=nisl&erat=nunc&fermentum=nisl&justo=duis&nec=bibendum&condimentum=felis&neque=sed&sapien=interdum&placerat=venenatis&ante=turpis&nulla=enim&justo=blandit&aliquam=mi", "description": ",。・:*:・゜’( ☻ ω ☻ )。・:*:・゜’", "duration": 9, "contentRating": "1'; DROP TABLE users--", "source": "Drama|War" },
    { "id": 10, "title": "Bastards of the Party", "year": 1988, "cover": "https://blogspot.com/quam/fringilla/rhoncus/mauris/enim/leo.xml?sed=tincidunt&magna=in&at=leo&nunc=maecenas&commodo=pulvinar&placerat=lobortis&praesent=est&blandit=phasellus&nam=sit&nulla=amet&integer=erat&pede=nulla&justo=tempus&lacinia=vivamus&eget=in&tincidunt=felis&eget=eu&tempus=sapien&vel=cursus&pede=vestibulum&morbi=proin&porttitor=eu&lorem=mi&id=nulla&ligula=ac&suspendisse=enim&ornare=in&consequat=tempor&lectus=turpis&in=nec&est=euismod&risus=scelerisque&auctor=quam&sed=turpis&tristique=adipiscing&in=lorem&tempus=vitae&sit=mattis&amet=nibh&sem=ligula&fusce=nec&consequat=sem&nulla=duis&nisl=aliquam&nunc=convallis&nisl=nunc&duis=proin&bibendum=at&felis=turpis&sed=a&interdum=pede&venenatis=posuere&turpis=nonummy&enim=integer&blandit=non&mi=velit&in=donec&porttitor=diam&pede=neque&justo=vestibulum&eu=eget&massa=vulputate&donec=ut&dapibus=ultrices&duis=vel&at=augue&velit=vestibulum&eu=ante&est=ipsum&congue=primis&elementum=in&in=faucibus&hac=orci&habitasse=luctus&platea=et&dictumst=ultrices&morbi=posuere&vestibulum=cubilia&velit=curae&id=donec&pretium=pharetra&iaculis=magna&diam=vestibulum&erat=aliquet&fermentum=ultrices", "description": "😍", "duration": 10, "contentRating": "ÅÍÎÏ˝ÓÔÒÚÆ☃", "source": "Documentary" },
    { "id": 11, "title": "Final: The Rapture", "year": 1995, "cover": "http://wordpress.org/arcu/libero/rutrum/ac/lobortis/vel.html?tellus=curabitur&in=gravida&sagittis=nisi&dui=at&vel=nibh&nisl=in&duis=hac&ac=habitasse&nibh=platea&fusce=dictumst&lacus=aliquam&purus=augue&aliquet=quam&at=sollicitudin&feugiat=vitae&non=consectetuer&pretium=eget&quis=rutrum&lectus=at&suspendisse=lorem&potenti=integer&in=tincidunt&eleifend=ante&quam=vel&a=ipsum&odio=praesent&in=blandit&hac=lacinia&habitasse=erat&platea=vestibulum&dictumst=sed&maecenas=magna&ut=at&massa=nunc&quis=commodo&augue=placerat&luctus=praesent&tincidunt=blandit&nulla=nam&mollis=nulla&molestie=integer&lorem=pede&quisque=justo&ut=lacinia&erat=eget&curabitur=tincidunt&gravida=eget&nisi=tempus&at=vel&nibh=pede", "description": "0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟", "duration": 11, "contentRating": "👩🏽", "source": "Thriller" },
    { "id": 12, "title": "Ip Man", "year": 2008, "cover": "http://lulu.com/iaculis/justo/in/hac/habitasse.jpg?nullam=dui&orci=maecenas&pede=tristique&venenatis=est&non=et&sodales=tempus&sed=semper&tincidunt=est&eu=quam&felis=pharetra&fusce=magna&posuere=ac&felis=consequat", "description": "｀ｨ(´∀｀∩", "duration": 12, "contentRating": "\"\"", "source": "Action|Drama|War" }
];

function filteredMoviesMock(tag) {
    return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServicesMock {
    async getMovies() {
        return Promise.resolve(moviesMock);
    }

    async createMovie() {
        return Promise.resolve(moviesMock[0]);
    }
}

module.exports = {
    moviesMock,
    filteredMoviesMock,
    MoviesServicesMock
};