<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Dirección y control: liderazgo, motivación y supervisión'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-full-width.bg-color-4.mb-5(data-aos="fade-up")
      .px-5.py-3
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t3/1.svg', style='max-width: 90px').mx-auto
          .col-lg
            p.mb-0 Estos conceptos son necesarios para asegurar el éxito y la sostenibilidad de cualquier empresa o proyecto, debido a que permiten orientar los esfuerzos hacia los objetivos estratégicos y garantizar que los resultados estén alineados con las metas propuestas.
    #t_3_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.1] Concepto de dirección
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        p.mb-4  La dirección, como tercera función administrativa, sigue a la planeación y la organización y se encarga de convertir los planes en acción. Una vez que los objetivos han sido definidos y la estructura organizacional establecida, la dirección asegura que las actividades se lleven a cabo de manera efectiva. Su propósito es hacer que las cosas sucedan, dinamizando la empresa y orientándola hacia el cumplimiento de sus metas.
        .bg-color-7.p-4
          p.mb-0 La dirección tiene un enfoque práctico y se relaciona directamente con las personas, puesto que es a través del trabajo coordinado de los recursos humanos, que se alcanzan los objetivos organizacionales. Este aspecto humano convierte a la dirección en una función esencial, basada en la interacción, el liderazgo y la comunicación.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/2.svg', alt='')

    #t_3_2.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.2] Tipos de dirección
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/3.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-3 #[b Dirigir] implica comunicar claramente los planes a las personas involucradas y proporcionar instrucciones específicas para su ejecución, siempre enfocados en alcanzar los objetivos establecidos. 
        .bg-color-3.p-4
          p.mb-0 En una organización, la dirección se distribuye de manera jerárquica y se presenta en tres niveles principales: 

    .titulo-figura.mb-2.d-d-flex(data-aos="fade-up")
      p.mb-0 #[b Tabla 2.] Cuadro comparativo de los niveles de dirección.
    .tabla-a.color-acento-botones.mb-5(data-aos="fade-up")
      table
        thead
          tr
            th Nivel de Dirección
            th.w-40-custom Características principales
            th Responsables
            th Enfoque
            th Nivel organizacional
        tbody
          tr
            td.fw-bold Global (estratégico)
            td
              ul.lista-ul--color.mb-0.color-primario
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Abarca la empresa en su totalidad.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Se encarga de definir los objetivos generales y la visión a largo plazo.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Toma decisiones estratégicas.
            td Alta dirección (presidente, directores).
            td Largo plazo (estrategias generales).
            td Nivel estratégico.
          tr
            td.fw-bold Departamental (táctico)
            td
              ul.lista-ul--color.mb-0.color-primario
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Se enfoca en la gestión de departamentos o unidades específicas.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Traduce los objetivos generales en metas concretas para cada área.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Coordina recursos y actividades.
            td Gerentes y mandos medios.
            td Mediano plazo (coordinación intermedia).
            td Nivel táctico.
          tr
            td.fw-bold Operacional (operativo)
            td
               ul.lista-ul--color.mb-0.color-primario
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Supervisa la ejecución directa de las tareas y actividades.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Asegura que las instrucciones se cumplan correctamente.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Enfocado en la eficiencia y resultados inmediatos.
            td Supervisores y líderes de equipo.
            td Corto plazo (tareas concretas).
            td Nivel operativo.

    .bg-full-width.bg-color-1.mb-5(data-aos="fade-up")
      .px-5.py-3
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t3/4.svg', style='max-width: 90px').mx-auto
          .col-lg
            p.mb-0 Esta tabla permite visualizar, de manera clara, cómo se distribuye la dirección en los diferentes niveles de una organización, destacando las funciones, responsables, y el enfoque de cada nivel.

    #t_3_3.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.3] Características de la dirección
    p.mb-4(data-aos="fade-up") La dirección es una función esencial en la administración que asegura la correcta ejecución de los planes a través de la acción coordinada de los recursos humanos. Para ser efectiva, la dirección debe cumplir con ciertas características que garantizan el logro de los objetivos organizacionales. Entre ellas, se destacan:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        AcordionA(tipo='b')
          div(titulo='Unidad de mando')
            p.mb-0 Este principio establece que cada subordinado debe recibir órdenes de un solo superior. La unidad de mando garantiza una comunicación clara, evita conflictos en la asignación de tareas y asegura una jerarquía funcional dentro de la organización. De esta manera, se promueve la responsabilidad y se facilita la toma de decisiones.
          div(titulo='La delegación')
            p.mb-0 La delegación implica transferir autoridad y responsabilidad a niveles inferiores en la jerarquía organizacional. Es fundamental para aliviar la carga de los directivos y permitir que los empleados tomen decisiones en sus áreas específicas. Sin embargo, aunque la autoridad se delega, la responsabilidad final recae en el superior. Para ser efectiva, la delegación debe ser:
            ul.lista-ul--color.mb-0.color-primario.mt-3
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Clara y precisa: especificar las tareas y la autoridad conferida.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Controlada: asegurar que los subordinados cumplan con las expectativas mediante supervisión y retroalimentación.
          div(titulo='Amplitud de control')
            p.mb-0 La amplitud de control se refiere al número de subordinados que un superior puede supervisar de manera eficiente. Su extensión depende de factores como:
            ul.lista-ul--color.mb-0.color-primario.mt-3
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Complejidad de las tareas: a mayor complejidad, menor número de subordinados por controlar.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Capacidad del líder: la habilidad del superior para coordinar y supervisar influye directamente en la amplitud.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Nivel organizacional: los niveles operativos suelen requerir una amplitud mayor que los niveles estratégicos.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/5.png')


    #t_3_4.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.4] Funciones de la dirección

    .bg-full-width.bg-color-9.mb-0(data-aos="fade-up")
      .px-5.py-4
        p.mb-0.fw-bold Para conocer cada una de las funciones de la dirección, lo invitamos a ver el siguiente video.
    .bg-full-width.bg-fondo-4.mb-5(data-aos="fade-up")
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/92tOV95EGvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
    #t_3_5.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.5] Control

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .p-4.bg-color-3.mb-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/t3/7.svg', style='max-width: 90px').mx-auto
            .col-lg
              p.mb-0 El #[b control] se ubica en como la última función administrativa, sin embargo, esto no significa que sea la menos importante o la última que se aplica, por el contrario, el control se aplica de manera íntegra en las demás funciones.
        p.mb-4 El control, dentro del proceso administrativo, tiene varios significados y aplicaciones. A continuación, se detallan los principales enfoques del control, su finalidad y elementos esenciales.
        p.mb-0.fw-bold A continuación, conozcamos algunas definiciones de control:
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/6.png', alt='')
    .bg-full-width.bg-fondo-4.mb-0(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/8.png', alt='')
            .col-sm-12.col-lg-7
              h5 Control como función restrictiva y coercitiva
              ul.lista-ul--color.mb-0.color-primario
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Este enfoque se utiliza para evitar desviaciones indeseables o comportamientos no aceptados dentro de la organización.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Tiene un carácter negativo y limitante, ya que busca inhibir el individualismo y promover el cumplimiento de normas establecidas.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 #[b Ejemplo:] controles sociales aplicados en las organizaciones para mantener orden y uniformidad.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/9.png', alt='')
            .col-sm-12.col-lg-7
              h5 Control como sistema automático de regulación
              ul.lista-ul--color.mb-0.color-primario
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Es un mecanismo técnico utilizado en procesos industriales automatizados para regular y corregir irregularidades.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Funciona de manera continua para mantener parámetros dentro de un rango normal.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 #[b Ejemplo:] sistemas de regulación en refinerías de petróleo.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/10.png', alt='')
            .col-sm-12.col-lg-7
              h5 Control como función administrativa
              ul.lista-ul--color.mb-0.color-primario
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Forma parte del ciclo administrativo junto con planeación, organización y dirección.
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Su propósito es supervisar y medir el desempeño organizacional para garantizar el logro de los objetivos planificados.

    .bg-full-width.bg-color-11.mb-5(data-aos="fade-up")
      .px-5.py-4
        p.mb-0.fw-bold Ahora, estudiemos las finalidades del control:


    .titulo-figura.mb-2.d-d-flex(data-aos="fade-up")
      p.mb-0 #[b Tabla 3.] Finalidades del control.
    .tabla-a.color-acento-botones.mb-5(data-aos="fade-up")
      table
        thead
          tr
            th.w-25-cus Finalidad del control
            th Descripción
            th Ejemplos
        tbody
          tr
            td.fw-bold Estandarizar el desempeño
            td Garantizar uniformidad en las actividades mediante procedimientos, inspecciones y supervisiones.
            td Inspección de líneas de producción; supervisión de estándares de servicio al cliente.
          tr
            td.fw-bold Proteger los bienes organizacionales
            td Evitar desperdicios, robos y uso indebido a través de auditorías y registros.
            td Auditorías financieras, control de inventarios, medidas de seguridad en activos físicos.
          tr
            td.fw-bold Estandarizar la calidad de productos/servicios
            td Garantizar consistencia en la calidad mediante entrenamientos, inspecciones y control estadístico.
            td Capacitación de empleados, pruebas de calidad en productos, certificaciones ISO.
          tr
            td.fw-bold Limitar la cantidad de autoridad ejercida
            td Regular las decisiones y acciones mediante normas, políticas y descripciones de cargos.
            td Políticas de aprobación de gastos, reglamentos para asignación de responsabilidades.
          tr
            td.fw-bold Medir y dirigir el desempeño de los empleados
            td Monitorear y evaluar el trabajo del personal para identificar áreas de mejora y corregir desviaciones.
            td Evaluaciones de desempeño, supervisión directa, monitoreo de productividad por empleado.
          tr
            td.fw-bold Alcanzar los objetivos organizacionales
            td Alinear las actividades con los objetivos definidos en la planeación para asegurar los resultados esperados.
            td Indicadores clave de desempeño (KPIs), reuniones de seguimiento de metas estratégicas.

    p.mb-4(data-aos="fade-up") Esta tabla sintetiza las principales finalidades del control y cómo estas se aplican en diversos escenarios organizacionales.
    p.mb-4.fw-bold(data-aos="fade-up") Conozcamos ahora, los enfoques de control:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        AcordionA(tipo='b')
          div(titulo='Control anticipado o preventivo')
            p.mb-0 El control anticipado, también conocido como preventivo, tiene como objetivo identificar y mitigar posibles problemas antes de que ocurran. Este enfoque se basa en la planificación y en la implementación de medidas preventivas que permiten a las organizaciones adelantarse a las dificultades y tomar decisiones correctivas de manera anticipada. El control preventivo se enfoca en la evaluación de riesgos, el establecimiento de estándares y la implementación de políticas que aseguren que los procesos y actividades se realicen conforme a lo planeado. Su propósito es minimizar las desviaciones y asegurar que los recursos se utilicen de manera eficiente desde el inicio.

          div(titulo='Control concurrente')
            p.mb-0 El control concurrente se refiere a la supervisión en tiempo real de los procesos y actividades a medida que se llevan a cabo. Este enfoque permite identificar y corregir problemas o desviaciones mientras aún están ocurriendo, lo que ayuda a evitar que los problemas se agraven. A través de la observación directa, el control concurrente ofrece la oportunidad de intervenir rápidamente para garantizar que las operaciones se mantengan dentro de los parámetros establecidos. Es particularmente útil en ambientes dinámicos y cambiantes, donde los resultados no siempre se pueden prever completamente desde el inicio, y se requiere flexibilidad para ajustar el rumbo conforme surgen nuevos desafíos.

          div(titulo='Control de retroalimentación')
            p.mb-0 El control de retroalimentación es un enfoque que se utiliza para evaluar los resultados después de que las actividades han sido completadas. Este tipo de control implica revisar el rendimiento, comparar los resultados obtenidos con los objetivos establecidos y tomar decisiones correctivas para mejorar en el futuro. A través de la retroalimentación, se identifican las causas de las desviaciones y se implementan acciones que optimicen los procesos y resultados en el futuro. Este enfoque es valioso para aprender de los errores, ajustar las estrategias y asegurar que las lecciones aprendidas se apliquen a futuras actividades, fortaleciendo así la capacidad de adaptación organizacional.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/11.png')
    #t_3_6.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.6] Herramientas y fases del control
    p.mb-4(data-aos="fade-up") El uso de herramientas y la comprensión de las fases del control son aspectos esenciales para garantizar la eficiencia y eficacia en las operaciones organizacionales.

    .bg-full-width.bg-color-3.mb-0(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-4.d-none.d-lg-block
             img(src='@/assets/curso/t3/12.png', alt='')
          .col-sm-12.col-lg-8
             h2.mb-4 Herramientas y fases del control
             p.mb-5 En el PDF #[b Herramientas y fases del control], se analizan las principales categorías de herramientas administrativas, financieras y operativas, así como las etapas del proceso de control, desde el establecimiento de estándares hasta la toma de acciones correctivas. Este contenido proporciona una visión integral para supervisar, evaluar y optimizar procesos dentro de una organización.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/herramientas_fases_control.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Herramientas y fases del control


    .bg-full-width.bg-color-4.mb-5(data-aos="fade-up")
      .px-5.py-3
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/t3/13.svg', style='max-width: 90px').mx-auto
          .col-lg
            p.mb-0 El control es un proceso cíclico, ya que las acciones correctivas implementadas generan nuevos estándares que, a su vez, serán evaluados en un ciclo posterior. Este enfoque asegura la mejora continua en los procesos organizacionales. 
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://elibro.net/es/lc/tecnologicadeloriente/titulos/29733' target='_blank' rel='noopener noreferrer') Agüero. (2009). Dirección y control. El Cid Editor.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://elibro.net/es/lc/tecnologicadeloriente/titulos/101298' target='_blank' rel='noopener noreferrer') Klein, P. G. (2002). Función empresarial y control de la dirección de la empresa - Libertas 31. Eseade.
            
           
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.optimove.com/' target='_blank' rel='noopener noreferrer') Optimove.
            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=LPY_jCQ3Hz8&t=2s' target='_blank' rel='noopener noreferrer') Valerie Auspont Vergara. (2020). Dirección y Control - Pilares Administrativos.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/watch?v=AidhnRJk7kw&t=6s' target='_blank' rel='noopener noreferrer') Autoestudio10. (2021). Proceso Administrativo parte 2: Dirección y Control.
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

    .bg-full-width.border-top.actividad.ctn-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario='cuestionario'/>






</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    cuestionario: {
      tema: '--',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué característica distingue a la planeación formal de la informal?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Su enfoque en la participación del equipo operativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La espontaneidad en la definición de estrategias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El uso de un proceso sistemático y documentado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La flexibilidad para adaptarse a cambios inesperados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! La planeación formal sigue un proceso sistemático y documentado, con planes escritos y cronogramas claros, a diferencia de la informal, que carece de estructura.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué beneficio proporciona la planeación al reducir la incertidumbre en una organización?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elimina completamente los riesgos en las operaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite prever situaciones futuras y adaptarse mejor a cambios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Facilita la implementación de procesos más complejos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reduce la necesidad de análisis estratégico continuo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La planeación ayuda a prever situaciones futuras, lo que permite a la organización adaptarse mejor a cambios inesperados y mitigar riesgos potenciales.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una de las actividades principales en el diagnóstico estratégico dentro del proceso de planeación?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La formulación de cronogramas detallados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La eliminación de debilidades organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La implementación inmediata de planes de acción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El análisis del entorno interno y externo de la organización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! El diagnóstico estratégico evalúa factores internos y externos para entender el entorno organizacional, utilizando herramientas como el análisis FODA.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué resultado busca alcanzar el análisis FODA en la planeación estratégica?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar los recursos necesarios para cada proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Formular estrategias que aprovechen fortalezas y oportunidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar los niveles de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Garantizar la asignación equitativa de tareas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis FODA permite a la organización formular estrategias que maximicen sus fortalezas y oportunidades, mientras minimizan debilidades y amenazas, asegurando competitividad y eficacia.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'La misión y la visión de una empresa son elementos estratégicos fundamentales que guían su rumbo y propósito. Mientras que la misión describe su razón de ser, la visión proyecta el futuro deseado, proporcionando dirección a largo plazo. Ambas deben ser claras y alineadas con los objetivos organizacionales. Teniendo en cuenta lo anterior ¿Qué elemento de la misión ayuda a diferenciar a una organización de sus competidores en el mercado?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La satisfacción de necesidades del cliente y sus expectativas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La flexibilidad en la gestión de proyectos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La definición de metas claras para los colaboradores internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La inclusión de objetivos tangibles dentro del plan estratégico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Satisfacer necesidades del cliente con productos o servicios únicos permite diferenciar a la organización, fortaleciendo su posicionamiento y atractivo en el mercado.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Felicidades! Has superado la prueba con éxito.',
      mensaje_final_reprobado:
        'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
