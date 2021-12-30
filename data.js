const signs = [
    {
        name: 'Aries',
        element: 'fire',
        desc: 'The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they\'ll make sure they always come out on top.',
        house:'The first house begins the zodiac, and covers the all “firsts”: first impressions, the self and appearance, leadership, new initiatives, fresh starts and beginnings. The sign on the cusp, or starting edge, of this house, is referred to as your rising sign or ascendant.'
    },
    {
        name: 'Taurus',
        element: 'earth',
        desc: 'Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.',
        house:'The second house covers all matters related to your immediate material and physical environment—taste, smells, sound, touch, sights. The second house also rules income, money, and self-esteem.'
    },
    {
        name: 'Gemini',
        element: 'air',
        desc: 'Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.',
        house:'The third house rules all forms of communication—talking, thinking, gadgets and devices (cell phones, pagers, Instant Messenger, etc.). The third house also covers siblings, neighborhoods, local travel, libraries, schools, teachers and community affairs.'
    },
    {
        name: 'Cancer',
        element: 'water',
        desc: 'Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces.',
        house:'The Cancer-ruled fourth house sits at the very bottom of the zodiac wheel, and thus, rules the “foundation” of all things. This includes your home, privacy, your basic security, your parents (particularly your mother), children, your own mothering abilities, nurturing, and TLC.'
    },
    {
        name: 'Leo',
        element: 'fire',
        desc: 'Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They\'re delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate themselves.',
        house:'The fifth house is ruled by dramatic Leo, and it governs self-expression, drama, creativity, color, attention, romance, fun and play.'
    },
    {
        name: 'Virgo',
        element: 'earth',
        desc: 'Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo\'s deep-rooted presence in the material world.',
        house:'The sixth house is the domain of health and service. It rules schedules, organization, routines, fitness, diet and exercise, natural and healthy living, helpfulness and being of service to others.'
    },
    {
        name: 'Libra',
        element: 'air',
        desc: 'Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra\'s fixation on establishing equilibrium.',
        house:'The seventh house is the sector of relationships and other people. It governs all partnerships, both business and personal, and relationship-associated matters, like contracts, marriage, and business deals.'
    },
    {
        name: 'Scorpio',
        element: 'water',
        desc: 'Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. Scorpio derives its extraordinary courage from its psychic abilities.',
        house:'The eighth house is a mysterious sector that rules birth, death, sex, transformation, mysteries, merged energies, and bonding at the deepest level. The eighth house also rules other people’s property and money (real estate, inheritances, investments, et. al.'
    },
    {
        name: 'Sagittarius',
        element: 'fire',
        desc: 'Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.',
        house:'The ninth house covers the higher mind, expansion, international and long-distance travel, foreign languages, inspiration, optimism, publishing, broadcasting, universities and higher education, luck, risk, adventure, gambling, religion, philosophy, morals and ethics.'
    },
    {
        name: 'Capricorn',
        element: 'earth',
        desc: 'Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. They are skilled at navigating both the material and emotional realms. ',
        house:'The tenth house is at the very top and most public part of the chart. The tenth house governs structures, corporations, tradition, public image, fame, honors, achievements, awards, boundaries, rules, discipline, authority, fathers and fatherhood.'
    },
    {
        name: 'Aquarius',
        element: 'air',
        desc: 'Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place.',
        house:'The eleventh house rules teams, friendships, groups, society, technology, video and electronic media, networking, social justice, rebellion, and humanitarian causes. It also rules originality, eccentricity, sudden events, surprises, invention, astronomy, science fiction and all things futuristic.'
    },
    {
        name: 'Pisces',
        element: 'water',
        desc: 'Intuitive, sensitive, and empathetic, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It\'s symbolized by two fish swimming in opposite directions, representing the constant division of Pisces\' attention between fantasy and reality.',
        house:'This house covers the final stages of a project, tying up loose ends, completions, the afterlife, old age, and surrender. It’s also associated with separation from society, institutions, hospitals, jails, hidden agendas, and secret enemies. And it rules the imagination, creativity, arts, film, dance, poetry, journals, and the subconscious mind.'
    }
]
const planets = [
    {
        name:'Sun',
        element: 'fire',
        desc:'Ego and sense of self. The sun is the source of our ego; it’s where the truth of our nature resides, where our identities are forged. You are who you are because of your sun sign, and truly understanding and accepting this integral part of yourself helps you lead a positive, well-rounded life.'
    },
    {
        name:'Moon',
        element: 'water',
        desc:'Emotion and feeling. If your sun sign represents your outward personality, your moon sign focuses inward, revealing your emotional core. It determines how you process your feelings and moods, and understanding how your sun and moon signs interact reveals a much fuller astrological self-portrait. '
    },
    {
        name:'Mercury',
        element: 'air',
        desc:'Transmitting information. Your intelligence resides within your Mercury sign, and it governs our ability to communicate, explain, and understand. Your Mercury sign informs how you listen, read, write, and talk, so understanding how your Mercury sign works can help you understand how best you’re able to learn and teach.'
    },
    {
        name:'Mars',
        element: 'fire',
        desc:'Will and courage. Fiery and passionate, Mars governs how we assert ourselves — our “fight” in the “fight or flight” battle (Mars is the god of war, after all). It’s here that we can fall into aggression and volatility, but if harnessed correctly, our Mars sign can be our greatest source of bravery and self-empowerment.'
    },
    {
        name:'Venus',
        element: 'earth',
        desc:'Love and beauty. Oh, sweet Venus. Our Venus sign determines how we give and receive love, and it’s where we find comfort and support within ourselves and others. Venus rules all the delightful, swoon-worthy, aesthetically pleasing things in life.'
    },
    {
        name:'Jupiter',
        element: 'fire',
        desc:'Abundance and generosity. This giant planet fuels all sorts of positive optimism in our lives, and is considered to be the planet of miracles, hope, and opportunity. Jupiter just wants you to grow as a person by experiencing new things, and if you take care to listen to your Jupiter sign, you’ll surely reap the benefits.'
    },
    {
        name:'Saturn',
        element: 'earth',
        desc:'Discipline and commitment. Saturn is the solar system’s task master, known for sending major challenges. Whenever you’re feeling particularly put out by a hard situation, it’s usually Saturn forcing you to work through the tough stuff to become a better person.'
    },
    {
        name:'Uranus',
        element: 'air',
        desc:'Individuality and change. Ever heard of the Age of Aquarius — the peaceful protesters who spent their time enacting positive change in the ’60s? These folks all had Uranus in Aquarius, and radical change, questioning authority, and championing individuality are all astrological hallmarks of Uranus.'
    },
    {
        name:'Neptune',
        element: 'water',
        desc:'Intuition and healing. Neptune is here to help you step away from your ego and away from awareness, and exist in the in-between. Neptune is known for being a little out there (and we don’t just mean its distance from the sun). It’s all about uncovering your soul and developing your spiritual awareness, whatever that means to you.'
    },
    {
        name:'Pluto',
        element: 'water',
        desc:'Transformation and power. Even if Pluto’s planetary distinction is up for debate, its incredible astrological influence is not. Pluto reigns over our destinies, giving life to our biggest desires while simultaneously reminding us of how short life is, so we better do something memorable while we’re here.'
    }
]