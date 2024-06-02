interface AwardsData {
    title:string;
    description01:string;
    recognitions:string[];
    awardsImgs:string[];
    description02:string;
    imgKAYAK:string;
    description03:string;
    tripAdvisorImgs:string[];
    description04:string;
    certificates:string[];
}
export const awardsData:AwardsData={
    title:"Premios y Reconocimientos",
    description01:"Nuestro Hotel ha sido galardonado por los World Travels Awards con tres premios reconocidos internacionalmente:",
    recognitions:["Mejor Resort Familiar de Mexico y Centroamérica","Mejor Todo Incluido de México y Centroamérica","Mejor Resort de Costa Rica"],
    awardsImgs:['awards/award01.png','awards/award02.png','awards/award03.png','awards/award04.png','awards/award05.png','awards/award06.png'],
    description02:"Nuestro Fiesta Resort ha sido reconocido en los KAYAK Travel Awards. El premio se basa en las opiniones de los huéspedes, así que queremos darles nuestro agradecimiento más especial. #KAYAKTravelAwards",
    imgKAYAK:"awards/kayakTravelAwards.png",
    description03:"Cada año, Tripadvisor reconoce los establecimientos favoritos de los viajeros alrededor del mundo, en función de las reseñas y calificaciones recopiladas durante el año anterior. Gracias a eso estamos entre el 10% de los hoteles más populares del mundo en el selecto grupo de los premios Traveler's Choice Awards 2023.",
    tripAdvisorImgs:["awards/travelersChoice01.webp","awards/travelersChoice02.webp"],
    description04:"Contamos con varias certificaciones con reconocimiento nacional e internacional que demuestran nuestro compromiso permanente con los ejes de la sostenibilidad: ambiental, social y económico. Agregamos valor a través de cada actividad que realizamos, minimizamos nuestra huella de carbono con una operación sostenible y compensamos generando impacto positivo en nuestro alrededor.",
    certificates:["certifications/inteco.png","certifications/blueFlag.png","certifications/essential.png","certifications/acoso.png","certifications/social.png","certifications/red.jpg"]
}