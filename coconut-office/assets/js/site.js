/* Coconut Office — shared site script: i18n (EN/ES/DE), language pill, scroll reveal, count-up */
(function(){
"use strict";

/* ---------- Translations ----------
   Keyed by the exact English innerHTML (whitespace-collapsed).
   Backtick literals so embedded ' and " are safe. */
var ES = [
[`Apartments`,`Apartamentos`],
[`Coworking`,`Coworking`],
[`Surf`,`Surf`],
[`Nomad Visa`,`Visa Nómada`],
[`Reviews`,`Reseñas`],
[`Location`,`Ubicación`],
[`Voted <b>#2 Best Coworking Space</b> · Nomad Magazine`,`Votado <b>#2 Mejor Espacio de Coworking</b> · Nomad Magazine`],
[`Work from the waves.<br>Live the <em>pura vida</em>.`,`Trabaja frente a las olas.<br>Vive la <em>pura vida</em>.`],
[`A coworking and coliving retreat for digital nomads and surfers — fiber internet, generator-backed power, and private apartments steps from a World Surfing Reserve in Playa Hermosa, Costa Rica.`,`Un refugio de coworking y coliving para nómadas digitales y surfistas: internet de fibra, energía respaldada por generador y apartamentos privados a pasos de una Reserva Mundial de Surf en Playa Hermosa, Costa Rica.`],
[`Explore apartments`,`Ver apartamentos`],
[`Check availability`,`Consultar disponibilidad`],
[`Scroll`,`Desliza`],
[`Fiber-optic Wi-Fi`,`Wi-Fi de fibra óptica`],
[`Generator-backed power`,`Energía con generador`],
[`Surfable days a year`,`Días surfeables al año`],
[`Bitcoin accepted`,`Aceptamos Bitcoin`],
[`Workcations in Costa Rica`,`Workcations en Costa Rica`],
[`The Coworking Space`,`El Espacio de Coworking`],
[`Life at the Office`,`La vida en el Office`],
[`The Coworking Space for Surfers`,`El Coworking para Surfistas`],
[`Guest Reviews`,`Reseñas de Huéspedes`],
[`An office that doesn't feel like one.`,`Una oficina que no parece una oficina.`],
[`Four ways to stay.`,`Cuatro formas de alojarte.`],
[`Pool mornings, yoga afternoons, macaws overhead.`,`Mañanas de piscina, tardes de yoga, guacamayas sobrevolando.`],
[`Loved by the people who stayed.`,`Amado por quienes se hospedaron.`],
[`Ergonomic workstations, air conditioning, and 500&nbsp;mbps fiber — with panoramic views that make the workday a little easier. Plug in by Ethernet or go wireless, then close the laptop and walk to the water.`,`Estaciones de trabajo ergonómicas, aire acondicionado y fibra de 500&nbsp;mbps, con vistas panorámicas que hacen el día más llevadero. Conéctate por Ethernet o por Wi-Fi, cierra el portátil y camina hasta el mar.`],
[`Private, self-contained apartments with full kitchens, AC, mosquito nets and terraces. One-bedrooms for couples; two-bedroom units with their own pool for those settling in.`,`Apartamentos privados e independientes con cocina completa, aire acondicionado, mosquiteros y terrazas. De un dormitorio para parejas; de dos dormitorios con piscina propia para estancias largas.`],
[`The property is built around its pool, with a yoga deck above for fresh air and a glimpse of the sea. Monkeys and scarlet macaws are regular visitors — and yes, we skate.`,`La propiedad gira en torno a su piscina, con un deck de yoga arriba para tomar aire y ver el mar. Monos y guacamayas rojas son visitantes habituales — y sí, patinamos.`],
[`Real reviews from digital nomads who made the Coconut Office their home away from home.`,`Reseñas reales de nómadas digitales que hicieron del Coconut Office su segundo hogar.`],
[`Just past Jacó — about five minutes by car — on a quiet street 300 metres from the coastal road. A white, three-storey building on the left with a wooden gate, one of the first past the first bend.`,`Justo pasando Jacó — unos cinco minutos en auto — en una calle tranquila a 300 metros de la carretera costera. Un edificio blanco de tres pisos a la izquierda con un portón de madera, uno de los primeros pasando la primera curva.`],
[`A calm place to focus — and a great excuse not to.`,`Un lugar tranquilo para concentrarte — y una gran excusa para no hacerlo.`],
[`The Coconut Office was built for people who work remotely and live fully. Air-conditioned offices, fast fiber, a pool in the middle of the property, and a yoga deck with a glimpse of the sea. Whenever the power drops in Playa Hermosa, our generator keeps the AC, the Wi-Fi and the coffee machine running without a flicker.`,`El Coconut Office fue creado para quienes trabajan en remoto y viven a tope. Oficinas con aire acondicionado, fibra rápida, una piscina en el centro de la propiedad y un deck de yoga con vista al mar. Cuando se va la luz en Playa Hermosa, nuestro generador mantiene el aire, el Wi-Fi y la cafetera funcionando sin un parpadeo.`],
[`It's an adults-only retreat designed for deep work and easy living — familiar faces, a relaxed atmosphere, and that warm, village-like charm that makes Playa Hermosa feel like home.`,`Es un refugio solo para adultos, pensado para el trabajo profundo y la vida tranquila: caras conocidas, ambiente relajado y ese encanto cálido de pueblo que hace de Playa Hermosa un hogar.`],
[`<span class="ic">✓</span><div><b>Uninterrupted by design.</b> Large generator powers the whole property during outages.</div>`,`<span class="ic">✓</span><div><b>Sin interrupciones por diseño.</b> Un gran generador alimenta toda la propiedad durante los cortes.</div>`],
[`<span class="ic">✓</span><div><b>Built for remote work.</b> Ergonomic coworking, Ethernet at the desk, panoramic ocean views.</div>`,`<span class="ic">✓</span><div><b>Hecho para el trabajo remoto.</b> Coworking ergonómico, Ethernet en el escritorio, vistas panorámicas al mar.</div>`],
[`<span class="ic">✓</span><div><b>Steps from the lineup.</b> World Surfing Reserve waves a short walk away.</div>`,`<span class="ic">✓</span><div><b>A pasos del line-up.</b> Olas de Reserva Mundial de Surf a poca distancia.</div>`],
[`Desks with a sea view`,`Escritorios con vista al mar`],
[`Shared workspace`,`Espacio compartido`],
[`Set up and focus`,`Instálate y concéntrate`],
[`One-Bedroom · Sleeps 2`,`Un dormitorio · 2 personas`],
[`Two-Bedroom · Sleeps 4 · Private pool`,`Dos dormitorios · 4 personas · Piscina privada`],
[`Two-Bedroom · Sleeps 4 · Balcony`,`Dos dormitorios · 4 personas · Balcón`],
[`Perfect for couples. A private bedroom, spacious bathroom and a living room with open kitchen, opening onto an ample terrace with garden furniture and almond trees that draw the macaws.`,`Perfecto para parejas. Un dormitorio privado, baño amplio y una sala con cocina abierta, que da a una amplia terraza con muebles de jardín y almendros que atraen a las guacamayas.`],
[`Chill after surfing. Same easy one-bedroom layout — private bedroom, open kitchen and a generous terrace — named for the bend in the road and the surf break just beyond it.`,`Relájate después de surfear. La misma distribución cómoda de un dormitorio — dormitorio privado, cocina abierta y una terraza generosa — bautizada por la curva del camino y el pico de surf justo más allá.`],
[`A two-story unit with a king-size master, a second bedroom that doubles as a private office, a well-stocked kitchen and a large patio overlooking your own pool, farmland and almond trees. Blazing 500&nbsp;mbps fiber throughout.`,`Una unidad de dos plantas con dormitorio principal king, un segundo dormitorio que sirve de oficina privada, una cocina bien equipada y un gran patio con vista a tu propia piscina, campos y almendros. Fibra rapidísima de 500&nbsp;mbps en todo el espacio.`],
[`Light-filled two-bedroom with multiple bathrooms, an open living-kitchen and a standout balcony framed in green. Room to spread out for a longer stay without losing the laid-back feel.`,`Apartamento luminoso de dos dormitorios con varios baños, sala-cocina abierta y un balcón espectacular rodeado de verde. Espacio para extenderte en una estancia larga sin perder el ambiente relajado.`],
[`35 m² + 9 m² terrace`,`35 m² + 9 m² de terraza`],
[`1 Queen bed`,`1 cama Queen`],
[`AC + ceiling fan`,`A/C + ventilador de techo`],
[`Full kitchen`,`Cocina completa`],
[`Cable TV`,`TV por cable`],
[`35 m² + terrace`,`35 m² + terraza`],
[`Mosquito nets`,`Mosquiteros`],
[`Two storeys`,`Dos plantas`],
[`King + 2nd bedroom`,`King + 2º dormitorio`],
[`Private pool`,`Piscina privada`],
[`AC in every room`,`A/C en cada habitación`],
[`Ocean &amp; valley view`,`Vista al mar y al valle`],
[`Two bedrooms`,`Dos dormitorios`],
[`Multiple bathrooms`,`Varios baños`],
[`Sun balcony`,`Balcón soleado`],
[`AC + full kitchen`,`A/C + cocina completa`],
[`Long-stay ready`,`Ideal para estancias largas`],
[`From`,`Desde`],
[`/night`,`/noche`],
[`<span class="play">▶</span> Watch the virtual tour`,`<span class="play">▶</span> Ver el tour virtual`],
[`<span class="play">▶</span> Watch the video tour`,`<span class="play">▶</span> Ver el video tour`],
[`The pool`,`La piscina`],
[`Yoga deck`,`Deck de yoga`],
[`Move`,`Muévete`],
[`Wildlife &amp; greenery`,`Naturaleza y verde`],
[`Skate`,`Skate`],
[`Poolside desk`,`Escritorio junto a la piscina`],
[`At the center of it all`,`En el centro de todo`],
[`Sea breeze, sea view`,`Brisa y vista al mar`],
[`Stretch it out`,`Estírate`],
[`Scarlet macaws visit daily`,`Guacamayas rojas a diario`],
[`Ramps &amp; skateable planters`,`Rampas y jardineras patinables`],
[`Work, then dive in`,`Trabaja y date un chapuzón`],
[`The National Surf Stadium of Costa Rica.`,`El Estadio Nacional de Surf de Costa Rica.`],
[`Playa Hermosa is a World Surfing Reserve and one of the planet's most consistent breaks — slow walls at high tide, hollow barrels at low. Glassy mornings, bigger swells in the green season.`,`Playa Hermosa es una Reserva Mundial de Surf y uno de los picos más consistentes del planeta — paredes lentas en marea alta, tubos huecos en marea baja. Mañanas glassy y swells más grandes en la estación verde.`],
[`flat days per year`,`días sin olas al año`],
[`local surf competitions`,`competencias locales de surf`],
[`from Jacó`,`desde Jacó`],
[`Read the full surf guide`,`Lee la guía completa de surf`],
[`via Google`,`vía Google`],
[`"Hands-down the best Airbnb experience I've ever had. The accommodations are top-notch, Morten and Rosalia are amazing humans, and the walkable proximity to serene sunsets every day is perfect for experiencing pura vida. A step up in quality — blazing fast fiber, a private pool, and macaws daily."`,`"Sin duda la mejor experiencia de Airbnb que he tenido. El alojamiento es de primera, Morten y Rosalia son personas increíbles, y poder caminar a atardeceres serenos cada día es perfecto para vivir la pura vida. Un salto de calidad — fibra rapidísima, piscina privada y guacamayas a diario."`],
[`"A flawless experience and perfect stay. Anyone would be lucky to stay here and enjoy the hospitality of owners Rosalia and Morten. The accommodations feel like home — beautiful, quiet, sparkling clean. I lacked for nothing."`,`"Una experiencia impecable y una estancia perfecta. Cualquiera tendría suerte de hospedarse aquí y disfrutar la hospitalidad de sus dueños, Rosalia y Morten. El alojamiento se siente como en casa — hermoso, tranquilo, impecable. No me faltó nada."`],
[`"Morten and Rosalia take the definition of hospitality to a whole new level. We've been digital nomads nearly 5 years and stayed in many places — the Coconut Office is hands-down, far and away, the absolute best. The property has been lovingly designed and constructed."`,`"Morten y Rosalia llevan la definición de hospitalidad a otro nivel. Llevamos casi 5 años como nómadas digitales y nos hemos quedado en muchos lugares — el Coconut Office es, de lejos, el mejor de todos. La propiedad fue diseñada y construida con mucho cariño."`],
[`Bret Hoffman<small>3-month stay · Tulin · Jan 2025</small>`,`Bret Hoffman<small>Estancia de 3 meses · Tulin · ene 2025</small>`],
[`Angie Sugrim<small>Remote worker · Jan 2025</small>`,`Angie Sugrim<small>Trabajadora remota · ene 2025</small>`],
[`Daly Sombat<small>Digital nomad · Oct 2024</small>`,`Daly Sombat<small>Nómada digital · oct 2024</small>`],
[`Getting here`,`Cómo llegar`],
[`Pass the town of Playa Hermosa, then about 400 metres on, the first entrance on the left is Calle Hermosa. The Coconut Office sits 300 metres in — easy to spot, just past the first bend.`,`Pasa el pueblo de Playa Hermosa y, unos 400 metros después, la primera entrada a la izquierda es Calle Hermosa. El Coconut Office está 300 metros adentro — fácil de ver, justo pasando la primera curva.`],
[`Staying long-term?<small>Costa Rica's Digital Nomad Visa lets you stay up to 2 years, tax-free on foreign income.</small>`,`¿Estancia larga?<small>La Visa de Nómada Digital de Costa Rica te permite quedarte hasta 2 años, sin impuestos sobre ingresos del extranjero.</small>`],
[`Visa guide`,`Guía del visado`],
[`Visit`,`Explora`],
[`Info`,`Info`],
[`Contact`,`Contacto`],
[`Life Here`,`La Vida Aquí`],
[`Surf in Playa Hermosa`,`Surf en Playa Hermosa`],
[`Location &amp; arrival`,`Ubicación y llegada`],
[`Digital Nomad Visa`,`Visa de Nómada Digital`],
[`Book a stay`,`Reservar`],
[`Coworking &amp; coliving for digital nomads and surfers in Playa Hermosa, Costa Rica. An adults-only retreat for deep work and easy living.`,`Coworking y coliving para nómadas digitales y surfistas en Playa Hermosa, Costa Rica. Un refugio solo para adultos, para el trabajo profundo y la vida tranquila.`],
[`₿ Bitcoin accepted`,`₿ Bitcoin aceptado`],
[`Your desk by the sea is waiting.`,`Tu escritorio junto al mar te espera.`],
[`Tell us your dates and which apartment caught your eye — we'll take care of the rest. Bitcoin welcome.`,`Cuéntanos tus fechas y qué apartamento te gustó — nosotros nos encargamos del resto. Aceptamos Bitcoin.`],
[`Message us on WhatsApp`,`Escríbenos por WhatsApp`],
/* ---- Surf page ---- */
[`<a href="index.html">Home</a> &nbsp;/&nbsp; Surfing Playa Hermosa`,`<a href="index.html">Inicio</a> &nbsp;/&nbsp; Surf en Playa Hermosa`],
[`Surfing Playa Hermosa.`,`Surf en Playa Hermosa.`],
[`A World Surfing Reserve and the National Surf Stadium of Costa Rica — waves nearly every day of the year, a short walk from your door.`,`Una Reserva Mundial de Surf y el Estadio Nacional de Surf de Costa Rica — olas casi todos los días del año, a pocos pasos de tu puerta.`],
[`Playa Hermosa has earned a reputation as one of the world's premier surf destinations. Known as the <b>National Surf Stadium of Costa Rica</b>, it delivers wave action almost year-round — only about <b>seven flat days a year</b>. You'll find slow, forgiving walls at high tide and fast, hollow tubes and barrels at low. Smaller in the dry season, bigger when the rains bring the swell.`,`Playa Hermosa se ha ganado la fama de ser uno de los mejores destinos de surf del mundo. Conocida como el <b>Estadio Nacional de Surf de Costa Rica</b>, ofrece olas casi todo el año — solo unos <b>siete días sin olas al año</b>. Encontrarás paredes lentas y nobles en marea alta, y tubos rápidos y huecos en marea baja. Más pequeñas en la estación seca, más grandes cuando las lluvias traen el swell.`],
[`The whole stretch is recognized as a <b>World Surfing Reserve</b> by the Save The Waves Coalition — a stamp that underlines how environmentally and culturally important this break really is.`,`Todo este tramo está reconocido como <b>Reserva Mundial de Surf</b> por la Save The Waves Coalition — un sello que subraya lo importante que es esta ola a nivel ambiental y cultural.`],
[`Playa Hermosa is known for exceptional consistency. With only about seven surfable-wave-free days a year, there's almost always something to paddle into. Quality shifts with tide and season: high tide softens the wave, low tide draws experienced surfers chasing barrels. Mornings and evenings often go <b>glassy</b>, especially in the dry season.`,`Playa Hermosa es conocida por su consistencia excepcional. Con apenas unos siete días sin olas surfeables al año, casi siempre hay algo para remar. La calidad cambia con la marea y la estación: la marea alta suaviza la ola, la baja atrae a surfistas expertos en busca de tubos. Las mañanas y los atardeceres suelen ponerse <b>glassy</b>, sobre todo en la estación seca.`],
[`Every Saturday the beach comes alive with competition, drawing pros and amateurs for cash prizes — a real hub for the local surf community. Playa Hermosa also regularly hosts the <b>Costa Rican Championships</b>, often with the grand finale right here.`,`Cada sábado la playa cobra vida con competencias que atraen a profesionales y aficionados por premios en efectivo — un verdadero punto de encuentro de la comunidad surfera local. Playa Hermosa también acoge con frecuencia el <b>Campeonato Nacional de Costa Rica</b>, a menudo con la gran final aquí mismo.`],
[`Why it's special`,`Por qué es especial`],
[`The breaks, south to north`,`Los picos, de sur a norte`],
[`When to paddle out`,`Cuándo entrar al agua`],
[`Stay where the waves are.`,`Hospédate donde están las olas.`],
[`Consistency &amp; wave quality`,`Consistencia y calidad de ola`],
[`National significance`,`Importancia nacional`],
[`Condition`,`Condición`],
[`What to expect`,`Qué esperar`],
[`High tide`,`Marea alta`],
[`Slower, softer waves — relaxed sessions, friendlier for less experienced surfers.`,`Olas más lentas y suaves — sesiones relajadas, ideales para surfistas con menos experiencia.`],
[`Low tide`,`Marea baja`],
[`Faster, more powerful, hollow waves — for adrenaline and barrels.`,`Olas más rápidas, potentes y huecas — para la adrenalina y los tubos.`],
[`Dry season (Dec–Apr)`,`Estación seca (dic–abr)`],
[`Smaller waves, frequent glassy mornings and evenings.`,`Olas más pequeñas, mañanas y atardeceres glassy frecuentes.`],
[`Rainy / green season`,`Estación lluviosa / verde`],
[`The biggest swells of the year.`,`Los mayores swells del año.`],
[`All levels · best at low`,`Todos los niveles · mejor en marea baja`],
[`Advanced`,`Avanzado`],
[`All levels · variety`,`Todos los niveles · variedad`],
[`All levels · glassy`,`Todos los niveles · glassy`],
[`All levels`,`Todos los niveles`],
[`Advanced · remote`,`Avanzado · remoto`],
[`The dependable one — rarely a flat day. The beach structure throws fast, hollow waves at low tide for barrel hunters, then mellows at high tide for a more relaxed ride.`,`El confiable — rara vez un día sin olas. La estructura de la playa lanza olas rápidas y huecas en marea baja para los cazadores de tubos, y se suaviza en marea alta para un surf más relajado.`],
[`Powerful waves and proper tubes — one for advanced surfers. Best in the morning while the wind is still offshore.`,`Olas potentes y tubos de verdad — para surfistas avanzados. Mejor por la mañana, mientras el viento sigue offshore.`],
[`The variety spot. Wave patterns change a lot with the tide — slower and manageable on the high, quicker and more demanding on the low. In the dry season it's often a good alternative when other breaks get too big.`,`El pico de la variedad. Los patrones de ola cambian mucho con la marea — más lentos y manejables en alta, más rápidos y exigentes en baja. En la estación seca suele ser buena alternativa cuando otros picos crecen demasiado.`],
[`Popular in recent years, and usually room to park. Waves vary a lot by season — smaller in the dry months, bigger in the rains. Early mornings and late afternoons go glassy, a favorite of surfers and photographers alike.`,`Popular en los últimos años, y casi siempre hay dónde estacionar. Las olas varían mucho según la estación — más pequeñas en los meses secos, más grandes con las lluvias. Al amanecer y al atardecer se pone glassy, favorito de surfistas y fotógrafos por igual.`],
[`A named break along the same stretch, by the bend in the road our La Curva apartment is named for — handy reference point as you walk the beach reading the sandbars.`,`Un pico con nombre en el mismo tramo, junto a la curva del camino que da nombre a nuestro apartamento La Curva — un buen punto de referencia mientras caminas la playa leyendo los bancos de arena.`],
[`Less surfed, and on bigger swells it can serve up genuinely challenging conditions. A little more remote — surf it with others and keep an eye on the currents.`,`Menos surfeado, y con swells más grandes puede ofrecer condiciones realmente exigentes. Un poco más apartado — súrfealo acompañado y vigila las corrientes.`],
[`<b>Local tip:</b> the same names — El Almendro, La Curva, Tulin — are the surf breaks <em>and</em> our apartments. Stay in one, walk to the other.`,`<b>Tip local:</b> los mismos nombres — El Almendro, La Curva, Tulin — son los picos de surf <em>y</em> nuestros apartamentos. Hospédate en uno, camina al otro.`],
[`Watch: Costa Rica's Surfing Paradise`,`Ver: El paraíso del surf de Costa Rica`],
[`Coconut Office sits steps from the lineup, with a real coworking space and fast fiber for when the surf goes flat. Work, surf, repeat.`,`Coconut Office está a pasos del line-up, con un coworking de verdad y fibra rápida para cuando el mar se aplana. Trabaja, surfea, repite.`],
[`See the apartments`,`Ver los apartamentos`],
/* ---- Visa page ---- */
[`<a href="index.html">Home</a> &nbsp;/&nbsp; Digital Nomad Visa`,`<a href="index.html">Inicio</a> &nbsp;/&nbsp; Visa de Nómada Digital`],
[`The Costa Rica Digital Nomad Visa, in plain English.`,`La Visa de Nómada Digital de Costa Rica, explicada claro.`],
[`Stay up to two years, work remotely for your company back home, and pay no Costa Rican income tax on it. Here's how it works and what you need.`,`Quédate hasta dos años, trabaja en remoto para tu empresa en casa y no pagues impuesto sobre la renta en Costa Rica. Así funciona y esto es lo que necesitas.`],
[`Officially it's the visa for <b>"Remote Workers and Service Providers"</b> — most people just call it the Digital Nomad Visa. It was created specifically for people who work remotely, and it changes the math on living in Costa Rica long-term. (You don't even have to work digitally — analog remote work counts too.)`,`Oficialmente es la visa para <b>"Trabajadores Remotos y Prestadores de Servicios"</b> — casi todos la llaman simplemente Visa de Nómada Digital. Se creó específicamente para quienes trabajan en remoto y cambia las cuentas de vivir en Costa Rica a largo plazo. (Ni siquiera tienes que trabajar de forma digital — el trabajo remoto analógico también cuenta.)`],
[`It lets you stay in Costa Rica for <b>up to two years without leaving the country</b>. The visa is valid for one year and renews easily for a second. And because it's built for people earning from a company abroad, you're <b>exempt from Costa Rican income tax</b> on that income. Plenty of nomads have lived here for years on tourist visas — but this category unlocks real advantages a tourist stamp never will.`,`Te permite quedarte en Costa Rica <b>hasta dos años sin salir del país</b>. La visa es válida por un año y se renueva fácilmente por otro. Y como está pensada para quienes ganan de una empresa en el extranjero, estás <b>exento del impuesto sobre la renta de Costa Rica</b> sobre esos ingresos. Muchos nómadas han vivido aquí años con visa de turista — pero esta categoría desbloquea ventajas reales que un sello de turista nunca dará.`],
[`All of it makes you feel more like a resident than a tourist — though it isn't full residency. (You'll still pay the tourist entrance price at national parks, for example.)`,`Todo esto hace que te sientas más residente que turista — aunque no es residencia plena. (Por ejemplo, seguirás pagando la entrada de turista en los parques nacionales.)`],
[`The benefits`,`Los beneficios`],
[`What you need to qualify`,`Qué necesitas para calificar`],
[`Thinking of a longer stay?`,`¿Piensas quedarte más tiempo?`],
[`Stay up to <b>2 years</b> without having to leave the country.`,`Quédate hasta <b>2 años</b> sin tener que salir del país.`],
[`Legally work remotely while in Costa Rica for a company in another country.`,`Trabaja legalmente en remoto desde Costa Rica para una empresa de otro país.`],
[`<b>Exempt from paying Costa Rican income tax</b> on that income.`,`<b>Exento del impuesto sobre la renta de Costa Rica</b> sobre esos ingresos.`],
[`Open a <b>Costa Rican bank account</b> — normally very hard for foreigners.`,`Abre una <b>cuenta bancaria en Costa Rica</b> — normalmente muy difícil para extranjeros.`],
[`Obtain a <b>Costa Rican driver's license</b> by homologating your home-country one.`,`Obtén una <b>licencia de conducir costarricense</b> homologando la de tu país.`],
[`Waive customs taxes on most of the equipment you need to do your work (restrictions apply).`,`Exención de aranceles para la mayoría del equipo que necesitas para trabajar (aplican restricciones).`],
[`Often <b>lower your health-insurance costs</b> versus a full national plan back home.`,`A menudo <b>reduce tus costos de seguro médico</b> frente a un plan nacional completo en casa.`],
[`Proof of <b>health insurance</b> for you and any dependents, covering your full stay.`,`Comprobante de <b>seguro médico</b> para ti y tus dependientes, que cubra toda tu estancia.`],
[`All documents must be presented <b>in Spanish</b>.`,`Todos los documentos deben presentarse <b>en español</b>.`],
[`$3,000<span style="font-size:1rem;color:var(--ink-soft)">/mo</span>`,`$3,000<span style="font-size:1rem;color:var(--ink-soft)">/mes</span>`],
[`$4,000<span style="font-size:1rem;color:var(--ink-soft)">/mo</span>`,`$4,000<span style="font-size:1rem;color:var(--ink-soft)">/mes</span>`],
[`Proof of at least <b>US$3,000 monthly income</b> if you're applying solo.`,`Comprobante de al menos <b>US$3,000 de ingreso mensual</b> si aplicas solo.`],
[`Proof of at least <b>US$4,000 monthly income</b> if you're including family members.`,`Comprobante de al menos <b>US$4,000 de ingreso mensual</b> si incluyes a familiares.`],
[`<b>How long does it take?</b> From applying to receiving your official documents is usually <b>under 30 days</b>.`,`<b>¿Cuánto tarda?</b> Desde la solicitud hasta recibir los documentos oficiales suele ser <b>menos de 30 días</b>.`],
[`<b>One honest note:</b> rules and amounts can change, and your situation back home (taxes, health care) depends on your own country. Treat this as a friendly starting point, not legal advice — check the official current requirements before you apply.`,`<b>Una nota honesta:</b> las reglas y los montos pueden cambiar, y tu situación en casa (impuestos, salud) depende de tu país. Tómalo como un punto de partida amistoso, no como asesoría legal — verifica los requisitos oficiales vigentes antes de aplicar.`],
[`Coconut Office is built for exactly this — fast fiber, a real coworking space, and apartments by the day, week or month. Tell us your plans.`,`Coconut Office está hecho justo para esto — fibra rápida, un coworking de verdad y apartamentos por día, semana o mes. Cuéntanos tus planes.`]
];

var DE = [
[`Apartments`,`Apartments`],
[`Coworking`,`Coworking`],
[`Surf`,`Surfen`],
[`Nomad Visa`,`Nomaden-Visum`],
[`Reviews`,`Bewertungen`],
[`Location`,`Lage`],
[`Voted <b>#2 Best Coworking Space</b> · Nomad Magazine`,`Gewählt zum <b>#2 besten Coworking Space</b> · Nomad Magazine`],
[`Work from the waves.<br>Live the <em>pura vida</em>.`,`Arbeite an den Wellen.<br>Lebe das <em>pura vida</em>.`],
[`A coworking and coliving retreat for digital nomads and surfers — fiber internet, generator-backed power, and private apartments steps from a World Surfing Reserve in Playa Hermosa, Costa Rica.`,`Ein Coworking- und Coliving-Refugium für digitale Nomaden und Surfer — Glasfaser-Internet, generatorgestützte Stromversorgung und private Apartments nur wenige Schritte von einem World Surfing Reserve in Playa Hermosa, Costa Rica.`],
[`Explore apartments`,`Apartments entdecken`],
[`Check availability`,`Verfügbarkeit prüfen`],
[`Scroll`,`Scrollen`],
[`Fiber-optic Wi-Fi`,`Glasfaser-WLAN`],
[`Generator-backed power`,`Strom mit Generator`],
[`Surfable days a year`,`Surfbare Tage im Jahr`],
[`Bitcoin accepted`,`Bitcoin akzeptiert`],
[`Workcations in Costa Rica`,`Workcations in Costa Rica`],
[`The Coworking Space`,`Der Coworking Space`],
[`Life at the Office`,`Leben im Office`],
[`The Coworking Space for Surfers`,`Der Coworking Space für Surfer`],
[`Guest Reviews`,`Gästebewertungen`],
[`An office that doesn't feel like one.`,`Ein Büro, das sich nicht wie eines anfühlt.`],
[`Four ways to stay.`,`Vier Arten zu bleiben.`],
[`Pool mornings, yoga afternoons, macaws overhead.`,`Pool am Morgen, Yoga am Nachmittag, Aras über dir.`],
[`Loved by the people who stayed.`,`Geliebt von allen, die hier gewohnt haben.`],
[`Ergonomic workstations, air conditioning, and 500&nbsp;mbps fiber — with panoramic views that make the workday a little easier. Plug in by Ethernet or go wireless, then close the laptop and walk to the water.`,`Ergonomische Arbeitsplätze, Klimaanlage und 500&nbsp;Mbit/s-Glasfaser — mit Panoramablick, der den Arbeitstag leichter macht. Per Ethernet oder kabellos einloggen, dann den Laptop zuklappen und zum Wasser laufen.`],
[`Private, self-contained apartments with full kitchens, AC, mosquito nets and terraces. One-bedrooms for couples; two-bedroom units with their own pool for those settling in.`,`Private, eigenständige Apartments mit voll ausgestatteter Küche, Klimaanlage, Moskitonetzen und Terrassen. Ein-Zimmer-Apartments für Paare; Zwei-Zimmer-Einheiten mit eigenem Pool für längere Aufenthalte.`],
[`The property is built around its pool, with a yoga deck above for fresh air and a glimpse of the sea. Monkeys and scarlet macaws are regular visitors — and yes, we skate.`,`Das Anwesen ist um seinen Pool herum gebaut, mit einem Yoga-Deck darüber für frische Luft und einen Blick aufs Meer. Affen und rote Aras sind regelmäßige Gäste — und ja, wir skaten.`],
[`Real reviews from digital nomads who made the Coconut Office their home away from home.`,`Echte Bewertungen von digitalen Nomaden, für die das Coconut Office zum zweiten Zuhause wurde.`],
[`Just past Jacó — about five minutes by car — on a quiet street 300 metres from the coastal road. A white, three-storey building on the left with a wooden gate, one of the first past the first bend.`,`Kurz hinter Jacó — etwa fünf Autominuten — in einer ruhigen Straße, 300 Meter von der Küstenstraße. Ein weißes, dreistöckiges Gebäude auf der linken Seite mit Holztor, eines der ersten hinter der ersten Kurve.`],
[`A calm place to focus — and a great excuse not to.`,`Ein ruhiger Ort zum Fokussieren — und ein guter Grund, es nicht zu tun.`],
[`The Coconut Office was built for people who work remotely and live fully. Air-conditioned offices, fast fiber, a pool in the middle of the property, and a yoga deck with a glimpse of the sea. Whenever the power drops in Playa Hermosa, our generator keeps the AC, the Wi-Fi and the coffee machine running without a flicker.`,`Das Coconut Office wurde für Menschen geschaffen, die remote arbeiten und voll leben. Klimatisierte Büros, schnelles Glasfaser, ein Pool mitten auf dem Grundstück und ein Yoga-Deck mit Blick aufs Meer. Wann immer in Playa Hermosa der Strom ausfällt, hält unser Generator Klimaanlage, WLAN und Kaffeemaschine ohne Unterbrechung am Laufen.`],
[`It's an adults-only retreat designed for deep work and easy living — familiar faces, a relaxed atmosphere, and that warm, village-like charm that makes Playa Hermosa feel like home.`,`Ein Refugium nur für Erwachsene, gemacht für konzentriertes Arbeiten und entspanntes Leben — bekannte Gesichter, eine lockere Atmosphäre und dieser warme, dörfliche Charme, der Playa Hermosa wie ein Zuhause anfühlen lässt.`],
[`<span class="ic">✓</span><div><b>Uninterrupted by design.</b> Large generator powers the whole property during outages.</div>`,`<span class="ic">✓</span><div><b>Unterbrechungsfrei by design.</b> Ein großer Generator versorgt das gesamte Grundstück bei Stromausfällen.</div>`],
[`<span class="ic">✓</span><div><b>Built for remote work.</b> Ergonomic coworking, Ethernet at the desk, panoramic ocean views.</div>`,`<span class="ic">✓</span><div><b>Für Remote-Arbeit gemacht.</b> Ergonomisches Coworking, Ethernet am Schreibtisch, Panoramablick aufs Meer.</div>`],
[`<span class="ic">✓</span><div><b>Steps from the lineup.</b> World Surfing Reserve waves a short walk away.</div>`,`<span class="ic">✓</span><div><b>Wenige Schritte vom Line-up.</b> Wellen eines World Surfing Reserve nur einen kurzen Spaziergang entfernt.</div>`],
[`Desks with a sea view`,`Schreibtische mit Meerblick`],
[`Shared workspace`,`Gemeinsamer Arbeitsbereich`],
[`Set up and focus`,`Einrichten und fokussieren`],
[`One-Bedroom · Sleeps 2`,`Ein Schlafzimmer · 2 Personen`],
[`Two-Bedroom · Sleeps 4 · Private pool`,`Zwei Schlafzimmer · 4 Personen · Privatpool`],
[`Two-Bedroom · Sleeps 4 · Balcony`,`Zwei Schlafzimmer · 4 Personen · Balkon`],
[`Perfect for couples. A private bedroom, spacious bathroom and a living room with open kitchen, opening onto an ample terrace with garden furniture and almond trees that draw the macaws.`,`Perfekt für Paare. Ein privates Schlafzimmer, ein geräumiges Bad und ein Wohnzimmer mit offener Küche, das auf eine großzügige Terrasse mit Gartenmöbeln und Mandelbäumen führt, die die Aras anlocken.`],
[`Chill after surfing. Same easy one-bedroom layout — private bedroom, open kitchen and a generous terrace — named for the bend in the road and the surf break just beyond it.`,`Entspann dich nach dem Surfen. Dasselbe unkomplizierte Ein-Zimmer-Layout — privates Schlafzimmer, offene Küche und eine großzügige Terrasse — benannt nach der Kurve in der Straße und dem Surf-Break gleich dahinter.`],
[`A two-story unit with a king-size master, a second bedroom that doubles as a private office, a well-stocked kitchen and a large patio overlooking your own pool, farmland and almond trees. Blazing 500&nbsp;mbps fiber throughout.`,`Eine zweistöckige Einheit mit Kingsize-Hauptschlafzimmer, einem zweiten Zimmer als privatem Büro, einer gut ausgestatteten Küche und einer großen Terrasse mit Blick auf den eigenen Pool, Felder und Mandelbäume. Überall blitzschnelles 500&nbsp;Mbit/s-Glasfaser.`],
[`Light-filled two-bedroom with multiple bathrooms, an open living-kitchen and a standout balcony framed in green. Room to spread out for a longer stay without losing the laid-back feel.`,`Helles Zwei-Zimmer-Apartment mit mehreren Bädern, offener Wohnküche und einem herausragenden, von Grün umrahmten Balkon. Platz zum Ausbreiten für einen längeren Aufenthalt, ohne das entspannte Gefühl zu verlieren.`],
[`35 m² + 9 m² terrace`,`35 m² + 9 m² Terrasse`],
[`1 Queen bed`,`1 Queensize-Bett`],
[`AC + ceiling fan`,`Klimaanlage + Deckenventilator`],
[`Full kitchen`,`Voll ausgestattete Küche`],
[`Cable TV`,`Kabel-TV`],
[`35 m² + terrace`,`35 m² + Terrasse`],
[`Mosquito nets`,`Moskitonetze`],
[`Two storeys`,`Zwei Etagen`],
[`King + 2nd bedroom`,`Kingsize + 2. Schlafzimmer`],
[`Private pool`,`Privatpool`],
[`AC in every room`,`Klimaanlage in jedem Zimmer`],
[`Ocean &amp; valley view`,`Meer- & Talblick`],
[`Two bedrooms`,`Zwei Schlafzimmer`],
[`Multiple bathrooms`,`Mehrere Bäder`],
[`Sun balcony`,`Sonnenbalkon`],
[`AC + full kitchen`,`Klimaanlage + Küche`],
[`Long-stay ready`,`Ideal für lange Aufenthalte`],
[`From`,`Ab`],
[`/night`,`/Nacht`],
[`<span class="play">▶</span> Watch the virtual tour`,`<span class="play">▶</span> Virtuelle Tour ansehen`],
[`<span class="play">▶</span> Watch the video tour`,`<span class="play">▶</span> Video-Tour ansehen`],
[`The pool`,`Der Pool`],
[`Yoga deck`,`Yoga-Deck`],
[`Move`,`Beweg dich`],
[`Wildlife &amp; greenery`,`Tierwelt & Grün`],
[`Skate`,`Skaten`],
[`Poolside desk`,`Schreibtisch am Pool`],
[`At the center of it all`,`Im Zentrum von allem`],
[`Sea breeze, sea view`,`Meeresbrise, Meerblick`],
[`Stretch it out`,`Streck dich`],
[`Scarlet macaws visit daily`,`Täglich zu Besuch: Aras`],
[`Ramps &amp; skateable planters`,`Rampen & befahrbare Beete`],
[`Work, then dive in`,`Arbeiten, dann reinspringen`],
[`The National Surf Stadium of Costa Rica.`,`Das Nationale Surf-Stadion von Costa Rica.`],
[`Playa Hermosa is a World Surfing Reserve and one of the planet's most consistent breaks — slow walls at high tide, hollow barrels at low. Glassy mornings, bigger swells in the green season.`,`Playa Hermosa ist ein World Surfing Reserve und einer der beständigsten Breaks der Welt — langsame Wände bei Flut, hohle Barrels bei Ebbe. Glassy am Morgen, größere Swells in der grünen Saison.`],
[`flat days per year`,`flache Tage pro Jahr`],
[`local surf competitions`,`lokale Surf-Wettbewerbe`],
[`from Jacó`,`von Jacó`],
[`Read the full surf guide`,`Zum kompletten Surf-Guide`],
[`via Google`,`über Google`],
[`"Hands-down the best Airbnb experience I've ever had. The accommodations are top-notch, Morten and Rosalia are amazing humans, and the walkable proximity to serene sunsets every day is perfect for experiencing pura vida. A step up in quality — blazing fast fiber, a private pool, and macaws daily."`,`"Mit Abstand die beste Airbnb-Erfahrung, die ich je hatte. Die Unterkunft ist erstklassig, Morten und Rosalia sind großartige Menschen, und die Nähe zu ruhigen Sonnenuntergängen jeden Tag ist perfekt, um pura vida zu erleben. Ein Qualitätssprung — blitzschnelles Glasfaser, ein privater Pool und täglich Aras."`],
[`"A flawless experience and perfect stay. Anyone would be lucky to stay here and enjoy the hospitality of owners Rosalia and Morten. The accommodations feel like home — beautiful, quiet, sparkling clean. I lacked for nothing."`,`"Eine makellose Erfahrung und ein perfekter Aufenthalt. Jeder hätte Glück, hier zu wohnen und die Gastfreundschaft der Eigentümer Rosalia und Morten zu genießen. Die Unterkunft fühlt sich wie ein Zuhause an — schön, ruhig, blitzsauber. Mir fehlte es an nichts."`],
[`"Morten and Rosalia take the definition of hospitality to a whole new level. We've been digital nomads nearly 5 years and stayed in many places — the Coconut Office is hands-down, far and away, the absolute best. The property has been lovingly designed and constructed."`,`"Morten und Rosalia heben die Definition von Gastfreundschaft auf ein ganz neues Level. Wir sind seit fast 5 Jahren digitale Nomaden und haben an vielen Orten gewohnt — das Coconut Office ist mit Abstand das absolut beste. Das Anwesen wurde mit viel Liebe gestaltet und gebaut."`],
[`Bret Hoffman<small>3-month stay · Tulin · Jan 2025</small>`,`Bret Hoffman<small>3-Monats-Aufenthalt · Tulin · Jan. 2025</small>`],
[`Angie Sugrim<small>Remote worker · Jan 2025</small>`,`Angie Sugrim<small>Remote-Arbeiterin · Jan. 2025</small>`],
[`Daly Sombat<small>Digital nomad · Oct 2024</small>`,`Daly Sombat<small>Digitaler Nomade · Okt. 2024</small>`],
[`Getting here`,`Anfahrt`],
[`Pass the town of Playa Hermosa, then about 400 metres on, the first entrance on the left is Calle Hermosa. The Coconut Office sits 300 metres in — easy to spot, just past the first bend.`,`Fahr durch den Ort Playa Hermosa, dann ist nach etwa 400 Metern die erste Einfahrt links die Calle Hermosa. Das Coconut Office liegt 300 Meter weiter — leicht zu finden, kurz hinter der ersten Kurve.`],
[`Staying long-term?<small>Costa Rica's Digital Nomad Visa lets you stay up to 2 years, tax-free on foreign income.</small>`,`Längerer Aufenthalt?<small>Costa Ricas Visum für digitale Nomaden erlaubt bis zu 2 Jahre Aufenthalt — steuerfrei auf ausländisches Einkommen.</small>`],
[`Visa guide`,`Visum-Guide`],
[`Visit`,`Entdecken`],
[`Info`,`Infos`],
[`Contact`,`Kontakt`],
[`Life Here`,`Das Leben hier`],
[`Surf in Playa Hermosa`,`Surfen in Playa Hermosa`],
[`Location &amp; arrival`,`Lage & Anfahrt`],
[`Digital Nomad Visa`,`Visum für digitale Nomaden`],
[`Book a stay`,`Jetzt buchen`],
[`Coworking &amp; coliving for digital nomads and surfers in Playa Hermosa, Costa Rica. An adults-only retreat for deep work and easy living.`,`Coworking & Coliving für digitale Nomaden und Surfer in Playa Hermosa, Costa Rica. Ein Refugium nur für Erwachsene — für konzentriertes Arbeiten und entspanntes Leben.`],
[`₿ Bitcoin accepted`,`₿ Bitcoin akzeptiert`],
[`Your desk by the sea is waiting.`,`Dein Schreibtisch am Meer wartet.`],
[`Tell us your dates and which apartment caught your eye — we'll take care of the rest. Bitcoin welcome.`,`Sag uns deine Daten und welches Apartment dir gefällt — um den Rest kümmern wir uns. Bitcoin willkommen.`],
[`Message us on WhatsApp`,`Schreib uns auf WhatsApp`],
/* ---- Surf page ---- */
[`<a href="index.html">Home</a> &nbsp;/&nbsp; Surfing Playa Hermosa`,`<a href="index.html">Startseite</a> &nbsp;/&nbsp; Surfen in Playa Hermosa`],
[`Surfing Playa Hermosa.`,`Surfen in Playa Hermosa.`],
[`A World Surfing Reserve and the National Surf Stadium of Costa Rica — waves nearly every day of the year, a short walk from your door.`,`Ein World Surfing Reserve und das Nationale Surf-Stadion von Costa Rica — fast jeden Tag im Jahr Wellen, nur wenige Schritte von deiner Tür.`],
[`Playa Hermosa has earned a reputation as one of the world's premier surf destinations. Known as the <b>National Surf Stadium of Costa Rica</b>, it delivers wave action almost year-round — only about <b>seven flat days a year</b>. You'll find slow, forgiving walls at high tide and fast, hollow tubes and barrels at low. Smaller in the dry season, bigger when the rains bring the swell.`,`Playa Hermosa hat sich den Ruf eines der besten Surf-Ziele der Welt erarbeitet. Bekannt als das <b>Nationale Surf-Stadion von Costa Rica</b>, liefert es fast das ganze Jahr über Wellen — nur etwa <b>sieben flache Tage im Jahr</b>. Bei Flut findest du langsame, gutmütige Wände, bei Ebbe schnelle, hohle Tubes und Barrels. Kleiner in der Trockenzeit, größer, wenn der Regen den Swell bringt.`],
[`The whole stretch is recognized as a <b>World Surfing Reserve</b> by the Save The Waves Coalition — a stamp that underlines how environmentally and culturally important this break really is.`,`Der gesamte Abschnitt ist von der Save The Waves Coalition als <b>World Surfing Reserve</b> anerkannt — ein Siegel, das unterstreicht, wie wichtig dieser Break ökologisch und kulturell ist.`],
[`Playa Hermosa is known for exceptional consistency. With only about seven surfable-wave-free days a year, there's almost always something to paddle into. Quality shifts with tide and season: high tide softens the wave, low tide draws experienced surfers chasing barrels. Mornings and evenings often go <b>glassy</b>, especially in the dry season.`,`Playa Hermosa ist für seine außergewöhnliche Beständigkeit bekannt. Mit nur etwa sieben surfbaren wellenfreien Tagen im Jahr gibt es fast immer etwas zum Anpaddeln. Die Qualität ändert sich mit Gezeiten und Saison: Flut macht die Welle weicher, Ebbe lockt erfahrene Surfer auf der Jagd nach Barrels. Morgens und abends wird es oft <b>glassy</b>, besonders in der Trockenzeit.`],
[`Every Saturday the beach comes alive with competition, drawing pros and amateurs for cash prizes — a real hub for the local surf community. Playa Hermosa also regularly hosts the <b>Costa Rican Championships</b>, often with the grand finale right here.`,`Jeden Samstag erwacht der Strand mit Wettkämpfen zum Leben, die Profis und Amateure um Geldpreise anziehen — ein echter Treffpunkt der lokalen Surf-Community. Playa Hermosa ist außerdem regelmäßig Austragungsort der <b>costa-ricanischen Meisterschaften</b>, oft mit dem großen Finale direkt hier.`],
[`Why it's special`,`Was es besonders macht`],
[`The breaks, south to north`,`Die Breaks, von Süd nach Nord`],
[`When to paddle out`,`Wann rauspaddeln`],
[`Stay where the waves are.`,`Wohne dort, wo die Wellen sind.`],
[`Consistency &amp; wave quality`,`Beständigkeit & Wellenqualität`],
[`National significance`,`Nationale Bedeutung`],
[`Condition`,`Bedingung`],
[`What to expect`,`Was dich erwartet`],
[`High tide`,`Flut`],
[`Slower, softer waves — relaxed sessions, friendlier for less experienced surfers.`,`Langsamere, weichere Wellen — entspannte Sessions, freundlicher für weniger erfahrene Surfer.`],
[`Low tide`,`Ebbe`],
[`Faster, more powerful, hollow waves — for adrenaline and barrels.`,`Schnellere, kraftvollere, hohle Wellen — für Adrenalin und Barrels.`],
[`Dry season (Dec–Apr)`,`Trockenzeit (Dez–Apr)`],
[`Smaller waves, frequent glassy mornings and evenings.`,`Kleinere Wellen, häufig glassy am Morgen und Abend.`],
[`Rainy / green season`,`Regen- / grüne Saison`],
[`The biggest swells of the year.`,`Die größten Swells des Jahres.`],
[`All levels · best at low`,`Alle Levels · am besten bei Ebbe`],
[`Advanced`,`Fortgeschritten`],
[`All levels · variety`,`Alle Levels · Abwechslung`],
[`All levels · glassy`,`Alle Levels · glassy`],
[`All levels`,`Alle Levels`],
[`Advanced · remote`,`Fortgeschritten · abgelegen`],
[`The dependable one — rarely a flat day. The beach structure throws fast, hollow waves at low tide for barrel hunters, then mellows at high tide for a more relaxed ride.`,`Der Verlässliche — selten ein flacher Tag. Die Strandstruktur wirft bei Ebbe schnelle, hohle Wellen für Barrel-Jäger und wird bei Flut sanfter für eine entspanntere Welle.`],
[`Powerful waves and proper tubes — one for advanced surfers. Best in the morning while the wind is still offshore.`,`Kraftvolle Wellen und echte Tubes — etwas für fortgeschrittene Surfer. Am besten morgens, solange der Wind noch offshore ist.`],
[`The variety spot. Wave patterns change a lot with the tide — slower and manageable on the high, quicker and more demanding on the low. In the dry season it's often a good alternative when other breaks get too big.`,`Der Abwechslungs-Spot. Die Wellenmuster ändern sich stark mit den Gezeiten — langsamer und handhabbar bei Flut, schneller und anspruchsvoller bei Ebbe. In der Trockenzeit oft eine gute Alternative, wenn andere Breaks zu groß werden.`],
[`Popular in recent years, and usually room to park. Waves vary a lot by season — smaller in the dry months, bigger in the rains. Early mornings and late afternoons go glassy, a favorite of surfers and photographers alike.`,`In den letzten Jahren beliebt, und meist gibt es Parkplätze. Die Wellen variieren stark je nach Saison — kleiner in den trockenen Monaten, größer im Regen. Früh morgens und am späten Nachmittag wird es glassy, ein Favorit von Surfern und Fotografen.`],
[`A named break along the same stretch, by the bend in the road our La Curva apartment is named for — handy reference point as you walk the beach reading the sandbars.`,`Ein benannter Break am selben Abschnitt, an der Straßenkurve, nach der unser Apartment La Curva benannt ist — ein praktischer Orientierungspunkt, während du den Strand entlanggehst und die Sandbänke liest.`],
[`Less surfed, and on bigger swells it can serve up genuinely challenging conditions. A little more remote — surf it with others and keep an eye on the currents.`,`Weniger gesurft, und bei größeren Swells kann es richtig anspruchsvolle Bedingungen bieten. Etwas abgelegener — surf es mit anderen und behalte die Strömungen im Auge.`],
[`<b>Local tip:</b> the same names — El Almendro, La Curva, Tulin — are the surf breaks <em>and</em> our apartments. Stay in one, walk to the other.`,`<b>Lokaler Tipp:</b> Dieselben Namen — El Almendro, La Curva, Tulin — sind die Surf-Breaks <em>und</em> unsere Apartments. Wohne im einen, geh zum anderen.`],
[`Watch: Costa Rica's Surfing Paradise`,`Ansehen: Costa Ricas Surf-Paradies`],
[`Coconut Office sits steps from the lineup, with a real coworking space and fast fiber for when the surf goes flat. Work, surf, repeat.`,`Das Coconut Office liegt nur wenige Schritte vom Line-up, mit einem echten Coworking Space und schnellem Glasfaser für die flachen Tage. Arbeiten, surfen, wiederholen.`],
[`See the apartments`,`Apartments ansehen`],
/* ---- Visa page ---- */
[`<a href="index.html">Home</a> &nbsp;/&nbsp; Digital Nomad Visa`,`<a href="index.html">Startseite</a> &nbsp;/&nbsp; Visum für digitale Nomaden`],
[`The Costa Rica Digital Nomad Visa, in plain English.`,`Das Visum für digitale Nomaden in Costa Rica, einfach erklärt.`],
[`Stay up to two years, work remotely for your company back home, and pay no Costa Rican income tax on it. Here's how it works and what you need.`,`Bleib bis zu zwei Jahre, arbeite remote für dein Unternehmen zu Hause und zahle darauf keine Einkommensteuer in Costa Rica. So funktioniert es und das brauchst du.`],
[`Officially it's the visa for <b>"Remote Workers and Service Providers"</b> — most people just call it the Digital Nomad Visa. It was created specifically for people who work remotely, and it changes the math on living in Costa Rica long-term. (You don't even have to work digitally — analog remote work counts too.)`,`Offiziell ist es das Visum für <b>"Remote Workers and Service Providers"</b> — die meisten nennen es einfach Digital-Nomad-Visum. Es wurde speziell für Menschen geschaffen, die remote arbeiten, und verändert die Rechnung für ein langfristiges Leben in Costa Rica. (Du musst nicht einmal digital arbeiten — analoge Remote-Arbeit zählt auch.)`],
[`It lets you stay in Costa Rica for <b>up to two years without leaving the country</b>. The visa is valid for one year and renews easily for a second. And because it's built for people earning from a company abroad, you're <b>exempt from Costa Rican income tax</b> on that income. Plenty of nomads have lived here for years on tourist visas — but this category unlocks real advantages a tourist stamp never will.`,`Es erlaubt dir, <b>bis zu zwei Jahre in Costa Rica zu bleiben, ohne das Land zu verlassen</b>. Das Visum gilt ein Jahr und lässt sich leicht um ein weiteres verlängern. Und weil es für Menschen gedacht ist, die von einem Unternehmen im Ausland verdienen, bist du auf dieses Einkommen <b>von der costa-ricanischen Einkommensteuer befreit</b>. Viele Nomaden haben hier jahrelang mit Touristenvisum gelebt — aber diese Kategorie bietet echte Vorteile, die ein Touristenstempel nie bietet.`],
[`All of it makes you feel more like a resident than a tourist — though it isn't full residency. (You'll still pay the tourist entrance price at national parks, for example.)`,`All das lässt dich dich eher wie ein Einwohner als ein Tourist fühlen — auch wenn es keine volle Aufenthaltsgenehmigung ist. (Den Touristen-Eintrittspreis in Nationalparks zahlst du zum Beispiel weiterhin.)`],
[`The benefits`,`Die Vorteile`],
[`What you need to qualify`,`Was du brauchst, um zu qualifizieren`],
[`Thinking of a longer stay?`,`Denkst du an einen längeren Aufenthalt?`],
[`Stay up to <b>2 years</b> without having to leave the country.`,`Bleib bis zu <b>2 Jahre</b>, ohne das Land verlassen zu müssen.`],
[`Legally work remotely while in Costa Rica for a company in another country.`,`Arbeite legal remote in Costa Rica für ein Unternehmen in einem anderen Land.`],
[`<b>Exempt from paying Costa Rican income tax</b> on that income.`,`<b>Befreit von der costa-ricanischen Einkommensteuer</b> auf dieses Einkommen.`],
[`Open a <b>Costa Rican bank account</b> — normally very hard for foreigners.`,`Eröffne ein <b>costa-ricanisches Bankkonto</b> — für Ausländer normalerweise sehr schwierig.`],
[`Obtain a <b>Costa Rican driver's license</b> by homologating your home-country one.`,`Erhalte einen <b>costa-ricanischen Führerschein</b>, indem du deinen heimischen anerkennen lässt.`],
[`Waive customs taxes on most of the equipment you need to do your work (restrictions apply).`,`Erlass von Zollgebühren auf den Großteil der Ausrüstung, die du zum Arbeiten brauchst (Einschränkungen gelten).`],
[`Often <b>lower your health-insurance costs</b> versus a full national plan back home.`,`Oft <b>niedrigere Krankenversicherungskosten</b> als ein voller nationaler Tarif zu Hause.`],
[`Proof of <b>health insurance</b> for you and any dependents, covering your full stay.`,`Nachweis einer <b>Krankenversicherung</b> für dich und alle Angehörigen, die deinen gesamten Aufenthalt abdeckt.`],
[`All documents must be presented <b>in Spanish</b>.`,`Alle Dokumente müssen <b>auf Spanisch</b> vorgelegt werden.`],
[`$3,000<span style="font-size:1rem;color:var(--ink-soft)">/mo</span>`,`$3.000<span style="font-size:1rem;color:var(--ink-soft)">/Mon.</span>`],
[`$4,000<span style="font-size:1rem;color:var(--ink-soft)">/mo</span>`,`$4.000<span style="font-size:1rem;color:var(--ink-soft)">/Mon.</span>`],
[`Proof of at least <b>US$3,000 monthly income</b> if you're applying solo.`,`Nachweis von mindestens <b>3.000 US$ Monatseinkommen</b>, wenn du allein beantragst.`],
[`Proof of at least <b>US$4,000 monthly income</b> if you're including family members.`,`Nachweis von mindestens <b>4.000 US$ Monatseinkommen</b>, wenn du Familienangehörige einschließt.`],
[`<b>How long does it take?</b> From applying to receiving your official documents is usually <b>under 30 days</b>.`,`<b>Wie lange dauert es?</b> Vom Antrag bis zu den offiziellen Dokumenten meist <b>unter 30 Tage</b>.`],
[`<b>One honest note:</b> rules and amounts can change, and your situation back home (taxes, health care) depends on your own country. Treat this as a friendly starting point, not legal advice — check the official current requirements before you apply.`,`<b>Ein ehrlicher Hinweis:</b> Regeln und Beträge können sich ändern, und deine Situation zu Hause (Steuern, Gesundheit) hängt von deinem Land ab. Versteh das als freundlichen Ausgangspunkt, nicht als Rechtsberatung — prüfe vor dem Antrag die offiziellen aktuellen Anforderungen.`],
[`Coconut Office is built for exactly this — fast fiber, a real coworking space, and apartments by the day, week or month. Tell us your plans.`,`Das Coconut Office ist genau dafür gemacht — schnelles Glasfaser, ein echter Coworking Space und Apartments tageweise, wochenweise oder monatlich. Erzähl uns von deinen Plänen.`]
];

var DICT = { es: Object.fromEntries(ES), de: Object.fromEntries(DE) };

var SEL = ['.nav-links a.lnk','.award','.hero h1','.hero .lede','.hero-cta a','.scroll-cue','.stat .l','.eyebrow','.sec-head h2','.sec-head p','.split h2','.split p','.feat-list li','.cap','.apt-tag','.apt-body h3','.apt-body p','.chip','.price .from','.price .amt span','.watch-link','a.btn','figcaption b','figcaption small','.surf h2','.surf .lede','.surf-stats .l','.rev p','.rev .who','.gmark','.loc .info h3','.loc .info p','.visa-cta .vt','.page-cta h2','.page-cta p','footer h4','footer a','.foot-brand p','.btc-badge','.cta-band h2','.cta-band p','.crumb','.subhero h1','.subhero .lede','.prose > p','.prose h2','.prose h3','.prose ul li','.tide-table th','.tide-table td','.spot .lvl','.spot h3','.spot p','.callout','.req-card .big','.req-card p','.vid-poster .vp-label'];

var nodes = [];
function norm(s){ return s.replace(/\s+/g,' ').trim(); }

function collect(){
  var set = [];
  SEL.forEach(function(s){
    document.querySelectorAll(s).forEach(function(el){
      if(el.dataset.i18nEn === undefined){ el.dataset.i18nEn = norm(el.innerHTML); }
      if(set.indexOf(el) === -1) set.push(el);
    });
  });
  nodes = set;
}

function setLang(l, save){
  collect();
  nodes.forEach(function(el){
    var en = el.dataset.i18nEn;
    if(l === 'en'){ el.innerHTML = en; return; }
    var t = DICT[l] && DICT[l][en];
    el.innerHTML = (t !== undefined) ? t : en;
  });
  document.documentElement.lang = l;
  document.querySelectorAll('.lang-pill button').forEach(function(b){
    b.classList.toggle('active', b.dataset.l === l);
  });
  if(save){ try{ localStorage.setItem('co_lang', l); }catch(e){} }
}

function makePill(extra){
  var pill = document.createElement('div');
  pill.className = 'lang-pill' + (extra ? ' ' + extra : '');
  ['en','es','de'].forEach(function(l){
    var b = document.createElement('button');
    b.type = 'button'; b.dataset.l = l; b.textContent = l.toUpperCase();
    b.addEventListener('click', function(){ setLang(l, true); });
    pill.appendChild(b);
  });
  return pill;
}
function buildPill(){
  var navLinks = document.querySelector('.nav-links');
  var navIn = document.querySelector('.nav-in');
  var toggle = document.querySelector('.nav-toggle');
  // desktop pill: inside the nav links, before the "Book a stay" button
  if(navLinks && !navLinks.querySelector('.lang-pill')){
    navLinks.insertBefore(makePill(''), navLinks.querySelector('.btn-primary') || null);
  }
  // mobile pill: always visible in the top bar, before the hamburger
  if(navIn && toggle && !navIn.querySelector('.lang-pill-mobile')){
    navIn.insertBefore(makePill('lang-pill-mobile'), toggle);
  }
}

/* ---------- scroll reveal ---------- */
function reveal(){
  ['.prose > p','.prose h2','.prose h3','.spot','.req-card','.vid-poster','.tide-table','.page-cta','.callout','.subhero .wrap']
    .forEach(function(s){ document.querySelectorAll(s).forEach(function(el){ el.classList.add('reveal'); }); });
  var els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){ els.forEach(function(e){ e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12 });
  els.forEach(function(e){ io.observe(e); });
}

/* ---------- count-up on numbers ---------- */
function countUp(){
  if(!('IntersectionObserver' in window)) return;
  var targets = document.querySelectorAll('.stat .n, .surf-stats .n');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting) return;
      io.unobserve(e.target);
      var node = null;
      e.target.childNodes.forEach(function(n){ if(!node && n.nodeType===3 && /\d/.test(n.nodeValue)) node = n; });
      if(!node) return;
      var m = node.nodeValue.match(/^(\D*)([\d,]+)(.*)$/);
      if(!m) return;
      var pre=m[1], target=parseInt(m[2].replace(/,/g,''),10), suf=m[3];
      if(isNaN(target)) return;
      var dur=1100, start=null, fmt=(target>=1000);
      function fmtNum(v){ return fmt ? v.toLocaleString('en-US') : String(v); }
      function step(ts){
        if(start===null) start=ts;
        var p=Math.min((ts-start)/dur,1), ease=1-Math.pow(1-p,3);
        node.nodeValue = pre + fmtNum(Math.round(target*ease)) + suf;
        if(p<1) requestAnimationFrame(step);
      }
      node.nodeValue = pre + fmtNum(0) + suf;
      requestAnimationFrame(step);
    });
  }, { threshold: .6 });
  targets.forEach(function(t){ io.observe(t); });
}

function init(){
  buildPill();
  var saved = 'en';
  try{ saved = localStorage.getItem('co_lang') || 'en'; }catch(e){}
  collect();
  setLang(saved, false);
  reveal();
  countUp();
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
})();
