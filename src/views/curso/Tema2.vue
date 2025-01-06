<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Organización: estructura organizacional y asignación de recursos'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-full-width.bg-fondo-6.mb-5(data-aos="fade-up")
      .px-5.py-0
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-6.d-none.d-lg-block
            img(src='@/assets/curso/t2/1.svg', alt='')
          .col-sm-12.col-lg-6
            p.mb-4 La #[b estructura organizacional] y la asignación de recursos, son fundamentales para el funcionamiento eficiente de cualquier empresa. Una adecuada organización estructural, facilita la coordinación de actividades y optimiza el uso de los recursos disponibles, lo que permite alcanzar los objetivos estratégicos.
            .p-4.bg-color-12.mb-0
              p.mb-0 La #[b asignación eficaz] de recursos, tanto humanos como materiales, asegura que cada área funcione de forma alineada con las metas organizacionales, promoviendo una gestión eficiente y una mayor competitividad en el mercado.
    #t_2_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 2.1] Definición de la organización
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8.bg-color-3
        .p-4.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t2/2.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 La organización es el proceso que establece la estructura necesaria para la gestión eficiente y la racionalización de los recursos, dentro de una empresa. Este proceso se lleva a cabo mediante la asignación de jerarquías y la disposición, correlación y agrupación de actividades, con el objetivo de simplificar y optimizar las funciones del grupo social que conforma la empresa.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/3.png', alt='')

    #t_2_2.titulo-segundo(data-aos="fade-up")
      h2 #[span 2.2] Elementos fundamentales a considerar en la organización
    p.mb-4.fw-bold(data-aos="fade-up") Para que la organización sea efectiva, se hace necesario tener en cuenta ciertos elementos esenciales:
    .bg-full-width.bg-fondo-4.mb-0(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          // Estructura
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/4.png', alt='Personas trabajando en una oficina con notas adhesivas')
            .col-sm-12.col-lg-7
              h5 Estructura
              p La organización implica el diseño de un marco de trabajo para un grupo social específico. Este marco establece las funciones, jerarquías y actividades necesarias para el logro de los objetivos. Es el cimiento sobre el que se construyen las relaciones dentro de la empresa y se definen los roles y responsabilidades de cada miembro.

          // Sistematización
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/5.png', alt='Engranajes de colores interconectados')
            .col-sm-12.col-lg-7
              h5 Sistematización
              p La sistematización se refiere a la coordinación racional de las actividades y los recursos de la empresa. Al organizar los recursos, de manera eficiente, se facilita la ejecución de los trabajos de forma organizada y productiva. Esto implica realizar un diseño estructural y tener un enfoque que optimice los procesos y reduzca el desperdicio.

          // Agrupación y asignación
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/6.png', alt='Persona trabajando con un tablero de planificación')
            .col-sm-12.col-lg-7
              h5 Agrupación y asignación de actividades y responsabilidades
              p La organización debe fomentar la división del trabajo y la asignación clara de tareas. Al agrupar las actividades y asignar responsabilidades de forma adecuada, se promueve la especialización, lo que mejora la eficiencia y permite que los empleados se enfoquen en áreas específicas, lo que puede generar mayor valor.

          // Jerarquía
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/7.png', alt='Diagrama organizacional en papel')
            .col-sm-12.col-lg-7
              h5 Jerarquía
              p Dentro de una estructura organizacional, la jerarquía establece los niveles de autoridad y responsabilidad. Esta asegura que haya una cadena de mando definida, lo que facilita la toma de decisiones y la delegación de tareas. La jerarquía permite que los empleados comprendan su posición dentro de la organización y sus responsabilidades en relación con otros miembros del equipo.

          // Simplificación de funciones
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/8.png', alt='Personas analizando gráficos de barras')
            .col-sm-12.col-lg-7
              h5 Simplificación de funciones
              p Uno de los objetivos fundamentales de la organización es la simplificación de las funciones dentro de la empresa. Esto implica establecer los métodos más eficaces y sencillos para realizar el trabajo, eliminando procesos innecesarios y reduciendo la complejidad. La simplificación facilita la operatividad y contribuye a un entorno de trabajo más eficiente y menos propenso a errores.

    .bg-full-width.bg-color-11.mb-5(data-aos="fade-up")
      .px-5.py-4
        p.mb-0.fw-bold Las etapas de la organización son:

    .titulo-figura.mb-2(data-aos="fade-up")
      h5 Figura 3. 
      span Etapas de la organización
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8.bg-color-6.p-4.mb-0
          img(src='@/assets/curso/t2/9.svg', alt='').mb-0


    #t_2_3.titulo-segundo(data-aos="fade-up")
      h2 #[span 2.3] Elementos fundamentales a considerar en la organización

    .bg-full-width.bg-color-4.mb-5(data-aos="fade-up")
      .px-5.py-3
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t2/10.svg', style='max-width: 90px').mx-auto
          .col-lg
            p.mb-0 El análisis de la estructura y diseño organizacional es fundamental para comprender cómo se agrupan y coordinan las actividades en una empresa, permitiendo una gestión más eficiente y estructurada.
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-8
             h2.mb-4 Estructura y diseño organizacional 
             p.mb-4 En el PDF #[b Estructura y diseño organizacional], se exploran conceptos clave como la departamentalización funcional, por productos y por clientes, destacando sus ventajas y desventajas, así como diferentes tipos de organigramas que ilustran las relaciones jerárquicas y operativas dentro de una organización. Este contenido permitirá visualizar cómo estos elementos contribuyen al cumplimiento de los objetivos estratégicos en diversos contextos empresariales.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/estructura_diseno_organizacional.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Estructura y diseño organizacional 
          .col-lg-4.d-none.d-lg-block
             img(src='@/assets/curso/t2/11.png', alt='')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://reunir.unir.net/bitstream/handle/123456789/2336/Gemma_Moron_Molina_B.pdf' target='_blank' rel='noopener noreferrer') Morón-Molina, G. (2014). La Organización como clave del éxito empresarial.

            
            
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://scholar.google.es/schhp?hl=es' target='_blank' rel='noopener noreferrer') Google académico.
            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=QqcjI-zZyb8' target='_blank' rel='noopener noreferrer') Lifeder Edu. (2022). ¿Qué es el PROCESO ADMINISTRATIVO y cuáles son sus etapas?

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=Bi8PyoJ-8pQ' target='_blank' rel='noopener noreferrer') Autiestudio10. (2021). Proceso Administrativo parte 1: Planeación y organización.
 
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')


</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
