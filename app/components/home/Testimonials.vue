<script setup lang="ts">
const testimonials = ref([
  {
    user: {
      name: 'Evan You',
      description: 'Autor de Vue.js y Vite',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/499550?v=4',
        alt: 'Evan You',
        loading: 'lazy' as const
      }
    },
    quote: 'Nuxt en la infraestructura de Cloudflare con un esfuerzo mínimo: ¡esto es enorme!'
  },
  {
    user: {
      name: 'Igor Minar',
      description: 'Ingeniero de software en Cloudflare',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/216296?v=4',
        alt: 'Igor Minar',
        loading: 'lazy' as const
      }
    },
    quote: 'Me encanta el pulido y el enfoque con todo incluido. ¡NuxtHub lleva la integración de framework web y hosting a un nuevo nivel!'
  },
  {
    user: {
      name: 'Charlie Hield',
      description: 'Tecnólogo creativo senior',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/527849?v=4',
        alt: 'Charlie Hield',
        loading: 'lazy' as const
      }
    },
    quote: 'NuxtHub es, sin duda, la forma más fácil de llevar un proyecto de cero a producción en la plataforma de Cloudflare.'
  },
  {
    user: {
      name: 'Israel Ortuño',
      description: 'Cofundador de VueJobs',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/1769417?v=4',
        alt: 'Israel Ortuño',
        loading: 'lazy' as const
      }
    },
    quote: 'No encuentro excusa para no usar Nuxt full-stack a partir de ahora. Envío rápido a la manera de Nuxt, cero configuración. Simplemente conecta y despliega.'
  },
  {
    user: {
      name: 'Fayaz Ahmed',
      description: 'Hacker independiente',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/15716057?v=4',
        alt: 'Fayaz Ahmed',
        loading: 'lazy' as const
      }
    },
    quote: 'Me tomó menos de 90 segundos desplegar una app con BD, KV, almacenamiento de archivos y caché, todo en el edge con un solo comando.'
  },
  {
    user: {
      name: 'Tommy J. Vedvik',
      description: 'Desarrollador UX',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/48070?v=4',
        alt: 'Tommy J. Vedvik',
        loading: 'lazy' as const
      }
    },
    quote: 'Nuxt se está convirtiendo en el mejor framework para bootstrappers en mi opinión. NuxtHub es una capa encima de los servicios de Cloudflare para hosting full-stack en el edge, barato y rápido.'
  },
  {
    user: {
      name: 'Dario Piotrowicz',
      description: 'Desarrollador web en Cloudflare',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/61631103?v=4',
        alt: 'Dario Piotrowicz',
        loading: 'lazy' as const
      }
    },
    quote: 'Me encanta cómo NuxtHub combina, amplifica y simplifica las herramientas de Cloudflare con el amplio y maduro ecosistema de Nuxt. ¡No puedo esperar a ver cómo evoluciona y se expande en el futuro!'
  },
  {
    user: {
      name: 'Markus Oberlehner',
      description: 'Desarrollador web',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/6883314?v=4',
        alt: 'Markus Oberlehner',
        loading: 'lazy' as const
      }
    },
    quote: 'Acabo de desplegar mi primer sitio en Cloudflare usando NuxtHub. ¡Muy fluida la experiencia!'
  },
  {
    user: {
      name: 'Anthony Fu',
      description: 'Equipo central de Vue.js, Vite y Nuxt',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/11247099?v=4',
        alt: 'Anthony Fu',
        loading: 'lazy' as const
      }
    },
    quote: 'Es increíble poder ejecutar un solo comando y desplegar un proyecto Nuxt existente en el edge en minutos. Se siente como desbloquear la infraestructura e interfaz que faltaban para Cloudflare, mejorando la experiencia del desarrollador de una manera extraordinaria.'
  },
  {
    user: {
      name: 'Jonathan Beckman',
      description: 'Fundador de GuaranTee Time',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/90707158?v=4',
        alt: 'Jonathan Beckman',
        loading: 'lazy' as const
      }
    },
    quote: 'NuxtHub y Cloudflare son mi elección para aplicaciones full-stack. La experiencia de desarrollador es alegre y muy superior a cualquier otra plataforma que he usado. Mi equipo puede iterar rápidamente y construir apps hermosas y de alto rendimiento con facilidad.'
  },
  {
    user: {
      name: 'Eckhardt Dreyer',
      description: 'Desarrollador principal en YG',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/37825447?v=4',
        alt: 'Eckhardt Dreyer',
        loading: 'lazy' as const
      }
    },
    quote: 'En YG, nuestro equipo creció recientemente y eso significó más licencias en todas las herramientas que usamos. Migrar nuestro flujo de hosting a NuxtHub no solo tomó unos minutos sino que nos ahorró dinero respecto a nuestro proveedor anterior. NuxtHub ofrece una excelente capa de gestión sobre nuestra infraestructura y estamos muy contentos con el cambio.'
  }
])
</script>

<template>

<UPageSection  
    title="Testimonios"
    description="Nuxt UI es una colección de componentes UI esenciales y utilidades para construir aplicaciones Nuxt. Proporciona una base sólida para tus proyectos, permitiéndote centrarte en crear funciones y experiencias únicas sin preocuparte por la infraestructura subyacente."
    headline="Descubre el poder de Nuxt UI y su integración fluida con el ecosistema de módulos y herramientas de Nuxt, diseñado para mejorar tu experiencia de desarrollo y ayudarte a crear aplicaciones impresionantes con facilidad."
/>

  <UPageColumns>
    <UPageCard
      variant="solid"
      to="https://cloudflare.com"
      icon="i-logos-cloudflare-icon"
      title="Workers LaunchPad de Cloudflare"
      description="NuxtHub forma parte de la cohorte Workers Launchpad de Cloudflare para asegurarte una experiencia de primera clase sobre la red de Cloudflare."
      :ui="{ leadingIcon: 'size-10' }"
    />

    <UPageCard
      v-for="(testimonial, index) in testimonials"
      :key="index"
      variant="subtle"
      :description="testimonial.quote"
      :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
    >
      <template #footer>
        <UUser v-bind="testimonial.user" size="xl" />
      </template>
    </UPageCard>
  </UPageColumns>
</template>

