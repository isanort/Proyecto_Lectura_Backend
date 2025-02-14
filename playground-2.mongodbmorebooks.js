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
    }]);

db.getCollection("LISTS").insertMany([
    {"name": "YA / NA", "description": "A collection of my favorite Young Adult and New Adult books.", "id": "10", "booksInList": [{"id": "101"}, {"id": "103"}, {"id": "105"}, {"id": "107"}, {"id": "104"}, {"id": "106"}, {"id": "109"}] },
    {"name": "Spooky", "description": "It's just terror books, thriller nights and I.", "id": "20", "booksInList": [{"id": "108"}, {"id": "110"}]},
    {"name": "Adaptations", "description": "Books I crave reading after watching its adaptation.", "id": "30", "booksInList": [{"id": "100"}]},
    {"name": "Audiobooks", "description": "For when I don't feel like reading, but still want to read.", "id": "40", "booksInList": [{"id": "111"}, {"id": "112"}, {"id": "114"}, {"id": "115"}, {"id": "116"}, {"id": "117"}]},
]);

//db.getMongo().getDBNames();


