<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Planeación: definición de objetivos, estrategias y planes de acción'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .px-4.py-3
            p.mb-0  La planeación es un proceso de gran importancia en la gestión organizacional; esta implica la definición de objetivos, la formulación de estrategias y el desarrollo de planes de acción. Según Koontz y Weihrich (2015), una planeación efectiva establece el rumbo de la organización, al identificar metas claras y las acciones necesarias para alcanzarlas. Definir estos elementos de manera coherente, permite optimizar recursos, reducir incertidumbre y alinear esfuerzos, garantizando el éxito a largo plazo.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/1.png', alt='')
    #t_1_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.1] Definición de la planeación

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/2.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-5 La planeación es un proceso básico dentro de la administración que consiste en anticipar el futuro y definir las acciones necesarias para alcanzar los objetivos establecidos. Este proceso se basa en la capacidad de prever las condiciones futuras y establecer las estrategias más adecuadas para aprovechar las oportunidades y enfrentar los desafíos que puedan surgir. 
        .bg-color-3.p-4.mb-0
          p.mb-0 En su núcleo, la planeación busca establecer respuestas claras a preguntas fundamentales:

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4
        .p-4.bg-color-2.mb-5
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/3.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 ¿Dónde nos encontramos actualmente?
      .col-sm-12.col-lg-4
        .p-4.bg-color-2.mb-5
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/3.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 ¿Adónde queremos llegar?

      .col-sm-12.col-lg-4
        .p-4.bg-color-2.mb-5
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/3.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 ¿Qué debemos hacer para llegar allí?
    .bg-full-width.bg-fondo-6.mb-5(data-aos="fade-up")
      .px-5.py-0
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-6
            p.mb-4.fw-bold La planeación puede adoptar dos enfoques: 
            ol.lista-ol--cuadro.lista-ol--cuadro--separador.mb-0
                li.d-flex
                  .lista-ol--cuadro__vineta.color-acento-contenido
                    span 1
                  p.mb-0 La planeación #[b informal] surge de ideas o propuestas espontáneas de los directivos, para mejorar procesos o responder a necesidades inmediatas, sin un procedimiento estructurado.
                li.d-flex
                  .lista-ol--cuadro__vineta.color-acento-contenido
                    span 2
                  p.mb-0 La planeación #[b formal] se caracteriza por seguir un proceso sistemático y documentado que incluye la elaboración de planes escritos, de acciones, con un cronograma claro.
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/t1/4.svg', alt='')

    h2.mb-3(data-aos="fade-up") Importancia de la planeación
    p.mb-5(data-aos="fade-up") La planeación juega un papel muy importante en cualquier organización por varias razones:
    .bg-full-width.bg-color-6.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-8
            ImagenInfografica.color-acento-contenido.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/t1/5.svg', alt='Texto que describa la imagen')
                  
              .tarjeta.bg-white.p-3(x="19.4%" y="19.4%" numero="+")
                    .h5.mb-2 Dirección clara
                    p.mb-0 Proporciona un rumbo definido hacia dónde debe encaminarse la organización.

              .tarjeta.bg-white.p-3(x="80.9%" y="19.4%" numero="+")
                .h5.mb-2 Reducción de la incertidumbre
                p.mb-0 Ayuda a prever situaciones futuras, lo que permite adaptarse mejor a cambios inesperados.

              .tarjeta.bg-white.p-3(x="96.8%" y="49.6%" numero="+")
                .h5.mb-2 Optimización de recursos
                p.mb-0 Reduce el desperdicio de recursos al establecer estrategias precisas y alineadas con los objetivos.

              .tarjeta.bg-white.p-3(x="80.9%" y="79.6%" numero="+")
                .h5.mb-2 Establecimiento de estándares
                p.mb-0 Facilita la medición del progreso al definir metas concretas y medibles.

              .tarjeta.bg-white.p-3(x="19.4%" y="79.6%" numero="+")
                .h5.mb-2 Desarrollo de estrategias
                p.mb-0 Permite formular planes que enfrenten, de manera efectiva, la competencia o los cambios en el entorno.

              .tarjeta.bg-white.p-3(x="3.2%" y="49.6%" numero="+")
                .h5.mb-2 Integración de decisiones
                p.mb-0 Asegura que todas las decisiones tomadas estén alineadas con los objetivos estratégicos de la organización.


    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/6.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-3 La planeación es una herramienta para reducir la incertidumbre, además promueve una visión a largo plazo dentro de la organización. Ayuda a los empleados a enfocar sus esfuerzos en un futuro previsible y adaptarse a los cambios de manera proactiva, entendiendo las consecuencias de sus acciones; la planeación convierte los objetivos de la organización en acciones concretas, permitiendo una ejecución eficaz y alineada con los resultados esperados.
        .p-3.bg-color-1.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/7.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 Las actividades que se deben aplicar, de manera cronológica, para establecer una efectiva planeación, son:
    .titulo-figura.mb-4(data-aos="fade-up")
      h5  Figura 1. 
      span  Actividades propias de la planeación.
    .bg-full-width.bg-color-6.mb-5
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-12
              img(src='@/assets/curso/t1/8.svg', alt='').mb-0

    #t_1_2.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.2] Diagnóstico estratégico 
    p.mb-5(data-aos="fade-up") El diagnóstico estratégico, es una actividad necesaria y fundamental en la elaboración de la planeación, puesto que permite analizar el entorno interno y externo de una organización. Este análisis se debe realizar a través de dos enfoques:
    .titulo-figura.mb-2(data-aos="fade-up")
      h5 Figura 2. 
      span Enfoques del diagnóstico estratégico.
    .bg-color-6.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-5
              img(src='@/assets/curso/t1/9.svg', alt='').mb-0

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t1/10.svg', alt='')
      .col-sm-12.col-lg-7
        .bg-color-4.px-4.py-5.mb-4
          p.mb-0 El #[b análisis del entorno] es una fase necesaria en la planeación, porque implica la evaluación, tanto de #[b factores internos como externos]. Los factores internos incluyen recursos, capacidades y procesos dentro de la organización, que pueden ser ventajas o limitaciones. Por otro lado, los factores externos comprenden el análisis del mercado, competidores, tendencias económicas y otros elementos fuera del control directo de la organización, que pueden afectar su éxito.
        p.mb-0 Esta evaluación, comúnmente realizada mediante herramientas como el análisis FODA (fortalezas, oportunidades, debilidades y amenazas), permite a la organización formular estrategias adecuadas que capitalicen sus fortalezas y oportunidades, mientras minimizan sus debilidades y amenazas.

    #t_1_3.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.3] Establecimiento de objetivos organizacionales
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8.bg-color-3
        .p-4
          p.mb-0 Los objetivos son los fines o metas hacia los cuales se deben orientar todas las actividades dentro de una organización. Estos objetivos proporcionan dirección, tanto a los esfuerzos globales de la empresa como a las actividades específicas de cada departamento. Para que los objetivos sean efectivos y contribuyan al éxito organizacional, deben cumplir con ciertas características esenciales:
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/11.png', alt='')

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/12.png')
      .col-sm-12.col-lg-8
        AcordionA(tipo='b')
          div(titulo='Realismo y factibilidad')
            p.mb-0 Los objetivos deben ser alcanzables, es decir, deben poder llevarse a cabo con los recursos y capacidades disponibles.
          
          div(titulo='Basados en recursos y limitaciones')
            p.mb-0 Los objetivos deben considerar los recursos existentes y las posibles restricciones, dentro de la organización.
          
          div(titulo='Compromiso')
            p.mb-0 Implican un compromiso por parte de los miembros de la organización, para cumplir con las metas establecidas.
          
          div(titulo='Flexibilidad')
            p.mb-0 Los objetivos deben ser adaptables a cambios en el entorno o circunstancias imprevistas.
          
          div(titulo='Medición y evaluación')
            p.mb-0 Los resultados de los objetivos deben ser evaluables, para determinar si se han alcanzado o no.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        AcordionA(tipo='b')
          div(titulo='Acción específica')
            p.mb-0 Deben especificar claramente qué acción o actividad se llevará a cabo.
          
          div(titulo='Temporalidad')
            p.mb-0 Los objetivos deben tener un marco temporal claro, es decir, deben indicar cuándo deben lograrse.
          
          div(titulo='Costo')
            p.mb-0 Deben incluir una estimación de los recursos financieros necesarios para alcanzarlos.
          
          div(titulo='Tangibilidad')
            p.mb-0 Los objetivos deben ser concretos y alcanzables, de manera tangible.
          
          div(titulo='Alineación con políticas organizacionales')
            p.mb-0 Deben estar en consonancia con las políticas, procedimientos y planes generales de la organización.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/13.png')

    .bg-full-width.bg-color-9.mb-4(data-aos="fade-up")
      .px-5.py-4
        p.mb-0.fw-bold Cada objetivo debe estar claramente definido por escrito y debe incluir los siguientes elementos:

    .bg-full-width.bg-fondo-7.mb-0(data-aos="fade-up")
      .p-4.p-md-5
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-4.pe-xl-8.d-none.d-lg-block
              img(src='@/assets/curso/t1/14.png')
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas='col-12 col-lg-6')
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/15.svg' alt='Ícono de pregunta')
                    h4.text-center ¿Qué se va a realizar?
                    p.mb-0.text-center Descripción precisa de la actividad o tarea.

              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/15.svg' alt='Ícono de pregunta')
                    h4.text-center ¿Quién lo va a ejecutar?
                    p.mb-0.text-center Identificación de la persona o equipo responsable.

              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/15.svg' alt='Ícono de pregunta')
                    h4.text-center ¿Cuándo se va a elaborar?
                    p.mb-0.text-center Determinación de la temporalidad o fecha de realización.

              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/15.svg' alt='Ícono de pregunta')
                    h4.text-center ¿Dónde se va a concebir?
                    p.mb-0.text-center Puede especificar si es una tarea a nivel organizacional o solo para una parte de la misma.

              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t1/15.svg' alt='Ícono de pregunta')
                    h4.text-center ¿Cuánto se quiere lograr?
                    p.mb-0.text-center Debe incluir una medición cuantitativa del resultado esperado.


    #t_1_4.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.4] Elementos corporativos

    p.mb-4(data-aos="fade-up") El proceso de planeación, consta de varios elementos fundamentales que aseguran la alineación de las acciones con la visión general de la organización. Entre estos elementos destacan la misión, visión, el análisis del entorno, la formulación de estrategias, la implementación y la evaluación. 
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t1/16.png')
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Misión')
            p.mb-0 La misión de una empresa tiene como objetivo principal, definir lo que debe hacerse para alcanzar el futuro deseado. Representa el rumbo a seguir y establece los compromisos necesarios para lograrlo. La misión responde a la pregunta esencial: ¿para qué existimos como organización?
            p.mb-3 Una misión efectiva refleja la identidad única de la empresa y la diferencia de otras organizaciones. Para ser estratégicamente reveladora, una misión debe incluir tres elementos claves:
            ul.lista-ul--color.ml-cus.mb-0.color-primario
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0  Las necesidades del cliente. Qué se busca satisfacer, en términos de productos o servicios.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0  El grupo de clientes al que se dirige. Quiénes son los destinatarios o beneficiarios, de los productos o servicios.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0  Las actividades y capacidades de la empresa. Cómo se va a crear o suministrar valor a los clientes, incluyendo las tecnologías y capacidades involucradas en el proceso.

          div(titulo='Visión')
            p.mb-3 La visión define el destino hacia el cual se dirige una organización, es el lugar al que la empresa aspira llegar. Los administradores realizan tres tareas claves al crear una visión estratégica:
            ul.lista-ul--color.ml-cus.mb-0.color-primario
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Proponer una declaración de misión que defina en qué negocios está involucrada la empresa en el presente, reflejando su identidad, sus actividades actuales y su situación en el mercado.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Utilizar la declaración de la visión como base para tomar decisiones sobre el curso a seguir, a largo plazo. Esto implica elegir hacia dónde se dirige la empresa y planificar las estrategias necesarias para recorrer esa ruta.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Comunicar la visión de manera clara y apasionante, para asegurar que toda la organización se comprometa con el futuro deseado.

    #t_1_5.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.5] Definición de estrategia
    .bg-full-width.bg-fondo-6.mb-5(data-aos="fade-up")
      .px-5.py-0
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-6
            p.mb-4 Una vez completado el análisis del entorno, la organización procede a la formulación de estrategias. Este paso involucra la creación de planes de acción concretos que alinean los recursos y capacidades de la organización, con las oportunidades del entorno.
            p.mb-0 Las estrategias deben ser #[b flexibles] para adaptarse a cambios imprevistos y #[b diseñadas] para permitir el cumplimiento de los objetivos organizacionales, tanto en términos de crecimiento, como de sostenibilidad.
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/t1/17.svg', alt='')



    #t_1_6.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.6] Planes de acción
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/18.png', alt='')
      .col-sm-12.col-lg-8
        .p-4.bg-color-7.mb-5
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t1/19.svg', style='max-width: 70px').mx-auto
            .col-lg
              p.mb-0 La formulación del plan de acción es una etapa clave dentro del proceso administrativo, que implica la estructuración detallada de las actividades, tiempos y recursos necesarios para lograr los objetivos estratégicos de una organización. Desde la perspectiva del proceso administrativo, que abarca las fases de planificación, organización, dirección y control, la formulación del plan de acción se ubica en la etapa de planificación y representa la transición entre la estrategia general y su ejecución concreta. 
        p.mb-0 Un plan de acción detalla los pasos específicos que deben seguirse para implementar las estrategias previamente definidas. Cada acción debe estar claramente identificada, con responsables asignados, fechas de inicio y finalización, y los recursos necesarios, como personal, tiempo o capital. Esto permite a la organización ejecutar las estrategias de manera organizada, efectiva y eficiente, asegurando que todos los miembros involucrados comprendan sus roles y responsabilidades.

    .bg-color-10.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 El proceso administrativo resalta que el plan de acción debe estar alineado con los objetivos organizacionales. Para que un plan de acción sea efectivo, debe cumplir con los principios de especificidad, mensurabilidad, alcanzabilidad, relevancia y temporalidad (SMART, por sus siglas en inglés). Así, cada actividad incluida en el plan debe tener resultados medibles y un marco temporal definido que permita hacer ajustes durante el proceso si es necesario.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/20.png', alt='')

    .bg-full-width.bg-color-11.mb-0(data-aos="fade-up")
      .px-5.py-4
        p.mb-0.fw-bold Una vez establecidos los objetivos, las organizaciones deben definir las actividades necesarias para alcanzarlos, a través de:
    .bg-full-width.bg-fondo-4.mb-5(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/21.png', alt='Personas trabajando en un proyecto')
            .col-sm-12.col-lg-7
              h5 Proyectos
              p Un proyecto es un conjunto de actividades diseñadas para lograr un objetivo específico dentro de un tiempo determinado. Un ejemplo sería la construcción de un edificio, en la que se establece un inicio y un final claramente definidos.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/22.png', alt='Personas trabajando en un plan')
            .col-sm-12.col-lg-7
              h5 Planes
              p A diferencia de los proyectos, un plan se compone de actividades que no tienen un fin predeterminado o una fecha de caducidad, y son más continuos dentro de la organización. Un ejemplo sería un programa de capacitación, que no necesariamente tiene un fin específico y puede ser de largo plazo.

    p.mb-4.fw-bold(data-aos="fade-up") Existen variados tipos de planes que pueden hacerse para fines diversos; a continuación, mencionamos algunos: 
    .titulo-figura.mb-2.d-d-flex(data-aos="fade-up")
      p.mb-0 #[b Tabla 1.] Tipos de planes.
    .tabla-a.color-primario.mb-5(data-aos="fade-up")
      table
        thead
          tr
            th.w-25 Tipo de plan
            th Descripción  
            th Ejemplo
        tbody
          tr
            td.fw-bold Planes estratégicos
            td Determinan los propósitos principales de la organización a largo plazo. Se enfocan en las oportunidades, problemas, fortalezas y limitaciones del ambiente. Estos planes definen las necesidades de recursos humanos para mantener la competitividad.
            td Planificar las necesidades de recursos humanos para asegurar la competitividad en el futuro.
          tr
            td.fw-bold Planes operativos o tácticos
            td Apoyan los planes estratégicos en el corto plazo. Se orientan hacia actividades específicas, asignando recursos y definiendo estándares de actuación.
            td Disminuir el 10 % de la rotación de personal mediante programas de capacitación, incentivos y prestaciones.
          tr
            td.fw-bold Planes a corto y largo plazo
            td Los planes a corto plazo están controlados por la administración (menos de un año). Los planes a largo plazo consideran condiciones variables y posibilidades (más de un año).
            td Un plan anual es corto plazo, un plan de expansión para los próximos 5 años, es a largo plazo.
          tr
            td.fw-bold Planes específicos o direccionales
            td Los planes específicos no permiten interpretación; deben cumplirse tal y como se definen. Los planes direccionales son más flexibles y pueden adaptarse a las circunstancias.
            td 
              ul.lista-ul--color.mb-0.color-primario
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 #[b Plan específico:] Implementar un sistema de gestión de calidad.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 #[b Plan direccional:] Mejorar la calidad a lo largo del tiempo.





</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
