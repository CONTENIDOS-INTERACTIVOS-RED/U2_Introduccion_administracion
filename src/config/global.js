export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Funciones de la administración',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Blandez Ricalde, M. D. G. & Blandez Ricalde, M. de G. (2014). Proceso administrativo. Editorial Digital UNID, 2014.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/41174?page=37',
    },
    {
      referencia:
        'Torres Hernández, Z. (2015). Planeación y control. Grupo Editorial Patria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39408?page=2',
    },
    {
      referencia:
        'Aramburu Goya, N. (2013). Organización de empresas (3 ed.). Publicaciones de la Universidad de Deusto.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/34010',
    },
    {
      referencia:
        'Paniagua Hernández, M. (2024). Organización empresarial. Grupo Editorial Éxodo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/275772',
    },
    {
      referencia: 'Agüero. (2009). Dirección y control. El Cid Editor.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/29733',
    },
    {
      referencia:
        'Klein, P. G. (2002). Función empresarial y control de la dirección de la empresa - Libertas 31. Eseade.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/101298',
    },
  ],
  glosario: [
    {
      termino: 'Acciones correctivas',
      significado:
        'Medidas implementadas para corregir las desviaciones entre el desempeño real y los estándares establecidos, con el fin de mejorar los resultados en el futuro.',
    },
    {
      termino: 'Control',
      significado:
        'Función administrativa que implica medir el desempeño y tomar acciones correctivas para asegurar que los objetivos organizacionales se alcancen.',
    },
    {
      termino: 'Desviaciones',
      significado:
        'Diferencias entre los resultados medidos y los estándares previamente establecidos, las cuales pueden ser positivas o negativas.',
    },
    {
      termino: 'Estándares',
      significado:
        'Criterios o parámetros predeterminados que sirven como punto de referencia para medir el desempeño en una organización.',
    },
    {
      termino: 'Evaluación de desempeño',
      significado:
        'Proceso mediante el cual se mide y valora el rendimiento de empleados o actividades para comparar los resultados con los objetivos establecidos.',
    },
    {
      termino: 'Medición',
      significado:
        'El proceso de medir el desempeño actual en comparación con los estándares previamente establecidos.',
    },
    {
      termino: 'Objetivos',
      significado:
        'Fines o metas hacia los cuales se dirige el esfuerzo de la organización, proporcionan dirección y enfoque a todas las actividades de la empresa.',
    },
    {
      termino: 'Planeación',
      significado:
        'Establecimiento de objetivos, metas y los planes necesarios para alcanzarlos.',
    },
    {
      termino: 'Políticas',
      significado:
        'Directrices generales que guían las decisiones y acciones dentro de una organización.',
    },
    {
      termino: 'Procedimientos',
      significado:
        'Conjunto de pasos o métodos que se deben seguir para realizar una tarea o alcanzar un objetivo dentro de la organización.',
    },
    {
      termino: 'Responsabilidad',
      significado:
        'Cumplir con los deberes asignados dentro de la estructura organizacional, lo que implica rendir cuentas por el desempeño.',
    },
    {
      termino: 'Sistematización',
      significado:
        'Proceso de organización y estructuración de recursos y actividades dentro de una empresa para facilitar la ejecución de tareas y la eficiencia.',
    },
    {
      termino: 'Supervisión',
      significado:
        'Observación directa de las actividades diarias para asegurar que los empleados sigan los procedimientos y cumplan con los estándares establecidos.',
    },
  ],
  complementario: [],
}
