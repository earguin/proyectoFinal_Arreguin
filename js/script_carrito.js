const productos = [
    {
        "id": 1,
        "nombre": "bulbasaur",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        "tipos": [
            "grass",
            "poison"
        ],
        "habilidades": [
            "overgrow",
            "chlorophyll"
        ],
        "descripcion": "Una rara semilla le fue plantada en el lomo al nacer. La planta brota y crece con este Pokémon.",
        "categoria": "Pokémon Semilla",
        "precio": 510
    },
    {
        "id": 2,
        "nombre": "ivysaur",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/2.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        "tipos": [
            "grass",
            "poison"
        ],
        "habilidades": [
            "overgrow",
            "chlorophyll"
        ],
        "descripcion": "Este Pokémon tiene un bulbo en el lomo. Dicen que, al absorber nutrientes, el bulbo se transforma en una flor grande.",
        "categoria": "Pokémon Semilla",
        "precio": 510
    },
    {
        "id": 3,
        "nombre": "venusaur",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/3.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
        "tipos": [
            "grass",
            "poison"
        ],
        "habilidades": [
            "overgrow",
            "chlorophyll"
        ],
        "descripcion": "Llena su cuerpo de energía con los rayos solares que captan los anchos pétalos de su flor.",
        "categoria": "Pokémon Semilla",
        "precio": 510
    },
    {
        "id": 4,
        "nombre": "charmander",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        "tipos": [
            "fire"
        ],
        "habilidades": [
            "blaze",
            "solar-power"
        ],
        "descripcion": "La llama de su cola indica la fuerza vital de Charmander. Será brillante si está sano.",
        "categoria": "Pokémon Lagartija",
        "precio": 510
    },
    {
        "id": 5,
        "nombre": "charmeleon",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/5.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
        "tipos": [
            "fire"
        ],
        "habilidades": [
            "blaze",
            "solar-power"
        ],
        "descripcion": "Suele usar la cola para derribar a su rival. Cuando lo tira, se vale de sus afiladas garras para acabar con él.",
        "categoria": "Pokémon Llama",
        "precio": 510
    },
    {
        "id": 6,
        "nombre": "charizard",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/6.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        "tipos": [
            "fire",
            "flying"
        ],
        "habilidades": [
            "blaze",
            "solar-power"
        ],
        "descripcion": "Cuando lanza una descarga de fuego supercaliente, la roja llama de su cola brilla más intensamente.",
        "categoria": "Pokémon Llama",
        "precio": 510
    },
    {
        "id": 7,
        "nombre": "squirtle",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/7.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        "tipos": [
            "water"
        ],
        "habilidades": [
            "torrent",
            "rain-dish"
        ],
        "descripcion": "Se protege con su caparazón y luego contraataca lanzando agua a presión cuando tiene oportunidad.",
        "categoria": "Pokémon Tortuguita",
        "precio": 510
    },
    {
        "id": 8,
        "nombre": "wartortle",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/8.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
        "tipos": [
            "water"
        ],
        "habilidades": [
            "torrent",
            "rain-dish"
        ],
        "descripcion": "Si es golpeado, esconderá su cabeza. Aun así, su cola puede seguir golpeando.",
        "categoria": "Pokémon Tortuga",
        "precio": 510
    },
    {
        "id": 9,
        "nombre": "blastoise",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/9.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
        "tipos": [
            "water"
        ],
        "habilidades": [
            "torrent",
            "rain-dish"
        ],
        "descripcion": "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.",
        "categoria": "Pokémon Armazón",
        "precio": 510
    },
    {
        "id": 10,
        "nombre": "caterpie",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
        "tipos": [
            "bug"
        ],
        "habilidades": [
            "shield-dust",
            "run-away"
        ],
        "descripcion": "Para protegerse despide un hedor horrible de sus antenas, con el que repele a sus enemigos.",
        "categoria": "Pokémon Gusano",
        "precio": 510
    },
    {
        "id": 11,
        "nombre": "metapod",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/11.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
        "tipos": [
            "bug"
        ],
        "habilidades": [
            "shed-skin"
        ],
        "descripcion": "Su frágil cuerpo está recubierto de una coraza dura como el acero. Permanece quieto en su desarrollo.",
        "categoria": "Pokémon Capullo",
        "precio": 510
    },
    {
        "id": 12,
        "nombre": "butterfree",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/12.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
        "tipos": [
            "bug",
            "flying"
        ],
        "habilidades": [
            "compound-eyes",
            "tinted-lens"
        ],
        "descripcion": "Adora el néctar de las flores. Puede localizar hasta las más pequeñas cantidades de polen.",
        "categoria": "Pokémon Mariposa",
        "precio": 510
    },
    {
        "id": 13,
        "nombre": "weedle",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/13.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
        "tipos": [
            "bug",
            "poison"
        ],
        "habilidades": [
            "shield-dust",
            "run-away"
        ],
        "descripcion": "Suele habitar bosques y praderas. Tiene un afilado y venenoso aguijón de unos 5 cm encima de la cabeza.",
        "categoria": "Pokémon Oruga",
        "precio": 510
    },
    {
        "id": 14,
        "nombre": "kakuna",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/14.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
        "tipos": [
            "bug",
            "poison"
        ],
        "habilidades": [
            "shed-skin"
        ],
        "descripcion": "Casi incapaz de moverse, este Pokémon solo puede endurecer su caparazón para protegerse.",
        "categoria": "Pokémon Capullo",
        "precio": 510
    },
    {
        "id": 15,
        "nombre": "beedrill",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/15.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
        "tipos": [
            "bug",
            "poison"
        ],
        "habilidades": [
            "swarm",
            "sniper"
        ],
        "descripcion": "Tiene 3 aguijones venenosos en sus patas y cola. Suelen pinchar a sus enemigos repetidas veces.",
        "categoria": "Pokémon Abeja Veneno",
        "precio": 510
    },
    {
        "id": 16,
        "nombre": "pidgey",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/16.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
        "tipos": [
            "normal",
            "flying"
        ],
        "habilidades": [
            "keen-eye",
            "tangled-feet",
            "big-pecks"
        ],
        "descripcion": "Muy común en bosques y selvas. Aletea al nivel del suelo para levantar la gravilla.",
        "categoria": "Pokémon Pajarito",
        "precio": 510
    },
    {
        "id": 17,
        "nombre": "pidgeotto",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/17.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
        "tipos": [
            "normal",
            "flying"
        ],
        "habilidades": [
            "keen-eye",
            "tangled-feet",
            "big-pecks"
        ],
        "descripcion": "Tiene unas garras desarrolladas. Puede atrapar un Exeggcute y transportarlo desde una distancia de casi 100 km.",
        "categoria": "Pokémon Pájaro",
        "precio": 510
    },
    {
        "id": 18,
        "nombre": "pidgeot",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/18.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
        "tipos": [
            "normal",
            "flying"
        ],
        "habilidades": [
            "keen-eye",
            "tangled-feet",
            "big-pecks"
        ],
        "descripcion": "Cuando caza, vuela muy deprisa a ras del agua y sorprende a inocentes presas como Magikarp.",
        "categoria": "Pokémon Pájaro",
        "precio": 510
    },
    {
        "id": 19,
        "nombre": "rattata",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/19.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
        "tipos": [
            "normal"
        ],
        "habilidades": [
            "run-away",
            "guts",
            "hustle"
        ],
        "descripcion": "Vive allí donde haya comida disponible. Busca todo el día, sin descanso, algo comestible.",
        "categoria": "Pokémon Ratón",
        "precio": 510
    },
    {
        "id": 20,
        "nombre": "raticate",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/20.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
        "tipos": [
            "normal"
        ],
        "habilidades": [
            "run-away",
            "guts",
            "hustle"
        ],
        "descripcion": "Lima sus colmillos royendo objetos duros. Con ellos puede destruir incluso paredes de hormigón.",
        "categoria": "Pokémon Ratón",
        "precio": 510
    },
    {
        "id": 21,
        "nombre": "spearow",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/21.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
        "tipos": [
            "normal",
            "flying"
        ],
        "habilidades": [
            "keen-eye",
            "sniper"
        ],
        "descripcion": "Muy protector de su territorio, mueve sus cortas alas sin descanso para lanzarse a toda velocidad.",
        "categoria": "Pokémon Pajarito",
        "precio": 510
    },
    {
        "id": 22,
        "nombre": "fearow",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/22.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
        "tipos": [
            "normal",
            "flying"
        ],
        "habilidades": [
            "keen-eye",
            "sniper"
        ],
        "descripcion": "Con sus enormes y magníficas alas, puede seguir volando sin tener que aterrizar para descansar.",
        "categoria": "Pokémon Pico",
        "precio": 510
    },
    {
        "id": 23,
        "nombre": "ekans",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/23.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
        "tipos": [
            "poison"
        ],
        "habilidades": [
            "intimidate",
            "shed-skin",
            "unnerve"
        ],
        "descripcion": "Cuanto más viejo, más crece este Pokémon. Por la noche, descansa en las ramas de los árboles.",
        "categoria": "Pokémon Serpiente",
        "precio": 510
    },
    {
        "id": 24,
        "nombre": "arbok",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/24.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
        "tipos": [
            "poison"
        ],
        "habilidades": [
            "intimidate",
            "shed-skin",
            "unnerve"
        ],
        "descripcion": "El dibujo que tiene en la panza aterroriza. Los rivales más débiles salen huyendo al verlo.",
        "categoria": "Pokémon Cobra",
        "precio": 510
    },
    {
        "id": 25,
        "nombre": "pikachu",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        "tipos": [
            "electric"
        ],
        "habilidades": [
            "static",
            "lightning-rod"
        ],
        "descripcion": "Levanta su cola para vigilar los alrededores. A veces, puede ser alcanzado por un rayo en esa pose.",
        "categoria": "Pokémon Ratón",
        "precio": 510
    },
    {
        "id": 26,
        "nombre": "raichu",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/26.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
        "tipos": [
            "electric"
        ],
        "habilidades": [
            "static",
            "lightning-rod"
        ],
        "descripcion": "Cuando se carga de electricidad, sus músculos se tensan y se vuelve más agresivo de lo normal.",
        "categoria": "Pokémon Ratón",
        "precio": 510
    },
    {
        "id": 27,
        "nombre": "sandshrew",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/27.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
        "tipos": [
            "ground"
        ],
        "habilidades": [
            "sand-veil",
            "sand-rush"
        ],
        "descripcion": "Este Pokémon permanece bajo tierra. Si se siente amenazado, se enrosca para defenderse.",
        "categoria": "Pokémon Ratón",
        "precio": 510
    },
    {
        "id": 28,
        "nombre": "sandslash",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/28.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
        "tipos": [
            "ground"
        ],
        "habilidades": [
            "sand-veil",
            "sand-rush"
        ],
        "descripcion": "Si cava a gran velocidad, puede que se le caigan las garras y púas. Vuelven a crecerle en un día.",
        "categoria": "Pokémon Ratón",
        "precio": 510
    },
    {
        "id": 29,
        "nombre": "nidoran-f",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/29.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
        "tipos": [
            "poison"
        ],
        "habilidades": [
            "poison-point",
            "rivalry",
            "hustle"
        ],
        "descripcion": "Aunque pequeñas, sus venenosas púas son muy peligrosas. Tienen un cuerno más pequeño que los machos.",
        "categoria": "Pokémon Pin Veneno",
        "precio": 510
    },
    {
        "id": 30,
        "nombre": "nidorina",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/30.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
        "tipos": [
            "poison"
        ],
        "habilidades": [
            "poison-point",
            "rivalry",
            "hustle"
        ],
        "descripcion": "Tiene un carácter afable. Emite ondas ultrasónicas para confundir al enemigo.",
        "categoria": "Pokémon Pin Veneno",
        "precio": 510
    },
    {
        "id": 31,
        "nombre": "nidoqueen",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/31.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
        "tipos": [
            "poison",
            "ground"
        ],
        "habilidades": [
            "poison-point",
            "rivalry",
            "sheer-force"
        ],
        "descripcion": "Usa su cuerpo duro y escamoso para sellar la entrada a su madriguera y protegerse de los depredadores.",
        "categoria": "Pokémon Taladro",
        "precio": 510
    },
    {
        "id": 32,
        "nombre": "nidoran-m",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/32.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
        "tipos": [
            "poison"
        ],
        "habilidades": [
            "poison-point",
            "rivalry",
            "hustle"
        ],
        "descripcion": "Saca las orejas por encima de la hierba para explorar el territorio. Le protege su cuerno venenoso.",
        "categoria": "Pokémon Pin Veneno",
        "precio": 510
    },
    {
        "id": 33,
        "nombre": "nidorino",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/33.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
        "tipos": [
            "poison"
        ],
        "habilidades": [
            "poison-point",
            "rivalry",
            "hustle"
        ],
        "descripcion": "Levanta sus grandes orejas para vigilar. Si detecta algo, atacará de inmediato.",
        "categoria": "Pokémon Pin Veneno",
        "precio": 510
    },
    {
        "id": 34,
        "nombre": "nidoking",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/34.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
        "tipos": [
            "poison",
            "ground"
        ],
        "habilidades": [
            "poison-point",
            "rivalry",
            "sheer-force"
        ],
        "descripcion": "Es fácil reconocerlo por tener una dura piel y un gran cuerno lleno de peligrosísimo veneno.",
        "categoria": "Pokémon Taladro",
        "precio": 510
    },
    {
        "id": 35,
        "nombre": "clefairy",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/35.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
        "tipos": [
            "fairy"
        ],
        "habilidades": [
            "cute-charm",
            "magic-guard",
            "friend-guard"
        ],
        "descripcion": "Se dice que la felicidad llegará a quien vea a un grupo de Clefairy bailando a la luz de la luna llena.",
        "categoria": "Pokémon Hada",
        "precio": 510
    },
    {
        "id": 36,
        "nombre": "clefable",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/36.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
        "tipos": [
            "fairy"
        ],
        "habilidades": [
            "cute-charm",
            "magic-guard",
            "unaware"
        ],
        "descripcion": "Su oído es tan agudo que puede oír una aguja caer a 1 km. Vive en montañas solitarias.",
        "categoria": "Pokémon Hada",
        "precio": 510
    },
    {
        "id": 37,
        "nombre": "vulpix",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/37.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
        "tipos": [
            "fire"
        ],
        "habilidades": [
            "flash-fire",
            "drought"
        ],
        "descripcion": "Cuando nace solo tiene una cola, pero a medida que crece, esta se va dividiendo desde la punta.",
        "categoria": "Pokémon Zorro",
        "precio": 510
    },
    {
        "id": 38,
        "nombre": "ninetales",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/38.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
        "tipos": [
            "fire"
        ],
        "habilidades": [
            "flash-fire",
            "drought"
        ],
        "descripcion": "Tiene nueve colas y un pelaje de color dorado. Dicen que este Pokémon llega a vivir 1000 años.",
        "categoria": "Pokémon Zorro",
        "precio": 510
    },
    {
        "id": 39,
        "nombre": "jigglypuff",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/39.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
        "tipos": [
            "normal",
            "fairy"
        ],
        "habilidades": [
            "cute-charm",
            "competitive",
            "friend-guard"
        ],
        "descripcion": "Cautiva con la mirada a su enemigo y hace que se quede profundamente dormido mientras entona una dulce melodía.",
        "categoria": "Pokémon Globo",
        "precio": 510
    },
    {
        "id": 40,
        "nombre": "wigglytuff",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/40.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
        "tipos": [
            "normal",
            "fairy"
        ],
        "habilidades": [
            "cute-charm",
            "competitive",
            "frisk"
        ],
        "descripcion": "Su piel es tan suave que si dos de ellos se acurrucan juntos, no querrán separarse nunca.",
        "categoria": "Pokémon Globo",
        "precio": 510
    },
    {
        "id": 41,
        "nombre": "zubat",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/41.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
        "tipos": [
            "poison",
            "flying"
        ],
        "habilidades": [
            "inner-focus",
            "infiltrator"
        ],
        "descripcion": "Aunque carezca de ojos, puede detectar obstáculos con las ondas ultrasónicas que emite su boca.",
        "categoria": "Pokémon Murciélago",
        "precio": 510
    },
    {
        "id": 42,
        "nombre": "golbat",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/42.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
        "tipos": [
            "poison",
            "flying"
        ],
        "habilidades": [
            "inner-focus",
            "infiltrator"
        ],
        "descripcion": "Cuando ataque, seguirá chupando energía de su víctima, aunque pese tanto que ya no pueda volar.",
        "categoria": "Pokémon Murciélago",
        "precio": 510
    },
    {
        "id": 43,
        "nombre": "oddish",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/43.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
        "tipos": [
            "grass",
            "poison"
        ],
        "habilidades": [
            "chlorophyll",
            "run-away"
        ],
        "descripcion": "Durante el día, se agazapa en el frío subsuelo huyendo del sol. La luz de la luna le hace crecer mucho.",
        "categoria": "Pokémon Hierbajo",
        "precio": 510
    },
    {
        "id": 44,
        "nombre": "gloom",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/44.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
        "tipos": [
            "grass",
            "poison"
        ],
        "habilidades": [
            "chlorophyll",
            "stench"
        ],
        "descripcion": "¡Huele bastante mal! De todas formas, una de cada mil personas aprecian su fétido olor.",
        "categoria": "Pokémon Hierbajo",
        "precio": 510
    },
    {
        "id": 45,
        "nombre": "vileplume",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/45.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
        "tipos": [
            "grass",
            "poison"
        ],
        "habilidades": [
            "chlorophyll",
            "effect-spore"
        ],
        "descripcion": "Cuanto mayores son sus pétalos, más tóxico es su polen. Le pesa la cabeza y le cuesta mantenerla erguida.",
        "categoria": "Pokémon Flor",
        "precio": 510
    },
    {
        "id": 46,
        "nombre": "paras",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/46.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
        "tipos": [
            "bug",
            "grass"
        ],
        "habilidades": [
            "effect-spore",
            "dry-skin",
            "damp"
        ],
        "descripcion": "Lleva en el lomo dos setas parásitas llamadas tochukaso, que crecen con él.",
        "categoria": "Pokémon Hongo",
        "precio": 510
    },
    {
        "id": 47,
        "nombre": "parasect",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/47.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
        "tipos": [
            "bug",
            "grass"
        ],
        "habilidades": [
            "effect-spore",
            "dry-skin",
            "damp"
        ],
        "descripcion": "Parasect está dominado por una seta parásita mayor que él. Dispersa esporas venenosas.",
        "categoria": "Pokémon Hongo",
        "precio": 510
    },
    {
        "id": 48,
        "nombre": "venonat",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/48.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
        "tipos": [
            "bug",
            "poison"
        ],
        "habilidades": [
            "compound-eyes",
            "tinted-lens",
            "run-away"
        ],
        "descripcion": "Sus grandes ojos son en realidad grupos de ojos diminutos. Por la noche se siente atraído por la luz.",
        "categoria": "Pokémon Insecto",
        "precio": 510
    },
    {
        "id": 49,
        "nombre": "venomoth",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/49.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
        "tipos": [
            "bug",
            "poison"
        ],
        "habilidades": [
            "shield-dust",
            "tinted-lens",
            "wonder-skin"
        ],
        "descripcion": "Lanza unas escamas que paralizan a cualquiera. Quien las toque, no podrá ni ponerse de pie.",
        "categoria": "Pokémon Polilla Ven.",
        "precio": 510
    },
    {
        "id": 50,
        "nombre": "diglett",
        "imagen3D": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/50.gif",
        "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
        "tipos": [
            "ground"
        ],
        "habilidades": [
            "sand-veil",
            "arena-trap",
            "sand-force"
        ],
        "descripcion": "Vive un metro por debajo del suelo, donde se alimenta de raíces. También aparece en la superficie.",
        "categoria": "Pokémon Topo",
        "precio": 510
    }
]

const tipoPokemones = [
    {
        "id":1,
        "tipo": "grass",
        "color": "verde"
    },
    {
        "id":2,
        "tipo":"poison",
        "color":"lila"
    },
    {
        "id":3,
        "tipo":"fire",
        "color":"naranja"
    },
    {
        "id":4,
        "tipo":"flying",
        "color":"azulclaro"
    },
    {
        "id":5,
        "tipo":"water",
        "color":"azul"
    },
    {
        "id":6,
        "tipo":"bug",
        "color":"amarrilloverde"
    },
    {
        "id":7,
        "tipo":"normal",
        "color":"gris"
    },
    {
        "id":8,
        "tipo":"electric",
        "color":"amarillo"
    },
    {
        "id":9,
        "tipo":"ground",
        "color":"cafe"
    },
    {
        "id":10,
        "tipo":"fairy",
        "color":"rosa"
    }
]

function imprimirProductosEnHTML(productos) {
  const contenedorProductos = document.getElementById("products-container");
  productos.forEach((producto) => {    
    let cardProducto = document.createElement("div");
    cardProducto.classList = "card-item";
    let clase = "";
    tipo = producto.tipos[0].toLowerCase();
    tipoPokemones.forEach((elemento) => {
        if(tipo === elemento.tipo)
        {
            clase = elemento.color;
        }                
    });       

    cardProducto.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <div class="precio">$${producto.precio}</div>
                <div class="imagen"> <img src="${producto.imagen}" /></div>
                <div class="nombre">${producto.nombre}</div>
            </div>
            <div class="card-back ${clase}">                
                <div class="tipo">${producto.tipos}</div>                
                <div class="descripcion">Descripción:<br/> ${producto.descripcion}</div>
                <div class="categoria">Categoría:<br/> ${producto.categoria}</div>      
                <button id="btnComprar${producto.id}" class="${clase}">Comprar</button>
            </div>                   
        </div>    
    `;

    contenedorProductos.appendChild(cardProducto);
    const botonComprar = document.getElementById(`btnComprar${producto.id}`);

    // Agrego producto al carrito
    botonComprar.addEventListener("click", () => {
      alert(`Has comprado: ${producto.nombre} por $${producto.precio}`);

      carrito.push({ producto: producto.nombre, precio: producto.precio });

      localStorage.setItem("carrito", JSON.stringify(carrito));

      imprimirCarrito(carrito);
    });
  });
}

function imprimirCarrito(carrito) {
    const contenedorCarrito = document.getElementById("cart-container");
    contenedorCarrito.innerHTML = "<h2>Carrito de Compras</h2>";
    let total = 0;
    carrito.forEach((item, index) => {
        
        contenedorCarrito.innerHTML += `
                <p>${index + 1}. ${item.producto} - $${item.precio}</p>            
            `;
            total = total+item.precio;
    });

    contenedorCarrito.innerHTML += `<h3>Total: $${total}</h3>`;
}

// Ejecución del programa
//imprimirProductosEnHTML(productos);

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if (carrito.length > 0) {
  imprimirCarrito(carrito);
}

