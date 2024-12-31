<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
      .bg-full-width.bg-fondo-1.mb-5(data-aos="fade-up")
        .px-5.py-4
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-7
              .bg-color-1.p-4.mb-4
                p.mb-0 La Unidad 2, "Funciones de la administración", tiene como resultado de aprendizaje "reconocer y aplicar los principios básicos de la administración en contextos organizacionales, identificando sus características, fases y su importancia en la gestión empresarial y social". En esta unidad, se establecerán las bases conceptuales necesarias para comprender cómo los procesos administrativos contribuyen al logro de objetivos organizacionales, además de analizar sus etapas y su relación con otros elementos estratégicos de una empresa.
              p.mb-0 Durante la unidad, se abordarán temas fundamentales como la planeación, organización, dirección y control, junto con sus características principales y niveles de aplicación. Asimismo, se profundizará en aspectos como la estructuración de organigramas, la departamentalización y las dinámicas de liderazgo estratégico, permitiendo a los estudiantes entender cómo estos componentes interactúan en diferentes contextos organizacionales.
            .col-sm-12.col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/intro/1.png', alt='')
      .bg-full-width.bg-color-9.mb-0
        .px-5.py-4
          p.mb-0.fw-bold Se destaca la importancia de la administración como una herramienta indispensable para la gestión eficiente de recursos humanos, materiales, financieros y tecnológicos. 
      .bg-full-width.bg-fondo-5.mb-0
        .px-5.py-4
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/intro/2.svg', alt='')
            .col-sm-12.col-lg-6
              p.mb-4 A través de ejemplos prácticos y análisis de casos, los estudiantes desarrollarán habilidades para identificar problemas, implementar estrategias correctivas y garantizar el alineamiento de las operaciones con los objetivos de la organización.
              p.mb-0  Al finalizar esta unidad, se espera que los estudiantes sean capaces de aplicar los conceptos de administración en escenarios reales, identificando oportunidades de mejora y contribuyendo a la optimización de procesos dentro de una organización. La participación activa en actividades prácticas y discusiones, les permitirá desarrollar una visión integral de la gestión empresarial, fortaleciendo su capacidad para tomar decisiones estratégicas y operativas, fundamentadas.
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
