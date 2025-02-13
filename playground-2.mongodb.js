// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("MY_BOOKS_DB");
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
const booksDataBase = "MY_BOOKS_DB";
use(booksDataBase);

/*db.createCollection("LISTS");*/


// Find a document in a collection.
//db.getCollection("BOOKS").findOne({});


db.getCollection("BOOKS").insertMany([
    {
        "id": "101",
        "bookcover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyEUScaTnehxsV6AZzsPhtro2xxn6QCwlA5J700ws1Mccylkw",
        "title": "A Court of Thorns and Roses",
        "author": "Sarah J. Maas",
        "genre": "Fantasy",
        "format": "Special Edition",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world. At least, he's not a beast all the time. As she adapts to her new home, her feelings for the faerie, Tamlin, transform from icy hostility into a fiery passion that burns through every lie she's been told about the beautiful, dangerous world of the Fae. But something is not right in the faerie lands. An ancient, wicked shadow is growing, and Feyre must find a way to stop it, or doom Tamlin-and his world-forever.",
        "pages": 432,
        "published": 2015,
        "dateread": "2022-08-20",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ]
    },
    {
        "id": "102",
        "bookcover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQabffz3fxoX2JS1y8Bydu_1S5Fgk_cQfZLA&s",
        "title": "The Lord of the Rings",
        "author": "John Ronald Reuel Tolkien",
        "genre": "Epic Fantasy",
        "format": "Hardcover",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, The Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell, by chance, into the hands of the hobbit, Bilbo Baggins. From his fastness in the Dark Tower of Mordor, Sauron's power spread far and wide. He gathered all the Great Rings to him, but ever he searched far and wide for the One Ring that would complete his dominion. On his eleventy-first birthday Bilbo disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest --- to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom. THE LORD OF THE RINGS tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard, Merry, Pippin, and Sam, Gimli the Dwarf, Legolas the Elf, Boromir of Gondor, and a tall, mysterious stranger called Strider.",
        "pages": 1137,
        "published": 2001,
        "dateread": "2010-05-01",
        "customlists": [],
    },
    {
        "id": "103",
        "bookcover": "https://m.media-amazon.com/images/I/71bXcusLgJL._AC_UF1000,1000_QL80_.jpg",
        "title": "Fourth Wing",
        "author": "Rebecca Yarros",
        "genre": "Fantasy",
        "format": "Paperback",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "Violet Sorrengail expected to live a quiet life surrounded by books, until she was forced onto the world's deadliest training ground. Now she must fight to join the army's elite: dragon riders. But dragons don't choose fragile riders, they incinerate them, and when your body breaks as easily as Violet's does - death is only a heartbeat away. Many cadets would kill Violet to better their own chances of success; the rest would kill her just because of her last name . . . including the ruthless Xaden Riorson, her family's greatest enemy. With the odds stacked against her, Violet must use every edge her wits can give her just to see the next sunrise, because once you enter Basgiath War College, there are only two ways out: GRADUATE OR DIE",
        "pages": 576,
        "published": 2023,
        "dateread": "2023-09-17",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ]
    },
    {
        "id": "104",
        "bookcover": "https://m.media-amazon.com/images/I/61WxYof082L._AC_UF1000,1000_QL80_.jpg",
        "title": "Chain of Gold",
        "author": "Cassandra Clare",
        "genre": "Fantasy",
        "format": "Hardcover",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "Cordelia Carstairs is a Shadowhunter, a warrior trained since childhood to battle demons. When her father is accused of a terrible crime, she and her brother travel to London in hopes of preventing the family’s ruin. Cordelia’s mother wants to marry her off, but Cordelia is determined to be a hero rather than a bride. Soon Cordelia encounters childhood friends James and Lucie Herondale and is drawn into their world of glittering ballrooms, secret assignations, and supernatural salons, where vampires and warlocks mingle with mermaids and magicians. All the while, she must hide her secret love for James, who is sworn to marry someone else. But Cordelia’s new life is blown apart when a shocking series of demon attacks devastate London. These monsters are nothing like those Shadowhunters have fought before—these demons walk in daylight, strike down the unwary with incurable poison, and seem impossible to kill. London is immediately quarantined. Trapped in the city, Cordelia and her friends discover that their own connection to a dark legacy has gifted them with incredible powers—and forced a brutal choice that will reveal the true cruel price of being a hero.",
        "pages": 624,
        "published": 2020,
        "dateread": "2022-12-6",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ]
    },
    {
        "id": "105",
        "bookcover": "https://m.media-amazon.com/images/I/91qirYaUzrL._AC_UF894,1000_QL80_.jpg",
        "title": "Iron Flame",
        "author": "Rebecca Yarros",
        "genre": "Fantasy",
        "format": "Paperback",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "Against all odds, Violet Sorrengail made it through her first year at Basgiath War College, but now, the real training begins. The stakes are higher than ever, and a determination to survive won't be enough this time. When a powerful new enemy threatens everything she cares about, including the man she loves, Violet must do whatever it takes to keep their secrets safe. One wrong move could have horrifying consequences - and as the web of lies spun by those in charge starts to unravel, nothing, not even dragon fire, may be enough to save them in the end. THE DEADLY SECOND YEAR AT BASGIATH AWAITS",
        "pages": 800,
        "published": 2023,
        "dateread": "",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ]
    },
    { 
        "id": "106",
        "bookcover": "https://m.media-amazon.com/images/I/81IP261kwlL._AC_UF1000,1000_QL80_.jpg",
        "title": "Chain of Iron",
        "author": "Cassandra Clare",
        "genre": "Fantasy",
        "format": "Hardcover",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "Cordelia Carstairs seems to have everything she ever wanted. She’s engaged to marry James Herondale, the boy she has always loved; she has a new life in London with her best friend Lucie; and she bears the sword Cortana, a legendary hero’s blade. But the truth is far grimmer. Cordelia’s marriage is a lie, arranged to save her reputation, while James remains in love with the Grace Blackthorn. Cortana burns her when she touches it. And a serial murderer is targeting the Shadowhunters of London, killing under cover of darkness, then vanishing without a trace. Now Cordelia, James, and Lucie must follow the trail of the killer through the city’s most dangerous streets. All the while, each is keeping a shocking secret: Lucie, that she is attempting to raise the dead; Cordelia, that she has sworn a dangerous oath of loyalty to a mysterious power; and James, that he himself may be the killer they seek.",
        "pages": 688,
        "published": 2023,
        "dateread": "2024-06-04",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ]
    },
    {
        "id": "107",
        "bookcover": "https://m.media-amazon.com/images/I/81dY-4XtCXL._UF1000,1000_QL80_.jpg",
        "title": "Onyx Storm",
        "author": "Rebecca Yarros",
        "genre": "Fantasy",
        "format": "Paperback",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "After nearly eighteen months at Basgiath War College, Violet Sorrengail knows there’s no more time for lessons. No more time for uncertainty. Because the battle has truly begun, and with enemies closing in from outside their walls and within their ranks, it’s impossible to know who to trust. Now Violet must journey beyond the failing Aretian wards to seek allies from unfamiliar lands to stand with Navarre. The trip will test every bit of her wit, luck, and strength, but she will do anything to save what she loves—her dragons, her family, her home, and him. Even if it means keeping a secret so big, it could destroy everything. They need an army. They need power. They need magic. And they need the one thing only Violet can find—the truth. But a storm is coming...and not everyone can survive its wrath.",
        "pages": 544,
        "published": 2025,
        "dateread": "",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ]
    },
    {
        "id": "108",
        "bookcover": "https://m.media-amazon.com/images/I/61pjyMrRCSL._AC_UF1000,1000_QL80_.jpg",
        "title": "It",
        "author": "Stephen King",
        "genre": "Horror",
        "format": "Pocket Edition",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "It by Stephen King is a gripping horror novel that follows a group of outcast kids in Derry, Maine as they confront an ancient, shape-shifting evil that preys on the town's children.",
        "pages": 1138,
        "published": 1986,
        "dateread": "",
        "customlists": [
                    {
                    "id": "20"
                    }
                    ], [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "109",
        "bookcover": "https://m.media-amazon.com/images/I/91PtVqr8spL.jpg",
        "title": "Chain of Thorns",
        "author": "Cassandra Clare",
        "genre": "Fantasy",
        "format": "Hardcover",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "Cordelia Carstairs has lost everything that matters to her. In only a few short weeks, she has seen her father murdered, her plans to become parabatai with her best friend, Lucie, destroyed, and her marriage to James Herondale crumble before her eyes. Even worse, she is now bound to an ancient demon, Lilith, stripping her of her power as a Shadowhunter. After fleeing to Paris with Matthew Fairchild, Cordelia hopes to forget her sorrows in the city's glittering nightlife. But reality intrudes when shocking news comes from home: Tatiana Blackthorn has escaped the Adamant Citadel, and London is under new threat by the Prince of Hell. Cordelia returns to a London riven by chaos and dissent. Cordelia longs to protect James, but is torn between a love for James she has long believed hopeless, and the possibility of a new life with Matthew.",
        "pages": 784,
        "published": 2023,
        "dateread": "2024-11-9",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ]
    },
    {
        "id": "110",
        "bookcover": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Carrie_%281974%29_front_cover%2C_first_edition.jpg",
        "title": "Carrie",
        "author": "Stephen King",
        "genre": "Horror",
        "format": "Hardcover",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "The story of misfit high-school girl, Carrie White, who gradually discovers that she has telekinetic powers. Repressed by a domineering, ultra-religious mother and tormented by her peers at school, her efforts to fit in lead to a dramatic confrontation during the senior prom. ",
        "pages": 283,
        "published": 1974,
        "dateread": "2015-07-19",
        "customlists": [
                    {
                    "id": "20"
                    }
                    ], [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "111",
        "bookcover": "https://m.media-amazon.com/images/I/71x0X-NfYAL._SL1500_.jpg",
        "title": "The Complete Peanuts Vol.1: 1950-1952",
        "author": "Charles Schulz",
        "genre": "Comedy",
        "format": "Comic Strip",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "This first volume, covering the first two and a quarter years of the strip, will be of particular fascination toPeanuts aficionados worldwide: Although there have been literally hundreds of Peanuts books published, many of the strips from the series' first two or three years have never been collected before―in large part because they showed a young Schulz working out the kinks in his new strip and include some characterizations and designs that are quite different from the cast we're all familiar with. (Among other things, three major cast members―Schroeder, Lucy, and Linus―initially show up as infants and only grow into their final mature selves as the months go by. Even Snoopy debuts as a puppy!) Thus The Complete Peanuts offers a unique chance to see a master of the art form refine his skills and solidify his universe, day by day, week by week, month by month.",
        "pages": 356,
        "published": 2004,
        "dateread": "2008-10-22",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ]
    },
    {
        "id": "112",
        "bookcover": "https://m.media-amazon.com/images/I/71aD-3Gd6IL._SX445_.jpg",
        "title": "The Complete Peanuts Vol.2: 1953-1954",
        "author": "Charles Schulz",
        "genre": "Comedy",
        "format": "Comic Strip",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "The second volume is packed with intriguing developments, as Schulz continues to create his tender and comic universe. It begins with Peanuts' third full year and a cast of eight: Charlie Brown, Shermy, Patty, Violet, Schroeder, Lucy, the recently-born Linus, and Snoopy. By the end of 1954, Pigpen and his dust cloud join the crowd. Linus, who still doesn't speak, begins to emerge as one of the most complex and endearing characters in the strip: garrulous and inquisitive yet gentle and tolerant. And, in this volume, he acquires his security blanket! Charlie Brown is becoming his best-known self, the lovable, perpetually-humiliated round-headed loser, but he hasn't yet abandoned his brasher, prankish behavior from Volume One. And, Lucy, this book's cover girl, has grown up and forcefully elbowed her way to the center of the action, proudly wearing her banner as a troublemaker, or, in Schulz's memorable phrase, a fussbudget. For readers unfamiliar with the early years of the strip, Snoopy's appearances here may come as the biggest surprise: he behaves, for the most part, like a dog! But, although he doesn't yet walk upright, sleep on top of his doghouse, or possess a fantasy life, Snoopy has started thinking for himself and his evolution continues its fascinating course within these pages. If you watch carefully, you'll catch his very first shark impression. The vast majority of the daily and Sunday strips collected here are not currently available in any in-print Peanuts collection. Dozens of them have not been reprinted since their initial appearance in newspapers over 50 years ago.",
        "pages": 339,
        "published": 2004,
        "dateread": "2008-12-10",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ]
    },
    {
        "id": "113",
        "bookcover": "https://m.media-amazon.com/images/I/812wzoJvRLL._AC_UF1000,1000_QL80_.jpg",
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Classic Literature",
        "format": "Pocket Edition",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "In early nineteenth-century England, a spirited young woman copes with the suit of a snobbish gentleman, as well as the romantic entanglements of her four sisters",
        "pages": 401,
        "published": 1918,
        "dateread": "2017-03-30",
        "customlists": [],
    },
    {
        "id": "114",
        "bookcover": "https://m.media-amazon.com/images/I/818a1Rx2yiL._SX445_.jpg",
        "title": "The Complete Peanuts Vol.3: 1955-1956",
        "author": "Charles Schulz",
        "genre": "Comedy",
        "format": "Comic Strip",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "The third volume in our acclaimed series takes us into the mid-1950s as Linus learns to talk, Snoopy begins to explore his eccentricities (including his hilarious first series of impressions), Lucy's unrequited crush on Schroeder takes final shape, and Charlie Brown becomes...well, even more Charlie Brown-ish! Over half of the strips in this volume have never been printed since their original appearance in newspapers a half-century ago! Even the most dedicated Peanuts collector/fan is sure to find many new treasures. The Complete Peanuts will run 25 volumes, collecting two years chronologically at a rate of two a year for twelve years. Each volume is designed by the award-winning cartoonist Seth (It's a Good Life If You Don't Weaken) and features impeccable production values; every single strip from Charles M. Schulz's 50-year American classic is reproduced better than ever before. This volume includes an introduction by Matt Groening (The Simpsons) as well as the popular Complete Peanuts index, a hit with librarians and collectors alike, and an epilogue by series editor Gary Groth. 2005 Eisner Award winner, Best Archival Collection/Project.",
        "pages": 339,
        "published": 2005,
        "dateread": "2009-2-15",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ]
    },   
    {
        "id": "115",
        "bookcover": "https://m.media-amazon.com/images/I/71Y3LiGRABL._SX445_.jpg",
        "title": "The Complete Peanuts Vol.4: 1957-1958",
        "author": "Charles Schulz",
        "genre": "Comedy",
        "format": "Comic Strip",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "As the 1950s close down, Peanuts definitively enters its golden age. Linus, who had just learned to speak in the previous volume, becomes downright eloquent and even begins to fend off Lucy's bullying; even so, his security neurosis becomes more pronounced, including a harrowing two-week 'Lost Weekend' sequence of blanketlessness. Charlie Brown cascades further down the hill to loserdom, with spectacularly lost kites, humiliating baseball losses (including one where he becomes 'the Goat' and is driven from the field in a chorus of BAAAAHs); at least his newly acquired 'pencil pal' affords him some comfort. Pig-Pen, Shermy, Violet, and Patty are also around, as is an increasingly Beethoven-fixated Schroeder. But the rising star is undoubtedly Snoopy. He's at the center of the most graphically dynamic and action-packed episodes (the ones in which he attempts to grab Linus's blanket at a dead run). He even tentatively tries to sleep on the crest of his doghouse roof once or twice, with mixed results. And his imitations continue apace, including penguins, anteaters, sea monsters, vultures and (much to her chagrin) Lucy. No wonder the beagle is the cover star of this volume.",
        "pages": 338,
        "published": 2005,
        "dateread": "2009-5-27",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ]
    },
    {
        "id": "116",
        "bookcover": "https://m.media-amazon.com/images/I/713X5d8jEJL._SX445_.jpg",
        "title": "The Complete Peanuts Vol.5: 1959-1960",
        "author": "Charles Schulz",
        "genre": "Comedy",
        "format": "Comic Strip",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "As the first decade of Peanuts closes, it seems only fitting to bid farewell to that halcyon decade with a cover starring Patty, one of the original three Peanuts. Major new additions to classic Peanuts lore come fast and furious here. Snoopy begins to take up residence atop his doghouse, and his repertoire of impressions increases exponentially. Lucy sets up her booth and offers her first five-cent psychiatric counsel. (Her advice to a forlorn Charlie Brown: 'Get over it.') For the very first time, Linus spends all night in the pumpkin patch on his lonely vigil for the Great Pumpkin (although he laments that he was a victim of 'false doctrine, 'he's back 12 months later). Linus also gets into repeated, and visually explosive, scuffles with a blanket-stealing Snoopy, suffers the first depredations of his blanket-hating grandmother, and falls in love with his new teacher Miss Othmar. Even more importantly, several years after the last addition to the cast ('Pig-Pen'), Charlie Brown's sister Sally makes her appearance―first as an (off-panel) brand new baby for Charlie to gush over, then as a toddler and eventually a real, talking, thinking cast member. (By the end of this volume, she'll already start developing her crush on Linus.) All this, and one of the most famous Peanuts strips ever: 'Happiness is a warm puppy.' Almost one hundred of the 731 strips collected in this volume (including many Sundays) have never been collected in any book since their original release, with one hundred more having been collected only once in relatively obscure and now impossible-to-find books; in other words, close to one quarter of the strips have never been seen by anyone but the most avid Peanuts completists.",
        "pages": 339,
        "published": 2006,
        "dateread": "",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ]
    },
    {
        "id": "117",
        "bookcover": "https://m.media-amazon.com/images/I/71bInHrUXeL._SX445_.jpg",
        "title": "The Complete Peanuts Vol.6: 1961-1962",
        "author": "Charles Schulz",
        "genre": "Comedy",
        "format": "Comic Strip",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "Launching into the 1960s, Schulz adds another new cast member. Two, in fact: The obnoxious Frieda of 'naturally curly hair' fame, and her inert, seemingly boneless cat Faron. The rapidly maturing Sally, who was after all just born in the previous volume, is ready to start kindergarten and not at all happy about it. Lucy and Linus' war over the security blanket escalates, with Lucy burying it, cutting it apart, and, in the longest sequence of the book, turning it into a kite and allowing it to fly away. Aauugh! In fact, Linus' life is particularly turbulent in this volume, as he is forced to wear glasses, sees the unexpected return of his favorite teacher, Miss Othmar, and coaxes Sally into the cult of the Great Pumpkin (with regrettable results).",
        "pages": 340,
        "published": 2006,
        "dateread": "",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ]
    },
    {
        "id": "118",
        "bookcover": "https://m.media-amazon.com/images/I/81vqCoxbPML._SL1500_.jpg",
        "title": "The Complete Peanuts Vol.7: 1963-1964",
        "author": "Charles Schulz",
        "genre": "Comedy",
        "format": "Comic Strip",
        "language": "English",
        "toread": false,
        "fav": false,
        "owned": false,
        "summary": "My name is 555 95472 but everyone calls me 5 for short... I have two sisters named 3 and 4.' With those words, Charles Schulz introduced one (in fact, three) of the quirkiest characters to the Peanutsuniverse, the numerically-monikered 95472 siblings. They didn't stay around very long but offered some choice bits of satirical nonsense while they did. As it happens, this volume is particularly rich in never-before-reprinted strips: Over 150 (more than one fifth of the book!) have never seen the light of day since their original appearance over 40 years ago, so this will be a trove of undiscovered treasures even for avid Peanuts collectors. These 'lost' strips include Linus making a near-successful run for class president that is ultimately derailed by his religious beliefs (two words: 'great' and 'pumpkin'), and Snoopy getting involved with a group of politically fanatical birds. Also in this volume: Lucy's attempts at improving her friends branches out from her increasingly well-visited nickel psychiatry booth to an educational slideshow of Charlie Brown's faults (it's so long there's an intermission!). Also, Snoopy's doghouse begins its conceptual expansion, as Schulz reveals that the dog owns a Van Gogh, and that the ceiling is so huge that Linus can paint a vast (and as it turns out unappreciated) 'history of civilization' mural on it.",
        "pages": 333,
        "published": 2007,
        "dateread": "",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ]
    },

/* NEW ADITIONS */

    {
        "id": "120",
        "bookcover": "https://m.media-amazon.com/images/I/81A1Mn-x49L._UF1000,1000_QL80_.jpg",
        "title": "Dune",
        "author": "Frank Herbert",
        "genre": "Science Fiction",
        "format": "Audiobook",
        "language": "Español",
        "toread": true,
        "fav": true,
        "owned": true,
        "summary": "Arrakis: un planeta desértico donde el agua es el bien más preciado donde llorar a los muertos es el símbolo de máxima prodigalidad. Paul Atreides: un adolescente marcado por un destino singular, dotado de extraños poderes, abocado a convertirse en dictador, mesías y mártir. Los Harkonnen: personificación de las intrigas que rodean el Imperio Galáctico, buscan obtener el control sobre Arrakis para disponer de la melange, preciosa especia y uno de los bienes más codiciados del universo. Los Fremen: seres libres que han convertido el inhóspito paraje de Dune en su hogar, y que se sienten orgullosos de su pasado y temerosos de su futuro",
        "pages": 704,
        "published": 1963,
        "dateread": "",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ]
    },
    {
        "id": "121",
        "bookcover": "https://m.media-amazon.com/images/I/816DcUDR5HL._AC_UF894,1000_QL80_.jpg",
        "title": "The Three Body Problem",
        "author": "Cixin Liu",
        "genre": "Science Fiction",
        "format": "Hardcover",
        "language": "English",
        "toread": true,
        "fav": true,
        "owned": false,
        "summary": "1967: Ye Wenjie witnesses Red Guards beat her father to death during China's Cultural Revolution. This singular event will shape not only the rest of her life but also the future of mankind. Four decades later, Beijing police ask nanotech engineer Wang Miao to infiltrate a secretive cabal of scientists after a spate of inexplicable suicides. Wang's investigation will lead him to a mysterious online game and immerse him in a virtual world ruled by the intractable and unpredictable interaction of its three suns. This is the Three-Body Problem and it is the key to everything: the key to the scientists' deaths, the key to a conspiracy that spans light-years and the key to the extinction-level threat humanity now faces.",
        "pages": 1744,
        "published": 2016,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "122",
        "bookcover": "https://m.media-amazon.com/images/I/91EBkyDLSdL._AC_UF1000,1000_QL80_.jpg",
        "title": "Snow Crash",
        "author": "Neal Stephenson",
        "genre": "Science Fiction",
        "format": "Hardcover",
        "language": "English",
        "toread": true,
        "fav": true,
        "owned": false,
        "summary": "Hiro lives in a Los Angeles where franchises line the freeway as far as the eye can see. The only relief from the sea of logos is within the autonomous city-states, where law-abiding citizens don’t dare leave their mansions. Hiro delivers pizza to the mansions for a living, defending his pies from marauders when necessary with a matched set of samurai swords. His home is a shared 20 X 30 U-Stor-It. He spends most of his time goggled in to the Metaverse, where his avatar is legendary. But in the club known as The Black Sun, his fellow hackers are being felled by a weird new drug called Snow Crash that reduces them to nothing more than a jittering cloud of bad digital karma (and IRL, a vegetative state). Investigating the Infocalypse leads Hiro all the way back to the beginning of language itself, with roots in an ancient Sumerian priesthood. He’ll be joined by Y.T., a fearless teenaged skateboard courier. Together, they must race to stop a shadowy virtual villain hell-bent on world domination.",
        "pages": 576,
        "published": 2003,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "123",
        "bookcover": "https://i.ebayimg.com/images/g/~wEAAOSwje9htxgc/s-l1600.jpg",
        "title": "Neuromancer",
        "author": "William Gibson",
        "genre": "Science Fiction",
        "format": "Paperback",
        "language": "Español",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "Case era el mejor vaquero del ciberespacio: se ganaba la vida robando información y traspasando defensas electrónicas. Pero cometió el error de traicionar a la gente equivocada y como castigo dañaron su sistema nervioso con una toxina que extinguió su talento micrón a micrón. Desterrado del ciberespacio y prisionero en la cárcel de su cuerpo físico, Case coquetea con la muerte en los suburbios ultra tecnológicos. Hasta que se ve envuelto en un peligroso plan de objetivo desconocido que le ofrece una segunda oportunidad, y una cura, a cambio de un precio...",
        "pages": 392,
        "published": 2024,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ], [
                    {
                    "id": "20"
                    }
                    ]
    },
    {
        "id": "124",
        "bookcover": "https://m.media-amazon.com/images/I/71WSzS6zvCL._AC_UF1000,1000_QL80_.jpg",
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "genre": "Dystopian",
        "format": "Hardcover",
        "language": "English",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.Sixteen-year-old Katniss Everdeen regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to death before-and survival, for her, is second nature. Still, if she is to win, she will have to start making choices that weigh survival against humanity and life against love.",
        "pages": 384,
        "published": 2009,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ], [
                    {
                    "id": "10"
                    }
                    ]
    },
    {
        "id": "125",
        "bookcover": "https://m.media-amazon.com/images/I/81MreVrWFhS._AC_UF1000,1000_QL80_.jpg",
        "title": "Catching Fire",
        "author": "Suzanne Collins",
        "genre": "Dystopian",
        "format": "Hardcover",
        "language": "English",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "Against all odds, Katniss Everdeen has won the annual Hunger Games with fellow district tribute Peeta Mellark. But it was a victory won by defiance of the Capitol and their harsh rules. Katniss and Peeta should be happy. After all, they have just won for themselves and their families a life of safety and plenty. But there are rumors of rebellion among the subjects, and Katniss and Peeta, to their horror, are the faces of that rebellion. The Capitol is angry. The Capitol wants revenge.",
        "pages": 400,
        "published": 2010,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ], [
                    {
                    "id": "10"
                    }
                    ]
    },
    {
        "id": "126",
        "bookcover": "https://m.media-amazon.com/images/I/71LotZwmMhL._AC_UF1000,1000_QL80_.jpg",
        "title": "Mockingjay",
        "author": "Suzanne Collins",
        "genre": "Dystopian",
        "format": "Hardcover",
        "language": "English",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "Katniss Everdeen has survived, even though her home has been destroyed. There are rebels. There are new leaders. A revolution is unfolding. Katniss Everdeen's having survived the Hunger games twice makes her a target of the Capitol and President Snow, as well as a hero to the rebels. It is by design that Katniss was rescued from the arena in the cruel and haunting Quarter Quell, and it is by design that she has long been part of the revolution without knowing it. District 13 really does exist, and now it has come out of the shadows and is plotting to overthrow the Capitol. Everyone, it seems, has had a hand in the carefully laid plans, except Katniss. The success of the rebellion hinges on Katniss's willlingness to be a pawn, to accept responsibility for countless lives, and to change the course of the future of Panem. To do this she must put aside her personal feelings of anger and distrust. She must become the rebels' Mockingjay, no matter what he personal cost.",
        "pages": 400,
        "published": 2010,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ], [
                    {
                    "id": "10"
                    }
                    ]
    },
    {
        "id": "127",
        "bookcover": "https://m.media-amazon.com/images/I/61su39k8NUL.jpg",
        "title": "The Handmaid's Tale",
        "author": "Christina Barmon",
        "genre": "Dystopian",
        "format": "eBook",
        "language": "English",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "The Handmaid's Tale: Teaching Dystopia, Feminism, and Resistance across Disciplines and Borders offers an interdisciplinary analysis of how Margaret Atwood's The Handmaid's Tale, as well as its film and television adaptations, can be employed across different academic fields in high school, college and university classrooms. Scholars from a variety of disciplines and cultural contexts contribute to wide-ranging analytical strategies, ranging from religion and science to the role of journalism in democracy, while still embracing gender studies in a broader methodological and theoretical framework. The volume examines both the formal and stylistic ways in which Atwood's classic work and its adaptations can be brought to life in the classroom through different lenses and pedagogies.",
        "pages": 334,
        "published": 2019,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ], [
                    {
                    "id": "20"
                    }
                    ]
    },
    {
        "id": "128",
        "bookcover": "https://m.media-amazon.com/images/I/61RnqkgaDDL._AC_UF1000,1000_QL80_.jpg",
        "title": "Hijos de los Hombres",
        "author": "P.D. James",
        "genre": "Dystopian",
        "format": "eBook",
        "language": "Español",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "Estamos en 2021. Hace veinticinco años que no nace un solo niño en el planeta tierra. La raza humana se enfrenta a su extinción. Bajo el despótico mandato de Xan Lyppiat, el Guardián de Inglaterra, los viejos viven sumidos en la desesperación y los jóvenes en la crueldad. Theo Faren, primo del Guardián, lleva una vida solitaria, resignado a la época siniestra que le ha tocado. Hasta que el encuentro fortuito con una mujer le lleva a contactar con un grupo de disidentes. De pronto, su vida cambia de manera irrevocable y se ve obligado a tomar decisiones que afectarán al futuro de la humanidad.",
        "pages": 352,
        "published": 2018,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ], [
                    {
                    "id": "20"
                    }
                    ]
    },
    {
        "id": "129",
        "bookcover": "https://www.akal.com/media/akal/images/cover-52391.jpg",
        "title": "1984",
        "author": "George Orwell",
        "genre": "Dystopian",
        "format": "Audiobook",
        "language": "Español",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "Sumérgete en las páginas de esta inquietante historia y acompaña al protagonista, Winston Smith, en su desesperada lucha por preservar su humanidad en un mundo donde el Gran Hermano ejerce un control absoluto sobre cada faceta de la existencia. A medida que te adentres en estas páginas, te enfrentarás a cuestiones sociales y políticas complejas que siguen resonando en nuestra sociedad actual. Descubre la opresiva realidad de esta fascinante ficción distópica y deja que los temas como el pensamiento crítico, la manipulación psicológica y la libertad individual te envuelvan en una reflexión profunda.",
        "pages": 288,
        "published": 2023,
        "dateread": "",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ], [
                    {
                    "id": "20"
                    }
                    ]
    },
    {
        "id": "130",
        "bookcover": "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/299/original/portada_fahrenheit-451_ray-bradbury_201910221243.jpg",
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "genre": "Dystopian",
        "format": "Audiobook",
        "language": "Español",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "Fahrenheit 451: la temperatura a la que el papel se enciende y arde. Guy Montag es un bombero y el trabajo de un bombero es quemar libros, que están prohibidos porque son causa de discordia y sufrimiento. El Sabueso Mecánico del Departamento de Incendios, armado con una letal inyección hipodérmica, escoltado por helicópteros, está preparado para rastrear a los disidentes que aún conservan y leen libros. Como 1984, de George Orwell, como Un mundo feliz, de Aldous Huxley, Fahrenheit 451 describe una civilización occidental esclavizada por los medios, los tranquilizantes y el conformismo.",
        "pages": 272,
        "published": 2012,
        "dateread": "",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ]
    },
    {
        "id": "131",
        "bookcover": "https://m.media-amazon.com/images/I/71xTWs8RBTL.jpg",
        "title": "The Windup Girl",
        "author": "Paolo Bacigalupi",
        "genre": "Dystopian",
        "format": "Hardcover",
        "language": "English",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "Anderson Lake is a company man, AgriGen's calorie representative in Thailand. Under cover as a factory manager, he combs Bangkok's street markets in search of foodstuffs long thought to be extinct. There he meets the windup girl - the beautiful and enigmatic Emiko - now abandoned to the slums. She is one of the New People, bred to suit the whims of the rich. Engineered as slaves, soldiers and toys, they are the new underclass in a chilling near future where oil has run out, calorie companies dominate nations and bio-engineered plagues run rampant across the globe. And as Lake becomes increasingly obsessed with Emiko, conspiracies breed in the heat and political tensions threaten to spiral out of control. Businessmen and ministry officials, wealthy foreigners and landless refugees all have their own agendas. But no one anticipates the devastating influence of the Windup Girl.",
        "pages": 448,
        "published": 2010,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ], [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "132",
        "bookcover": "https://m.media-amazon.com/images/I/81uEDUfKBZL._AC_UF894,1000_QL80_.jpg",
        "title": "The Hobbit",
        "author": "J. R. R. Tolkien",
        "genre": "Fantasy",
        "format": "Hardcover",
        "language": "English",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely travelling further than the pantry of his hobbit-hole in Bag End. But his contentment is disturbed when the wizard, Gandalf, and a company of thirteen dwarves arrive on his doorstep one day to whisk him away on an unexpected journey 'there and back again'. They have a plot to raid the treasure hoard of Smaug the Magnificent, a large and very dangerous dragon...",
        "pages": 304,
        "published": 1937,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "133",
        "bookcover": "https://m.media-amazon.com/images/I/91dQRqjWTbL._UF1000,1000_QL80_.jpg",
        "title": "The Cruel Prince",
        "author": "Holly Black",
        "genre": "Fantasy",
        "format": "eBook",
        "language": "English",
        "toread": true,
        "fav": false,
        "owned": true,
        "summary": "Of course I want to be like them. They're beautiful as blades forged in some divine fire. They will live forever. And Cardan is even more beautiful than the rest. I hate him more than all the others. I hate him so much that sometimes when I look at him, I can hardly breathe. One terrible morning, Jude and her sisters see their parents murdered in front of them. The terrifying assassin abducts all three girls to the world of Faerie, where Jude is installed in the royal court but mocked and tormented by the Faerie royalty for being mortal. As Jude grows older, she realises that she will need to take part in the dangerous deceptions of the fey to ever truly belong. But the stairway to power is fraught with shadows and betrayal. And looming over all is the infuriating, arrogant and charismatic Prince Cardan...",
        "pages": 448,
        "published": 2018,
        "dateread": "",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ]
    },
    {
        "id": "134",
        "bookcover": "https://m.media-amazon.com/images/I/81zCK5-V09L._UF1000,1000_QL80_.jpg",
        "title": "A Court of Mist and Fury",
        "author": "Sarah J. Maas",
        "genre": "Fantasy",
        "format": "Special Edition",
        "language": "English",
        "toread": true,
        "fav": false,
        "owned": true,
        "summary": "Feyre survived Amarantha's clutches to return to the Spring Court – but at a steep cost. Though she now possesses the powers of the High Fae, her heart remains human, and it can't forget the terrible deeds she performed to save Tamlin's people. Nor has Feyre forgotten her bargain with Rhysand, the mesmerising High Lord of the feared Night Court. As Feyre navigates his dark web of political games and tantalising promises, a greater evil looms – and she might be key to stopping it. But only if she can step into her growing power, heal her fractured soul and have the courage to shape her own future – and the future of a world cloven in two.",
        "pages": 432,
        "published": 2016,
        "dateread": "",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ]
    },
    {
    "id": "135",
    "bookcover": "https://m.media-amazon.com/images/I/81U27X4m6EL._AC_UF1000,1000_QL80_.jpg",
    "title": "A Court of Wings and Ruin",
    "author": "Sarah J. Maas",
    "genre": "Fantasy",
    "format": "Special Edition",
    "language": "English",
    "toread": true,
    "fav": false,
    "owned": true,
    "summary": "Feyre has returned to the Spring Court, determined to gather information on Tamlin's manoeuvrings and the invading king threatening to bring her land to its knees. But to do so she must play a deadly game of deceit – and one slip may spell doom not only for Feyre, but for her world as well. As war bears down upon them all, Feyre must decide who to trust amongst the dazzling and lethal High Lords and hunt for allies in unexpected places. And her heart will face the ultimate test as she and her mate are forced to question whether they can truly trust each other.",
    "pages": 432,
    "published": 2017,
    "dateread": "",
    "customlists": [
                {
                "id": "10"
                }
                ]
    },
    {
        "id": "136",
        "bookcover": "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/49/original/portada_el-leon-la-bruja-y-el-armario_c-s-lewis_201505260935.jpg",
        "title": "Las crónicas de Narnia: El león, la bruja y el armario.",
        "author": "C. S. Lewis",
        "genre": "Fantasy",
        "format": "Hardcover",
        "language": "Español",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "Cuatro niños descubren un armario que les sirve de puerta de acceso a Narnia, un país congelado en un invierno eterno y sin Navidad. Entonces, cumpliendo con las viejas profecías, los niños (junto con el león Aslan) serán encargados de liberar al reino de la tiranía de la Bruja Blanca (Reina Jadis como se presenta mejor en el libro El Sobrino del Mago) y recuperar el verano, la luz y la alegría para todos los habitantes de Narnia.",
        "pages": 240,
        "published": 1950,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "137",
        "bookcover": "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/62/original/portada_el-principe-caspian_c-s-lewis_201505260933.jpg",
        "title": "Las crónicas de Narnia: El príncipe Caspian.",
        "author": "C. S. Lewis",
        "genre": "Fantasy",
        "format": "Hardcover",
        "language": "Español",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "Narnia... la tierra entre el farol y el castillo de Cair Paravel, donde los animales hablan, donde ocurren cosas mágicas...y donde comienza la aventura. Peter, Susan, Edmund y Lucy van de regreso al internado y se encuentran en una lúgubre estación de tren cuando reciben el llamado (del propio cuerno mágico de Susan) para regresar a Narnia, la tierra donde gobernaron como reyes y reinas y donde se necesita de su ayuda urgentemente.",
        "pages": 176,
        "published": 1951,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "138",
        "bookcover": "https://m.media-amazon.com/images/I/81VHoelUfQL._AC_UF1000,1000_QL80_.jpg",
        "title": "Las crónicas de Narnia: La travesía del viajero del Alba.",
        "author": "C. S. Lewis",
        "genre": "Fantasy",
        "format": "Hardcover",
        "language": "Español",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "Narnia… donde todo puede ocurrir, y casi siempre ocurre… donde comienza la aventura. El Viajero del Alba es el primer barco que Narnia ha visto en siglos. El rey Caspian lo ha construido para su viaje en busca de los siete lores, hombres buenos a los que su malvado tío Miraz desterró cuando usurpó el trono. El viaje lleva a Edmund, Lucy, su primo Eustace y Caspian a las islas del este, más allá del Mar de Plata, hacia el país de Aslan en el Fin del Mundo.",
        "pages": 208,
        "published": 1952,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "139",
        "bookcover": "https://m.media-amazon.com/images/I/61ZACMkD+NL._AC_UF1000,1000_QL80_.jpg",
        "title": "The Mortal Instruments 1. Ciudad de Hueso",
        "author": "Cassandra Clare",
        "genre": "Fantasy",
        "format": "Paperback",
        "language": "Español",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "En el Pandemonium, la discoteca de moda de Nueva York, Clary sigue a un atractivo chico de pelo azul hasta que presencia su muerte a manos de tres jóvenes cubiertos de extraños tatuajes. Desde esa noche, su destino se une al de esos tres cazadores de sombras, guerreros dedicados a liberar a la tierra de demonios y, sobre todo, al de Jace, un chico con aspecto de ángel y tendencia a actuar como un idiota...",
        "pages": 512,
        "published": 2009,
        "dateread": "",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ], [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "140",
        "bookcover": "https://m.media-amazon.com/images/I/61cHYuU7wmL._AC_UF1000,1000_QL80_.jpg",
        "title": "The Mortal Instruments 2. Ciudad de ceniza",
        "author": "Cassandra Clare",
        "genre": "Fantasy",
        "format": "Paperback",
        "language": "Español",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "Clary Fray desearía que su vida volviera a la normalidad. Si pudiera dejar atrás el mundo de los cazadores de sombras, tendría más tiempo para Simon, su mejor amigo, que se está convirtiendo en algo más... Pero el mundo subterráneo que acaba de descubrir no está preparado para dejarla ir; en especial ese apuesto y exasperante Jace... Para complicar las cosas, una ola de asesinatos sacude la ciudad. Clary cree que Valentine está detrás de esas muertes, pero ¿cómo podrá detenerlo si Jace parece dispuesto a traicionar todo en lo que cree para ayudar a su padre?",
        "pages": 464,
        "published": 2013,
        "dateread": "",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ], [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "141",
        "bookcover": "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/212/original/portada_ciudad-de-cristal_cassandra-clare_201602251707.jpg",
        "title": "The Mortal Instruments 3. Ciudad de Cristal",
        "author": "Cassandra Clare",
        "genre": "Fantasy",
        "format": "Paperback",
        "language": "Español",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "Para salvar la vida de su madre, Clary debe viajar hasta la Ciudad de Cristal, el hogar ancestral de los cazadores de sombras. Por si fuera poco, Jace no quiere que vaya y Simon ha sido encarcelado por los propios Cazadores de Sombras, que no se fían de un vampiro resistente al sol.Mientras, Clary traba amistad con Sebastián, un misterioso cazador de sombras que se alía con ella. Valentine está dispuesto a acabar con todos los cazadores de sombras: la única opción que les queda a éstos es aliarse con sus mortales enemigos pero ¿podrán hombreslobo, vampiros y otras criaturas del submundo dejar a un lado susdiferencias con los cazadores de sombras?",
        "pages": 544,
        "published": 2010,
        "dateread": "",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ], [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "142",
        "bookcover": "https://imgonix.planetadelibros.com/usuaris/libros/fotos/247/original/portada_ciudad-de-los-angeles-caidos_cassandra-clare_201701271047.jpg",
        "title": "The Mortal Instruments 4. Ciudad de los Ángeles caídos",
        "author": "Cassandra Clare",
        "genre": "Fantasy",
        "format": "Paperback",
        "language": "Español",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "Alguien está dando muerte a los Cazadores de Sombras del círculo de Valentine, y esas muertes enemistan de nuevo a los Cazadores de Sombras con los subterráneos. Sólo Simon, ahora convertido en vampiro, podrá evitar el enfrentamiento. Mientras, Clary y Jace descubrirán un misterio que les llevará a fortalecer su relación o... a destruirla para siempre.",
        "pages": 416,
        "published": 2011,
        "dateread": "",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ], [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "143",
        "bookcover": "https://m.media-amazon.com/images/I/91n3DD1vSCL._AC_UF1000,1000_QL80_.jpg",
        "title": "The Mortal Instruments 5. Ciudad de las Almas perdidas",
        "author": "Cassandra Clare",
        "genre": "Fantasy",
        "format": "Paperback",
        "language": "Español",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "Jace es ahora un sirviente del mal, vinculado a Sebastian por toda la eternidad. Sólo un pequeño grupo de Cazadores de Sombras cree posible su salvación. Para lograrla, deben desafi ar al Cónclave, y deben actuar sin Clary. Porque Clary está jugando a un juego muy peligroso por su propia cuenta y riesgo. Si pierde, el precio que deberá pagar no consiste tan solo en entregar su vida, sino también el alma de Jace. Clary está dispuesta a hacer lo que sea por Jace, pero ¿pue- Clary está dispuesta a hacer lo que sea por Jace, pero ¿puede seguir confi ando en él? ¿O lo ha perdido para siempre? de seguir confi ando en él? ¿O lo ha perdido para siempre? ¿Es el precio a pagar demasiado alto, incluso para el amor? ¿Es el precio a pagar demasiado alto, incluso para el amor?",
        "pages": 512,
        "published": 2012,
        "dateread": "",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ], [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "144",
        "bookcover": "https://m.media-amazon.com/images/I/91V4BSlsn2L._AC_UF350,350_QL50_.jpg",
        "title": "The Mortal Instruments 6. Ciudad del Fuego celestial",
        "author": "Cassandra Clare",
        "genre": "Fantasy",
        "format": "Paperback",
        "language": "Español",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "ERCHOMAI, HABÍA DICHO SEBASTIAN - Voy de camino. La oscuridad ha regresado al Mundo de las Sombras. Mientras su mundo se desmorona alrededor, Clary, Jace, Simon y sus amigos deben unirse para luchar contra el mayor enemigo al que se han enfrentado nunca los nefilim: el hermano de Clary. No hay nada en el mundo que pueda derrotarle; ¿deberán ir a otro mundo para tener una posibilidad? Se perderán vidas, se sacrificarán amores y el mundo entero cambiará en el sexto volumen de la serie Cazadores de Sombras.",
        "pages": 672,
        "published": 2014,
        "dateread": "",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ], [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "158",
        "bookcover": "https://m.media-amazon.com/images/I/81B6ebdgtZL._AC_UF894,1000_QL80_.jpg",
        "title": "La Metamorfosis",
        "author": "Frans Kafka",
        "genre": "Classic Literature",
        "format": "Audiobook",
        "language": "Español",
        "toread": false,
        "fav": false,
        "owned": true,
        "summary": "En 'La metamorfosis' de Franz Kafka, Gregor Samsa, un viajante de comercio, se despierta transformado en un insecto gigante. Luchando por adaptarse a su nueva forma, Gregor se aísla de su familia, que siente repulsión por su aspecto. A medida que el estado de Gregor empeora, aumentan las tensiones en el seno de la familia, lo que acaba provocando su trágica muerte y obligando a la familia a enfrentarse a sus propias vidas y a su independencia.",
        "pages": 60,
        "published": 1915,
        "dateread": "",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ], [
                    {
                    "id": "20"
                    }
                    ]
    },


    {
        "id": "152",
        "bookcover": "https://m.media-amazon.com/images/I/91rrdOEQN8L.jpg",
        "title": "El priorato del naranjo",
        "author": "Samantha Shannon",
        "genre": "Epic Fantasy",
        "format": "Hardcover",
        "language": "Español",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "Un mundo dividido. Un reino sin su heredera. Un antiguo enemigo se despierta... La Casa de Berethnet ha gobernado Inys durante mil años. Aún sin casar, la reina Sabran IX debe concebir una hija para proteger a su reino de la destrucción. Pero los asesinos cada vez están más cerca. Al otro lado del mar oscuro, Tane ha entrenado toda su vida para ser una jinete de dragón, pero se ve obligada a tomar una decisión que podría romper su vida en añicos. Mientras tanto, el Este y el Oeste siguen divididos. Cada región tiene una religión diferente basada en los sucesos acaecidos mucho tiempo atrás. Los que adoran a los dragones, los que los detestan y quienes adoran al Sin Nombre aparentemente nunca se pondrán de acuerdo. Y las fuerzas del caos se despiertan de su letargo y parecen estar a punto de llegar.",
        "pages": 864,
        "published": 2019,
        "dateread": "",
        "customlists": [
                    {
                    "id": "10"
                    }
                    ]
    },



















    

    {
        "id": "180",
        "bookcover": "https://m.media-amazon.com/images/I/51oGU5pdSZL._AC_UF894,1000_QL80_.jpg",
        "title": "Outlander",
        "author": "Diana Gabaldon",
        "genre": "Romance",
        "format": "Audiobook",
        "language": "English",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "The year is 1945. Claire Randall, a former combat nurse, is just back from the war and reunited with her husband on a second honeymoon when she walks through a standing stone in one of the ancient circles that dot the British Isles. Suddenly she is a Sassenach—an “outlander”—in a Scotland torn by war and raiding border clans in the year of Our Lord...1743. Hurled back in time by forces she cannot understand, Claire is catapulted into the intrigues of lairds and spies that may threaten her life, and shatter her heart. For here James Fraser, a gallant young Scots warrior, shows her a love so absolute that Claire becomes a woman torn between fidelity and desire—and between two vastly different men in two irreconcilable lives.",
        "pages": 850,
        "published": 1991,
        "dateread": "2018-04-10",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "181",
        "bookcover": "https://pictures.abebooks.com/isbn/9780749936570-es.jpg",
        "title": "Bridgertons 1. The Duke and I",
        "author": "Julia Quinn",
        "genre": "Romance",
        "format": "Paperback",
        "language": "English",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "Daphne Bridgerton has always failed at the latter. The fourth of eight siblings in her close-knit family, she has formed friendships with the most eligible young men in London. Everyone likes Daphne for her kindness and wit. But no one truly desires her. She is simply too deuced honest for that, too unwilling to play the romantic games that captivate gentlemen. Amiability is not a characteristic shared by Simon Basset, Duke of Hastings. Recently returned to England from abroad, he intends to shun both marriage and society—just as his callous father shunned Simon throughout his painful childhood. Yet an encounter with his best friend’s sister offers another option. If Daphne agrees to a fake courtship, Simon can deter the mamas who parade their daughters before him. Daphne, meanwhile, will see her prospects and her reputation soar. The plan works like a charm—at first. But amid the glittering, gossipy, cut-throat world of London’s elite, there is only one certainty: love ignores every rule... ",
        "pages": 384,
        "published": 2000,
        "dateread": "2021-08-10",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ]
    }, 
    {
        "id": "182",
        "bookcover": "https://pictures.abebooks.com/isbn/9780749907747-es.jpg",
        "title": "Bridgertons 2. The Viscount Who Loved Me",
        "author": "Julia Quinn",
        "genre": "Romance",
        "format": "Paperback",
        "language": "English",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "1814 promises to be another eventful season, but not, this author believes, for Anthony Bridgerton, London's most elusive bachelor, who has shown no indication that he plans to marry. And in truth, why should he? When it comes to playing the consummate rake, nobody does it better... — Lady Whistledown's Society Papers, April 1814 But this time, the gossip columnists have it wrong. Anthony Bridgerton hasn't just decided to marry—he's even chosen a wife! The only obstacle is his intended's older sister, Kate Sheffield—the most meddlesome woman ever to grace a London ballroom. The spirited schemer is driving Anthony mad with her determination to stop the betrothal, but when he closes his eyes at night, Kate is the woman haunting his increasingly erotic dreams... Contrary to popular belief, Kate is quite sure that reformed rakes do not make the best husbands—and Anthony Bridgerton is the most wicked rogue of them all. Kate is determined to protect her sister—but she fears her own heart is vulnerable. And when Anthony's lips touch hers, she's suddenly afraid she might not be able to resist the reprehensible rake herself... ",
        "pages": 384,
        "published": 2000,
        "dateread": "2022-01-10",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "184",
        "bookcover": "https://m.media-amazon.com/images/I/61u7fXK-n-L._AC_UF1000,1000_QL80_.jpg",
        "title": "Me Before You",
        "author": "Jojo Moyes",
        "genre": "Romance",
        "format": "eBook",
        "language": "English",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "They had nothing in common until love gave them everything to lose... Louisa Clark is an ordinary girl living an exceedingly ordinary life—steady boyfriend, close family—who has barely been farther afield than their tiny village. She takes a badly needed job working for ex–Master of the Universe Will Traynor, who is wheelchair bound after an accident. Will has always lived a huge life—big deals, extreme sports, worldwide travel—and now he’s pretty sure he cannot live the way he is. Will is acerbic, moody, bossy—but Lou refuses to treat him with kid gloves, and soon his happiness means more to her than she expected. When she learns that Will has shocking plans of his own, she sets out to show him that life is still worth living.",
        "pages": 369,
        "published": 2012,
        "dateread": "",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "185",
        "bookcover": "https://m.media-amazon.com/images/I/71QDhHvv7wL.jpg",
        "title": "The Love Hypotesis",
        "author": "Ali Hazelwood",
        "genre": "Romance",
        "format": "Audiobook",
        "language": "English",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships--but her best friend does, and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist, Olive panics and kisses the first man she sees. That man is none other than Adam Carlsen, a young hotshot professor--and well-known ass. Which is why Olive is positively floored when Stanford's reigning lab tyrant agrees to keep her charade a secret and be her fake boyfriend. But when a big science conference goes haywire, putting Olive's career on the Bunsen burner, suddenly, their little experiment feels dangerously close to combustion. And Olive discovers that the only thing more complicated than a hypothesis on love is putting her own heart under the microscope.",
        "pages": 373,
        "published": 2021,
        "dateread": "",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ], [
                    {
                    "id": "10"
                    }
                    ]
    }, 
    {
        "id": "187",
        "bookcover": "https://florestadoslivros.wordpress.com/wp-content/uploads/2018/05/0a465639784d3860b60982c69aab38bc-terry-pratchett-neil-gaiman.jpg",
        "title": "Good Omens",
        "author": "Terry Pratchett, Neil Gaiman",
        "genre": "Comedy",
        "format": "Hardcover",
        "language": "English",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "Events have been set in motion to bring about the End of Days. The armies of Good and Evil are gathering and making their way towards the sleepy English village of Lower Tadfield. The Four Horsepersons of the Apocalypse - War, Famine, Pollution and Death - are assembling. Witchfinder Shadwell and his assistant Newton Pulsifier are also en route to Tadfield to investigate unusual phenomena in the area, while Anathema Device, descendent of prophetess Agnes Nutter, tries to decipher her ancestor’s cryptic predictions. Atlantis is rising; fish are falling from the sky; everything seems to be going to the Divine Plan. Everything, that is, but for an unlikely angel and demon duo, who have been living on Earth for several millennia and have become rather fond of the place. If they are to prevent Armageddon they’ve got to find and kill the one who will bring it about: the Antichrist himself. There’s just one small problem: someone seems to have mislaid him…",
        "pages": 373,
        "published": 1990,
        "dateread": "2017-04-09",
        "customlists": [
                    {
                    "id": "30"
                    }
                    ], [
                    {
                    "id": "20"
                    }
                    ]
    },
    {
        "id": "186",
        "bookcover": "https://m.media-amazon.com/images/I/81X8LIubGRL._AC_UF1000,1000_QL80_.jpg",
        "title": "Not in Love",
        "author": "Ali Hazelwood",
        "genre": "Romance",
        "format": "Audiobook",
        "language": "English",
        "toread": true,
        "fav": false,
        "owned": true,
        "summary": "Rue Siebert might not have it all, but she has enough: a few friends she can always count on, the financial stability she yearned for as a kid, and a successful career as a biotech engineer at Kline, one of the most promising start-ups in the field of food science. Her world is stable, pleasant, and hard-fought. Until a hostile takeover and its offensively attractive front man threatens to bring it all crumbling down. Eli Killgore and his business partners want Kline, period. Eli has his own reasons for pushing this deal through - and he's a man who gets what he wants. With one burning exception: Rue. The woman he can't stop thinking about. The woman who's off-limits to him. Torn between loyalty and an undeniable attraction, Rue and Eli throw caution out the lab and the boardroom windows. Their affair is secret, no-strings-attached, and has a built-in deadline: the day one of their companies will prevail. But the heart is risky business - one that plays for keeps.",
        "pages": 373,
        "published": 2024,
        "dateread": "",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ], [
                    {
                    "id": "10"
                    }
                    ]
    },
    {
        "id": "188",
        "bookcover": "https://m.media-amazon.com/images/I/71OHlYlsKOL._UF1000,1000_QL80_.jpg",
        "title": "Sin Noticias de Gurb",
        "author": "Eduardo Mendoza",
        "genre": "Comedy",
        "format": "Paperback",
        "language": "Spanish",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "Sin noticias de Gurb es sin duda el libro más excéntrico de cuantos he escrito. No hay en él una sola sombra de melancolía. Es una mirada sobre el mundo asombrada, un punto desamparada, pero sin asomo de tragedia ni de censura. Perdido en la Barcelona preolímpica, el extraterrestre Gurb pone al servicio de su supervivencia la extraña cualidad de adoptar el aspecto que le plazca. Se pierde con la apariencia de Marta Sánchez, mientras su compañero alienígena inicia la búsqueda en la jungla urbana. Por su diario personal vamos conociendo las increíbles peripecias de un extraterrestre en Barcelona. En este relato de carácter paródico y satírico la invención de Eduardo Mendoza convierte la Barcelona cotidiana y absurda en el escenario de una carnavalada. Tras las máscaras pintarrajedas y grotescas se revela el verdadero rostro del hombre urbano actual y, tras el estilo literario, la acerada conciencia artística del escritor.",
        "pages": 373,
        "published": 1990,
        "dateread": "2010-01-27",
        "customlists": [
                    {
                    "id": "20"
                    }
                    ]
    }, 
    {
        "id": "192",
        "bookcover": "https://www.hachette.co.uk/wp-content/uploads/2019/04/hbg-title-9781529303681-55.jpg?w=440",
        "title": "One Day",
        "author": "David Nicholls",
        "genre": "Romance",
        "format": "Audiobook",
        "language": "English",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "15th July 1988: Emma and Dexter meet for the first time on the night of their graduation. Tomorrow they must go their separate ways. So where will they be on this one day next year? And the year after that? And every year that follows?",
        "pages": 435,
        "published": 2009,
        "dateread": "2019-11-01",
        "customlists": [
                    {
                    "id": "40"
                    }
                    ], [
                    {
                    "id": "30"
                    }
                    ]
    },
    {
        "id": "193",
        "bookcover": "https://m.media-amazon.com/images/I/71+whvJjE3L._AC_UF894,1000_QL80_.jpg",
        "title": "The Night Circus",
        "author": "Erin Morgenstern",
        "genre": "Fantasy",
        "format": "Special Edition",
        "language": "English",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not. Within the black-and-white striped canvas tents is an utterly unique experience full of breathtaking amazements. It is called Le Cirque des Rêves, and it is only open at night. But behind the scenes, a fierce competition is underway—a duel between two young magicians, Celia and Marco, who have been trained since childhood expressly for this purpose by their mercurial instructors. Unbeknownst to them, this is a game in which only one can be left standing, and the circus is but the stage for a remarkable battle of imagination and will. Despite themselves, however, Celia and Marco tumble headfirst into love—a deep, magical love that makes the lights flicker and the room grow warm whenever they so much as brush hands. True love or not, the game must play out, and the fates of everyone involved, from the cast of extraordinary circus performers to the patrons, hang in the balance, suspended as precariously as the daring acrobats overhead.",
        "pages": 506,
        "published": 2011,
        "dateread": "2022-03-18",
        "customlists": [
                    {
                    "id": "20"
                    }
                    ]
    },
    {
        "id": "189",
        "bookcover": "https://static.wikia.nocookie.net/gone-girl/images/e/ef/Gone_girl_cover.jpg/revision/latest/thumbnail/width/360/height/360?cb=20130816223649",
        "title": "Gone Girl",
        "author": "Gillian Flynn",
        "genre": "Thriller",
        "format": "Hardcover",
        "language": "English",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "Who are you? What have we done to each other? These are the questions Nick Dunne finds himself asking on the morning of his fifth wedding anniversary when his wife Amy suddenly disappears. The police suspect Nick. Amy's friends reveal that she was afraid of him, that she kept secrets from him. He swears it isn't true. A police examination of his computer shows strange searches. He says they weren't made by him. And then there are the persistent calls on his mobile phone. So what did happen to Nick's beautiful wife?",
        "pages": 415,
        "published": 2012,
        "dateread": "",
        "customlists": [
                    {
                    "id": "20"
                    }
                    ]
    },
    {
        "id": "190",
        "bookcover": "https://m.media-amazon.com/images/I/91n0GbAvh-L._UF1000,1000_QL80_.jpg",
        "title": "Apocalypse Z. The Beginning of the End",
        "author": "Manuel Loureiro",
        "genre": "Thriller",
        "format": "eBook",
        "language": "English",
        "toread": true,
        "fav": true,
        "owned": true,
        "summary": "The dead rise… A mysterious incident in Russia, a blip buried in the news—it’s the only warning humanity receives that civilization will soon be destroyed by a single, voracious virus that creates monsters of men. Humanity falls… A lawyer, still grieving over the death of his young wife, begins to write as a form of therapy. But he never expected that his anonymous blog would ultimately record humanity’s last days. The end of the world has begun… Governments scramble to stop the zombie virus, people panic, so-called “Safe Havens” are established, the world erupts into chaos; soon it’s every man, woman, and child for themselves. Armed only with makeshift weapons and the will to live, a lone survivor will give mankind one last chance against…",
        "pages": 397,
        "published": 2007,
        "dateread": "",
        "customlists": [
                    {
                    "id": "20"
                    }
                    ]
    }, 
    {
        "id": "191",
        "bookcover": "https://m.media-amazon.com/images/I/915L5zUTrWL._UF1000,1000_QL80_.jpg",
        "title": "I Am Watching You",
        "author": "Teresa Driscoll",
        "genre": "Thriller",
        "format": "Paperback",
        "language": "English",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "What would it take to make you intervene? When Ella Longfield overhears two attractive young men flirting with teenage girls on a train, she thinks nothing of it—until she realises they are fresh out of prison and her maternal instinct is put on high alert. But just as she’s decided to call for help, something stops her. The next day, she wakes up to the news that one of the girls—beautiful, green-eyed Anna Ballard—has disappeared. A year later, Anna is still missing. Ella is wracked with guilt over what she failed to do, and she’s not the only one who can’t forget. Someone is sending her threatening letters—letters that make her fear for her life. Then an anniversary appeal reveals that Anna’s friends and family might have something to hide. Anna’s best friend, Sarah, hasn’t been telling the whole truth about what really happened that night—and her parents have been keeping secrets of their own. Someone knows where Anna is—and they’re not telling. But they are watching Ella.",
        "pages": 301,
        "published": 2017,
        "dateread": "",
        "customlists": [
                    {
                    "id": "20"
                    }
                    ]
    },
    {
        "id": "194",
        "bookcover": "https://m.media-amazon.com/images/I/81FMksyikrL.jpg",
        "title": "The Haunting of Hill House",
        "author": "Shirley Jackson",
        "genre": "Horror",
        "format": "Paperback",
        "language": "English",
        "toread": true,
        "fav": false,
        "owned": false,
        "summary": "It is the story of four seekers who arrive at a notoriously unfriendly pile called Hill House: Dr. Montague, an occult scholar looking for solid evidence of a "haunting"; Theodora, the lighthearted assistant; Eleanor, a friendless, fragile young woman well acquainted with poltergeists; and Luke, the future heir of Hill House. At first, their stay seems destined to be merely a spooky encounter with inexplicable phenomena. But Hill House is gathering its powers—and soon it will choose one of them to make its own.",
        "pages": 182,
        "published": 1959,
        "dateread": "",
        "customlists": [
                        {
                        "id": "20"
                        }
                        ], [
                        {
                        "id": "30"
                        }
                        ]
    },
    {
        "id": "195",
        "bookcover": "https://m.media-amazon.com/images/I/71yhG9std-L._AC_UF894,1000_QL80_.jpg",
        "title": "Dracula",
        "author": "Bram Stoker",
        "genre": "Horror",
        "format": "Special Edition",
        "language": "English",
        "toread": false,
        "fav": true,
        "owned": true,
        "summary": "When Jonathan Harker visits Transylvania to help Count Dracula with the purchase of a London house, he makes a series of horrific discoveries about his client. Soon afterwards, various bizarre incidents unfold in England: an apparently unmanned ship is wrecked off the coast of Whitby; a young woman discovers strange puncture marks on her neck; and the inmate of a lunatic asylum raves about the 'Master' and his imminent arrival.",
        "pages": 488,
        "published": 1897,
        "dateread": "2018-01-28",
        "customlists": [
                    {
                    "id": "20"
                    }
                    ]
    },
    {
        "id": "196",
        "bookcover": "https://fcs-img.s3.amazonaws.com/1ebda62b-7f02-4fab-8e39-a5e6016ae6b4/107189b1-7f1f-4513-8f82-ad63012b525b/XL.jpg",
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "genre": "Horror",
        "format": "Audiobook",
        "language": "English",
        "toread": true,
        "fav": false,
        "owned": true,
        "summary": "Frankenstein tells the story of gifted scientist Victor Frankenstein who succeeds in giving life to a being of his own creation. However, this is not the perfect specimen he imagines that it will be, but rather a hideous creature who is rejected by Victor and mankind in general.",
        "pages": 260,
        "published": 1818,
        "dateread": "",
        "customlists": [
                    {
                    "id": "20"
                    }
                    ], [
                    {
                    "id": "40"
                    }
                    ]
    },






    



]);

db.getCollection("LISTS").insertMany([
    {"name": "YA / NA", "description": "A collection of my favorite Young Adult and New Adult books.", "id": "10", "booksInList": [{"id": "101"}, {"id": "103"}, {"id": "105"}, {"id": "107"}, {"id": "104"}, {"id": "106"}, {"id": "109"}] },
    {"name": "Gritty and Spooky", "description": "It's just horror books, thriller nights and I.", "id": "20", "booksInList": [{"id": "108"}, {"id": "110"}]},
    {"name": "Book adaptations", "description": "Books and novels I discovered after watching some of its adaptations.", "id": "30", "booksInList": [{"id": "100"}]},
    {"name": "Audiobooks", "description": "For when I don't feel like reading, but still want to read.", "id": "40", "booksInList": [{"id": "111"}, {"id": "112"}, {"id": "114"}, {"id": "115"}, {"id": "116"}, {"id": "117"}]},
]);

//db.getMongo().getDBNames();


